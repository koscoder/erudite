<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQueriesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('queries', function(Blueprint $table)
		{
			$table->increments('id');
                        $table->integer('topic_id')->unsigned()->index();
                        $table->text('template');
                        $table->text('query');
                        $table->string('object_path');
                        $table->string('options_path');
                        
                         $table->foreign('topic_id')
                                ->references('id')->on('topics')
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
		Schema::drop('queries');
	}

}
