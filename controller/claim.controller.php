<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require ('phpmailer/Exception.php');
require ('phpmailer/PHPMailer.php');
require ('phpmailer/SMTP.php');

class ClaimController{

    #============
    public function Index(){
        require_once('view/claim_book.php');
    }
    #============
    public function shippingResponse(){
        $value = $_REQUEST['data'];
    	$result = ["error" => "OK", "data" => "", "successful" => ""];


    //valida correo
	if(is_array($value)){
        if(self::validateValue($value["email"], 1) !== true){
            $result["error"] = "El campo correo ".self::validateValue($value["email"], 1);
            echo json_encode($result);
            return;
        }
		// 1 para correcto 0 para incorrecto 3 por si falla
		$resultado = self::sentEmail($value);
		$value["status"] = $resultado;
		$result["data"] = $value;

	}else{
		// $value->status = 0;
		// $result["data"] = $value;
		$result["error"] =  "La información enviada no es valido intentelo en otro momento";

	}
	echo json_encode($result);
    return;
	}
    #============
    public function sentEmail($json){
        $fullName = $json["appPaternal"]." ".$json["appMaternal"]." ".$json["name"];
        $type = $json["type"];
        $code = "C".self::createRandomCode();
        $modelo = file_get_contents('controller/view/modelo_correo.php');
        $modelo = str_replace("{{web_type}}", $type, $modelo);
        $modelo = str_replace("{{web_code}}", $code, $modelo);
        $modelo = str_replace("{{web_type_document}}", $json["type_document"], $modelo);
        $modelo = str_replace("{{web_name}}", $fullName, $modelo);
        $modelo = str_replace("{{web_dni}}", $json["dni"], $modelo);
        $modelo = str_replace("{{web_phone}}", $json["phone"], $modelo);
        $modelo = str_replace("{{web_country}}", $json["country"], $modelo);
        $modelo = str_replace("{{web_address}}", $json["address"], $modelo);
        $modelo = str_replace("{{web_email}}", $json["email"], $modelo);
        // $modelo = str_replace("{{web_reason}}", $json["reason"], $modelo);
        $modelo = str_replace("{{web_store}}", $json["store"], $modelo);
        $modelo = str_replace("{{web_detail}}", $json["detail"], $modelo);
        // $modelo = str_replace("{{operating_system}}",Helper::getOS(), $modelo);
        // $modelo = str_replace("{{browser_name}}",Helper::getBrowser(), $modelo);

        $mail = new PHPMailer(true);
        $mail->CharSet = "UTF-8";

        // [** DATOS DE CORREO - MUESTRA **]
        $correoEmisor = '__CORREO_EMISOR__[GMAIL,OUTLOOK,HOTMAIL,DOMINIO]'; // example@gmail.com
        $emisorPassword = '__CREDENCIALES_EMISOR__'; // ########
        $hostServidor = '__NOMBRE_DE_HOST__'; // smtp.googlemail.com or smtp.gmail.com
        $correoReceptor = "__CORREO_RECEPTOR__"; // example_receptor@gmail.com
        $correoAddicional = "__CORREO_ADICIONAL"; // example_adicionales@gmail.com
        $titulo = "__TITULO_MENSAJE__"; // $type;
        $asunto = '__ASUNTO_DEL_MENSAJE__'; // RECLAMACIÓN - '.strtoupper($type).' - '.$code;

        return true; // QUITA ESTO SI LE QUIERES AGREGAR SMT PARA ENVIAR
        // [** DATOS DE CORREO **]
       /*
        $correoEmisor = '';
        $emisorPassword = ''; 
        $hostServidor = 'smtp.googlemail.com';
        $correoReceptor = "";
     	$correoAddicional = "";
        $titulo = $type;
        $asunto = 'RECLAMACIÓN - '.strtoupper($type).' - '.$code;
        */
        try {
            $mail->isSMTP();
            $mail->Host = $hostServidor;  //gmail SMTP server
            $mail->SMTPAuth = true;
            $mail->Username = $correoEmisor;   //username
            $mail->Password = $emisorPassword;   //password
            $mail->SMTPSecure = 'ssl'; // es necesario usarlo ssl - tls
            $mail->Port = 465;                    //smtp port 465 - 587

            $mail->setFrom($correoEmisor, $asunto); // El Emisor
            $mail->addAddress($correoReceptor, $correoAddicional); //El receptor

            $mail->isHTML(true);
            $mail->Subject = strtoupper($type);
            $mail->Body    = $modelo;

            if (!$mail->send()) {
                        return false;
                    } else {
                        return true;
                    }

        } catch (Exception $e) {
        	return false;
            // return 'Mensaje no pudo ser enviado. Error de correo: '. $mail->ErrorInfo;
        }
	}

    private function validateValue($dataval, $type){
        //if (strlen($schemaval)==1){
            // one character rules
            switch ($type){
                case 0: // must be a valid email
                    if ($dataval == "" ){
                        return "no debe estar vacio.\n";
                    }
                    break;
                case 1: // must be a valid email
                    if (strpos($dataval, "@")===false){
                        return "debe ser una dirección de correo electrónico válida.\n";
                    }
                    break;
                case 2: // must be numeric but can be null
                    if ($dataval =="" && !is_numeric($dataval)){
                        return "debe ser numérico.\n";
                    }
                    break;
                case 3 :
                    if($dataval ==""){
                         return "El campo debe estar vacio. \n";
                    }else if(substr_count($dataval) > 8 || substr_count($dataval) < 8){
                         return "no es correcto.\n";
                    }
                    break;
                case 4 :
                    if($dataval!==""){
                         return "El campo no debe estar vacio. \n";
                    }else if(substr_count($dataval) > 9 || substr_count($dataval) < 9){
                         return "no es correcto. \n";
                    }

                    break;
                default:
                    return true;
                    break;
            }
        return true;
    }
    public function createRandomCode()
    {
        $chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789";
        srand((double)microtime()*10);
        $i = 0;
        $pass = '' ;

        while ($i <= 7) {
            $num = rand() % 33;
            $tmp = substr($chars, $num, 1);
            $pass = $pass . $tmp;
            $i++;
        }

        return $pass.time();
    }
}

 ?>