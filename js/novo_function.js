function exibe_opcoes(op,id)
{ 
	if( op == 1 ) {
		document.getElementById(id).style.display = 'block';
	} else {
		document.getElementById(id).style.display = 'none';
	}
}

/*############################################################
#                    SWF
############################################################*/

function wr (str) {
	document.write(str);
}

function swf(file,width,height,vars) {
	wr('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="'+width+'" height="'+height+'" id="swfobj" align="middle" type="application/x-shockwave-flash">');
	if (vars) {
		wr('<param name="FlashVars" value="'+vars+'">');
	}
	wr('<param name="movie" value="'+file+'" />');
	wr('<param name="quality" value="high" />');
	wr('<param name="wmode" value="Transparent" />');
	wr('<embed src="'+file+'" flashvars="'+vars+'" quality="high" width="'+width+'" height="'+height+'" name="flashobj" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" wmode="Transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" />');
	wr('</object>');
}

/*############################################################
#                    VALIDAÇÃO FORM. CONTATO
############################################################*/

function frm_contato(theForm) {
	var msg = "";
	var email = /^[a-z0-9\_\-\.\/]+\@\S+\.\S+$/i;
	
	if(theForm.nome.value == "") { msg += "- Nome\n"; }
	if (!email.test(theForm.user_email.value)) { msg += "- E-maill\n"; }
	if(theForm.subject.value == "") { msg += "- Assunto\n"; }
	if(theForm.mensagem.value == "") { msg += "- Mensagem\n"; }

	if(msg){ 
		alert("Preencha o(s) campo(s):\n"+msg); 
		return false;
	} else {
		return true;
	}
}

// ------------------

function MM_validateForm() { //v4.0
  var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm.arguments;
  for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=MM_findObj(args[i]);
    if (val) { nm=val.name; if ((val=val.value)!="") {
      if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
        if (p<1 || p==(val.length-1)) errors+='- '+nm+' must contain an e-mail address.\n';
      } else if (test!='R') { num = parseFloat(val);
        if (isNaN(val)) errors+='- '+nm+' must contain a number.\n';
        if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
          min=test.substring(8,p); max=test.substring(p+1);
          if (num<min || max<num) errors+='- '+nm+' must contain a number between '+min+' and '+max+'.\n';
    } } } else if (test.charAt(0) == 'R') errors += '- '+nm+' is required.\n'; }
  } if (errors) alert('The following error(s) occurred:\n'+errors);
  document.MM_returnValue = (errors == '');
}
//-->

function abrirWebmail() {
	window.open('http://webmail.iron.com.br/webmail','webmail','directories=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,copyhistory=no,resizable=yes,width=800,height=430');
}
//------------

function JumpLinksUteis(x) {
		if( x.value != 0 ) window.open(x.value,'_blank');
}