<?php

class Player extends \Eloquent {
    
	protected $fillable = [];
        
        public $timestamps = false;
        
        // TODO:
        public function user()
        {
            return $this->hasOne('User', 'id', 'player_id');
        }
        
        public function game()
        {
            return $this->belongsTo('Game');
        }
}