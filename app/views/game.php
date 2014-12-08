<!DOCTYPE html>
<html>
    <head>
        <title>Erudite online quiz</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="./assets/vendors.css" />
        <link rel="stylesheet" href="./assets/app.css" />
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="/html/dist/semantic.min.js"></script>
        
        <script src="./assets/js/main.js" type="text/javascript"></script>
  
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
                                <a class="view-ui item transition animating scale in active"><i class="cube icon"></i> Games</a>
                                <a class="view-ui item transition animating scale in" href="create.html"><i class="plus icon"></i> Create Game</a>
                                <a class="view-ui item transition animating scale in"><i class="empty star icon"></i> Ratings</a>
                                <span class="additional item transition animating scale in"><i class="puzzle icon"></i> Topics</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ui vertical feature segment">
                    <div class="ui centered page grid">
                        <div class="sixteen wide column">

    <div id="app">
        
<h1>Active Games</h1>
                            <div class="ui warning message">Some important message here. For example - there are no active games</div>
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
                                    <tr>
                                        <td>Commonwealth of Independent States films</td>
                                        <td>Waiting</td>
                                        <td>3/5</td>
                                        <td>Standard game (45 minutes)</td>
                                        <td>[Films]</td>
                                        <td><i class="ua flag"></i> <i class="belarus flag"></i> <i class="ru flag"></i></td>
                                        <td><button class="button ui green" onclick="location.href='join.html'">Join</button></td>
                                    </tr>
                                    <tr>
                                        <td>Science fiction russian films</td>
                                        <td>Waiting</td>
                                        <td>1/5</td>
                                        <td>Short game (30 minutes)</td>
                                        <td>[Films]</td>
                                        <td><i class="ru flag"></i></td>
                                        <td><button class="button ui green" onclick="location.href='join.html'">Join</button></td>
                                    </tr>
                                    <tr>
                                        <td>Italian Painters</td>
                                        <td>Started</td>
                                        <td>2/4</td>
                                        <td>Standard game (45 minutes)</td>
                                        <td>[Arts]</td>
                                        <td><i class="it flag"></i></td>
                                        <td><button class="button ui green disabled">Join</button></td>
                                    </tr>
                                    <tr>
                                        <td>Books of XX Century</td>
                                        <td>Started</td>
                                        <td>4/6</td>
                                        <td>Long game (45 minutes)</td>
                                        <td>[Books]</td>
                                        <td><i class="gb flag"></i> <i class="us flag"></i> <i class="de flag"></i> <i class="fr flag"></i></td>
                                        <td><button class="button ui green disabled">Join</button></td>
                                    </tr>
                                    <tr>
                                        <td>Commonwealth of Independent States films</td>
                                        <td>Waiting</td>
                                        <td>3/5</td>
                                        <td>Standard game (45 minutes)</td>
                                        <td>[Films]</td>
                                        <td><i class="ua flag"></i> <i class="belarus flag"></i> <i class="ru flag"></i></td>
                                        <td><button class="button ui green" onclick="location.href='join.html'">Join</button></td>
                                    </tr>
                                    <tr>
                                        <td>Science fiction russian films</td>
                                        <td>Waiting</td>
                                        <td>1/5</td>
                                        <td>Short game (30 minutes)</td>
                                        <td>[Films]</td>
                                        <td><i class="ru flag"></i></td>
                                        <td><button class="button ui green" onclick="location.href='join.html'">Join</button></td>
                                    </tr>
                                    <tr>
                                        <td>Italian Painters</td>
                                        <td>Started</td>
                                        <td>2/4</td>
                                        <td>Standard game (45 minutes)</td>
                                        <td>[Arts]</td>
                                        <td><i class="it flag"></i></td>
                                        <td><button class="button ui green disabled">Join</button></td>
                                    </tr>
                                    <tr>
                                        <td>Books of XX Century</td>
                                        <td>Started</td>
                                        <td>4/6</td>
                                        <td>Long game (45 minutes)</td>
                                        <td>[Books]</td>
                                        <td><i class="gb flag"></i> <i class="us flag"></i> <i class="de flag"></i> <i class="fr flag"></i></td>
                                        <td><button class="button ui green disabled">Join</button></td>
                                    </tr>
                                </tbody>
                            </table>
        
        
    </div>

  <script src="./assets/vendors.js"></script>
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
    </body>
</html>
