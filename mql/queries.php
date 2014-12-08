<?php

$mqlList = array(
    'Music' => array(
        array(
            'question' => 'Who has recorded "%object%" album?',

            'query' =>  '[{
                            "name": null,
                            "type": "/music/artist",
                            "origin": [{
                              "type": "/location/country",
                              "name|=": %countries%,
                              "a:name": []
                            }],
                            "genre": [],
                            "a:genre|=": [
                              "Pop music",
                              "Folk music",
                              "Pop music",
                              "Alternative rock",
                              "Soft rock",
                              "Hard rock",
                              "Dance music",
                              "Heavy metal",
                              "Power metal",
                              "New wave",
                              "Grunge",
                              "Jazz"
                            ],
                            "album": [],
                            "album!=": "Greatest Hits",
                            "limit": %limit%
                          }]',
            // Paths in JSON tree
            'objectPath' => 'album',
            'optionsPath' => 'name',
        )
    ),
    'Books' => array(
        array(
            'question' => 'Who is the author of "%object%"?',
            
            'query' => '[{
                "type": "/book/book",
                "genre": [],
                "a:/book/written_work/author": [{
                  "/people/person/date_of_birth": null,
                  "a:/people/person/date_of_birth<": "1990-01-01",
                  "a:/people/person/date_of_birth>": "1780-01-01",
                  "name": null,
                  "/people/person/nationality": [],
                  "a:/people/person/nationality|=": %countries%
                }],
                "a:genre|=": [
                  "Novel",
                  "Fiction",
                  "Science Fiction"
                ],
                "/book/written_work/author": [],
                "name": null,
                "limit": %limit%
              }]',
            
            // Paths in JSON tree
            'objectPath' => 'name',
            'optionsPath' => '/book/written_work/author',
        )
    ),
    'Films' => array(
        array(
            'question' => '"%object%" is directed by ..',
            
            'query' => '[{
                            "name": null,
                            "type": "/film/film",
                            "/film/film/directed_by": [],
                            "a:/film/film/directed_by": [{
                              "/people/person/nationality|=": %countries%
                            }],
                            "genre": [],
                            "a:genre|=": [
                              "Comedy",
                              "Black comedy",
                              "Family",
                              "Action Film",
                              "Action/Adventure",
                              "Domestic Comedy",
                              "Cult film",
                              "Thriller",
                              "Fantasy",
                              "Adventure Film",
                              "Adventure Comedy",
                              "Psychological thriller",
                              "Drama",
                              "Romance Film",
                              "Romantic comedy",
                              "Melodrama"
                            ],
                            "limit": %limit%
                          }]',
            
            // Paths in JSON tree
            'objectPath' => 'name',
            'optionsPath' => '/film/film/directed_by',
        )
    ),
    'Paintings' => array(
        array(
            'question' => 'Who is a painter of "%object%"?',
            
            'query' => '[{
                            "name": null,
                            "type": "/visual_art/artwork",
                            "/visual_art/artwork/artist": [],
                            "a:/visual_art/artwork/artist": [{
                              "/people/person/nationality|=": %countries%,
                              "/visual_art/visual_artist/art_forms|=": [
                                "Painting"
                              ]
                            }],
                            "art_genre": [],
                            "limit": %limit%
                          }]',
            
            // Paths in JSON tree
            'objectPath' => 'name',
            'optionsPath' => '/visual_art/artwork/artist',
        )
    ),
    
    'Military conflicts' => array(
        array(
            'question' => 'When did the "%object%" (military conflict) start?',
            
            'query' => '[{
                            "name": null,
                            "type": "/military/military_conflict",
                            "/military/military_conflict/locations|=": %countries%,
                            "/time/event/start_date": null,
                            "/time/event/end_date": null,
                            "limit": %limit%
                          }]',
            
            'objectPath' => 'name',
            'optionsPath' => '/time/event/start_date'
        ),
        
        array(
            'question' => 'When did the "%object%" (military conflict) end?',
            
            'query' => '[{
                            "name": null,
                            "type": "/military/military_conflict",
                            "/military/military_conflict/locations|=": %countries%,
                            "/time/event/start_date": null,
                            "/time/event/end_date": null,
                            "limit": %limit%
                          }]',
            
            'objectPath' => 'name',
            'optionsPath' => '/time/event/end_date'
        ),

    )
);

return $mqlList;
