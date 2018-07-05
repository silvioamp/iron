<html>
<head>
<link href="style_central_assinante.css" rel="stylesheet" type="text/css">
<link href="style_acesso_cliente_iron.css" rel="stylesheet" type="text/css">
<link href="../css/iron/style_index.css" rel="stylesheet" type="text/css">
<link href="../css/iron/style_servicos.css" rel="stylesheet" type="text/css">
<link href="../css/iron/style_extrato_cobranca.css" rel="stylesheet" type="text/css">
<meta name="title" content="Iron">
<link href="estilo.css" rel="stylesheet" type="text/css">
<meta name="author" content="Iron - http://www.iron.com.br">
<meta name="description" content="description">
<meta name="keywords" content="keywords">
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta name="language" content="pt-br">
<meta name="robots" content="index,follow">
<meta name="revisit-after" content="30 days">
<link href="favicon.ico" rel="icon" type="../image/x-icon">
<link href="favicon.ico" rel="shortcut icon" type="../image/x-icon">
<script language="JavaScript" type="text/javascript" src="../js/function.js"></script>
<style type="text/css">
.submenu{display: none;}
</style>

<title>Iron Internet</title>
<link href="style_screen.css" rel="stylesheet" type="text/css">
<link href="../jir.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="../jir.js"></script>

</head>
<body>
<div id=container>
	<div id="black-bar">
		<ul>
			<li><a href="teste.html">Página Inicial</a></li>
			<li><a href="empresa.php">A Empresa</a></li>
			<li><a href="servicos.php">Serviços</a></li>
			<li><a href="contato.php">Contato</a></li>
			<li><a href="central.php">Central do Assinante</a></li>
			
		</ul>
	</div>

<div id="webmail">
	<form action="../loga_webmail.php" target="_blank" method="post" name="implogin">		
	     	<img src="../img/iron/webmail.gif" alt="WebMail" class="img_webmail">
		<span>E-mail:</span>
		<input tabindex="1" name="imapuser" type="text" id="email" value="">
		<span>Senha:</span>
		<input type="password" tabindex="2" name="pass" id="senha">

		<span>Modelo:</span>
		<select tabindex="4" id="select_view" name="select_view">
			<option value="dimp">Dinâmico</option>
			<option value="imp">Tradicional</option>
		</select>

		<input type="submit" value="Entrar" class="btn_entrar">
		<div id="lembrar">
			<input class="lembrar" type="checkbox" name="lembrar" value="ok"> <p>Lembrar e-mail</p>
		</div>
	</form>
</div>
<!-- FIM DO CABECALHO COM WEBMAIL -->

<div id="conteudo">
                <div id="esqueda">
                    <div class="links">

                    </div>
                </div>
                <div id="meio">
                    <img src="../img/iron/banner_central_assinante.gif" alt="" class="banner_central" />
                    <h1><img src="../img/iron/icone_tit_central.gif" alt="Central Assinante" />
                    <a href="central_assinante.php">Central do Assinante</a> <span></span> <a href="extrato_cobranca.php" class="migalha">Boletos</a></h1>
                    <div id="central_assinante">
                        <div id="estrutura">
                                <h3>Gerenciamento de Boletos</h3>
                                <div id="conteudo">
                                        <form action="http://server.litoral.com.br/cgi-bin/extrato_cobrancas.cgi" target="_blank" method="post">
                                        <ul>
                                            	<li><label>Login:</label><input name="login" type="text" tabindex="7" id="login" value="" /></li>
                                                <li><label>Senha:</label><input type="password" tabindex="8" name="senha" id="senha" value="" /> <input type="submit" value="Continuar" name="Continuar" id="btn" tabindex="5" /></li>
                                        </ul>
                                        <img src="../img/iron/gerenc_boleto.jpg" alt="" />
                                        </form>
                                </div>
                                <div class="texto">
                                        Caso não tenham sido cadastrados estes itens especificamente, utilize os dados (login + senha) de uma de suas contas de acesso, ou o login (apelido)+s$
                                        Em caso de dúvidas, entre em contato com nosso suporte técnico através do telefone (13) 3229.9000, obrigado.
                                </div>
                        </div>
                        
                    </div>

            </div>

</div>
<div id="rodape">
		<ul>
			<li><strong>Rua Tolentino Filgueiras cj. 41 - Gonzaga - Santos/SP - Central de Atendimento: (13) 3229-9000</strong><br>
			© 2018 Iron Internet - Todos os direitos reservados.</li>
		</ul>
	</div>	
</body>
</html>
