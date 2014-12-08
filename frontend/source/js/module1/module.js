module.exports = function () {
    
    function initApp()
    {
        $('.ui.checkbox').checkbox();
        $('select.dropdown').dropdown();
        
        $('div.app-container > div').hide();
        $('div.app-container > div').first().show();

        $('.menu a').click(function() {
            $('div.app-container > div').hide();
            $('#'+$(this).data('page')).show();
            $('.menu a').removeClass('active');
            $(this).addClass('active');
        });
        loadGames();
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
                            +'<td><button class="button ui green" onclick="loadGame('+item.id+');">Join</button></td>'
                            +'</tr>';
                $('#games-table tbody').append(row);
            });
        });
    }

    initApp();
    
    function createGame()
    {
        
    }
};
