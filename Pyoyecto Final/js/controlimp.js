var peliseries;

function oyo4(ga,id) {
    axios({
        url:'../backend/api/compania.php'+`?idserie=${id}&nombreedit=${document.getElementById("zz1").value}&emp=${ga}&imagenedit=${document.getElementById("zz2").value}&descripcionedit=${document.getElementById("zz3").value}&actores=${document.getElementById("zz4").value}&duracion=${document.getElementById("zz5").value}&year=${document.getElementById("zz6").value}&Director=${document.getElementById("zz7").value}&v1=${document.getElementById("p1").value}&v2=${document.getElementById("p2").value}&v3=${document.getElementById("p3").value}&v4=${document.getElementById("p4").value}`,
        method: 'put',
        responseType: 'json'
    }).then(res=>{
        console.log(res);
        $('#cul').modal('hide');
        traerEmp(ff);
    }).catch(error=>{
        console.error(error);
    });
}

function modalLLenar2(categorias, pos, id,jj) {
    document.getElementById("cull").innerHTML=`<main class="container">
            <div class="row">
                <div class="pad col-3">
                    <span class="espan" style="text-align:left;font-size: 14px;">Nombre de la serie:</span>
                </div>
                <div class="col-9">
                    <input type="text" id="zz1" placeholder="Nombre propuesto">
                </div>
                <div class="pad col-2">
                    <span class="espan">Imagen:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz2" placeholder="Nombre de la img ejem: a34.png">
                </div>
                <div class="pad col-2">
                    <span class="espan">Descripcion:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz3" placeholder="La respectiva descripcion">
                </div>
                <div class="pad col-2">
                    <span class="espan">Actores:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz4" placeholder="Enumeracion del reparto">
                </div>
                <div class="pad col-2">
                    <span class="espan">Genero:</span>
                </div>
                <div class="col-10">
                    <main class="container">
                        <div class="row">
                            <div class="col-3">
                                <select name="" id="p1">
                                    <option value="-1">ND</option>
                                </select>
                            </div>
                            <div class="col-3">
                                <select name="" id="p2">
                                    <option value="-1">ND</option> 
                                </select>
                            </div>
                            <div class="col-3">
                                <select name="" id="p3">
                                    <option value="-1">ND</option> 
                                </select>
                            </div>
                            <div class="col-3">
                                <select name="" id="p4">
                                    <option value="-1">ND</option> 
                                </select>
                            </div>  
                        </div>
                    </main>
                </div>
                <div class="pad col-2">
                    <span class="espan">Duracion:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz5" placeholder="ejm: 2h 30m">
                </div>
                <div class="pad col-2">
                    <span class="espan">Año:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz6" placeholder="Año de salida">
                </div>
                <div class="pad col-2">
                    <span class="espan">Director:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz7" placeholder="El director de la serie">
                </div>
                <button onclick="oyo4('${pos}','${id}');">agregar</button>
            </div>
        </main>`;
    document.getElementById("zz1").value=peliseries.data[0].series[jj].nombre;
    document.getElementById("zz2").value=peliseries.data[0].series[jj].imagen;
    document.getElementById("zz3").value=peliseries.data[0].series[jj].descripcion;
    document.getElementById("zz4").value=peliseries.data[0].series[jj].actores;
    document.getElementById("zz5").value=peliseries.data[0].series[jj].duracion;
    document.getElementById("zz6").value=peliseries.data[0].series[jj].year;
    document.getElementById("zz7").value=peliseries.data[0].series[jj].Director;
        
    for (let i = 0; i < categorias.data.length; i++) {
        document.getElementById("p1").innerHTML+=`<option value="${i+1}">${categorias.data[i]}</option>`;
        document.getElementById("p2").innerHTML+=`<option value="${i+1}">${categorias.data[i]}</option>`;
        document.getElementById("p3").innerHTML+=`<option value="${i+1}">${categorias.data[i]}</option>`;
        document.getElementById("p4").innerHTML+=`<option value="${i+1}">${categorias.data[i]}</option>`;
    }
    for (let k = 0; k < peliseries.data[0].series[jj].genero.length; k++) {
       document.getElementById(`p${k+1}`).value=`${peliseries.data[0].series[jj].genero[k]}`;
    }
}

function oyo3(ga,id) {
    axios({
        url:'../backend/api/compania.php'+`?idpeli=${id}&nombreedit=${document.getElementById("zz1").value}&emp=${ga}&imagenedit=${document.getElementById("zz2").value}&descripcionedit=${document.getElementById("zz3").value}&actores=${document.getElementById("zz4").value}&duracion=${document.getElementById("zz5").value}&year=${document.getElementById("zz6").value}&Director=${document.getElementById("zz7").value}&v1=${document.getElementById("p1").value}&v2=${document.getElementById("p2").value}&v3=${document.getElementById("p3").value}&v4=${document.getElementById("p4").value}`,
        method: 'put',
        responseType: 'json'
    }).then(res=>{
        console.log(res);
        $('#cul').modal('hide');
        traerEmp(ff);
    }).catch(error=>{
        console.error(error);
    });
}

