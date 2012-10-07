jQuery-biziStats
================

biziStats jQuery plugina. Donostiako bizikleta publikoen geltokien informazia zerrenda batean erakusten du [bizistats.info](http://bizistats.info)-ri eskerrak.


Erabili
-------

* Deskargatu jquery.biziStats.js fitxategia
* Zure web orriari gehitu (jQuery behar duzu!)
* div huts bat sortu eta nahi duzun id-a eman (`<div id="nireID"></div>`)
* `$("#nireID").biziStats()` exekutatu
* Parametro batzuk pasa daitezke objektu eran nahi bada:
	* refresh (Boolean) true bada minuturo eguneratuko da plugina
	* stationId [Integer] 1-9, geltokien IDak Array gisa, geltoki bat(zuen) informazioa nahi bada [1] edo [3,6,8],...
	* `$('#nireID').biziStats({refresh:true,staionId:5})`

eredua.html fitxategian erabilera ereduak daude