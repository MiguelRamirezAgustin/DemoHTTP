

function Ver(e){	
	
 var clienteHttp =Ti.Network.createHTTPClient({
	onload: function(){
		var result=JSON.parse(this.responseText);
		
		for(var i=0; i<result.resultados.length; i++){
			
			if(result.resultados[i].resultado != undefined){
				var label =Ti.UI.createLabel({
					color:"black",
					top:"10",
					left:10,
					//campo que se muestra 
					text: 'lugar: '+ result.resultados[i].resultado.titulo,
					height:Ti.UI.SIZE,
				});
				
				$.scrollView.add(label);
			}
		}
	},
	onerror: function(e){
		alert(e.error + 'error ');
	},
	timeout:3000,
});
clienteHttp.open('GET','https://gist.githubusercontent.com/addieljuarez/5518083/raw/14c5ecf04bae5cd873754dd5359efacb9dcd478c/gistfile1.json');
clienteHttp.send();
}

$.btnSiguiente.addEventListener('click', function(e){
	var siguiente= Alloy.createController('imagesServer').getView();
	siguiente.open();
});



$.index.open();
