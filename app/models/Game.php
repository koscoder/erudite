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
        
         /**
         * 
         * @return 
         */
        public function cards()
        {
            return $this->hasMany('Card', 'game_id');
        }
        
        public function topics()
        {
            return $this->belongsToMany('Topic');
        }

        public function getStartedAttribute($value) {
            
            if ($value == '0000-00-00 00:00:00') {
                return 0;
            }
            
            return strtotime($value);          
            
        }
}
