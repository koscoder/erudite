<?php

class QueriesTableSeeder extends Seeder {

	public function run()
	{
		DB::table('queries')->delete();
            
                $mql = include(base_path().'/mql/queries.php');
                
                foreach ($mql as $topic => $node) {
                    
                    foreach ($node as $query) {
                        
                        $topicId = Topic::where('title', 'LIKE', '%'.$topic.'%')
                                                        ->pluck('id');
                        
                        if ($topicId) {

                            Query::create([
                                'topic_id'     => $topicId,
                                'template'     => $query['question'],
                                'query'        => $query['query'],
                                'object_path'  => $query['objectPath'],
                                'options_path' => $query['optionsPath'],
                            ]);
                        } else {
                            throw new Exception('Topic does not exist: '.$topic);
                        }
                    }
		}
	}

}