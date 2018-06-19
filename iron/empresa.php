<html>
<head>

<link href="style_central_assinante.css" rel="stylesheet" type="text/css">
<link href="style_acesso_cliente_iron.css" rel="stylesheet" type="text/css">
<link href="../css/iron/style_index.css" rel="stylesheet" type="text/css">
<link href="../css/iron/style_empresa.css" rel="stylesheet" type="text/css">
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
			<li><a href="#">A Empresa</a></li>
			<li><a href="#">Serviços</a></li>
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
<!--- Fim do cabeçalho padrao  -->
<?php 
include 'conexao.php';
include 'includes/topo.php'; 
?>	
	<div id="conteudo">
		<div id="esqueda">
        	<div class="links">

			</div>
		</div>		
		<div id="meio">
        	<img src="../img/iron/banner_empresa.gif" alt="" class="banner_criacao" />
			<h1><img src="../img/iron/icone_tit_empresa.gif" alt="Quem Somos" /><a href="#">A Empresa</a> <span>></span> <a href="empresa.php" class="migalha">Quem Somos</a></h1>
            
            <p>Há mais de 10 anos no mercado, a Iron hoje é um dos principais provedores da região, concentrando boa parte da comunicação das empresas aduaneiras e oferecendo serviços de soluções e conectividade para grandes empresas nas áreas de transporte portuária e petroquímica. Mais de seiscentas empresas da Baixada Santista utilizam a Iron como seu principal meio de trabalho na Internet.</p>
			<p>A experiência como provedor de acesso a Internet trouxe maior confiabilidade na segurança de dados devido a grande visibilidade de um provedor na Internet, assim nossos servidores e aplicação tornaram-se um exemplo de segurança e estabilidade, operando 24h por dia, na grande rede mundial e servindo como ferramenta fundamental para nossos clientes.</p>
            <p>Os profissionais que trabalham na Iron, acumulam experiência no mercado de comunicaçãoo de dados e sistemas como Linux e Windows. Experiência internacional, certificações Cisco, desenvolvimento em diversas plataformas e alta disponibilidade. Estas são algumas das características dos profissionais que estão envolvidos em nossos projetos.</p>
                       
			<div class="servicos">
				<a href="hospedagem.php" title="Hospedagem">
					<img src="../img/iron/servicos_hospedagem.gif" alt="Hospedagem" />
					<b class="hospedagem">Hospedagem</b><p>Hospede seu site com segurança <br />e tecnologia de ponta.</p>
				</a>
                <a href="criacao_sites.php" title="Criação de Sites" class="border0">
					<img src="../img/iron/servicos_criacao.gif" alt="Criação de Sites" /><b class="criacao">Criação de Sites</b><p>Desenvolvemos sites de acordo com o seu <br />gosto e com a identidade da sua empresa.</p></a>
				<a href="banda_larga_residencial.php" title="Banda Larga Residencial"><img src="../img/iron/servicos_bandaresidencial.gif" alt="Banda Larga Residencial" /><b class="bandaresidencial">Banda Larga Residencial</b><p>Acesso banda larga de alta qualidade <br />com um excelente custo-benefício.</p></a>
                <a href="banda_larga_comercial.php" title="Banda Larga Comercial" class="border0"><img src="../img/iron/servicos_bandacomercial.gif" alt="Banda Larga Comercial" /><b class="bandacomercial">Banda Larga Comercial</b><p>Para empresas que buscam acesso <br />a internet em alta velocidade.</p></a>
                <a href="super_dial.php" title="Super Dial"><img src="../img/iron/servicos_super.gif" alt="Super Dial" /><b class="super">Super Dial</b><p>Acesso discado, produto ideal <br />com o menor preço da região.</p></a>
                <a href="super_dial_fit.php" title="Super Dial Fit" class="border0"><img src="../img/iron/servicos_superfit.gif" alt="Super Dial Fit" /><b class="superfit">Super Dial Fit</b><p>Para você que usa a internet para <br />receber e enviar e-mails.</p></a>
                <a href="speedy_home.php" title="Speedy Home" class="border2"><img src="../img/iron/servicos_speedyhome.gif" alt="Speedy Home" /><b class="speedyhome">Speedy Home</b><p>Acesso banda larga em parceria <br />com a Telefônica.</p></a>
                <a href="speedy_negocios.php" title="Speedy Neg�cios" class="border1"><img src="../img/iron/servicos_speedynegocios.gif" alt="Speedy Neg�cios" /><b class="speedynegocios">Speedy Negócios</b><p>Acesso banda larga para as empresas <br />em parceria com a Telefônica. &nbsp;&nbsp;&nbsp;</p></a>
			</div>
			<p>Nosso suporte técnico está a sua disposição gratuitamente 7 dias por semana, 24 horas por dia, através de nossa central de atendimento pelo telefone <b>(13) 3229-9000</b>.</p>
		</div>

	</div>
	<div id="rodape">
		<ul>
			<li><strong>Rua Tolentino Filgueiras cj. 41 - Gonzaga - Santos/SP - Central de Atendimento: (13) 3229-9000</strong><br>
			© 2018 Iron Internet - Todos os direitos reservados.</li>
		</ul>
	</div>	
</div>
</body>
</html>
