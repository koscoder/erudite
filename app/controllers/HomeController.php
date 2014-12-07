<?php

class HomeController extends BaseController {

	public function showLogin()
	{
		return View::make('login');
	}
        
        public function doLogin()
	{
            
            $cookie = Cookie::make('name', Input::get('name', 'Anonymous'));
            
            return Redirect::to('game')->withCookie($cookie);
	}
        
        public function test()
        {
        $test = ['123','333', new stdClass()];
            return $test;
        }

}
