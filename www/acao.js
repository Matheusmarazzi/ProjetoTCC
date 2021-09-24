//funçao cadastrar
$(document).on('submit','#cadastros',function(e) {
	var url = 'https://maestoques.profrodolfo.com.br/sombra-facil/';
	$.ajax({
		url: url+'cadastrar.php',
		data:$(this).serialize(),
		type:'POST',
		success: function(retorno){
			alert(retorno);
			$('#nome').val("");
			$('#login').val("");
			$('#senha').val("");
			$('#rg').val("");
			$('#telefone').val("");
      redirecionar('index.html');
		}
	});
	//enviar o form sem atualizar a pagina
	e.preventDefault();


});
// funcao redirecionar
function redirecionar(pagina){
window.location = pagina;

};
//funcao cadastrar localizao
$(document).on('submit','#adicionar',function(e) {
  var url = 'https://maestoques.profrodolfo.com.br/sombra-facil/';

	$.ajax({
		url: url+'addlocal.php',
		data:$(this).serialize(),
		type:'POST',
		success: function(retorno){
			alert(retorno);
			$('#lat').val("");
			$('#long').val("");
		}
	});

	e.preventDefault();

//funçao login
});
$(document).on('submit','#logar',function(e) {
  var url = 'https://maestoques.profrodolfo.com.br/sombra-facil/';

	$.ajax({
		url: url+'login.php',
		data:$(this).serialize(),
		type:'POST',
		success: function(retorno){
			alert(retorno);
			$('#login').val("");
			$('#senha').val("");
      if(retorno == 'login correto!'){
      window.location.href = 'pagina.html';
      }else if(retorno == 'login correto!!'){
        window.location.href = 'paginaadm.html';
		  }
      }
	});

	e.preventDefault();

});
$(document).on('click','#pegarlocal',function(e) {
    var onSuccess = function(position) {
    	$('#lat').val(position.coords.latitude);
			$('#long').val(position.coords.longitude);
    };
    var onError = function(){};
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});