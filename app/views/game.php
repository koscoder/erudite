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
        <script src="./assets/vendors.js"></script>

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
                                        <img class="ui image" src="/assets/images/logo.png">
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
                                    <form id="create-game-form" method="post">
<div class="ui error message" style="display:none"><ul class="list"></ul></div>
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
                                                        <select class="ui dropdown" name="room">
                                                            <option value="">[ Select Game Type ]</option>
                                                            <option value="jostler">Jostler (5 minutes, 15 cards)</option>
                                                            <option value="thief">Thief (10 minutes, 30 cards)</option>
                                                            <option value="robber">Robber (15 minutes, 45 cards)</option>
                                                        </select>
                                                    </div>
                                                    <div class="field">
                                                        <label>Max number of players</label>
                                                        <input type="text" name="max_players_num" placeholder="Max # of players" value="5" />
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
                                                            <div class="topics-list">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="twelve wide column">
                                                        <div class="field">
                                                            <label>Countries</label>
                                                            <div class="countries-list"></div>
                                                        </div>
                                                    </div>    
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ui submit button">Create</div>
                                    </form>
                                </div>
                            </div>
                            <div id="view-game-page">

                            <h1>Game "<span id="game-title">%TITLE%</span>"</h1>
                            <div class="sixteen wide column">
                                <div class="ui stackable inverted divided relaxed grid">
                                    <div class="four wide column">
                                        <h4>Time Left</h4>
                                        <h1><i class="icon wait"></i> <span>12:56</span></h1>
                                        <h4>Game Information</h4>
                                        <p>Type: <span id="game-type">Short game</span></p>
                                        <p>Countries: <span id="game-countries"><i class="ua flag"></i> <i class="belarus flag"></i> <i class="ru flag"></i></span></p>
                                        <p>Topic: <span id="game-topics">Films</span></p>
                                        <h4>Players List <span id="game-players-num">5</span>/<span id="game-max-players-num">6</span></h4>
                                        <div class="ui divided list" id="game-board-players">
                                            <div class="item">
                                                <img class="ui avatar image" src="http://semantic-ui.com/images/avatar/small/daniel.jpg">
                                                <div class="content">
                                                    <a class="header">Daniel Louise [Creator]</a>
                                                    <div class="description">0 Points</div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <img class="ui avatar image" src="http://semantic-ui.com/images/avatar/small/stevie.jpg">
                                                <div class="content">
                                                    <a class="header">Stevie Feliciano</a>
                                                    <div class="description">0 Points</div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <img class="ui avatar image" src="http://semantic-ui.com/images/avatar/small/elliot.jpg">
                                                <div class="content">
                                                    <a class="header">Elliot Fu</a>
                                                    <div class="description">0 Points</div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <img class="ui avatar image" src="http://semantic-ui.com/images/avatar/small/jenny.jpg">
                                                <div class="content">
                                                    <a class="header">Jenny Hess</a>
                                                    <div class="description">0 Points</div>
                                                </div>
                                            </div>
                                            <div class="item">
                                                <img class="ui avatar image" src="http://semantic-ui.com/images/avatar/small/veronika.jpg">
                                                <div class="content">
                                                    <a class="header">Veronika Ossi</a>
                                                    <div class="description">0 Points</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="twelve wide column game-board-active" id="game-board-questions">
                                        <h4>Questions</h4>
                                        <div class="ui segment">
                                            <div class="ui five column grid">
                                                <div class="column">
                                                    <div class="ui segment green inverted center aligned card">
                                                        <h1><i class="icon checkmark"></i></h1>
                                                        <p>+500 points</p>
                                                        <p>You</p>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <div class="ui segment red inverted center aligned card">
                                                        <h1><i class="icon remove"></i></h1>
                                                        <p>-300 points</p>
                                                        <p>You</p>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <div class="ui segment center aligned card">
                                                        <h1><i class="icon remove"></i></h1>
                                                        <p>-250 points</p>
                                                        <p><i>Stevie Feliciano</i></p>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <div class="ui segment center aligned card">
                                                        <h1><i class="icon checkmark"></i></h1>
                                                        <p>+250 points</p>
                                                        <p><i>Veronika Ossi</i></p>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <div class="ui segment blue inverted center aligned card">
                                                        <h1><i class="icon">?</i></h1>
                                                        <p>300 points</p>
                                                        <p>New</p>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <div class="ui segment blue inverted center aligned card">
                                                        <h1><i class="icon">?</i></h1>
                                                        <p>200 points</p>
                                                        <p>New</p>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <div class="ui segment blue inverted center aligned card">
                                                        <h1><i class="icon">?</i></h1>
                                                        <p>150 points</p>
                                                        <p>New</p>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <div class="ui segment green inverted center aligned card">
                                                        <h1><i class="icon checkmark"></i></h1>
                                                        <p>+500 points</p>
                                                        <p>You</p>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <div class="ui segment red inverted center aligned card">
                                                        <h1><i class="icon remove"></i></h1>
                                                        <p>-300 points</p>
                                                        <p>You</p>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <div class="ui segment center aligned card">
                                                        <h1><i class="icon remove"></i></h1>
                                                        <p>-250 points</p>
                                                        <p><i>Stevie Feliciano</i></p>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <div class="ui segment center aligned card">
                                                        <h1><i class="icon checkmark"></i></h1>
                                                        <p>+250 points</p>
                                                        <p><i>Veronika Ossi</i></p>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <div class="ui segment blue inverted center aligned card">
                                                        <h1><i class="icon">?</i></h1>
                                                        <p>150 points</p>
                                                        <p>New</p>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <div class="ui segment blue inverted center aligned card">
                                                        <h1><i class="icon">?</i></h1>
                                                        <p>100 points</p>
                                                        <p>New</p>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <div class="ui segment blue inverted center aligned card">
                                                        <h1><i class="icon">?</i></h1>
                                                        <p>400 points</p>
                                                        <p>New</p>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <div class="ui segment blue inverted center aligned card">
                                                        <h1><i class="icon">?</i></h1>
                                                        <p>800 points</p>
                                                        <p>New</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
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
                                <a href="http://codetiburon.com/" target="_blank"><img class="ui image logo" src="/assets/images/logo-footer.png" /></a>
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
                                    <a class="item" href="https://developers.google.com/freebase/v1/mql-overview" target="_blank">Google Freebase</a>
                                    <a class="item" href="https://developers.google.com/chart/" target="_blank">Google Charts</a>
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
        <script src="./assets/app.js" type="text/javascript"></script>
    </body>
</html>
