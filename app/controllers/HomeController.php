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
            
            // Create a new user in the database...
            $user = User::firstOrCreate(array('name' => $name));
            Session::put('user', $user->id);            
            
            return Redirect::to('games')->withCookie( Cookie::make('user', $user->id.':'.$user->name) );
	}
        
        public function doLogout()
	{
            Session::flush();
            return Redirect::to('games')->withCookie( Cookie::forget('user') );
        }
        
        

}
