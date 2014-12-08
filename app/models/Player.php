<?php

class Player extends \Eloquent {
    
	protected $fillable = [];
        
        public $timestamps = false;
        
        
        public function user()
        {
            return $this->belongsTo('User', 'player_id', 'id');
        }
        
        public function game()
        {
            return $this->belongsTo('Game');
        }
}