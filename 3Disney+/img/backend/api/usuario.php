<?php
    header("Content-Type: application/json");
    include_once("../clases/class_usuario.php");
    switch($_SERVER['REQUEST_METHOD']){

        case 'POST':
            if (isset($_GET['tet'],$_GET['id'],$_GET['per'],$_GET['tipo'])) {
                if($_GET['tipo']==1){
                    Usuario::setFav($_GET['tet'],$_GET['id'],$_GET['per']);
                }else if($_GET['tipo']==2){
                    Usuario::setLue($_GET['tet'],$_GET['id'],$_GET['per']);
                }else if($_GET['tipo']==3){
                    Usuario::setVist($_GET['tet'],$_GET['id'],$_GET['per']);
                }
                
            }else if (isset($_GET['correo'],$_GET['contrasena'],$_GET['tPago'],$_GET['tsub'],$_GET['nombre'],$_GET['numero'],$_GET['fv'],$_GET['codigo'])){
                $lef=new Usuario(
                    $_GET['correo'],
                    $_GET['contrasena'],
                    $_GET['tPago'],
                    $_GET['tsub']
                );
                $lef->meterUsuario($_GET['nombre'],$_GET['numero'],$_GET['fv'],$_GET['codigo']);
            }
            break;
        
        case 'GET':
            if (isset($_GET['iduser'])) {
                Usuario::getUnUsuario($_GET['iduser']);
            }else if(isset($_GET['correo'],$_GET['contra'])){
                Usuario::trerUsuario($_GET['correo'],$_GET['contra']);
            }
            break;
        
        case 'DELETE':
            if (isset($_GET['tet'],$_GET['id'],$_GET['per'],$_GET['tipo'])) {
                if($_GET['tipo']==1){
                    Usuario::borrarFav($_GET['tet'],$_GET['id'],$_GET['per']);
                }else if($_GET['tipo']==2){
                    Usuario::borrarLuego($_GET['tet'],$_GET['id'],$_GET['per']);
                }else{
                    $huhu=array(
                        "nombreCategoria"=>3,
                        "empresas"=>"que tal",
                    );
                    echo json_encode($huhu);
                }
                
            }else{
                $huhu=array(
                    "nombreCategoria"=>3,
                    "empresas"=>"que tal",
                );
                echo json_encode($huhu);
            }
            break;
            break;

    }
?>