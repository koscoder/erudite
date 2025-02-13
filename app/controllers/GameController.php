<?php

class GameController extends BaseController {
    
        public function __construct(Erudite\Freebase $freebase)
        {
            $this->freebase = $freebase;
        }

	public function index()
	{
            
                       
            return View::make('game');
	}
        
        /**
         * Returns the list of games
         * @return json
         */
        public function listGames()
	{
            $games = Game::select('id',
                    'title',
                    'creator_id',
                    'status',
                    'max_players_num as playersMax', 
                    'room', 
                    'countries as flags', 
                    'started_at as started')->with('players.user','creator','topics')->get();
            
            return  Response::json($games);
	}
        
        /**
         * Returns game options list: Topics list and Game types
         * @return json
         */
        public function listGameOptions()
	{
            $config = array(
                'topics' => Topic::select('id', 'title')->get(),
                'gameTypes' => array(
                    'jostler' => 'Jostler (5 minutes, 15 cards)',
                    'thief' => 'Thief (10 minutes, 30 cards)',
                    'robber' => 'Robber (20 minutes, 60 cards'
                )
            );
            
            return  Response::json($config);
          
	}
        
        public function view($id)
        {
            Game::findOrFail($id);
            $game = Game::find(1)->where('id', '=', $id)->with('players.user', 'topics')->get();
            return  Response::json($game[0]);
        }
        
        /**
         * Starts Game and returns game cards
         */
        public function start($id)
        {
            $game = Game::findOrFail($id);
            
            $cardList = [];
            
            if (in_array($game->status, ['progress', 'closed'])) {
                
                $cardList = $game->cards()->get()->toArray(); //->lists('question', 'options', 'status', 'player_id');
               
            } else {
                        
                $this->freebase->setApiKey( Config::get('freebase.apiKey') );


                $questionNum = 0;
                switch ($game->room) {
                    case 'robber':
                        $questionNum = '60';
                        break;
                    case 'thief':
                        $questionNum = '30';
                        break;
                    default:
                        $questionNum = '15';
                        break;
                }

                $countries = json_decode($game->countries);

                $questionCount = 0;

                while($questionCount < $questionNum)
                {

                    foreach ($game->topics as $topic) 
                    {

                        foreach ($topic->queries->toArray() as $row) 
                        {
                            $query = new Erudite\Question\Query($this->freebase, 
                                ['question'    => $row['template'],
                                 'query'       => $row['query'],
                                 'objectPath'  => $row['object_path'],
                                 'optionsPath' => $row['options_path']]
                            );

                            $question = $query->generateQuestion($countries);

                            /**
                             * Save card
                             */
                            $card = [
                                        'question' => $question->question,
                                        'game_id'  => $id,
                                        'status'   => 'new',
                                        'player_id' => 0,
                                        'options'  => $question->options,
                                    ];

                            $cardList[] = $card;

                            Card::create( $card );        
                        }
                    }

                    $questionCount++;
                }

                /**
                 * Change game status to progress
                 */
                $game->status = 'progress';
                $game->save();            
            }
            
            return Response::json($cardList);
            
            
        }

        /**
         * Saves new game
         */
        public function create()
        {
            $data = Input::get();

            $title           = isset($data['title']) ? $data['title'] : '';
            $room            = isset($data['room']) ? $data['room'] : '';
            $max_players_num = isset($data['max_players_num']) ? $data['max_players_num'] : '';
            $countries       = isset($data['countries']) ? $data['countries'] : '';

            $validator = Validator::make(
                [
                  'title'           => $title,
                  'room'            => $room,
                  'max_players_num' => $max_players_num,
                  'countries'       => $countries,
                ],
                [
                  'title'           => 'required|min:3',
                  'room'            => 'required|in:jostler,thief,robber',
                  'max_players_num' => 'required|between:1,8',
                  'countries'       => 'array',
                ]
            );

            if ($validator->fails()) {
              return [
                'status'    => false,
                'validator' => $validator->messages(),
              ];
            }

            $game = new Game;
            $game->title = $title;
            $game->room = $room;
            $game->max_players_num = $max_players_num;
            $game->countries = json_encode(array_keys($countries));

            $game->status = 'waiting';
            $game->creator_id = Session::get('user');
            $game->started_at = 0;

            $game->save();
            return [
              'status' => true,
              'game'   => $game,
            ];
        }
}


