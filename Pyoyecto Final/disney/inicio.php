<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>inicio</title>
    <link rel="stylesheet" type="text/css" media="screen" href="../CSS/bootstrap.min.css"/>
    <link rel="stylesheet" href="../CSS/all.css"><!--FontAwesome-->
    <link rel="stylesheet" href="../CSS/estiloInicio.css">
</head>
<body>
    <script src="../js/controlInicio.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="margin-bottom:50px; padding: 0.5% 1.5%; position: absolute;background-color: rgba(0, 0, 0, 0.959)!important;width: 100%;">
        <img src="../img/logito.png" style="width: 9%;margin-right: 20px;">
        <div onclick="iniciocom();"><i class="fas fa-home"></i>INICIO</div>
        <div onclick="buqueda();"><i class="fas fa-search"></i>BUSQUEDA</div>
        <div onclick="pasarmilista();"><i class="fas fa-plus"></i>MI LISTA</div>
        <div onclick="original();"><i class="fas fa-star"></i>ORIGINALES</div>
        <div onclick="pelipp();"><i class="fas fa-film"></i>PELICULAS</div>
        <div onclick="seriespp();"><i class="fas fa-video"></i>SERIES</div>
        <div style="margin-left: auto;" id="imagUsu">Usuario  <img src="../imgUsuarios/1.jpg" class="selector"></div>
    </nav>
    
    <div style="margin-bottom:50px">q</div>
    <div style="width:50%;margin-left:auto;margin-right:auto;border-radius:8px" id="yut">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style="padding-top:70px;">
            <div class="carousel-inner" >
                <div class="carousel-item active" id="pal1"></div>
                <div class="carousel-item" id="pal2"></div>
                <div class="carousel-item" id="pal3"></div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
    
    
    <div id="ABC" style="padding-top:55px">
        <h3 class="textsobre">Estrenos</h3>
        <div class="entero">
            <div class="carrusel-inicio">
                <div class="flecha-derecha" onclick="scrollizq('hol');"><i class="fas fa-chevron-left"></i></div>
                <div class="caruseldef" id="hol">
                    <div class="carrusel" id="col"></div>
                </div>
                <div class="flecha-izq" onclick="scrollder('hol');"><i class="fas fa-chevron-right"></i></div>
            </div>
        </div>
    </div>
    
    <footer class="footer" data-analytics-section="footer:null:null" style="text-align: center; margin-top: 5%; background-color: #000000; margin-bottom: 0%;height:190px;">
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
    <div class="modal fade bd-example-modal-lg" id="modalCategorias" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg ghj" style="padding:5px 5px;">
        <div class="modal-content jkl" id="jojo"></div>
    </div>
    </div>

    <script>
        var hh=<?php echo $_GET['an'] ?>;
        var jjh=<?php echo $_GET['ne']?>;
        consuelo(hh,jjh);
    </script>

    <script src="../js/jquery-3.4.1.min.js"></script>
    <script src="../js/popper.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="../js/controlInicio.js"></script>
</body>
</html>