/*  
    0.1 Sortzea
*/
 
(function($){
  'use strict';
  $.fn.biziStats = function(options) {
    var $this = this;
    var settings = {
      'stationId' : '',
      'refresh' : false
    };
    
    if(options){$.extend( settings, options );}
  
    var apiUrl = "http://bizistats.info/api/last?callback=?";  
  
    function init(){
        var stations = [];
        console.log('init');
        $.getJSON(apiUrl, function(data) {
            for(var i = 0; i<data.stations.length;i++){
                if(settings.stationId){
                    if(data.stations[i].stationId==settings.stationId){
                        var stationLi = ['<li>',data.stations[i].name,': ',
                        data.stations[i].currentNum,'/',data.stations[i].totalNum,'</li>'].join('');
                        stations.push(stationLi);
                    }
                } else {
                    var stationLi = ['<li>',data.stations[i].name,': <span class="bizistats-station-', data.stations[i].stationId,'">',
                    data.stations[i].currentNum,'/',data.stations[i].totalNum,'</span></li>'].join('');
                    stations.push(stationLi);
                }

            }
            $('<ul />', {
                'class': 'bizistats-ul',
                html: stations.join('')
            }).appendTo($this); 
        });  
    }
    init();
    if(settings.refresh){
        setInterval(function(){
            $this.empty();
            init();
        },60000);
    } 
    return this;
  };
})(jQuery);