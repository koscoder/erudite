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
        
        /**
         * Starts Game and returns game cards
         */
        public function start($id)
        {
            $game = Game::findOrFail($id);
            
            /**
             * Change game status to progress
             */
            $game->status = 'progress';
            $game->save();
            
            $this->freebase->setApiKey( Config::get('freebase.apiKey') );
            
            $query = new Erudite\Freebase($this->freebase, $queryData);
            $question = $query->generateQuestion($countries);
            
        }

        /**
         * Saves new game
         */
        public function create()
        {
            $data = Input::get();

            $title           = isset($data['title']) ? $data['title'] : '';
            $room            = isset($data['room']) ? $data['room'] : '';
            $status          = isset($data['status']) ? $data['status'] : '';
            $max_players_num = isset($data['max_players_num']) ? $data['max_players_num'] : '';
            $countries       = isset($data['countries']) ? $data['countries'] : '';

            $validator = Validator::make(
                [
                  'title'           => $title,
                  'room'            => $room,
                  'status'          => $status,
                  'max_players_num' => $max_players_num,
                  'countries'       => $countries,
                ],
                [
                  'title'           => 'required|min:3',
                  'room'            => 'required|in:jostler,thief,robber',
                  'status'          => 'required|in:waiting,progress,closed',
                  'max_players_num' => 'required|between:1,8',
                  'countries'       => 'required',
                ]
            );

            if ($validator->fails()) {
              return [
                'status'    => false,
                'validator' => $validator->messages(),
              ];
            }

            $game = new Game;
            $game->title = $data['title'];
            $game->room = $data['room'];
            $game->status = $data['status'];
            $game->max_players_num = $data['max_players_num'];
            $game->countries = $data['countries'];

            $game->creator_id = Session::get('user');
            $game->started_at = 0;

            $game->save();
            return [
              'status' => true,
              'game'   => $game,
            ];
        }
}


