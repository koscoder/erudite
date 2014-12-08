<?php

class Topic extends \Eloquent {
	protected $fillable = [];
        
        protected $hidden = ['created_at','updated_at','pivot'];
        
        public $timestamps = false;
        
        public function games()
        {
            return $this->belongsToMany('Game');
        }
}