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
            
            $questionList = [];
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

                        $questionList[] = $query->generateQuestion($countries);
                    }
                }
                
                $questionCount++;
            }
            
            /**
             * Change game status to progress
             */
            $game->status = 'progress';
            $game->save();
            
            return Response::json($questionList);
            
            
        }
        
}


