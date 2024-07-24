		$(document).ready(function() {

			// $("input").keydown(function(){
   //  			$(this).val($(this).val().toUpperCase())
			// });
			// $("input").keyup(function(){
			//     $(this).val($(this).val().toUpperCase())
			// });
			// $("textarea").keyup(function(){
			//     $(this).val($(this).val().toUpperCase())
			// });

			$(".letras").keypress(function(key) {
        	// window.console.log(key.charCode)
	        if ((key.charCode < 97 || key.charCode > 122) //letras mayusculas
	            &&
	            (key.charCode < 65 || key.charCode > 90) //letras minusculas
	            &&
	            (key.charCode != 45) //retroceso
	            &&
	            (key.charCode != 241) //ñ
	            &&
	            (key.charCode != 209) //Ñ
	            &&
	            (key.charCode != 32) //espacio
	            &&
	            (key.charCode != 46) //punto
	            &&
	            (key.charCode != 225) //á
	            &&
	            (key.charCode != 233) //é
	            &&
	            (key.charCode != 237) //í
	            &&
	            (key.charCode != 243) //ó
	            &&
	            (key.charCode != 250) //ú
	            &&
	            (key.charCode != 193) //Á
	            &&
	            (key.charCode != 201) //É
	            &&
	            (key.charCode != 205) //Í
	            &&
	            (key.charCode != 211) //Ó
	            &&
	            (key.charCode != 218) //Ú
	        ) return false;
	    	});
			// $(".letrasemail").keypress(function (key) {
		 //        if ((key.charCode < 97 || key.charCode > 122)//letras mayusculas
		 //            && (key.charCode < 65 || key.charCode > 90) //letras minusculas
		 //            && (key.charCode != 45) //retroceso
		 //            && (key.charCode != 46) //punto
		 //            && (key.charCode != 64) // @
		 //            && (key.charCode != 95) // _
		 //            // && (key.charCode != 241) //ñ
		 //            // && (key.charCode != 209) //Ñ
		 //            // && (key.charCode != 32) //espacio
		 //            // && (key.charCode != 225) //á
		 //            // && (key.charCode != 233) //é
		 //            // && (key.charCode != 237) //í
		 //            // && (key.charCode != 243) //ó
		 //            // && (key.charCode != 250) //ú
		 //            // && (key.charCode != 193) //Á
		 //            // && (key.charCode != 201) //É
		 //            // && (key.charCode != 205) //Í
		 //            // && (key.charCode != 211) //Ó
		 //            // && (key.charCode != 218) //Ú
		 //        )
		 //        return false;
		 //    });
			$('.input-number').on('input', function() {
		        //lo remplaza a numeros
		        this.value = this.value.replace(/[^0-9]/g, '');
		        //lo valida para que admita una sola cantidad
		    });
	    	$('#claim_phone').on('input', function() {
        	//lo valida para que admita una sola cantidad
	        if (this.value.length > 9) {this.value = this.value.slice(0, 9);}
	    	});
	    	$('#claim_dni').on('input', function() {
        	//lo valida para que admita una sola cantidad
        		if (this.value.length >= 8) { this.value = this.value.slice(0, 8);}
        	});

        	const type_document = {
    			"type_document":{
    				1: 'DNI'
    			}
    		}

    		const country = {
    			"country":{
    				0: 'Seleccione su región', 1 : 'Amazonas', 2 : 'Ancash', 3 : 'Apurimac', 4 : 'Arequipa', 5 : 'Ayacucho', 6 : 'Cajamarca', 7 : 'Callao', 8 : 'Cusco', 9 : 'Huancavelica', 10 : 'Huanuco', 11 : 'Ica', 12: 'Junin', 13 : 'La Libertad', 14 : 'Lambayeque', 15 : 'Lima', 16 : 'Loreto', 17 : 'Madre De Dios', 18 : 'Moquegua', 19 : 'Pasco', 20 : 'Piura', 21 : 'Puno', 22 : 'San Martin', 23 : 'Tacna', 24 : 'Tumbes', 25 : 'Ucayali'
    			}
    		}
    		const claim = {
    			"claim":{
    				0:'Seleccione el tipo de reclamo', 1: 'Reclamo', 2: 'Queja'
    			}
    		}
    		// const reason = {
    		// 	"reason":{
    		// 		0:'Seleccione el motivo', 1: 'Atención inadecuada', 2: 'Atención apropiada'
    		// 	}
    		// }
    		const store = {
    			"store":{
    				0:'Seleccione la tienda', 1 : 'Tienda 1', 2 : 'Tienda 2', 3 : 'Tienda 3', 4 : 'Tienda 4', 5 : 'Tienda 5'
    			}
    		}

    		populateSelect(type_document.type_document,0);
    		populateSelect(country.country,1);
    		populateSelect(claim.claim,2);
    		// populateSelect(reason.reason,3);
    		populateSelect(store.store,4);



    	function populateSelect(value, change){

    		var claim_select = "";
    			if(change == 1 ){
    				claim_select = $("#claim_country");
    			}else if(change == 2){
    				claim_select = $("#claim_type");
    			}
    			// else if(change == 3){
    			// 	claim_select = $("#claim_reason");
    			// }
    			else if(change == 4){
    				claim_select = $("#claim_store");
    			}
    			else if(change == 0){
    				claim_select = $("#claim_type_document");
    			}
    		if(claim_select != ""){
	    		claim_select.html("");
	    		for(var index in value){
	    			claim_select.append('<option value="' + index + '">' + value[index] + '</option>');
	    		}
    		}
    	}
    	function dataCollection(){
				var jsonData = {};

				if(true){
					jsonData.appPaternal = $("#claim_ape_pater").val().trim();
					jsonData.appMaternal = $("#claim_ape_mater").val().trim();
					jsonData.name = $("#claim_name").val().trim();
					jsonData.type_document = type_document.type_document[$("#claim_type_document").val()];
					jsonData.dni = $("#claim_dni").val().trim();
					jsonData.phone = $("#claim_phone").val().trim();
					jsonData.country = country.country[$("#claim_country").val()];
					jsonData.address = $("#claim_addess").val().trim();
					jsonData.email = $("#claim_email").val().trim();
					jsonData.type = claim.claim[$("#claim_type").val()];
					// jsonData.reason = reason.reason[$("#claim_reason").val()];
					jsonData.store = store.store[$("#claim_store").val()];
					jsonData.detail = $("#claim_detail").val().trim();
				}

			return jsonData;
		}

    	$("#btn_enviar_consulta").click(function() {
    		$(".loading").show('fast');
    		var btn_enviar = $("#btn_enviar_consulta");
    		btn_enviar.prop("disabled",true);
    		if(validation_value() == true){
    			btn_enviar.prop("disabled",false);
    			$(".loading").hide('fast');
    			return;
    		}
    		//
    		var jsonData = dataCollection();
    		// ?c=claim&a=shippingResponse
			try {
	            $.ajax({
	                url: "?c=claim&a=shippingResponse",
	                type: "POST",
	                data: { data: jsonData},
	                dataType: "json",
	                // timeout : 10000,
	                cache: false,
	                success: function(json) {
	                	var jslibro = json.data;
	                	var error = json.error;
	                	var successful = json.successful;

						if(error == "OK"){
							responseTemplate(jslibro);
							btn_enviar.prop("disabled",false);
							$(".loading").hide('fast');
						}else{
							alert(error);
							btn_enviar.prop("disabled",false);
							$(".loading").hide('fast');
						}
	                },
	                error: function(jqXHR, status, error) {

	                    alert(error);
	                    btn_enviar.prop("disabled",false);
	                    $(".loading").hide('fast');
	                }
	            });
	        } catch (ex) {
	           alert("Exception: " + ex.message + "");
	           btn_enviar.prop("disabled",false);
	           $(".loading").hide('fast');

	        }

	    });
    	function validation_value(){
    		var appPaternal = $("#claim_ape_pater");
			var appMaternal = $("#claim_ape_mater");
			var name = $("#claim_name");
			var type_document = $("#claim_type_document");
			var dni = $("#claim_dni");
			var phone = $("#claim_phone");
			var country = $("#claim_country");
			var address = $("#claim_addess");
			var email = $("#claim_email");
			var type = $("#claim_type");
			var detail = $("#claim_detail");
			// var reason = $("#claim_reason");
			var store = $("#claim_store");
			var msj = "";
			var error = false;
			var index = false;

			// LIMPIA
			$("#form_claim").find('.error-class').removeClass('error-class')
			$("#alertError").html("");
			//
			if(appPaternal.val().length == 0){
				msj += "<li><strong>*</strong> El campo <strong>Apellido Paterno</strong> no puede estar vacio.</li>";
                error = true;
                index = appPaternal;
			}else if(appMaternal.val().length == 0){
				msj += "<li><strong>*</strong> El campo <strong>Apellido Materno</strong> no puede estar vacio.</li>";
                error = true;
                index = appMaternal;
			}else if(name.val().length == 0){
				msj += "<li><strong>*</strong> El campo <strong>Nombre</strong> no puede estar vacio.</li>";
                error = true;
                index = name;
			}else if(dni.val().length == 0){
				msj += "<li><strong>*</strong> El campo <strong>Número de Identidad</strong> no puede estar vacio.</li>";
                error = true;
                index = dni;
			}else if(dni.val().length > 8 || dni.val().length < 8 ){
				msj += "<li><strong>*</strong> Ingrese un <strong>Número de Identidad</strong> correcto.</li>";
                error = true;
                index = dni;
			}
			else if(phone.val().length == 0){
				msj += "<li><strong>*</strong> El campo <strong>Celular</strong> no puede estar vacio.</li>";
                error = true;
                index = phone;
			}else if( phone.val().length > 9 || phone.val().length < 9 ){
				msj += "<li><strong>*</strong> Ingrese un numero de <strong>Celular</strong> correcto.</li>";
                error = true;
                index = phone;
			}else if(country.val() == "0"){
				msj += "<li><strong>*</strong> El campo <strong>Región</strong> no esta seleccionado.</li>";
                error = true;
                index = country;
			}else if(address.val().length == 0){
				msj += "<li><strong>*</strong> El campo <strong>Dirección</strong> no puede estar vacio.</li>";
                error = true;
                index = address;
			}else if(email.val().length == 0){
				msj += "<li><strong>*</strong> El campo <strong>Correo Electrónico</strong> no puede estar vacio.</li>";
                error = true;
                index = email;
			}else if(!ckeckEmail(email.val())){
				msj += "<li><strong>*</strong> El <strong>Correo Electrónico</strong> no es correcto.</li>";
                error = true;
                index = email;
			}else if(type.val() == "0"){
				msj += "<li><strong>*</strong> El campo <strong>Tipo de Reclamo</strong> no esta seleccionado.</li>";
                error = true;
                index = type;
			}
			// if(reason == "0"){
			// 	msj += "<li><strong>*</strong> El campo <strong>Motivo</strong> no esta seleccionado.</li>";
   //              error = true;
   					// index =
			// }
			else if(store.val() == "0"){
				msj += "<li><strong>*</strong> El campo <strong>Tienda</strong> no esta seleccionado.</li>";
                error = true;
                index = store;
			}
			else if(detail.val().length == 0){
				msj += "<li><strong>*</strong> El campo <strong>Detalle</strong> no puede estar vacio.</li>";
                error = true;
                index = detail;
			}

			if (error == true) {
            	$("#alertError").html(msj);
            	index.addClass("error-class");
            	$("html, body").animate({ scrollTop: 0 }, 900);
            // alert(msj);
            return true;
        	}

    	}
    	 function ckeckEmail(text){
	        var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

	        if (regex.test(text.trim())) {
	            return true;
	        } else {
	            return false;
	        }
	    }

    	function responseTemplate(libro){
    		var alertSuccess =  $("#alertSuccess");
			var alertError = $("#alertError");
			var form_claim = $("#form_claim");
			var response = $("#response");
			alertSuccess.html("");
			alertError.html("");
			// form_claim.hide("fast");
			response.html("");
    		if(libro.status == 1 || libro.status == 0){
    			form_claim.hide("fast");
				alertSuccess.append("<h1>Solicitud de "+libro.type+" fue creado.</h1>");
				response.addClass('responsee');
    			response.append('<p>'+libro.name+' '+libro.appPaternal+','+'</p>');
    			response.append('<p>Gracias por su solicitud.</p>');
    			response.append('<p>Se ha creado una solicitud de ' + libro.type + '.</p>');
    			response.append('<p>Nos pondremos en contacto con usted, puede verifique su cuenta de correo electrónico, Si no recibe correo electrónico en su bandeja de entrada, compruebe también la carpeta de correo no deseado.</p>');
	        }else{
				form_claim.hide("fast");
				alertError.append("<h1 class='error'>Solicitud de "+libro.type+" no fue creado</h1>");
				response.addClass('responsee');
	        	// response.append('<p>'+libro.name+' '+libro.appPaternal+','+'</p>');
    			response.append('<p>La información no fue procesado correctamente.</p>');
    			response.append('<p>Vuelva a ingresar sus datos.</p>');

	        }
	            response.append('<p>Gracias y saludos midominio.com</p>');
    			response.append('<a href="#">midominio.com</a>');
    			response.append('<br><button onclick="location.reload();" class="btn-refresh">Refrescar la pagina</button>');

    	}

		});