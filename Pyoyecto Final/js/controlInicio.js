//calcula la distancia que el scroll debe de moverse al darle click en la flechas de carrusel
function scrollder(id){
    document.getElementById(id).scrollLeft += document.getElementById(id).offsetWidth;
}

//calcula la distancia que el scroll debe de moverse al darle click en la flechas de carrusel
function scrollizq(id){
    document.getElementById(id).scrollLeft -= document.getElementById(id).offsetWidth;
}

function gete() {
    
    document.getElementById("row6").innerHTML=``;

    for (let k = 0; k < pss.data[0].pelis.length; k++) {
        if (pss.data[0].pelis[k].nombre.includes(document.getElementById("prr").value)) {
            document.getElementById("row6").innerHTML+=`<div class="col-sm-6 col-md-4 col-xl-3" style="padding:12px;" >
                <div class="contenedor">
                    <img src="../img/${pss.data[0].pelis[k].imagen}" onclick="openModal(${k},1);" style="width:100%">
                </div>    
            </div>`;
        }
    }

    for (let l = 0; l < pss.data[0].series.length; l++) {
        if (pss.data[0].series[l].nombre.includes(document.getElementById("prr").value)) {
            document.getElementById("row6").innerHTML+=`<div class="col-sm-6 col-md-4 col-xl-3" style="padding:12px;" >
                <div class="contenedor">
                    <img src="../img/${pss.data[0].series[l].imagen}" onclick="openModal(${l},2);" style="width:100%">
                </div>    
            </div>`;
        }
    }
}

function buqueda() {
    document.getElementById('yut').style.display="none";
    document.getElementById("ABC").innerHTML=`<input type="text" id="prr" placeholder="Coloque el nombre de la pelicula o serie"  class="polll"><bottom style="color:white;backgraund-color:blue;cursor:pointer" onclick="gete();">buscar</bottom>`;
    document.getElementById("ABC").innerHTML+=`<main role="main" class="container-fluid" style="margin-bottom: 70px">
            <div class="starter-template row" style="color:white;font-size:20px;font-weigth:bold" id="row6"></div>
        </main>`;
    for (let k = 0; k < pss.data[0].pelis.length; k++) {
        document.getElementById("row6").innerHTML+=`<div class="col-sm-6 col-md-4 col-xl-3" style="padding:12px;" >
            <div class="contenedor">
                <img src="../img/${pss.data[0].pelis[k].imagen}" onclick="openModal(${k},1);" style="width:100%">
            </div>    
        </div>`;
    }

    for (let l = 0; l < pss.data[0].series.length; l++) {
        document.getElementById("row6").innerHTML+=`<div class="col-sm-6 col-md-4 col-xl-3" style="padding:12px;" >
            <div class="contenedor">
                <img src="../img/${pss.data[0].series[l].imagen}" onclick="openModal(${l},2);" style="width:100%">
            </div>    
        </div>`;
    }
}

function cambioTemp(j,k) {
    document.getElementById('peo').innerHTML=``;
    for (let y = 0; y < pss.data[0].series[k].temp[j].caps.length; y++) {
        document.getElementById('peo').innerHTML+=`<div class="col-12" ><div class="tet">
            ${pss.data[0].series[k].temp[j].caps[y].nombre} ${y+1}
        </div></div>`;
    }
}
function original() {
    document.getElementById('yut').style.display="none";
    document.getElementById("ABC").innerHTML=`<main role="main" class="container-fluid" style="margin-bottom: 70px">
            <div class="starter-template row" style="color:white;font-size:20px;font-weigth:bold" id="row6"></div>
        </main>`;
    for (let k = 0; k < pss.data[0].pelis.length; k++) {
        for (let kk = 0; kk < pss.data[0].pelis[k].genero.length; kk++) {
            if(pss.data[0].pelis[k].genero[kk]==6){
                document.getElementById("row6").innerHTML+=`<div class="col-sm-6 col-md-4 col-xl-3" style="padding:12px;" >
                <div class="contenedor">
                    <img src="../img/${pss.data[0].pelis[k].imagen}" onclick="openModal(${k},1);" style="width:100%">
                </div>    
            </div>`;
            }
        }
    }

    for (let l = 0; l < pss.data[0].series.length; l++) {
        for (let ll = 0; ll < pss.data[0].series[l].genero.length; ll++) {
            if(pss.data[0].series[l].genero[ll]==6){
                document.getElementById("row6").innerHTML+=`<div class="col-sm-6 col-md-4 col-xl-3" style="padding:12px;" >
                <div class="contenedor">
                    <img src="../img/${pss.data[0].series[l].imagen}" onclick="openModal(${l},2);" style="width:100%">
                </div>    
            </div>`;
            }
        }
    }
}

