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

// ESCONDE RESPOSTA
/***********************************************
* Switch Menu script- by Martial B of http://getElementById.com/
* Modified by Dynamic Drive for format & NS4/IE4 compatibility
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

var persistmenu="yes" //"yes" or "no". Make sure each SPAN content contains an incrementing ID starting at 1 (id="sub1", id="sub2", etc)
var persisttype="sitewide" //enter "sitewide" for menu to persist across site, "local" for this page only

if (document.getElementById){ //DynamicDrive.com change
document.write('<style type="text/css">\n')
document.write('.submenu{display: none;}\n')
document.write('</style>\n')
}

function SwitchMenu(obj){
	if(document.getElementById){
	var el = document.getElementById(obj);
	var ar = document.getElementById("masterdiv").getElementsByTagName("span"); //DynamicDrive.com change
		if(el.style.display != "block"){ //DynamicDrive.com change
			for (var i=0; i<ar.length; i++){
				if (ar[i].className=="submenu") //DynamicDrive.com change
				ar[i].style.display = "none";
			}
			el.style.display = "block";
		}else{
			el.style.display = "none";
		}
	}
}