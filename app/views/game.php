<!DOCTYPE html>
<html>
    <head>
        <title>Erudite online quiz</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="./assets/vendors.css" />
        <link rel="stylesheet" href="./assets/app.css" />

        <link rel="stylesheet" href="./assets/js/ammap/ammap.css" type="text/css">
        <script src="./assets/js/ammap/ammap.js" type="text/javascript"></script>
        <!-- map file should be included after ammap.js -->
        <script src="./assets/js/ammap/maps/js/worldLow.js" type="text/javascript"></script>

    </head>
    <body>
        <div class="pusher">
            <div class="full height">
                <div class="bar light fixed">
                    <div class="ui page grid">
                        <div class="column">
                            <div class="ui logo shape">
                                <div class="sides">
                                    <div class="ui side active">
                                        <img class="ui image" src="/html/images/logo.png">
                                    </div>
                                </div>
                            </div>

                            <div class="ui right floated secondary menu">
                                <div class="ui floating link item">
                                    <div class="text">Logout</div>
                                </div>
                            </div>

                            <div class="ui large secondary network menu">
                                <a class="view-ui item transition animating scale in active" data-page="games-page" href="#"><i class="cube icon"></i> Games</a>
                                <a class="view-ui item transition animating scale in" data-page="create-game-page" href="#"><i class="plus icon"></i> Create Game</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ui vertical feature segment">
                    <div class="ui centered page grid">
                        <div class="sixteen wide column app-container">
                            <div id="games-page">
                                <h1>Active Games</h1>
                                <table class="ui sortable celled table" id="games-table">
                                    <thead>
                                        <tr>
                                            <th>Game</th>
                                            <th>Status</th>
                                            <th>Players #</th>
                                            <th>Type</th>
                                            <th>Topics</th>
                                            <th>Countries</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                            <div id="create-game-page">

                                <h1>Create New Game</h1>
                                <div class="ui form">
                                    <h4 class="ui dividing header">Game Information</h4>
                                    <div class="two fields">
                                        <div class="field">
                                            <label>Title</label>
                                            <input type="text" name="title" placeholder="Game title" />
                                        </div>
                                        <div class="field">
                                            <div class="two fields">
                                                <div class="field">
                                                    <label>Game Type</label>
                                                    <select class="ui dropdown" name="type">
                                                        <option value="">[ Select Game Type ]</option>
                                                        <option value="1">Short game</option>
                                                        <option value="2">Standard game</option>
                                                        <option value="3">Long game</option>
                                                    </select>
                                                </div>
                                                <div class="field">
                                                    <label>Max number of players</label>
                                                    <input type="text" name="players" placeholder="Max # of players" value="5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 class="ui dividing header">Topics and Countries</h4>
                                    <div class="field">
                                        <div class="sixteen wide column">
                                            <div class="ui stackable inverted divided relaxed grid">
                                                <div class="four wide column">
                                                    <div class="field">
                                                        <label>Topics</label>
                                                        <div class="field">
                                                            <div class="ui toggle checkbox">
                                                                <input type="checkbox" />
                                                                <label>Films</label>
                                                            </div>
                                                        </div>
                                                        <div class="field">
                                                            <div class="ui toggle checkbox">
                                                                <input type="checkbox" />
                                                                <label>History</label>
                                                            </div>
                                                        </div>
                                                        <div class="field">
                                                            <div class="ui toggle checkbox">
                                                                <input type="checkbox" />
                                                                <label>Politics</label>
                                                            </div>
                                                        </div>
                                                        <div class="field">
                                                            <div class="ui toggle checkbox">
                                                                <input type="checkbox" />
                                                                <label>Music</label>
                                                            </div>
                                                        </div>
                                                        <div class="field">
                                                            <div class="ui toggle checkbox">
                                                                <input type="checkbox" />
                                                                <label>Arts</label>
                                                            </div>
                                                        </div>
                                                        <div class="field">
                                                            <div class="ui toggle checkbox">
                                                                <input type="checkbox" />
                                                                <label>Books</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="twelve wide column">
                                                    <div class="field">
                                                        <label>Countries</label>
                                                        <div id="regions_div" style="width: 100%; height: 500px;"></div>
                                                    </div>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ui error message">
                                        <div class="header">We noticed some issues</div>
                                    </div>
                                    <div class="ui submit button" onclick="$(this).parent().addClass('loading');">Create</div>
                                </div>
                            </div>
                            <div id="view-game-page"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ui vertical inverted black footer segment">

                <div class="ui centered page grid">
                    <div class="sixteen wide column">
                        <div class="ui stackable inverted divided relaxed grid">
                            <div class="eight wide column logo">
                                <h3 class="ui inverted header">Developed by CodeTiburon</h3>
                                <p>For the world's first global virtual #hackathon</p>
                                <p><i>No matter how good your existing software is, we can make it better.</i></p>
                                <a href="http://codetiburon.com/" target="_blank"><img class="ui image logo" src="images/logo-footer.png" /></a>
                            </div>
                            <div class="four wide column">
                                <h5 class="ui teal inverted header">About</h5>
                                <div class="ui inverted link list">
                                    <a class="item" href="https://github.com/CodeTiburon/erudite" target="_blank"><i class="github square icon"></i> GitHub</a>
                                    <a class="item" href="#" target="_blank">About Project</a>
                                    <a class="item" href="#" target="_blank"><i class="linkedin square icon"></i> Stas</a>
                                    <a class="item" href="#" target="_blank"><i class="linkedin square icon"></i> Konstantin</a>
                                    <a class="item" href="#" target="_blank"><i class="linkedin square icon"></i> Vadim</a>
                                </div>
                            </div>
                            <div class="four wide column">
                                <h5 class="ui teal inverted header">APIs</h5>
                                <div class="ui inverted link list">
                                    <a class="item" href="https://developers.google.com/chart/" target="_blank">Google Charts</a>
                                    <a class="item" href="https://developers.google.com/freebase/v1/mql-overview" target="_blank">Google Freebase</a>
                                    <a class="item" href="https://gravatar.com" target="_blank">Gravatar</a>
                                    <a class="item" href="https://dev.twitter.com/web/sign-in" target="_blank">Sign in with Twitter</a>
                                    <a class="item" href="https://developers.facebook.com/docs/facebook-login/v2.2" target="_blank">Facebook Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="./assets/vendors.js"></script>
        <script src="./assets/app.js" type="text/javascript"></script>
    </body>
</html>