function pelipp() {
    document.getElementById('yut').style.display="none";
    document.getElementById("ABC").innerHTML=`<main role="main" class="container-fluid" style="margin-bottom: 70px">
            <div class="starter-template row" style="color:white;font-size:20px;font-weigth:bold" id="row6"></div>
        </main>`;
    for (let i = 0; i < pss.data[0].pelis.length; i++) {
        document.getElementById("row6").innerHTML+=`<div class="col-sm-6 col-md-4 col-xl-3" style="padding:12px;" >
                <div class="contenedor">
                    <img src="../img/${pss.data[0].pelis[i].imagen}" onclick="openModal(${i},1);" style="width:100%">
                </div>    
            </div>`;
    }
}

function seriespp() {
    document.getElementById('yut').style.display="none";
    document.getElementById("ABC").innerHTML=`<main role="main" class="container-fluid" style="margin-bottom: 70px">
            <div class="starter-template row" style="color:white;font-size:20px;font-weigth:bold" id="row6"></div>
        </main>`;
    for (let i = 0; i < pss.data[0].series.length; i++) {
        document.getElementById("row6").innerHTML+=`<div class="col-sm-6 col-md-4 col-xl-3" style="padding:12px;" >
                <div class="contenedor">
                    <img src="../img/${pss.data[0].series[i].imagen}" onclick="openModal(${i},2);" style="width:100%">
                </div>    
            </div>`;
    }
}

function iniciocom() {
    document.getElementById('yut').style.display="block";
    document.getElementById("ABC").innerHTML=`<h3 class="textsobre">Estrenos</h3>
        <div class="entero">
            <div class="carrusel-inicio">
                <div class="flecha-derecha" onclick="scrollizq('hol');"><i class="fas fa-chevron-left"></i></div>
                <div class="caruseldef" id="hol">
                    <div class="carrusel" id="col"></div>
                </div>
                <div class="flecha-izq" onclick="scrollder('hol');"><i class="fas fa-chevron-right"></i></div>
            </div>
        </div>`;
    carga();
}

