<?php

$mqlList = array(
    'music' => array(
        array(
            'question' => 'Who has recorded "%object%" album?',

            // Set reasonable limit! Get one item randomly and use it's name as an %object%
            // Pass country names as a param
            'queryRandomObject' =>  '[{
                                        "name": null,
                                        "type": "/music/artist",
                                        "origin": [{
                                          "type": "/location/country",
                                          "name|=": [
                                            "Germany",
                                            "France"
                                          ],
                                          "a:name": []
                                        }],
                                        "album": [],
                                        "limit": 10
                                      }]',
            // Paths in JSON tree
            'objectPath' => 'album',
            'optionsPath' => 'name',
        ),

        array(
            'question' => 'When was the active start of %object%?',

            // Set reasonable limit! Get one item randomly and use it's name as an %object%
            // Pass country names as a param
            'queryRandomObject' =>  '[{
                                        "name": null,
                                        "type": "/music/artist",
                                        "origin": [{
                                          "type": "/location/country",
                                          "name|=": [
                                            "Germany",
                                            "France"
                                          ],
                                          "a:name": []
                                        }],
                                        "active_start": null,
                                        "a:active_start>": "1950-01-01",
                                        "limit": 10
                                      }]',
            // Paths in JSON tree
            'objectPath' => 'name',
            'optionsPath' => 'active_start',
        )
    ),
    'books' => array(
        array(
            'question' => 'Who is the author of "%object%"?',
            
            'query' =>  '[{
                                        "type": "/book/book",
                                        "genre": [],
                                        "a:/book/written_work/author": [{
                                          "/people/person/date_of_birth": null,
                                          "a:/people/person/date_of_birth<": "1950-01-01",
                                          "a:/people/person/date_of_birth>": "1880-01-01",
                                          "name": null,
                                          "/people/person/nationality": [],
                                          "a:/people/person/nationality|=": [
                                            "Germany"
                                          ]
                                        }],
                                        "/book/written_work/author": null,
                                        "name": null,
                                        "limit": 10
                                      }]',
            // Paths in JSON tree
            'objectPath' => 'name',
            'optionsPath' => '/book/written_work/author',
        ),
        array(
            'question' => 'Who is the author of %object%?',
            
            'queryRandomObject' =>  '[{
                                        "type": "/book/book",
                                        "genre": [],
                                        "/book/written_work/author": [{
                                          "/people/person/date_of_birth": null,
                                          "a:/people/person/date_of_birth<": "1950-01-01",
                                          "a:/people/person/date_of_birth>": "1880-01-01",
                                          "name": null,
                                          "/people/person/nationality": [],
                                          "a:/people/person/nationality|=": [
                                            "Germany"
                                          ]
                                        }],
                                        "name": null,
                                        "limit": 10
                                      }]',
            // Paths in JSON tree
            'objectPath' => 'name',
            'optionsPath' => '/book/written_work/author.name',
        )
    )
);

?>