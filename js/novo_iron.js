function gb_popup (file, window, larg, altura) {
	msgWindow = open(file, window, 'directories=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,copyhistory=no,resizable=no,width=' + larg + ',height='  + altura);
        msgWindow.moveTo(screen.width/2-larg/2,screen.height/2-altura/2-20);
}

function go_painel (type) {
	var login = gb_getCookie('login');
	var id = gb_getCookie('id');
	var passw = gb_getCookie('passw');
	if (id) {
		var url = "";
		switch (type) {
			case 'email':
				url = "https://admin.iron.com.br/email.php?id=" + id + "&login=" + login;
				break;
			case 'catatudo':
				url = "https://admin.iron.com.br/catatudo.php?id=" + id + "&login=" + login;
				break;
		}
		if (url) {
			window.location = url;
		} else {
			alert('Serviço não encontrado');
		}
	} else {
		alert('Para acessar esta seção, você precisa se identificar!');
	}
}

function write_menu_servicos () {
	var id = gb_getCookie('id');
	var html = "";
	if (id) {
		var sessionFLAG = id.substr(0,1);
		html+= "<ul style=\"float:left; list-style:none; padding:10px 0 0 0; width:688px;\">";
		html+= "<li style=\"float:left; margin:0 70px 0 168px;\"><a style=\"color:#a30100; text-decoration:none;\" href=\"javascript:go_painel('email');\"><img src=\"img/img_email.gif\" style=\"border:none; color:#a30100; float:left; height:32px; width:32px; margin:0;\" /> <b style=\"color:#a30100; float:left; margin:10px 0 0 10px;\">Contas de E-mail</b></a></li>";
		html+= "<li style=\"float:left;\"><a style=\"color:#a30100; text-decoration:none;\" href=\"javascript:go_painel('catatudo');\"><img src=\"img/img_spam.gif\" style=\"border:none; color:#a30100; float:left; height:32px; width:32px; margin:0;\" /> <b style=\"color:#a30100; float:left; margin:10px 0 0 10px;\">AntiSpam</b></a></li>";
		html+= "</ul>";
	} else {
		//alert('Para acessar esta seção, você precisa se identificar!');
		html+= "Para acessar esta seção, você precisa se identificar!";
	}
	document.write(html);

}

function gb_check_autent () {

	var login = document.autent.login.value;
	gb_setCookie ('login', login, 8760, '/');
	var senha = document.autent.senha.value;

	gb_write_acessoCliente_wait(login);

	var url = "novo_check_autent.php";
	var sendvars = "login=" + login + "&senha=" + senha;
	var objxml = SendRequest3 (url, 'xml', sendvars);
	var ret = parse_xml_data(objxml);

	gb_write_acessoCliente(login, ret['id']);

	if (ret['wait']) {
		alert("Autenticação bloqueada, favor tentar novamente após " + ret['wait'] + " segundos");
	} else if (ret['id']) {
		gb_setCookie ('id', ret['id'], null, '/');
		gb_setCookie ('passw', ret['passw'], null, '/');
		window.location = "acesso_cliente_iron.php";
	} else {
		alert('Acesso incorreto!');
	}
}

function gb_sair (login) {
	gb_write_acessoCliente_wait(login);
	var id = gb_getCookie('id');
	var url = "novo_logout.php?id=" + id;
	SendRequest3 (url, null, null);
	gb_setCookie ('id', '', 0, '/');
	gb_setCookie ('passw', '', 0, '/');
	gb_write_acessoCliente(login, null);
	window.location = "/";
}

function gb_write_acessoCliente_wait (login) {
	var obj = document.getElementById('acessoCliente');
	var html = "";
	if (!login) {
		login = '';
	}
	html+= "<span id=\"acessoClienteOn\">";
	html+= "<strong>" + login + "</strong><br />Aguarde...";
	html+= "</span>";
	obj.innerHTML = html;
}