function pasarmilista() {
    document.getElementById('yut').style.display="none";
    document.getElementById("ABC").innerHTML=`<main role="main" class="container-fluid" style="margin-bottom: 70px">
            <div class="starter-template row" style="color:white;font-size:20px;font-weigth:bold" id="row6"><div class="col-12"><h1>Favoritos</h1></div></div>
        </main>`;
    for (let i = 0; i < val.data.perfiles[perfil].favoritos.length; i++) {
        var uui=0;
        for (let j = 0; j < pss.data[0].pelis.length; j++) {
            if (val.data.perfiles[perfil].favoritos[i]==pss.data[0].pelis[j].id) {
                document.getElementById("row6").innerHTML+=`<div class="col-sm-6 col-md-4 col-xl-3" style="padding:12px;" >
                        <div class="contenedor">
                            <img src="../img/${pss.data[0].pelis[j].imagen}" onclick="openModal(${j},1);" style="width:100%">
                        </div>    
                    </div>`;
                uui=5;
                break;
            }
        }
        if(uui==0){
            for (let j = 0; j < pss.data[0].series.length; j++) {
                if (val.data.perfiles[perfil].favoritos[i]==pss.data[0].series[j].id) {
                    document.getElementById("row6").innerHTML+=`<div class="col-sm-6 col-md-4 col-xl-3" style="padding:12px;" >
                            <div class="contenedor">
                                <img src="../img/${pss.data[0].series[j].imagen}" onclick="openModal(${j},2);" style="width:100%">
                            </div>    
                        </div>`;
                    uui=5;
                    break;
                }
            }
        }
    }

    document.getElementById("row6").innerHTML+=`<div class="col-12"><h1>Ver luego</h1></div>`;

    for (let i = 0; i < val.data.perfiles[perfil].luego.length; i++) {
        var uui=0;
        for (let j = 0; j < pss.data[0].pelis.length; j++) {
            if (val.data.perfiles[perfil].luego[i]==pss.data[0].pelis[j].id) {
                document.getElementById("row6").innerHTML+=`<div class="col-sm-6 col-md-4 col-xl-3" style="padding:12px;" >
                        <div class="contenedor">
                            <img src="../img/${pss.data[0].pelis[j].imagen}" onclick="openModal(${j},1);" style="width:100%">
                        </div>    
                    </div>`;
                uui=5;
                break;
            }
        }
        if(uui==0){
            for (let j = 0; j < pss.data[0].series.length; j++) {
                if (val.data.perfiles[perfil].luego[i]==pss.data[0].series[j].id) {
                    document.getElementById("row6").innerHTML+=`<div class="col-sm-6 col-md-4 col-xl-3" style="padding:12px;" >
                            <div class="contenedor">
                                <img src="../img/${pss.data[0].series[j].imagen}" onclick="openModal(${j},2);" style="width:100%">
                            </div>    
                        </div>`;
                    uui=5;
                    break;
                }
            }
        }
    }

    document.getElementById("row6").innerHTML+=`<div class="col-12"><h1>Peliculas y series vistas</h1></div>`;

    for (let i = 0; i < val.data.perfiles[perfil].visto.length; i++) {
        var uui=0;
        for (let j = 0; j < pss.data[0].pelis.length; j++) {
            if (val.data.perfiles[perfil].visto[i]==pss.data[0].pelis[j].id) {
                document.getElementById("row6").innerHTML+=`<div class="col-sm-6 col-md-4 col-xl-3" style="padding:12px;" >
                        <div class="contenedor">
                            <img src="../img/${pss.data[0].pelis[j].imagen}" onclick="openModal(${j},1);" style="width:100%">
                        </div>    
                    </div>`;
                uui=5;
                break;
            }
        }
        if(uui==0){
            for (let j = 0; j < pss.data[0].series.length; j++) {
                if (val.data.perfiles[perfil].visto[i]==pss.data[0].series[j].id) {
                    document.getElementById("row6").innerHTML+=`<div class="col-sm-6 col-md-4 col-xl-3" style="padding:12px;" >
                            <div class="contenedor">
                                <img src="../img/${pss.data[0].series[j].imagen}" onclick="openModal(${j},2);" style="width:100%">
                            </div>    
                        </div>`;
                    uui=5;
                    break;
                }
            }
        }
    }
}

var val;
var perfil;
var user;
function consuelo(ttt,yy){
    
    perfil=yy;
    user=ttt;
    axios({
        url:'../backend/api/usuario.php?'+`iduser=${ttt}`,
        method: 'get',
        responseType: 'json'
    }).then(res=>{
        console.log(res.data);
        val=res;
        document.getElementById('imagUsu').innerHTML=`${res.data.perfiles[yy].nombre}   <img src="../imgUsuarios/${res.data.perfiles[yy].imagen}" class="selector">`;
    }).catch(error=>{
        console.error(error);
    })
    
}

catego();
carga();

function cargarFav(ye){
    axios({
        url:'../backend/api/usuario.php?'+`tet=${idpeli}&id=${val.data.id}&per=${perfil}&tipo=${ye}`,
        method: 'post',
        responseType: 'json'
    }).then(res=>{
        console.log(res);
        val=res;
    }).catch(error=>{
        console.error(error);
    })
}

function quitarFav(ye){
    axios({
        url:'../backend/api/usuario.php?'+`tet=${idpeli}&id=${val.data.id}&per=${perfil}&tipo=${ye}`,
        method: 'DELETE',
        responseType: 'json'
    }).then(res=>{
        val=res;
    }).catch(error=>{
        console.error(error);
    })
}


function openModal(a,b){
    $('#modalCategorias').modal('show');
    
    if(b==1){
        cargarModal(pss.data[0].pelis[a]);
    }else{
        cargarModal2(pss.data[0].series[a],a);
    }
    
    
}

