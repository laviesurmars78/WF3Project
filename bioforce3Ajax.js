$(document).ready(function(){
	$('#cat').on('change', changeCat);
});

function changeCat() 
{
	var cat = $(this).val();

	$.ajax({
		url: 'http://localhost/coursPHP/produitsServices.php',
		method: 'GET',
		data: {cat: cat},
		dataType: 'json',
		success: fctSuccess,
		error: fctError,
	});
}

function fctSuccess(data) 
{
	var contenu = '<ul>';

	$.each(data, function(cle, valeur) {
		contenu += '<li>' + valeur.libProduit + ': ' + valeur.prixProduit + '</li>';
	});
	contenu += '</ul>';
	$("#contenu").html(contenu);
}

function fctError(msg, txt) 
{
	alert(txt);
}
