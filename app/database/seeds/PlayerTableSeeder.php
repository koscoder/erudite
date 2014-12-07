<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class PlayerTableSeeder extends Seeder {

	public function run()
	{
		DB::table('players')->delete();
                 
                $faker = Faker::create();

		foreach(range(1, 10) as $index)
		{
			Player::create([
                           'player_id' => $faker->numberBetween(1,3),
                           'game_id'   => $faker->numberBetween(1,10),
                           'score'     => $faker->randomElement(['0', '100', '300']),
			]);
		}
	}

}