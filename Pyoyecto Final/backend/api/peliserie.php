<?php
    header("Content-Type: application/json");
    include_once("../clases/class_peliseries.php");
    switch($_SERVER['REQUEST_METHOD']){

        case 'POST':
           
            break;
        
        case 'GET':
            if (isset($_GET['idCatego'])) {
                PeliculaSerie::obtenerEmpresas($_GET['idCatego']);
            }else{
                PeliculaSerie::traeTodo();
            }
            break;

    }
?>