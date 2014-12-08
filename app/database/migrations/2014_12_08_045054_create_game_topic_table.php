<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateGameTopicTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('game_topic', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('game_id')->unsigned()->index();
			$table->foreign('game_id')->references('id')->on('games')->onDelete('cascade');
			$table->integer('topic_id')->unsigned()->index();
			$table->foreign('topic_id')->references('id')->on('topics')->onDelete('cascade');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('game_topic');
	}

}
