<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlayersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('players', function(Blueprint $table)
		{
			$table->integer('player_id')->unsigned();
                        $table->integer('game_id')->unsigned();
                        $table->integer('score')->unsigned()->default(0);
                        
                        
                        $table->primary(array('player_id', 'game_id'));
                        
                        $table->foreign('player_id')
                                ->references('id')->on('users')
                                ->onDelete('cascade');
                        
                        $table->foreign('game_id')
                                ->references('id')->on('games')
                                ->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('players');
	}

}