function modalLLenar(categorias, pos, id,jj) {
   
    document.getElementById("cull").innerHTML=`<main class="container">
            <div class="row">
                <div class="pad col-3">
                    <span class="espan" style="text-align:left;font-size: 14px;">Nombre de la pelicula:</span>
                </div>
                <div class="col-9">
                    <input type="text" id="zz1" placeholder="Nombre propuesto">
                </div>
                <div class="pad col-2">
                    <span class="espan">Imagen:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz2" placeholder="Nombre de la img. ejem: a12.png">
                </div>
                <div class="pad col-2">
                    <span class="espan">Descripcion:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz3" placeholder="La respectiva descripcion">
                </div>
                <div class="pad col-2">
                    <span class="espan">Actores:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz4" placeholder="Enumeracion del reparto">
                </div>
                <div class="pad col-2">
                    <span class="espan">Genero:</span>
                </div>
                <div class="col-10">
                    <main class="container">
                        <div class="row">
                            <div class="col-3">
                                <select name="" id="p1">
                                    <option value="-1">ND</option>
                                </select>
                            </div>
                            <div class="col-3">
                                <select name="" id="p2">
                                    <option value="-1">ND</option> 
                                </select>
                            </div>
                            <div class="col-3">
                                <select name="" id="p3">
                                    <option value="-1">ND</option> 
                                </select>
                            </div>
                            <div class="col-3">
                                <select name="" id="p4">
                                    <option value="-1">ND</option> 
                                </select>
                            </div>  
                        </div>
                    </main>
                </div>
                <div class="pad col-2">
                    <span class="espan">Duracion:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz5" placeholder="ejm: 2h 30m">
                </div>
                <div class="pad col-2">
                    <span class="espan">Año:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz6" placeholder="Año de salida">
                </div>
                <div class="pad col-2">
                    <span class="espan">Director:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz7" placeholder="El director de la pelicula">
                </div>
                <button onclick="oyo3('${pos}','${id}');">agregar</button>
            </div>
        </main>`;
    document.getElementById("zz1").value=peliseries.data[0].pelis[jj].nombre;
    document.getElementById("zz2").value=peliseries.data[0].pelis[jj].imagen;
    document.getElementById("zz3").value=peliseries.data[0].pelis[jj].descripcion;
    document.getElementById("zz4").value=peliseries.data[0].pelis[jj].actores;
    document.getElementById("zz5").value=peliseries.data[0].pelis[jj].duracion;
    document.getElementById("zz6").value=peliseries.data[0].pelis[jj].year;
    document.getElementById("zz7").value=peliseries.data[0].pelis[jj].Director;
        
    for (let i = 0; i < categorias.data.length; i++) {
        document.getElementById("p1").innerHTML+=`<option value="${i+1}">${categorias.data[i]}</option>`;
        document.getElementById("p2").innerHTML+=`<option value="${i+1}">${categorias.data[i]}</option>`;
        document.getElementById("p3").innerHTML+=`<option value="${i+1}">${categorias.data[i]}</option>`;
        document.getElementById("p4").innerHTML+=`<option value="${i+1}">${categorias.data[i]}</option>`;
    }
    for (let k = 0; k < peliseries.data[0].pelis[jj].genero.length; k++) {
       document.getElementById(`p${k+1}`).value=`${peliseries.data[0].pelis[jj].genero[k]}`;
    }
}

function oyo2(ga){
    axios({
        url:'../backend/api/compania.php'+`?nombreS=${document.getElementById("zz1").value}&emp=${ga}&imagenS=${document.getElementById("zz2").value}&descripcionS=${document.getElementById("zz3").value}&actores=${document.getElementById("zz4").value}&duracion=${document.getElementById("zz5").value}&year=${document.getElementById("zz6").value}&Director=${document.getElementById("zz7").value}&v1=${document.getElementById("p1").value}&v2=${document.getElementById("p2").value}&v3=${document.getElementById("p3").value}&v4=${document.getElementById("p4").value}`,
        method: 'post',
        responseType: 'json'
    }).then(res=>{
        console.log(res);
        $('#cul').modal('hide');
        traerEmp(ff);
    }).catch(error=>{
        console.error(error);
    });
}

