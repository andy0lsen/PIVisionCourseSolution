(function (PV){
	"use strict";

	var def = {
		typeName: "GoogleMaps", 
		init: init 
	} 

	function init(scope) {
		scope.google = function(){
			open("http:\\maps.google.com");

		}
	
	}
	
	function init(scope) {
		scope.mail = function(){
			open("mailto:");

		}
	
	}
	
	
	PV.toolCatalog.register(def); 

})(window.PIVisualization)

