<?php

$mqlList = array(
    'music' => array(
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
    'books' => array(
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
    )
);

?>