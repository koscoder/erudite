<?php
class UserTableSeeder extends Seeder
{

	public function run()
	{
		DB::table('users')->delete();
		User::create(array(
			'name'     => 'Stanislav'			
		));
                User::create(array(
			'name'     => 'Konstantin'
		));
                User::create(array(
			'name'     => 'Vadim'
		));
	}

}

