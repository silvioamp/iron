<html>
<head>

<link href="style_central_assinante.css" rel="stylesheet" type="text/css">
<link href="style_acesso_cliente_iron.css" rel="stylesheet" type="text/css">
<link href="../css/iron/style_index.css" rel="stylesheet" type="text/css">
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

<?php 
include 'conexao.php';
include 'includes/topo.php';

$departamento = $_REQUEST['dep'];

if($departamento != 'cobranca' && $departamento != 'comercial' && $departamento != 'desenvolvimento' && $departamento != 'informacoes' && $departamento != 'suporte')
{
	$departamento = '';
}

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$solicitacao = $_POST['solicitacao'];
$horario = $_POST['horario'];
$enviado = $_POST['enviado'];

function is_email($email_address) {
	$regex = '/^[A-z0-9][\w.-]*@[A-z0-9][\w\-\.]+\.[A-z0-9]{2,6}$/';
	return (preg_match($regex, $email_address));
}

if($enviado == 1)
{
	if (!is_email($email) )
	{
		$erro_email = "Email invalido.<br/>";
		$erro = 1;
	}
	if (strlen($nome) < 3)
	{
		$erro_nome = "Preencha corretamente seu nome. (min 3 letras)<br/>";
		$erro = 1;
	}
	if (strlen($telefone) < 8)
	{
		$erro_telefone = "Preencha corretamente seu telefone. (min 8 letras)<br/>";
		$erro = 1;
	}
	if (strlen($solicitacao) < 10)
	{
		$erro_solicitacao = "Preencha corretamente sua solicitação (min 10 letras).<br/>";
		$erro = 1;
	}
	if (strlen($horario) < 3)
	{
		$erro_horario = "Preencha corretamente o horário (min 3 letras).<br/>";
		$erro = 1;
	}
}
if( $enviado == '1' && $erro != 1)
{
	$mens = "Nome : ".$nome."
	Email: ".$email."
	Telefone: ".$telefone."
	Solicitação: ".$solicitacao."
	Horário: ".$horario."";
	
	if($departamento == 'cobranca')
	{
		$email_emp = 'cobranca@bcmg.com.br';

	}elseif ($departamento == 'comercial')
	{
		$email_emp = 'crc@bignet.com.br,nsassaki@bignet.com.br';

	}elseif ($departamento == 'desenvolvimento')
	{
		$email_emp = 'des@bcmg.com.br';

	}elseif ($departamento == 'informacoes')
	{
		$email_emp = 'crc@bignet.com.br,nsassaki@bignet.com.br';

	}elseif ($departamento == 'suporte')
	{
		$email_emp = 'suporte@bcmg.com.br';
	}
	$assunto = "[SITE $nome_site] - CONTATO";
	

	$headers = "From: Contato <".$email_emp.">\n";

	if($departamento == 'comercial' || $departamento == 'informacoes')
	{
		$headers = "From: Contato <comercial@bcmg.com.br>\n";
	}

	$headers .= "Reply-To: $email\n";
	
	mail($email_emp,$assunto,$mens,$headers);	
	
	$email_ok = 1;
}
?>	
	<div id="conteudo">
		<div id="esqueda">
        	<div class="links">

			</div>
		</div>		
		<div id="meio">
			<?php 
			if($email_ok == 1)
			{
				echo'
				<img src="../img/iron/banner_contato.gif" alt="" class="banner_contato" />
            	<h1><img src="../img/iron/icone_tit_contato.gif" alt="Contato" /><a href="contato.php" class="migalha">Contato</a></h1>
				<span class="sucesso">Sua mensagem foi enviada com sucesso!</span>
				';
			}else{
			?>
        	<img src="../img/iron/banner_contato.gif" alt="" class="banner_contato" />
            <h1><img src="../img/iron/icone_tit_contato.gif" alt="Contato" /><a href="contato.php" class="migalha">Contato</a></h1>
            <div id="contato">
                <p>Escolha o departamento desejado. Faça críticas e dê sugestões. Além do formulário abaixo, temos tambem a sua disposição o atendimento no telefone <strong>(13) 3229-9000</strong>.</p>
                <div class="centro">
                <form action="contato.php" method="post">
                	<p>Departamento: <select name="dep" class="form" id="dep">
								          <option value="selecione" <?php if($departamento ==''){echo"selected";}?> >Selecione</option>
								          <option value="cobranca" <?php if($departamento == 'cobranca'){echo"selected";}?> >Cobrança</option>
								          <option value="comercial" <?php if($departamento == 'comercial'){echo"selected";}?> >Comercial</option>
								          <option value="informacoes" <?php if($departamento == 'informacoes'){echo"selected";}?> >Informações</option>
								          <option value="suporte" <?php if($departamento == 'suporte'){echo"selected";}?> >Suporte Técnico</option>
									 </select>
						</p>
                    <img src="../img/iron/icon_email.gif" alt="" />
                    <input type="hidden" name="enviado" value="1" />
                    	<ul>
                        	<li><label class="cnome">Nome:</label><input name="nome" type="text" id="nome" value="<?=$nome?>" /></li>
                            <li><label class="cemail">E-mail:</label><input name="email" type="text" id="email" value="<?=$email?>" /></li>
                            <li><label class="ctelefone">Telefone:</label><input name="telefone" type="text" id="telefone" value="<?=$telefone?>" /></li>
                            <li><label class="csolicitacao">Solicitação:</label><textarea name="solicitacao" id="solicitacao"><?=$solicitacao?></textarea></li>
                            <li><label class="chorario">Melhor Horário para Contato:</label><input name="horario" type="text" id="horario" value="<?=$horario?>" /> <input type="submit" value="Enviar" class="btn_contato" /></li>
                        </ul>
						<?php 
						if($erro == 1){
							echo"<div class='erro'>$erro_email $erro_nome $erro_telefone $erro_solicitacao $erro_horario</div>";
						}
						?>
                    </form>
                </div>
                
            </div>
            
			<?php } ?>
		</div>
<?php include 'includes/dir.php';?>
	</div>
	<div id="rodape">
		<ul>
			<li><strong>Rua Tolentino Filgueiras cj. 41 - Gonzaga - Santos/SP - Central de Atendimento: (13) 3229-9000</strong><br>
			© 2018 Iron Internet - Todos os direitos reservados.</li>
		</ul>
	</div>
</div>
</div>
</div
</body>
</html>
