<?php
class UserTableSeeder extends Seeder
{

	public function run()
	{
		DB::table('users')->delete();
		User::create(array(
			'name'     => 'Stanislav Termosa',
			'username' => 'termosa',
			'email'    => 's.termosa@codetiburon.com',
			'password' => Hash::make('123456'),
		));
                User::create(array(
			'name'     => 'Konstantin Pogrebnoy',
			'username' => 'koscoder',
			'email'    => 'konstantin@codetiburon.com',
			'password' => Hash::make('123456'),
		));
                User::create(array(
			'name'     => 'Vadim Ilyasov',
			'username' => 'vadim',
			'email'    => 'vadim@codetiburon.com',
			'password' => Hash::make('123456'),
		));
	}

}

