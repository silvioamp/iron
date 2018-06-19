<script type="text/javascript"> 
// relacao de estados da federacao
var estados=new Array();
estados['AC']='Acre'; estados['AL']='Alagoas'; estados['AP']='Amapá';
estados['AM']='Amazonas'; estados['BA']='Bahia'; estados['CE']='Ceará';
estados['DF']='Distrito Federal'; estados['ES']='Espírito Santo';
estados['GO']='Goiás'; estados['MA']='Maranhão'; estados['MT']='Mato Grosso';
estados['MS']='Mato Grosso do Sul'; estados['MG']='Minas Gerais';
estados['PA']='Pará'; estados['PB']='Paraíba'; estados['PR']='Paraná';
estados['PE']='Pernambuco'; estados['PI']='Piauí';
estados['RJ']='Rio de Janeiro'; estados['RN']='Rio Grande do Norte';
estados['RS']='Rio Grande do Sul'; estados['RO']='Rondônia';
estados['RR']='Roraima'; estados['SC']='Santa Catarina';
estados['SP']='São Paulo'; estados['SE']='Sergipe'; estados['TO']='Tocantins';

// Abreviaturas de logradouros
var abrevLgdr=new Array();
abrevLgdr['Rua']='R'; abrevLgdr['Avenida']='Av';

function GetXmlHttpObject() {
	if(window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		return new XMLHttpRequest();
	}
	if(window.ActiveXObject) {
		// code for IE6, IE5
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
	return null;
}

function validaCEP(cep)
{
	var destino='includes/lib_endereco_completo.php';
	var submeter='';
	if( cep && !isNaN(cep) && cep.length == 8 ) {
		// Inicia rotina com AJAX Xml
		xmlhttp=GetXmlHttpObject();
		if (xmlhttp==null) {
			alert ('Seu navegador não oferece suporte a XMLHnoTTP!');
			return;
		} else {
			//alert('Cheguei CEP = '+cep);
			var url=destino;
			url+='?cep='+cep;
			xmlhttp.onreadystatechange=retornoCEP;
			// Para usar POST
			submeter+='acao=buscaEndereco';
			xmlhttp.open("POST",url,true);
			//xmlhttp.setRequestHeader("Content-type", "text/xml");
			//xmlhttp.setRequestHeader("encoding", "ISO-8859-1");
			//Send the proper header information along with the request
			xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xmlhttp.setRequestHeader("Content-length", submeter.length);
			xmlhttp.setRequestHeader("Connection", "close");
			xmlhttp.send(submeter);
		}
	} else if( cep && isNaN(cep) ) {
		alert('Preencher o CEP apenas com NUMEROS '+cep);
	} else {
		var lixo=new Array('cidade', 'bairro', 'uf', 'estado', 'endereco');
		for( x in lixo )
		{ document.getElementById(lixo[x]).value=''; }
	}
	return;
}

function retornoCEP() {
	var lixo=''; var ruaAv=new Array();
	var chaves=new Array(); var valores=new Array();
	if (xmlhttp.readyState==4) {
		if (xmlhttp.status==200) {
			var dados=unescape(xmlhttp.responseText);
			// Endereco localizado
			if( dados.substr(0,5) == 'ok###' ) {
				lixo=dados.substr(5);
				// Separa lista de chaves
				var pos=lixo.indexOf('#separa_registros#');
				var p1=lixo.substr(0,pos);
				chaves=p1.split('#separador#');
				// Separa lista de valores
				var p2=lixo.substr(pos+18);
				valores=p2.split('#separador#');
				// Preenche campos
				for( x in chaves ){
					if( chaves[x] == 'cidade' || chaves[x] == 'bairro' ) {
						document.getElementById(chaves[x]).value=valores[x];
					} else if( chaves[x] == 'uf' ) {
						document.getElementById('estado').value=estados[valores[x]];
						document.getElementById(chaves[x]).value=valores[x];
					} else if( chaves[x] == 'tipo' ) {
						ruaAv[0]=valores[x];
					} else if( chaves[x] == 'logradouro' ) {
						ruaAv[1]=valores[x];
					}
				}
				// Ajusta Conteudo de Logradouro
				if( ruaAv.length == 2 ) {
					if( abrevLgdr[ruaAv[0]] )
					{ document.getElementById('endereco').value=abrevLgdr[ruaAv[0]]+' '+ruaAv[1]; }
					else
					{ document.getElementById('endereco').value=ruaAv[0]+' '+ruaAv[1]; }
				}
			// Registro VAZIO
			} else {
				lixo=new Array('cidade', 'bairro', 'uf', 'estado', 'endereco');
				for( x in lixo )
				{ document.getElementById(lixo[x]).value=''; }
				alert('Endereco não localizado para o CEP informado');
			}
		}
		else {
			alert("Problema baixando XML:" + xmlhttp.statusText + " / " + xmlhttp.status);
		}
	}
}
</script>