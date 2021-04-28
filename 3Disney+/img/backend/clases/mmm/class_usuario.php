<?php
class Usuario{
	private $correo_electronico;
	private $contrasena;
	private $tipo_de_pago;
	private $pago;
	private $perfiles;

	public function __construct(
		$correo_electronico = null,
		$contrasena = null,
		$tipo_de_pago = null,
		$pago = null,
		$perfiles = null
	){
		$this->correo_electronico = $correo_electronico;
		$this->contrasena = $contrasena;
		$this->tipo_de_pago = $tipo_de_pago;
		$this->pago = $pago;
		$this->perfiles = $perfiles;
    }
    
    public static function getUnUsuario($id){
        $ruta=file_get_contents('../data/usuario.json');
        $rut=json_decode($ruta,true);
        $yuya=null;
        for ($i=0; $i < sizeof($rut); $i++) { 
            if($rut[$i]["id"]==$id){
                $yuya=$rut[$i];
            }
        }
        echo json_encode($yuya);
	}
	
	public static function setFav($tet){
		$ruta=file_get_contents('../data/usuario.json');
        $rut=json_decode($ruta,true);
	}

	public function getCorreo_electronico(){
		return $this->correo_electronico;
	}

	public function setCorreo_electronico($correo_electronico){
		$this->correo_electronico = $correo_electronico;
	}
	public function getContrasena(){
		return $this->contrasena;
	}

	public function setContrasena($contrasena){
		$this->contrasena = $contrasena;
	}
	public function getTipo_de_pago(){
		return $this->tipo_de_pago;
	}

	public function setTipo_de_pago($tipo_de_pago){
		$this->tipo_de_pago = $tipo_de_pago;
	}
	public function getPago(){
		return $this->pago;
	}

	public function setPago($pago){
		$this->pago = $pago;
	}
	public function getPerfiles(){
		return $this->perfiles;
	}

	public function setPerfiles($perfiles){
		$this->perfiles = $perfiles;
	}

}
?>