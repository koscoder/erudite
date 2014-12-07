<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGamesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('games', function(Blueprint $table)
		{
			$table->increments('id');
                        $table->string('title', 250);
                        $table->enum('room', array('jostler', 'thief', 'robber'));
                        $table->enum('status', array('waiting', 'progress', 'closed'));
                        $table->integer('max_players_num')->default(0);
                        $table->string('countries', 250);
                        $table->string('topics', 100);
                        $table->integer('creator_id')->unsigned()->index();
			$table->timestamp('started_at');
                        
                        $table->foreign('creator_id')
                              ->references('id')->on('users')
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
		Schema::drop('games');
	}

}