function cargarModal(ps){
    document.getElementById('jojo').innerHTML=`<main class="container" style="margin-top:10px">
        <div class="row">
            <div class="col-5">
            <span>Pelicula</span>
                <img src="../img/${ps.imagen}" class="imagen">
                <div style="width:120px;margin-left:auto;margin-right:auto;margin-top:15px" class="rrr" id="caso">
                    <i class="far fa-heart" onclick="favorito()" id="rambo" ></i>
                    <i class="far fa-clock" onclick="pendiente()" id="rango" ></i>
                    <i class="fas fa-eye-slash" id="rungo" ></i>
                </div>
                <div style="margin-left: auto; margin-right: auto;width:fit-content">
                    <button class="ver" onclick="visto();">Ver</button>
                </div>
                
            </div>
            <div class="col-7">
                <div class="row">
                    <div class="col-12">
                        <h1 style="font-weight: bold;">${ps.nombre}</h1>
                        <div style="margin-left: auto;width:fit-content; font-size:14px"><span>${ps.year}</span><span style="margin-left:10px">${ps.duracion}</span></div>
                    </div>
                    <div class="col-12">
                        <p>${ps.descripcion}</p>
                    </div>
                    <div class="col-12" style="margin-bottom:30px">
                        <main class="container">
                            <div class="row" id="yyy">
                                <div class="col-2"><span>Genero</span></div><div class="col-10"><span class="met" id="papu">a</span></div>
                                <div class="col-2"><span>Director</span></div><div class="col-10"><span class="met">${ps.Director}</span></div>
                                <div class="col-2"><span>Empresa</span></div><div class="col-10"><span class="met">${ps.emp}</span></div>
                                <div class="col-2"><span>Reparto</span></div><div class="col-10"><span class="met">${ps.actores}</span></div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    </main>`;
    document.getElementById('papu').innerHTML=``;
    idpeli=ps.id;
    for (let i = 0; i < ps.genero.length; i++) {
        if(i==ps.genero.length-1){
            document.getElementById('papu').innerHTML+=`${categorias.data[ps.genero[i]-1]}`;
        }else{
            document.getElementById('papu').innerHTML+=`${categorias.data[ps.genero[i]-1]}, `;
        }
    }

    consuelo(user,perfil);
    console.log(val);

    if(val.data.perfiles[perfil].favoritos.length==0){
        sas=0;
    }

    for (let k = 0; k < val.data.perfiles[perfil].favoritos.length; k++) {
        if(ps.id==val.data.perfiles[perfil].favoritos[k]){
            sas=1;
            break;
        }else{
            sas=0;
        }
    }

    if(val.data.perfiles[perfil].luego.length==0){
        ses=0;
    }

    for (let d = 0; d < val.data.perfiles[perfil].luego.length; d++) {
        if(ps.id==val.data.perfiles[perfil].luego[d]){
            ses=1;
            break;
        }else{
            ses=0;
        }
    }

    if(val.data.perfiles[perfil].visto.length==0){
        sis=0;
    }

    for (let g = 0; g < val.data.perfiles[perfil].visto.length; g++) {
        if(ps.id==val.data.perfiles[perfil].visto[g]){
            sis=1;
            break;
        }else{
            sis=0;
        }
    }
    urban();
}

