<?php

class TopicsTableSeeder extends Seeder {

	public function run()
	{
		DB::table('topics')->delete();
            
                $rows = array(
                    array('title'=>'Films'),
                    array('title'=>'Books'),
                    array('title'=>'Music'),
                    array('title'=>'Military conflicts'),
                    array('title'=>'Paintings')
                );

		foreach($rows as $row)
		{
			Topic::create($row);
		}
	}

}