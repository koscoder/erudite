<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('hello');
});

// route to show the login form
Route::get('/', array('uses' => 'HomeController@showLogin'));

// route to process the form
Route::post('login', array('uses' => 'HomeController@doLogin'));

// route to process the form
Route::get('logout', array('uses' => 'HomeController@doLogout'));

//TODO: change filter to auth
Route::group(array('before' => 'auth.hasname'), function()
{
    // route to show game list
    Route::get('games', array('uses' => 'GameController@index'));

});

// Route group for API 
Route::group(array('prefix' => 'api', 'before' => 'auth.hasname'), function()
{
    // route to show game list
    Route::get('game/list', array('uses' => 'GameController@listGames'));
    Route::get('game/game-options', array('uses' => 'GameController@listGameOptions'));
    
    Route::get('game/start/{id}', array('uses' => 'GameController@start'));

    // route to save the game
    Route::post('game/create', array('uses' => 'GameController@create'));

    Route::get('game/view/{id}', array('uses' => 'GameController@view'));
});
 