function gb_write_acessoCliente (login, sessionID) {
	var obj = document.getElementById('acessoCliente');
	//var obj_link_painel = document.getElementById('link_painel');
	var html = "";
	//var href_link_painel = "#";
	if (!login) {
		login = '';
	}
	if (sessionID) {
		html+= "<span id=\"acessoClienteOn\">";
		html+= "<span id=\"login_cliente\"><b>" + login + ",</b> </span><b>Conectado</b> ";
		html+= "<span id=\"opcao_sair\"><b><a href=\"javascript:gb_sair('"+login+"')\">[Sair]</a></b></span>";
		html+= "<span id=\"opcao_servicos\"><b><a href=\"acesso_cliente_iron.php\">[Serviços]</a></b></span>";
		html+= "<img src=\"img/iron/gerenc_acesso_clientes_menor.jpg\"  style=\"float:left; margin:-15px 0 0 15px;\"/>";
		html+= "</span>";
		//href_link_painel = "/servicos/";
	} else {
/*
		html+= "<form name=\"autent\">";
		html+= "<label>Login</label>";
		html+= "<span>";
		html+= "<input name=\"login\" type=\"text\" value=\"" + login + "\" class=\"form\" style=\"width:110px;\" />@iron.com.br";
		html+= "</span>";
		html+= "<label>Senha</label>";
		html+= "<span>";
		html+= "<input name=\"senha\" type=\"password\" class=\"form\" style=\"width:110px;\" />";
		html+= "</span> <span>";
		html+= "<input type=\"image\" src=\"img_botao_login.gif\" name=\"Submit\" value=\"Logar\" onClick=\"gb_check_autent()\" />";
		html+= "</span>";
		html+= "</form>";
*/
		html += "<form name=\"autent\">";
		html += "<ul><li><label>Login:</label>";
		html += "<input name=\"login\" type=\"text\" tabindex=\"3\" id=\"login\" value=\"" + login + "\" /></li>";
		html += "<li><label>Senha:</label><input type=\"password\" tabindex=\"4\" name=\"senha\" id=\"senha\" />";
		html += "<input type=\"button\" value=\"Logar\" name=\"Submit\" id=\"btn\" tabindex=\"5\" onClick=\"gb_check_autent()\" /></li>";
		html += "</ul><img src=\"img/iron/gerenc_acesso_clientes.jpg\" alt=\"\" />";
		html += "</form>";
	}
	obj.innerHTML = html;
}

function gb_setCookie(name, value, expires, path, domain, secure) {
	if (expires != null) {
		var datenow = new Date();
		datenow.setTime(datenow.getTime() + Math.round(3600000*expires));
		expires = datenow.toGMTString();
	}
	var curCookie = name + "=" + escape(value) +
	   ((expires) ? "; expires=" + expires : "") +
	   ((path) ? "; path=" + path : "") +
	   ((domain) ? "; domain=" + domain : "") +
	   ((secure) ? "; secure" : "");
	document.cookie = curCookie;
}

function gb_getCookie(Name) {
	var cookies = document.cookie;
	if (cookies.indexOf(Name + '=') == -1) return null;
	var start = cookies.indexOf(Name + '=') + (Name.length + 1);
	var finish = cookies.substring(start,cookies.length);
	finish = (finish.indexOf(';') == -1) ? cookies.length : start + finish.indexOf(';');
	return unescape(cookies.substring(start,finish));
}

/*############################################################
#                   SENDREQUEST3 ASYNC
############################################################*/