function crearSerie(categorias, pos) {
    document.getElementById("cull").innerHTML=`<main class="container">
            <div class="row">
                <div class="pad col-3">
                    <span class="espan" style="text-align:left;font-size: 14px;">Nombre de la serie:</span>
                </div>
                <div class="col-9">
                    <input type="text" id="zz1" placeholder="Nombre propuesto">
                </div>
                <div class="pad col-2">
                    <span class="espan">Imagen:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz2" placeholder="Nombre de la img">
                </div>
                <div class="pad col-2">
                    <span class="espan">Descripcion:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz3" placeholder="La respectiva descripcion">
                </div>
                <div class="pad col-2">
                    <span class="espan">Actores:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz4" placeholder="Enumeracion del reparto">
                </div>
                <div class="pad col-2">
                    <span class="espan">Genero:</span>
                </div>
                <div class="col-10">
                    <main class="container">
                        <div class="row">
                            <div class="col-3">
                                <select name="" id="p1">
                                    <option value="-1">ND</option>
                                </select>
                            </div>
                            <div class="col-3">
                                <select name="" id="p2">
                                    <option value="-1">ND</option> 
                                </select>
                            </div>
                            <div class="col-3">
                                <select name="" id="p3">
                                    <option value="-1">ND</option> 
                                </select>
                            </div>
                            <div class="col-3">
                                <select name="" id="p4">
                                    <option value="-1">ND</option> 
                                </select>
                            </div>  
                        </div>
                    </main>
                </div>
                <div class="pad col-2">
                    <span class="espan">Duracion:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz5" placeholder="ejm: 2h 30m">
                </div>
                <div class="pad col-2">
                    <span class="espan">Año:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz6" placeholder="Año de salida">
                </div>
                <div class="pad col-2">
                    <span class="espan">Director:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz7" placeholder="El director de la serie">
                </div>
                <button onclick="oyo2('${pos}');">agregar</button>
            </div>
        </main>`;

    for (let i = 0; i < categorias.data.length; i++) {
        document.getElementById("p1").innerHTML+=`<option value="${i+1}">${categorias.data[i]}</option>`;
        document.getElementById("p2").innerHTML+=`<option value="${i+1}">${categorias.data[i]}</option>`;
        document.getElementById("p3").innerHTML+=`<option value="${i+1}">${categorias.data[i]}</option>`;
        document.getElementById("p4").innerHTML+=`<option value="${i+1}">${categorias.data[i]}</option>`;
    }
}

function oyo(ga){
    axios({
        url:'../backend/api/compania.php'+`?nombre=${document.getElementById("zz1").value}&emp=${ga}&imagen=${document.getElementById("zz2").value}&descripcion=${document.getElementById("zz3").value}&actores=${document.getElementById("zz4").value}&duracion=${document.getElementById("zz5").value}&year=${document.getElementById("zz6").value}&Director=${document.getElementById("zz7").value}&v1=${document.getElementById("p1").value}&v2=${document.getElementById("p2").value}&v3=${document.getElementById("p3").value}&v4=${document.getElementById("p4").value}`,
        method: 'post',
        responseType: 'json'
    }).then(res=>{
        console.log(res);
        $('#cul').modal('hide');
        traerEmp(ff);
    }).catch(error=>{
        console.error(error);
    });
}

function catego(ko,pos,id,jj){
        axios({
            url:'../backend/api/categoria.php',
            method: 'get',
            responseType: 'json'
        }).then(res=>{
            if(ko==0){
                crearPelis(res, pos);
            }else if(ko==1){
                crearSerie(res, pos);
            }else if(ko==2){
                modalLLenar(res ,pos ,id , jj)
            }else{
                modalLLenar2(res, pos, id , jj)
            }

        }).catch(error=>{
            console.error(error);
        });
}

function openModal(ko,pos,id,jj) {
    $('#cul').modal('show');
    catego(ko,pos,id,jj);
}

