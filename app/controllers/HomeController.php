<?php

class HomeController extends BaseController {

	public function showLogin()
	{
		return View::make('hello');
	}
        
        public function doLogin()
	{
		return View::make('hello');
	}
        
        public function test()
        {
        $test = ['123','333', new stdClass()];
            return $test;
        }

}
