<?php

class HomeController extends BaseController {

	public function showLogin()
	{
		return View::make('login');
	}
        
        public function doLogin()
	{
		return Redirect::to('game');
	}
        
        public function test()
        {
        $test = ['123','333', new stdClass()];
            return $test;
        }

}