function crearPelis(categorias, pos) {
    document.getElementById("cull").innerHTML=`<main class="container">
            <div class="row">
                <div class="pad col-3">
                    <span class="espan" style="text-align:left;font-size: 14px;">Nombre de la pelicula:</span>
                </div>
                <div class="col-9">
                    <input type="text" id="zz1" placeholder="Nombre propuesto">
                </div>
                <div class="pad col-2">
                    <span class="espan">Imagen:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz2" placeholder="Nombre de la img">
                </div>
                <div class="pad col-2">
                    <span class="espan">Descripcion:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz3" placeholder="La respectiva descripcion">
                </div>
                <div class="pad col-2">
                    <span class="espan">Actores:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz4" placeholder="Enumeracion del reparto">
                </div>
                <div class="pad col-2">
                    <span class="espan">Genero:</span>
                </div>
                <div class="col-10">
                    <main class="container">
                        <div class="row">
                            <div class="col-3">
                                <select name="" id="p1">
                                    <option value="-1">ND</option>
                                </select>
                            </div>
                            <div class="col-3">
                                <select name="" id="p2">
                                    <option value="-1">ND</option> 
                                </select>
                            </div>
                            <div class="col-3">
                                <select name="" id="p3">
                                    <option value="-1">ND</option> 
                                </select>
                            </div>
                            <div class="col-3">
                                <select name="" id="p4">
                                    <option value="-1">ND</option> 
                                </select>
                            </div>  
                        </div>
                    </main>
                </div>
                <div class="pad col-2">
                    <span class="espan">Duracion:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz5" placeholder="ejm: 2h 30m">
                </div>
                <div class="pad col-2">
                    <span class="espan">Año:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz6" placeholder="Año de salida">
                </div>
                <div class="pad col-2">
                    <span class="espan">Director:</span>
                </div>
                <div class="col-10">
                    <input type="text" id="zz7" placeholder="El director de la pelicula">
                </div>
                <button onclick="oyo('${pos}');">agregar</button>
            </div>
        </main>`;

    for (let i = 0; i < categorias.data.length; i++) {
        document.getElementById("p1").innerHTML+=`<option value="${categorias.data[i]}">${categorias.data[i]}</option>`;
        document.getElementById("p2").innerHTML+=`<option value="${categorias.data[i]}">${categorias.data[i]}</option>`;
        document.getElementById("p3").innerHTML+=`<option value="${categorias.data[i]}">${categorias.data[i]}</option>`;
        document.getElementById("p4").innerHTML+=`<option value="${categorias.data[i]}">${categorias.data[i]}</option>`;
    }
}

var ff;

function traerEmp(f) {
    axios({
        url:'../backend/api/compania.php?'+`id=${f}`,
        method: 'get',
        responseType: 'json'
    }).then(res=>{
        
        ff=f;
        document.getElementById("imagUsu").innerHTML=`${res.data.nombreEmpresa}`;
        console.log(res.data);
        traerTodo(res.data);
        
    }).catch(error=>{
        console.error(error);
    })
}

function llenarpelis(tt, tel) {
    document.getElementById("peli").innerHTML=`<div class="col-12">
            <h2 class="panda">Peliculas</h2>
        </div>`;
    for (let i = 0; i < tt.ps[0].p.length; i++) {
        for (let j = 0; j < tel[0].pelis.length; j++) {
            if(tt.ps[0].p[i]==tel[0].pelis[j].id){
                document.getElementById("peli").innerHTML+=`<div class="col-2 tur">
                        <div class="contenedor" onclick="openModal(2,'${tt.nombreEmpresa}','${tel[0].pelis[j].id}',${j})">
                            <img src="../img/${tel[0].pelis[j].imagen}" class="imagenm">
                            <hr>
                            <h5 class="killua">${tel[0].pelis[j].nombre}</h5><hr>                
                        </div>
                    </div>`;
                break;
            }
        }
    }

    document.getElementById("peli").innerHTML+=`<div class="col-2 tur">
            <div class="contenedor" style="height:fit-content;" onclick="openModal(0,'${tt.nombreEmpresa}')">
                
                <hr>
                <h5 class="killua">NEW</h5><hr>                
            </div>
        </div>`;
}

function llenarseries(tt,tel) {
    document.getElementById("serie").innerHTML=`<div class="col-12">
            <h2 class="panda">Series</h2>
        </div>`;
    for (let i = 0; i < tt.ps[0].s.length; i++) {
        for (let j = 0; j < tel[0].series.length; j++) {
            if(tt.ps[0].s[i]==tel[0].series[j].id){
                document.getElementById("serie").innerHTML+=`<div class="col-2 tur">
                        <div class="contenedor" onclick="openModal(3,'${tt.nombreEmpresa}','${tel[0].series[j].id}',${j})">
                            <img src="../img/${tel[0].series[j].imagen}" class="imagenm">
                            <hr>
                            <h5 class="killua">${tel[0].series[j].nombre}</h5><hr>               
                        </div>
                    </div>`;
                break;
            }
        }
    }

    document.getElementById("serie").innerHTML+=`<div class="col-2 tur">
            <div class="contenedor" style="height:fit-content;" onclick="openModal(1,'${tt.nombreEmpresa}')">
                
                <hr>
                <h5 class="killua">NEW</h5><hr>                
            </div>
        </div>`;
}



function traerTodo(yy) {
    axios({
        url:'../backend/api/peliserie.php',
        method: 'get',
        responseType: 'json'
    }).then(res=>{
        peliseries=res;
        llenarpelis(yy, res.data);
        llenarseries(yy, res.data);
        
    }).catch(error=>{
        console.error(error);
    });
}