var sas=0;
var ses=0;
var sis=0;
var idpeli;
function cargarModal2(ps,a){
    document.getElementById('jojo').innerHTML=`<main class="container" style="margin-top:10px">
        <div class="row" id="poo">
            <div class="col-5">
            <span id="nnna">Serie</span>
                <img src="../img/${ps.imagen}" class="imagen">
                <div style="width:120px;margin-left:auto;margin-right:auto;margin-top:15px" class="rrr" id="caso">
                    <i class="far fa-heart" onclick="favorito()" id="rambo" ></i>
                    <i class="far fa-clock" onclick="pendiente()" id="rango" ></i>
                    <i class="fas fa-eye-slash" id="rungo"></i>
                </div>
                <div style="margin-left: auto; margin-right: auto;width:fit-content">
                    <button class="ver" onclick="visto();">Ver</button>
                </div>
                
            </div>
            <div class="col-7">
                <div class="row">
                    <div class="col-12">
                        <h1 style="font-weight: bold;">${ps.nombre}</h1>
                        <div style="margin-left: auto;width:fit-content; font-size:14px"><span>${ps.year}</span><span style="margin-left:10px">${ps.duracion}</span></div>
                    </div>
                    <div class="col-12">
                        <p>${ps.descripcion}</p>
                    </div>
                    <div class="col-12" style="margin-bottom:30px">
                        <main class="container">
                            <div class="row" id="yyy">
                                <div class="col-2"><span>Genero</span></div><div class="col-10"><span class="met" id="papu">a</span></div>
                                <div class="col-2"><span>Director</span></div><div class="col-10"><span class="met">${ps.Director}</span></div>
                                <div class="col-2"><span>Empresa</span></div><div class="col-10"><span class="met">${ps.emp}</span></div>
                                <div class="col-2"><span>Reparto</span></div><div class="col-10"><span class="met">${ps.actores}</span></div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    </main>`;
    document.getElementById('papu').innerHTML=``;
    idpeli=ps.id;
    for (let i = 0; i < ps.genero.length; i++) {
        if(i==ps.genero.length-1){
            document.getElementById('papu').innerHTML+=`${categorias.data[ps.genero[i]-1]}`;
        }else{
            document.getElementById('papu').innerHTML+=`${categorias.data[ps.genero[i]-1]}, `;
        }
    }

    for (let j = 0; j < ps.temp.length; j++) {
        document.getElementById('poo').innerHTML+=`<div class="col-2" id="lola${j}"><div class="tat" onclick="cambioTemp(${j},${a});">
            Temp ${j+1}
        </div></div>`;
    }

    document.getElementById('poo').innerHTML+=`<div id="peo" style="width: 100%;"></div>`;

    for (let y = 0; y < ps.temp[0].caps.length; y++) {
        document.getElementById('peo').innerHTML+=`<div class="col-12" ><div class="tet">
            ${ps.temp[0].caps[y].nombre} ${y+1}
        </div></div>`;
    }
    consuelo(user,perfil);

    if(val.data.perfiles[perfil].favoritos.length==0){
        sas=0;
    }

    for (let k = 0; k < val.data.perfiles[perfil].favoritos.length; k++) {
        if(ps.id==val.data.perfiles[perfil].favoritos[k]){
            sas=1;
            break;
        }else{
            sas=0;
        }
    }

    if(val.data.perfiles[perfil].luego.length==0){
        ses=0;
    }

    for (let d = 0; d < val.data.perfiles[perfil].luego.length; d++) {
        if(ps.id==val.data.perfiles[perfil].luego[d]){
            ses=1;
            break;
        }else{
            ses=0;
        }
    }

    if(val.data.perfiles[perfil].visto.length==0){
        sis=0;
    }

    for (let g = 0; g < val.data.perfiles[perfil].visto.length; g++) {
        if(ps.id==val.data.perfiles[perfil].visto[g]){
            sis=1;
            break;
        }else{
            sis=0;
        }
    }
    urban();
}

function urban(){
    console.log(sas+"   "+ses+"   "+sis)
    document.getElementById('caso').innerHTML=``;
    if(sas==0){
        document.getElementById('caso').innerHTML+=`<i class="far fa-heart" onclick="favorito()" id="rambo" style="margin-left:3px;margin-right:3px"></i>`;
    }else{
        document.getElementById('caso').innerHTML+=`<i class="fas fa-heart" onclick="favorito()" id="rambo" style="margin-left:3px;margin-right:3px"></i>`;
    }
    
    if(ses==0){
        document.getElementById('caso').innerHTML+=`<i class="far fa-clock" onclick="pendiente()" id="rango" style="margin-left:3px;margin-right:3px"></i>`;
    }else{
        document.getElementById('caso').innerHTML+=`<i class="fas fa-clock" onclick="pendiente()" id="rango" style="margin-left:3px;margin-right:3px"></i>`;
    }

    if(sis==0){
        document.getElementById('caso').innerHTML+=`<i class="fas fa-eye-slash" id="rungo" style="margin-left:3px;margin-right:3px"></i>`;
    }else{
        document.getElementById('caso').innerHTML+=`<i class="fas fa-eye" id="rungo" style="margin-left:3px;margin-right:3px"></i>`;
    }
}



