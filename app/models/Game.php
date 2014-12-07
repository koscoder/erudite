<?php

class Game extends \Eloquent {
    
	protected $fillable = [];
        
        public $timestamps = false;
        
        /**
         * 
         * @return 
         */
        public function creator()
        {
            return $this->belongsTo('User', 'creator_id');
        }
        
        /**
         * 
         * @return 
         */
        public function players()
        {
            return $this->hasMany('Player', 'game_id');
        }
}