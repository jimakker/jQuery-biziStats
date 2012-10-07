/*  
    0.1 Sortzea
*/
 
(function($){
  'use strict';
  $.fn.biziStats = function(options) {
    var $this = this;
    var settings = {
      'stationIDs' : null,
      'refresh' : false,
      'template': 0
    };
    
    if(options){$.extend( settings, options );}
  
    var apiUrl = "http://bizistats.info/api/last?callback=?";  
    if(settings.template!=0){
        var fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", 'http://bizistats.info/extras/templates/widget-'+settings.template+'.css');
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
    function init(){
        var stations = [];
        $.getJSON(apiUrl, function(data) {
            var readDate = new Date(data.stations[0].lastRead);
            var readDateHtml = ['<span class="bizistats-read-date">',readDate.getHours(),':',readDate.getMinutes(),'</span>'].join('');
            //stations.push(readDateHtml);
            stations.push('<ul class="bizistats-ul">');
            for(var i = 0; i<data.stations.length;i++){
                if(settings.stationIDs){
                    if(settings.stationIDs.indexOf(data.stations[i].stationId)!=-1){
                        var stationLi = ['<li class="bizistats-station-', data.stations[i].stationId,'">',data.stations[i].name,': ',
                        data.stations[i].currentNum,'/',data.stations[i].totalNum,'</li>'].join('');
                        stations.push(stationLi);
                    }
                } else {
                    var stationLi = ['<li class="bizistats-station-', data.stations[i].stationId,'">',data.stations[i].name,': <span>',
                    data.stations[i].currentNum,'/',data.stations[i].totalNum,'</span></li>'].join('');
                    stations.push(stationLi);
                }

            }
            stations.push('</ul>');
            var credits = '<a href="http://bizistats.info" class="bizistats-credits">BiziStats.info</a>';
            var bizistatsHtml = [readDateHtml,stations.join(''),credits].join('');
            $(bizistatsHtml).appendTo($this); 
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