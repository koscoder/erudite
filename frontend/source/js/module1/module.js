module.exports = function () {
    
    function initApp()
    {
        $('select.dropdown').dropdown();
        
        $('div.app-container > div').hide();
        $('div.app-container > div').first().show();

        $('.menu a').click(function() {
            $('div.app-container > div').hide();
            $('#'+$(this).data('page')).show();
            $('.menu a').removeClass('active');
            $(this).addClass('active');
        });
        
        $('#create-game-form').submit(function(){
            $el = $(this);
            $el.parent().addClass('loading');
            $.post('/api/game/create', $el.serialize(), function(data) {
                if (typeof data === 'object' && data.status) {
                  window.location.href = '/games';
                  return;
                }
                $el.parent().removeClass('loading');
                if (typeof data === 'object' && data.validator) {
                  var gErrors = [];
                  $('.ui.error.message', $el).hide();
                  $('.error.field', $el).removeClass('error');
                  $.each(data.validator, function (name, errors) {
                    $('[name='+name+']', $el).parents('.field').first().addClass('error');
                    gErrors = gErrors.concat(errors);
                  });
                  var htmlErrs = '<ul class="list">';
                  $.each(gErrors, function (i, err) {
                    htmlErrs +='<li>'+err+'</li>';
                  });
                  htmlErrs +='</ul>';

                  console.log(htmlErrs);
                  $('.error.message', $el)
                    .html(htmlErrs)
                    .fadeIn();
                }
            });
            return false;
        });
        
        $('#create-game-form .submit').click(function() {
          $('#create-game-form').submit();
          return false;
        });
        
        loadGames();
        loadConfig();
        initMap();
    }
    
    function initMap()
    {
        var map;
        var selectedRegions;
        AmCharts.ready(function() {
            map = new AmCharts.AmMap();
            map.pathToImages = "http://www.amcharts.com/lib/3/images/";
            map.panEventsEnabled = true;
            map.backgroundColor = "#666666";
            map.backgroundAlpha = 1;

            map.zoomControl.panControlEnabled = true;
            map.zoomControl.zoomControlEnabled = true;

            var dataProvider = {
            map: "worldLow",
                getAreasFromMap: true
            };

            map.dataProvider = dataProvider;

            map.areasSettings = {
                autoZoom: false,
                color: "#CDCDCD",
                colorSolid: "#5EB7DE",
                selectedColor: "#5EB7DE",
                outlineColor: "#666666",
                rollOverColor: "#88CAE7",
                rollOverOutlineColor: "#FFFFFF",
                selectable: true
            };

            map.addListener('clickMapObject', function (event) {
                // deselect the area by assigning all of the dataProvider as selected object
                map.selectedObject = map.dataProvider;

                // toggle showAsSelected
                event.mapObject.showAsSelected = !event.mapObject.showAsSelected;
                
                if (event.mapObject.showAsSelected) {
                    $('#countries-list').append('<input type="hidden" id="country_'+event.mapObject.id+'" name="country[]" value="'+event.mapObject.title+'" />');
                } else {
                    $('#countries-list #country_'+event.mapObject.id).remove();;
                }

                // bring it to an appropriate color
                map.returnInitialColor(event.mapObject);

                // let's build a list of currently selected states
                var states = [];
                for (var i in map.dataProvider.areas) {
                    var area = map.dataProvider.areas[i];
                    if (area.showAsSelected) {
                        states.push(area.title);
                        $('#countries-list').append('<input type="hidden" id="country_'+area.id+'" name="country[]" value='+area.title+'" />');
                    }
                }
            });


            map.write("chartdiv");

            for (var i in map.dataProvider.areas) {
                var area = map.dataProvider.areas[i];

                if (area.title == 'United States') {
                    map.dataProvider.areas[i].showAsSelected = true;
                    map.returnInitialColor(map.dataProvider.areas[i]);
                    //console.log(area.title);
                }
            }
        });
    }
    
    function loadGames()
    {
        var url = '/api/game/list';
        $.get(url, {}, function(list) {
            $('#games-table tbody').empty();
            $(list).each(function(index, item) {
                var row = '<tr><td>'+item.title+'</td>'
                            +'<td>'+item.status+'</td>'
                            +'<td>'+item.players.length+'/'+item.playersMax+'</td>'
                            +'<td>'+item.room+'</td>'
                            +'<td>[Films]</td>'
                            +'<td><i class="ua flag"></i> <i class="belarus flag"></i> <i class="ru flag"></i></td>'
                            +'<td><button class="button ui green join-game" data-game-id="'+item.id+'">Join</button></td>'
                            +'</tr>';
                $('#games-table tbody').append(row);
                
                $('button.join-game').click(function() {
                    var gameId = $(this).data('game-id');
                    var url = '/api/game/view/'+gameId;
                    $.get(url, {}, function(game) {
                        $('#game-title').text(game.title);
                        $('#game-players-num').text(game.players.length);
                        $('#game-max-players-num').text(game.max_players_num);
                        $('#game-board-players').empty();
                        
                        $('#game-countries').empty();
                        var countries = jQuery.parseJSON( game.countries );
                        $(countries).each(function(index, item) {
                            $('#game-countries').append('<i class="'+item.toLowerCase()+' flag"></i>');
                        });
                        
                        $('#game-topics').empty();
                        var topics = game.topics;
                        $(topics).each(function(index, item) {
                            $('#game-topics').append(item.title+' - ');
                        });
                        
                        $(game.players).each(function(index, item) {
                            $('#game-board-players').append(
                                            '<div class="item">'
                                            +'<img class="ui avatar image" src="http://semantic-ui.com/images/avatar/small/daniel.jpg">'
                                            +'<div class="content">'
                                                +'<a class="header">'+item.user.name+'</a>'
                                            +'<div class="description">'+item.score+' Points</div>'
                                            +'</div>'
                                            +'</div>');
                        });
                        
                        $('div.app-container > div').hide();
                        $('#view-game-page').show();
                    });
                });
            });
        });
    }
    
    function loadConfig()
    {
        var url = '/api/game/game-options';
        $.get(url, {}, function(data) {
            $('#create-game-page div.countries-list').empty();
            $([
                {id: 'United States of America', title: 'United States of America'},
                {id: 'Ukraine', title: 'Ukraine'},
                {id: 'Russia', title: 'Russia'},
                {id: 'Italy', title: 'Italy'},
                {id: 'England', title: 'England'},
                {id: 'Germany', title: 'Germany'},
                {id: 'France', title: 'France'},
                {id: 'India', title: 'India'},
                {id: 'China', title: 'China'},
                {id: 'Japan', title: 'Japan'}
              ]).each(function(index, item) {
                var row = '<div class="field">'
                            +'<div class="ui toggle checkbox">'
                            +'<input type="checkbox" checked="checked" name="countries['+item.id+']" />'
                            +'<label>'+item.title+'</label>'
                            +'</div></div>';
                $('#create-game-page div.countries-list').append(row);
                $('.ui.checkbox').checkbox();
            });
            $('#create-game-page div.topics-list').empty();
            $(data.topics).each(function(index, item) {
                var row = '<div class="field">'
                            +'<div class="ui toggle checkbox">'
                            +'<input type="checkbox" checked="checked" name="topics['+item.id+']" />'
                            +'<label>'+item.title+'</label>'
                            +'</div></div>';
                $('#create-game-page div.topics-list').append(row);
                $('.ui.checkbox').checkbox();
            });
        });
    }
    
    initApp();
};
