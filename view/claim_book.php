<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>claim book</title>
		<script src="assets/jquery/jquery-3.4.1.min.js"></script>
		<link rel="stylesheet" href="assets/css/css_libro.css">
	</head>
	<body>

		<h1 class="title-complaints-book">LIBRO DE RECLAMACIONES</h1>
		<hr class="hr-complaints-book">

		<div id="form_claim" class="form-complaints-book">
			<!-- <div id="alertSuccess" class="alert-success"></div> -->
			<div id="alertError" class="alerts-error"></div>
			<!-- <div id="alertwarning" class="alert-warning"><center><li><strong>*</strong> complete los campos ...</li></center></div> -->
			<br>
			<input class="letras" type="text" id="claim_ape_pater" value="" placeholder="Ingrese su Apellido Paterno">
			<br>
			<input class="letras" type="text" id="claim_ape_mater" value="" placeholder="Ingrese su Apellido Materno">
			<br>
			<input class=""letras type="text" id="claim_name" value="" placeholder="Ingrese sus Nombres">
			<br>
			<select class="" id="claim_type_document">
			</select>
			<br>	<input class="input-number" type="text" id="claim_dni" value="" placeholder="Ingrese su Número de Identidad">
			<br>
			<input class="input-number" type="text" id="claim_phone" value="" placeholder="Ingrese su Celular">
			<br>
			<select class="" id="claim_country">
			</select>
			<br>
			<input class="" type="text" id="claim_addess" value="" placeholder="Ingrese su Dirección">
			<br>
			<input class="" type="text" id="claim_email" value="" placeholder="Ingrese su Correo Electrónico">
			<br>
			<select class="" id="claim_type">
			</select>
			<br>
			<select class="" id="claim_store">
			</select>
			<br>
			<textarea class="" id="claim_detail" cols="30" rows="10" placeholder="Ingresar N° de pedido y detalle del servicio/producto"></textarea>
			<button id="btn_enviar_consulta">Enviar
				<div class="loading"><img src="assets/image/loading.gif" alt="laoding" style="
				    width: 20px; display: none;">
				</div>
			</button>
			<p>RECLAMO: Inconformidad ante el servicio/producto brindado.</p>
			<p>QUEJA: Malestar respecto a la atención brindada.</p>
		</div>
		<div id="alertSuccess" class="alert-success alert-success-complaints"></div>
		<div id="response" ></div>
		<script src="assets/js/js_libro.js"></script>
	</body>
</html>