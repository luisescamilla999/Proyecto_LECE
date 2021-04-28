<?php
    header("Content-Type: application/json");
    include_once("../clases/class_company.php");
    switch($_SERVER['REQUEST_METHOD']){

        case 'POST':
            if (isset($_GET['nombreS'],$_GET['emp'],$_GET['imagenS'],$_GET['descripcionS'],$_GET['actores'],$_GET['duracion'],$_GET['year'],$_GET['Director'],$_GET['v1'],$_GET['v2'],$_GET['v3'],$_GET['v4'])){
                Company::ponerSerie($_GET['nombreS'],$_GET['emp'],$_GET['imagenS'],$_GET['descripcionS'],$_GET['actores'],$_GET['duracion'],$_GET['year'],$_GET['Director'],$_GET['v1'],$_GET['v2'],$_GET['v3'],$_GET['v4']);
            }else if(isset($_GET['nombre'],$_GET['emp'],$_GET['imagen'],$_GET['descripcion'],$_GET['actores'],$_GET['duracion'],$_GET['year'],$_GET['Director'],$_GET['v1'],$_GET['v2'],$_GET['v3'],$_GET['v4'])){
                Company::ponerPeli($_GET['nombre'],$_GET['emp'],$_GET['imagen'],$_GET['descripcion'],$_GET['actores'],$_GET['duracion'],$_GET['year'],$_GET['Director'],$_GET['v1'],$_GET['v2'],$_GET['v3'],$_GET['v4']);
            }else{
                $al=array("hola"=>"sas");
                echo $al;
            }
            break;
        
        case 'GET':
            if(isset($_GET['correo'],$_GET['contra'])){
                Company::trerEmp($_GET['correo'],$_GET['contra']);
            }else if (isset($_GET['id'])) {
                Company::traerEmpresa($_GET['id']);
            }else{
                Company::empresas();
            }
            break;
        
        case 'PUT':
            if (isset($_GET['idserie'],$_GET['nombreedit'],$_GET['emp'],$_GET['imagenedit'],$_GET['descripcionedit'],$_GET['actores'],$_GET['duracion'],$_GET['year'],$_GET['Director'],$_GET['v1'],$_GET['v2'],$_GET['v3'],$_GET['v4'])){
                Company::cambioSerie($_GET['idserie'],$_GET['nombreedit'],$_GET['emp'],$_GET['imagenedit'],$_GET['descripcionedit'],$_GET['actores'],$_GET['duracion'],$_GET['year'],$_GET['Director'],$_GET['v1'],$_GET['v2'],$_GET['v3'],$_GET['v4']);
            }else if (isset($_GET['idpeli'],$_GET['nombreedit'],$_GET['emp'],$_GET['imagenedit'],$_GET['descripcionedit'],$_GET['actores'],$_GET['duracion'],$_GET['year'],$_GET['Director'],$_GET['v1'],$_GET['v2'],$_GET['v3'],$_GET['v4'])){
                Company::cambioPeli($_GET['idpeli'],$_GET['nombreedit'],$_GET['emp'],$_GET['imagenedit'],$_GET['descripcionedit'],$_GET['actores'],$_GET['duracion'],$_GET['year'],$_GET['Director'],$_GET['v1'],$_GET['v2'],$_GET['v3'],$_GET['v4']);
            }
            break;
    }
?>