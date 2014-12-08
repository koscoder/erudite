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
                <div class="ui vertical feature segment">
                    <div class="ui centered page grid">
                        <div class="sixteen wide column">
                            <div class="ui vertical login-form">
                                <div class="ui center aligned page grid">
                                    <div class="column">
                                        <h1 class="ui header">Erudite is an e-learning quiz platform. Interested? Sign-in to start</h1>
                                        <?php echo $errors->first('name');?>
                                        <form class="ui form" id="login-form" method="post" action="/login">
                                            <div class="ui action input massive">
                                                <input name="name" type="text" placeholder="Username">
                                                <div class="ui button green" onclick="$('#login-form').submit();">Sign-in</div>
                                            </div>
                                        </form>
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









    <body id="login-page">
        <div class="pusher">
            <div class="full height">
            </div>
        </div>
    </body>
</html>


