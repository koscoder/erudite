<?php

class Card extends \Eloquent {
	protected $fillable = ['question','game_id','status','options'];
        
        public $timestamps = false;
        
        public function getOptionsAttribute($value)
        {
            return json_decode($value);
        }
        
        public function setOptionsAttribute($value)
        {
            $this->attributes['options'] = json_encode($value);
        }
}