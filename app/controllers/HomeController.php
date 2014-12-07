<?php

class HomeController extends BaseController {

	public function showLogin()
	{
		return View::make('login');
	}
        
        public function doLogin()
	{
            
            $name   = Input::get('name');
            
            $validator = Validator::make(
                array('name' => $name),
                array('name' => 'required|min:5')
            );
            
            if ($validator->fails())
            {
                return Redirect::to('/')->withErrors( $validator );
            }
            
            Session::put('name', $name);            
            
            return Redirect::to('games')->withCookie( Cookie::make('name', $name) );
	}
        
        

}