function openAjax() {
	var ajax;
	try {
		ajax = new XMLHttpRequest();
	} catch(ee) {
		try{
			ajax = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			 try{
				ajax = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(E) {
				 ajax = false;
			}
		}
	}
	return ajax;
}

function SendRequest3 (url, returnmode, sendvars) {
	/* SendRequest de envio ASYNC method auto POST onde:
		returnmode = xml;text
	*/
	var ajax = openAjax();
	var method = 'POST';
	if (ajax) {
		if (!sendvars) {
			method = 'GET';
			sendvars = null;
		}
		ajax.open(method, url, false);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.send(sendvars);
		if (ajax.status == 200) {
			if (returnmode == 'xml') {
				return ajax.responseXML;
			} else if (returnmode == 'text') {
				return ajax.responseText;
			} else {
				return false;
			}
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function parse_xml_return (objXML) {
	/* Parse do TPL xml_return.tpl
	   Retorno [0] = Array com todos os códigos <code> de retorno
	   Retorno [1] = Array contendo as descrições <description> ref. aos códigos
	*/
	var ret = new Array();
	if (objXML) {
		var code = new Array();
		var description = new Array();
		tickerobj = objXML.getElementsByTagName("return")[0];
		for (i=0;i<tickerobj.childNodes.length;i++){
			if (tickerobj.childNodes[i].nodeName == 'msg') {
				tickerobj2 = tickerobj.childNodes[i];
				for (n=0;n<tickerobj2.childNodes.length;n++){
					if (tickerobj2.childNodes[n].nodeType == 1) {
						if (tickerobj2.childNodes[n].nodeName == 'code') {
							code.push(tickerobj2.childNodes[n].firstChild.nodeValue);
						} else if (tickerobj2.childNodes[n].nodeName == 'description') {
							description.push(tickerobj2.childNodes[n].firstChild.nodeValue);
						}
					}
				}
			}
		}
		ret[0] = code;
		ret[1] = description;
	}
	/* yy - Substituir abaixo por algo como count() na varriavel ret
	if (ret.toSource() == '[]') {
		return null;
	} else {
		return ret;
	}
	*/
	return ret;
}

function parse_xml_data (objXML) {
	/* Parse do TPL xml_data.tpl
	   Retorno é um Array ex.: array[<key>] = <value>
	*/
	var ret = new Array();
	if (objXML) {
		var key = '';
		var value = '';
		tickerobj = objXML.getElementsByTagName("data")[0];
		if( tickerobj ) {
			for (i=0;i<tickerobj.childNodes.length;i++){
				if (tickerobj.childNodes[i].nodeType == 1) {
					key = trim(tickerobj.childNodes[i].nodeName);
					value = trim(tickerobj.childNodes[i].firstChild.nodeValue);
					ret[key.substr(4)] = value.substr(6);
				}
			}
		}
	}
	return ret;
}

function parse_xml_data2 (objXML) {
	/* Parse do TPL xml_data.tpl
	Retorno é um Array ex.: array[<key>][<key2>] = <value>
	*/
	var ret = new Array();
	if (objXML) {
		var key = '';
		var value = '';
		var key2 = '';
		var value2 = '';
		tickerobj = objXML.getElementsByTagName("data")[0];
		for (i=0;i<tickerobj.childNodes.length;i++){
			if (tickerobj.childNodes[i].nodeType == 1) {
				key = trim(tickerobj.childNodes[i].nodeName);
				//value = trim(tickerobj.childNodes[i].firstChild.nodeValue);
				ret[key.substr(4)] = new Array;
				tickerobj2 = objXML.getElementsByTagName(key)[0];
				for (n=0;n<tickerobj2.childNodes.length;n++){
					if (tickerobj2.childNodes[n].nodeType == 1) {
						key2 = trim(tickerobj2.childNodes[n].nodeName);
						value2 = trim(tickerobj2.childNodes[n].firstChild.nodeValue);
						ret[key.substr(4)][key2.substr(4)] = value2.substr(6);
					}
				}
			}
		}
	}
	return ret;
}



/*############################################################
#                         DIVERSOS
############################################################*/

function in_array (value, array) {
	var i = 0;
	for (i=0;i<array.length;i++) {
		if (value === array[i]) {
			return true;
		}
	}
	return false;
}

function trim (str) {
	if (typeof(str) == "string") {
		return str.replace(/^\s+/g, "").replace(/\s+$/g, "");
	} else {
		return str;
	}
}

function FindObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=FindObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function Fechar_destaque() { //v6.0
  var i,p,v,obj,args=Fechar_destaque.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=FindObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}
