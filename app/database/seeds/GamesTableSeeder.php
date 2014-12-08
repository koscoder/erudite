<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class GamesTableSeeder extends Seeder {

	public function run()
	{
		
                DB::table('games')->delete();
                
                $countries = [
                    'Ukraine','United States of America','Germany','United Kingdom','Hong Kong','India','France','Russia','Netherlands'
                ];
                
                $faker = Faker::create();

		foreach(range(1, 10) as $index)
		{
			Game::create([
                            'title'          => $faker->sentence(3),
                            'room'           => $faker->randomElement(['jostler', 'thief', 'robber']),
                            'status'         => $faker->randomElement(['waiting', 'progress', 'closed']),
                            'max_players_num' => $faker->numberBetween(1,3),
                            'countries'      => json_encode([$faker->randomElement($countries)]),
                            'creator_id'     => $faker->numberBetween(1,3),
                            'started_at'     => '0'                            
			])->topics()->sync([$faker->numberBetween(1,5),$faker->numberBetween(1,5),$faker->numberBetween(1,5)]);
		}
                
                
                
	}

}