/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    function loadGames()
    {
        var url = '/api/game/game-options';
        $.get(url, {}, function(list) {
            alert('here');
            $('#games-table tbody').empty();
            $(list).each(function(index, item) {
                var row = '<tr><td>'+item.title+'</td>'
                            +'<td>'+item.status+'</td>'
                            +'<td>0/'+item.playersMax+'</td>'
                            +'<td>'+item.room+'</td>'
                            +'<td>[Films]</td>'
                            +'<td><i class="ua flag"></i> <i class="belarus flag"></i> <i class="ru flag"></i></td>'
                            +'<td><button class="button ui green" onclick="loadGame('+item.id+');">Join</button></td>'
                            +'</tr>';
                $('#games-table tbody').append(row);
            });
        });
    }
    
    loadGames();
});