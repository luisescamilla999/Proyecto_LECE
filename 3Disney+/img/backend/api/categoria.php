<?php
    header("Content-Type: application/json");
    include_once("../clases/class_categoria.php");
    switch($_SERVER['REQUEST_METHOD']){

        case 'POST':
           
            break;
        
        case 'GET':
            if (isset($_GET['idCatego'])) {
                Categoria::obtenerEmpresas($_GET['idCatego']);
            }else{
                Categoria::cat();
            }
            break;

    }
?>