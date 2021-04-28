<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>inicio</title>
    <link rel="stylesheet" type="text/css" media="screen" href="../CSS/bootstrap.min.css"/>
    <link rel="stylesheet" href="../CSS/all.css"><!--FontAwesome-->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="../CSS/estiloInicio.css">
    <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Patua+One&display=swap" rel="stylesheet">
</head>
<body>
    <script src="../js/controlimp.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="padding: 0.5% 1.5%; position: absolute;background-color: rgba(0, 0, 0, 0.959)!important;width: 100%;">
        <img src="../img/logito.png" style="width: 9%;margin-right: 20px;">
        <div style="margin-left: auto;" class="imgemp" id="imagUsu">Usuario</div>
    </nav>

    <div style="padding-top:90px">
        <div class="container">
            <div class="row" id="peli">
               
            </div>
        </div>
    </div>

    <div style="padding-top:15px">
        <div class="container">
            <div class="row" id="serie">
                
            </div>
        </div>
    </div>


    <footer class="footer" data-analytics-section="footer:null:null" style="text-align: center; margin-top: 10%; background-color: #000000; margin-bottom: 0%;height:190px;">
        <div style="width: 580px;margin-left: auto;margin-right: auto; padding-top: 20px;">
            <img src="../img/logito2.png">
            <p class="links">
                <a href="https://help.disneyplus.com/csp" class="cadalink">Ayuda</a>
                <a href="https://help.disneyplus.com/csp?id=csp_article_content_international&sys_kb_id=eac89167db3048900a2af56e0f96193b" class="cadalink">Dispocitivos compatibles</a>
                <a href="https://help.disneyplus.com/csp?id=csp_article_content_international&sys_kb_id=8d061aaadb7004903c0cf158bf9619ed" class="cadalink">Acerca de Disney+</a>
                <a href="https://preferences-mgr.trustarc.com/?pid=disney01&aid=disneyplus01&type=disneyplus" class="cadalink">Publicidad personalizada</a>
            </p>
            <h6 align="left" class="cadalink2">El servicio Disney+ es comercializado por Disney DTC LATAM, Inc., 2400 W Alameda Ave., Burbank CA 91521 y Tax ID 75-3016153.</h6>
            <h6 class="cadalink2">© Disney. Todos los derechos reservados.</h6>
        </div>
    </footer>

    <!--modal para mostrar la informacion de las peliculas-->
    <div class="modal fade bd-example-modal-lg" id="cul" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" style="background-color:#1A1D29">
            <div class="modal-content" id="cull">
                <main class="container">
                    <div class="row">
                        <div class="pad col-3">
                            <span class="espan" style="text-align:left;font-size: 14px;">Nombre de la pelicula:</span>
                        </div>
                        <div class="col-9">
                            <input type="text" placeholder="Nombre propuesto">
                        </div>
                        <div class="pad col-2">
                            <span class="espan">Imagen:</span>
                        </div>
                        <div class="col-10">
                            <input type="text" placeholder="Nombre de la img">
                        </div>
                        <div class="pad col-2">
                            <span class="espan">Descripcion:</span>
                        </div>
                        <div class="col-10">
                            <input type="text" placeholder="La respectiva descripcion">
                        </div>
                        <div class="pad col-2">
                            <span class="espan">Actores:</span>
                        </div>
                        <div class="col-10">
                            <input type="text" placeholder="Enumeracion del reparto">
                        </div>
                        <div class="pad col-2">
                            <span class="espan">Genero:</span>
                        </div>
                        <div class="col-10">
                            <main class="container">
                                <div class="row">
                                    <div class="col-3">
                                        <select name="" id="">
                                            <option value="">4</option>
                                        </select>
                                    </div>
                                    <div class="col-3">
                                        <select name="" id="">
                                            <option value="">4</option>
                                        </select>
                                    </div>
                                    <div class="col-3">
                                        <select name="" id="">
                                            <option value="">4</option>
                                        </select>
                                    </div>
                                    <div class="col-3">
                                        <select name="" id="">
                                            <option value="">4</option>
                                        </select>
                                    </div>  
                                </div>
                                b
                            </main>
                        </div>
                        <div class="pad col-2">
                            <span class="espan">Duracion:</span>
                        </div>
                        <div class="col-10">
                            <input type="text" placeholder="ejm: 2h 30m">
                        </div>
                        <div class="pad col-2">
                            <span class="espan">Año:</span>
                        </div>
                        <div class="col-10">
                            <input type="text" placeholder="Año de salida">
                        </div>
                        <div class="pad col-2">
                            <span class="espan">Director:</span>
                        </div>
                        <div class="col-10">
                            <input type="text" placeholder="El director de la pelicula">
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>

    <script>
        var y=<?php echo $_GET['nel']?>;
        traerEmp(y);
        
    </script>

    <script src="../js/jquery-3.4.1.min.js"></script>
    <script src="../js/popper.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="../js/controlimp.js"></script>
</body>
</html>