function favorito(){
    if(sas==0){
        document.getElementById('caso').innerHTML=`<i class="fas fa-heart" onclick="favorito()" id="rambo"style="margin-left:3px;margin-right:3px"></i>`;
        if(ses==0){
            document.getElementById('caso').innerHTML+=`<i class="far fa-clock" onclick="pendiente()" id="rango" style="margin-left:3px;margin-right:3px"></i>`;
        }else{
            document.getElementById('caso').innerHTML+=`<i class="fas fa-clock" onclick="pendiente()" id="rango" style="margin-left:3px;margin-right:3px"></i>`;
        }

        if(sis==0){
            document.getElementById('caso').innerHTML+=`<i class="fas fa-eye-slash" onclick="visto()" id="rungo" style="margin-left:3px;margin-right:3px"></i>`;
        }else{
            document.getElementById('caso').innerHTML+=`<i class="fas fa-eye" onclick="visto()" id="rungo" style="margin-left:3px;margin-right:3px"></i>`;
        }
        sas=1;
        cargarFav(1);

    }else{
        document.getElementById('caso').innerHTML=`<i class="far fa-heart" onclick="favorito()" id="rambo" style="margin-left:3px;margin-right:3px"></i>`;
        if(ses==0){
            document.getElementById('caso').innerHTML+=`<i class="far fa-clock" onclick="pendiente()" id="rango" style="margin-left:3px;margin-right:3px"></i>`;
        }else{
            document.getElementById('caso').innerHTML+=`<i class="fas fa-clock" onclick="pendiente()" id="rango" style="margin-left:3px;margin-right:3px"></i>`;
        }

        if(sis==0){
            document.getElementById('caso').innerHTML+=`<i class="fas fa-eye-slash" onclick="visto()" id="rungo" style="margin-left:3px;margin-right:3px"></i>`;
        }else{
            document.getElementById('caso').innerHTML+=`<i class="fas fa-eye" onclick="visto()" id="rungo" style="margin-left:3px;margin-right:3px"></i>`;
        }
        quitarFav(1);
        sas=0;
        
    }
    
}

function pendiente(){
    
    if(ses==0){
        if(sas==0){
            document.getElementById('caso').innerHTML=`<i class="far fa-heart" onclick="favorito()" id="rambo" style="margin-left:3px;margin-right:3px"></i>`;
        }else{
            document.getElementById('caso').innerHTML=`<i class="fas fa-heart" onclick="favorito()" id="rambo" style="margin-left:3px;margin-right:3px"></i>`;
        }
        
        document.getElementById('caso').innerHTML+=`<i class="fas fa-clock" onclick="pendiente()" id="rango" style="margin-left:3px;margin-right:3px"></i>`;
        
        if(sis==0){
            document.getElementById('caso').innerHTML+=`<i class="fas fa-eye-slash" onclick="visto()" id="rungo" style="margin-left:3px;margin-right:3px"></i>`;
        }else{
            document.getElementById('caso').innerHTML+=`<i class="fas fa-eye" onclick="visto()" id="rungo" style="margin-left:3px;margin-right:3px"></i>`;
        }
        ses=1;
        cargarFav(2);
    }else{
        if(sas==0){
            document.getElementById('caso').innerHTML=`<i class="far fa-heart" onclick="favorito()" id="rambo" style="margin-left:3px;margin-right:3px"></i>`;
        }else{
            document.getElementById('caso').innerHTML=`<i class="fas fa-heart" onclick="favorito()" id="rambo" style="margin-left:3px;margin-right:3px"></i>`;
        }
        
        document.getElementById('caso').innerHTML+=`<i class="far fa-clock" onclick="pendiente()" id="rango" style="margin-left:3px;margin-right:3px"></i>`;
        
        if(sis==0){
            document.getElementById('caso').innerHTML+=`<i class="fas fa-eye-slash" id="rungo" style="margin-left:3px;margin-right:3px"></i>`;
        }else{
            document.getElementById('caso').innerHTML+=`<i class="fas fa-eye" id="rungo" style="margin-left:3px;margin-right:3px"></i>`;
        }
        quitarFav(2);
        ses=0;
    }
}

