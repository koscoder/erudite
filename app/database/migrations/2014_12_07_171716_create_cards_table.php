<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCardsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('cards', function(Blueprint $table)
		{
			$table->increments('id');
                        $table->integer('game_id')->unsigned()->index();
                        $table->string('question', 250);
                        $table->enum('status', array('new', 'passed', 'failed'));
                        $table->integer('player_id')
                                    ->unsigned()
                                    ->default(0)
                                    ->index();
                        $table->text('options'); // json
                        
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
		Schema::drop('cards');
	}

}
