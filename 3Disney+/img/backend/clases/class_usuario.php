<?php
class Usuario{
	private $correo_electronico;
	private $contrasena;
	private $tipo_de_pago;
	private $tipoSuscripcion;

	public function __construct(
		$correo_electronico = null,
		$contrasena = null,
		$tipo_de_pago = null,
		$tipoSuscripcion = null
	){
		$this->correo_electronico = $correo_electronico;
		$this->contrasena = $contrasena;
		$this->tipo_de_pago = $tipo_de_pago;
		$this->tipoSuscripcion = $tipoSuscripcion;
	}

	public static function trerUsuario($correo,$contra){
		$ruta=file_get_contents('../data/usuario.json');
		$rut=json_decode($ruta,true);
		$ga=null;
		for ($i=0; $i < sizeof($rut) ; $i++) { 
			if($rut[$i]["correo_electronico"]==$correo){
				if ($rut[$i]["contrasena"]==$contra) {
					$ga=$rut[$i];
					break;
				}
			}
		}

		echo json_encode($ga);
	}
	
	public function meterUsuario($a,$b,$c,$d){
		$ruta=file_get_contents('../data/usuario.json');
		$rut=json_decode($ruta,true);
		$yar=1;
		$yun;
		$y=array();
		for ($i=0; $i < sizeof($rut); $i++) { 
			if($rut[$i]["id"]==$yar){
				$yar++;
				$yun=$i;
			}else{
				break;
			}
		}
		$mat=array(
			"nombre"=>$a,
			"numero"=>$b,
			"FV"=>$c,
			"codigo"=>$d
		);
		$t[]=array(
			"nombre"=>"Prueba 1",
			"imagen"=>"4.jpg",
			"favoritos"=>$y,
			"visto"=>$y,
			"luego"=>$y
		);
		$rut[]=array(
			"correo_electronico"=>$this->correo_electronico,
			"contrasena"=>$this->contrasena,
			"tipo_de_pago"=>$this->tipo_de_pago,
			"id"=>$yar,
			"tipoSuscripcion"=>$this->tipoSuscripcion,
			"pago"=>$mat,
			"perfiles"=>$t
		);

		$archivo = fopen('../data/usuario.json','w');
		fwrite($archivo,json_encode($rut));
		fclose($archivo);
		echo json_encode($rut[$yun]);
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
	
	public static function setFav($tet,$id,$per){
		$ruta=file_get_contents('../data/usuario.json');
		$rut=json_decode($ruta,true);
		$yuya=-1;
		for ($i=0; $i < sizeof($rut); $i++) { 
            if($rut[$i]["id"]==$id){
				$yuya=$i;
				for ($j=0; $j < sizeof($rut[$i]["perfiles"][$per]["favoritos"]); $j++) { 
					if($rut[$i]["perfiles"][$per]["favoritos"][$j]==$tet){$yuya=-1;}else{
						$yuya=$i;
						break;
					}
				}
			}
		}
		if($yuya==-1){}else{
			$rut[$yuya]["perfiles"][$per]["favoritos"][]=$tet;
			$archivo = fopen('../data/usuario.json','w');
			fwrite($archivo,json_encode($rut));
			fclose($archivo);
		}
		
		echo json_encode($rut[$yuya]);
	}
	
	public static function setLue($tet,$id,$per){
		$ruta=file_get_contents('../data/usuario.json');
		$rut=json_decode($ruta,true);
		$yuya=-1;
		for ($i=0; $i < sizeof($rut); $i++) { 
            if($rut[$i]["id"]==$id){
				$yuya=$i;
				for ($j=0; $j < sizeof($rut[$i]["perfiles"][$per]["luego"]); $j++) { 
					if($rut[$i]["perfiles"][$per]["luego"][$j]==$tet){$yuya=-1;}else{
						$yuya=$i;
						break;
					}
				}
			}
		}
		if($yuya==-1){}else{
			$rut[$yuya]["perfiles"][$per]["luego"][]=$tet;
			$archivo = fopen('../data/usuario.json','w');
			fwrite($archivo,json_encode($rut));
			fclose($archivo);
		}
		
		echo json_encode($rut[$yuya]);
	}

	public static function setVist($tet,$id,$per){
		$ruta=file_get_contents('../data/usuario.json');
		$rut=json_decode($ruta,true);
		$yuya=-1;
		for ($i=0; $i < sizeof($rut); $i++) { 
            if($rut[$i]["id"]==$id){
				$yuya=$i;
				for ($j=0; $j < sizeof($rut[$i]["perfiles"][$per]["visto"]); $j++) { 
					if(($rut[$i]["perfiles"][$per]["visto"][$j])==$tet){$yuya=-1;}else{
						$yuya=$i;
						break;
					}
				}
			}
		}
		if($yuya==-1){}else{
			$rut[$yuya]["perfiles"][$per]["visto"][]=$tet;
			$archivo = fopen('../data/usuario.json','w');
			fwrite($archivo,json_encode($rut));
			fclose($archivo);
		}

		
		echo json_encode($rut[$yuya]);
	}

	public static function borrarFav($tet,$id,$per){
		$ruta=file_get_contents('../data/usuario.json');
		$rut=json_decode($ruta,true);
		$yuya=-1;
		$coco;
		for ($i=0; $i < sizeof($rut); $i++) { 
            if($rut[$i]["id"]==$id){
				for ($j=0; $j < sizeof($rut[$i]["perfiles"][$per]["favoritos"]); $j++) { 
					if($rut[$i]["perfiles"][$per]["favoritos"][$j]===$tet){
						$yuya=$i;
						$coco=$j;
						break;
					}
				}
			}
		}
		if($yuya==-1){}else{
			unset($rut[$yuya]["perfiles"][$per]["favoritos"][$coco]); ;
			$a=$rut[$yuya]["perfiles"][$per]["favoritos"];
			$rut[$yuya]["perfiles"][$per]["favoritos"]=array_values($a);
			$archivo = fopen('../data/usuario.json','w');
			fwrite($archivo,json_encode($rut));
			fclose($archivo);
		}
		
		echo json_encode($rut[$yuya]);
	}

	public static function borrarLuego($tet,$id,$per){
		$ruta=file_get_contents('../data/usuario.json');
		$rut=json_decode($ruta,true);
		$yuya=-1;
		$coco;
		for ($i=0; $i < sizeof($rut); $i++) { 
            if($rut[$i]["id"]==$id){
				for ($j=0; $j < sizeof($rut[$i]["perfiles"][$per]["luego"]); $j++) { 
					if($rut[$i]["perfiles"][$per]["luego"][$j]==$tet){
						$yuya=$i;
						$coco=$j;
						break;
					}
				}
			}
		}
		if($yuya==-1){}else{
			unset($rut[$yuya]["perfiles"][$per]["luego"][$coco]);
			$a=$rut[$yuya]["perfiles"][$per]["luego"];
			$rut[$yuya]["perfiles"][$per]["luego"]=array_values($a);
			$archivo = fopen('../data/usuario.json','w');
			fwrite($archivo,json_encode($rut));
			fclose($archivo);
		}
		
		echo json_encode($rut[$yuya]);
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