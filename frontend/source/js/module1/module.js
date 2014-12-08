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
            $(this).parent().addClass('loading');
            $.post('/api/game/create', $(this).serialize(), function(data) {
                // ToDo: process on create
                $(this).parent().removeClass('loading');
            });
            return false;
        });
        
        $('#create-game-form .submit').click(function() {$('#create-game-form').submit(); return false;});
        
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
                    loadGame($(this).data('game-id'));
                });
            });
        });
    }
    
    function loadConfig()
    {
        var url = '/api/game/game-options';
        $.get(url, {}, function(data) {
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

    function loadGame(id)
    {
        $('div.app-container > div').hide();
        $('#view-game-page').show();
    }
    
    initApp();
};
