<?php

class GameController extends BaseController {

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
                    'status',
                    'max_players_num as playersMax', 
                    'room', 
                    'topics as tags', 
                    'countries as flags', 
                    'started_at as started')->with('players')->get();
            
            return $games;
            
            /**
             *  id: 1,
                title: 'Commonwealth of Independent States films',
                status: 'Waiting',
                playersMax: 5,
                players: 3,
                room: 'Standard game (45 minutes)',
                tags: ['Films'],
                flags: ['ua', 'belarus', 'ru'],
                started: false
             */
	}       
        
}


