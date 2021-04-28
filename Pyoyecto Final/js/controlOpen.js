var correo;

function revemp() {
    axios({
        url:'../backend/api/compania.php?'+`correo=${correo}&contra=${document.getElementById("poi").value}`,
        method: 'get',
        responseType: 'json'
    }).then(res=>{
        if(res.data==null){
            document.getElementById("pe").innerHTML=`Correo o contraseña son incorrectos`;
        }else{
            window.open('emp.php?nel='+res.data.idEmpresa);
        }
    }).catch(error=>{
        console.error(error);
    })
}

function revisar() {
    axios({
        url:'../backend/api/usuario.php?'+`correo=${correo}&contra=${document.getElementById("poi").value}`,
        method: 'get',
        responseType: 'json'
    }).then(res=>{
        if(res.data==null){
            revemp();
        }else{
            window.open('inicio.php?an='+res.data.id+'&ne=0');
        }
    }).catch(error=>{
        console.error(error);
    })
}

function pasarContra() {
    if(document.getElementById("poi").value!=""){
        correo=document.getElementById("poi").value;
        document.getElementById("cat").innerHTML=`<h1 align="left" class="inicio">Ingresa la contraseña de ${correo}</h1>
            <h6 align="left" id="pe" style="color:red;font-weight:bold"></h6>
            <input type="password" class="texto" id="poi" placeholder="Contraseña">
            <button class="continuar" onclick="revisar();">Iniciar Seccion</button>
            <div style="text-align: left; margin-top: 27px;">
                <p align="left" class="parrafo">¿Primera vez en Disney+?<a href="../Disney+/disney/sing-in.html">Suscribete</a></p>
            </div>`;
    }else{
        document.getElementById("pe").innerHTML=`coloque un correo valido`;
    }
    
}