function visto(){
    
    if(sas==0){
        document.getElementById('caso').innerHTML=`<i class="far fa-heart" onclick="favorito()" id="rambo" style="margin-left:3px;margin-right:3px"></i>`;
    }else{
        document.getElementById('caso').innerHTML=`<i class="fas fa-heart" onclick="favorito()" id="rambo" style="margin-left:3px;margin-right:3px"></i>`;
    }
    
    if(ses==0){
        document.getElementById('caso').innerHTML+=`<i class="far fa-clock" onclick="pendiente()" id="rango" style="margin-left:3px;margin-right:3px"></i>`;
    }else{
        document.getElementById('caso').innerHTML+=`<i class="fas fa-clock" onclick="pendiente()" id="rango" style="margin-left:3px;margin-right:3px"></i>`;
    }

    document.getElementById('caso').innerHTML+=`<i class="fas fa-eye" id="rungo" style="margin-left:3px;margin-right:3px"></i>`;
    cargarFav(3);
    sis=1;

}

var pss; //guarda todas las series y peliculas 

//carga todas las series y peliculas
function carga(){
    axios({
        url:'../backend/api/peliserie.php',
        method: 'get',
        responseType: 'json'
    }).then(res=>{
        
        pss=res;
        llenadocarro(pss);
        
        for (let k = 0; k < res.data[0].pelis.length; k++) {
            if(res.data[0].pelis[k].year>=2020){
                
                document.getElementById('col').innerHTML+=`<div class="peliserie">
                        <img src="../img/${res.data[0].pelis[k].imagen}" onclick="openModal(${k},1);">
                    </div>`;
            }
        }

        for (let l = 0; l < res.data[0].series.length; l++) {
            if(res.data[0].series[l].year>=2020){
                
                document.getElementById('col').innerHTML+=`<div class="peliserie">
                        <img src="../img/${res.data[0].series[l].imagen}" onclick="openModal(${l},2);">
                    </div>`;
            }
        }
                
        for (let i = 1; i<11; i++) {
            document.getElementById('ABC').innerHTML+=` <h3 class="textsobre">${categorias.data[i-1]}</h3>
                <div class="entero">
                    <div class="carrusel-inicio">
                        <div class="flecha-derecha" onclick="scrollizq('hol${i}');"><i class="fas fa-chevron-left"></i></div>
                        <div class="caruseldef" id="hol${i}">
                            <div class="carrusel" id="ro${i}"></div>
                        </div>
                        <div class="flecha-izq" onclick="scrollder('hol${i}');"><i class="fas fa-chevron-right"></i></div>
                    </div>
                </div>`;
            
            for (let k = 0; k < res.data[0].pelis.length; k++) {
                for (let kk = 0; kk < res.data[0].pelis[k].genero.length; kk++) {
                    if(res.data[0].pelis[k].genero[kk]==i){
                        document.getElementById(`ro${i}`).innerHTML+=`
                            <div class="peliserie">
                                <img src="../img/${res.data[0].pelis[k].imagen}" onclick="openModal(${k},1);">
                            </div>`;
                    }
                }
            }

            for (let l = 0; l < res.data[0].series.length; l++) {
                for (let ll = 0; ll < res.data[0].series[l].genero.length; ll++) {
                    if(res.data[0].series[l].genero[ll]==i){
                        document.getElementById(`ro${i}`).innerHTML+=`
                            <div class="peliserie">
                                <img src="../img/${res.data[0].series[l].imagen}" onclick="openModal(${l},2);">
                            </div>`;
                    }
                }
            }
            
        }

    }).catch(error=>{
        console.error(error);
    });
}

var categorias; //guarda todas las categorias


//craga todas las categorias
function catego(){
        axios({
            url:'../backend/api/categoria.php',
            method: 'get',
            responseType: 'json'
        }).then(res=>{
            categorias=res;
        }).catch(error=>{
            console.error(error);
        });
}

//llena el primer carrusel con 3 peliculas
function llenadocarro(pss){
    document.getElementById('pal1').innerHTML=`<img class="d-block w-100" src="../img/${pss.data[0].pelis[Math.floor(Math.random() * (pss.data[0].pelis.length))].imagen}" alt="First slide" style="width:100%">`;
    document.getElementById('pal2').innerHTML=`<img class="d-block w-100" src="../img/${pss.data[0].pelis[Math.floor(Math.random() * (pss.data[0].pelis.length))].imagen}" alt="Second slide" style="width:100%">`;
    document.getElementById('pal3').innerHTML=`<img class="d-block w-100" src="../img/${pss.data[0].pelis[Math.floor(Math.random() * (pss.data[0].pelis.length))].imagen}" alt="Third slide" style="width:100%">`;
}

