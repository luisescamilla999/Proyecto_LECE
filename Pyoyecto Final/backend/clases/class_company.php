<?php
class Company{
	private $ID;
	private $nombre;
	private $imagen;
	private $descripcion;
	private $actores;
	private $duracion;
	private $year;
	private $Director;
	private $emp;

	public function __construct(
		$ID = null,
		$nombre = null,
		$imagen = null,
		$descripcion = null,
		$actores = null,
		$duracion = null,
		$year = null,
		$Director = null,
		$emp = null
	){
		$this->ID = $ID;
		$this->nombre = $nombre;
		$this->imagen = $imagen;
		$this->descripcion = $descripcion;
		$this->actores = $actores;
		$this->duracion = $duracion;
		$this->year = $year;
		$this->Director = $Director;
		$this->emp = $emp;
	}

	public static function cambioSerie($idpeli,$nombre,$emp,$imagen,$descripcion,$actores,$duracion,$year,$Director,$a,$b,$c,$d){
		$ruta = file_get_contents('../data/peliserie.json');
		$rut=json_decode($ruta,true);
		$hol=array();
		$pep;
		if($a!=-1){$hol[]=$a;}
		if($b!=-1){$hol[]=$b;}
		if($c!=-1){$hol[]=$c;}
		if($d!=-1){$hol[]=$d;}
		for ($i=0; $i < sizeof($rut[0]["series"]) ; $i++) { 
			if ($rut[0]["series"][$i]["id"]==$idpeli) {
				$pep=$i;
			}
		}
		$tet=$rut[0]["series"][$pep]["temp"];

		$rut[0]["series"][$pep]=array(
			"id"=>$idpeli,
			"nombre"=>$nombre,
			"emp"=>$emp,
			"imagen"=>$imagen,
			"descripcion"=>$descripcion,
			"actores"=>$actores,
			"duracion"=>$duracion,
			"year"=>$year,
			"Director"=>$Director,
			"genero"=>$hol,
			"temp"=>$tet
		);

		$archivo = fopen('../data/peliserie.json','w');
		fwrite($archivo,json_encode($rut));
		fclose($archivo);

		echo json_encode($rut);
	}

	public static function cambioPeli($idpeli,$nombre,$emp,$imagen,$descripcion,$actores,$duracion,$year,$Director,$a,$b,$c,$d){
		$ruta = file_get_contents('../data/peliserie.json');
		$rut=json_decode($ruta,true);
		$hol=array();
		$pep;
		if($a!=-1){$hol[]=$a;}
		if($b!=-1){$hol[]=$b;}
		if($c!=-1){$hol[]=$c;}
		if($d!=-1){$hol[]=$d;}
		for ($i=0; $i < sizeof($rut[0]["pelis"]) ; $i++) { 
			if ($rut[0]["pelis"][$i]["id"]==$idpeli) {
				$pep=$i;
			}
		}

		$rut[0]["pelis"][$pep]=array(
			"id"=>$idpeli,
			"nombre"=>$nombre,
			"emp"=>$emp,
			"imagen"=>$imagen,
			"descripcion"=>$descripcion,
			"actores"=>$actores,
			"duracion"=>$duracion,
			"year"=>$year,
			"Director"=>$Director,
			"genero"=>$hol
		);

		$archivo = fopen('../data/peliserie.json','w');
		fwrite($archivo,json_encode($rut));
		fclose($archivo);

		echo json_encode($rut);
	}

	public static function trerEmp($correo,$contra){
		$ruta=file_get_contents('../data/companias.json');
		$rut=json_decode($ruta,true);
		$ga=null;
		for ($i=0; $i < sizeof($rut) ; $i++) { 
			if($rut[$i]["correoP"]==$correo){
				if ($rut[$i]["contrasena"]==$contra) {
					$ga=$rut[$i];
					break;
				}
			}
		}

		echo json_encode($ga);
	}
	
	public static function traerEmpresa($id){
		$ruta = file_get_contents('../data/companias.json');
		$rut=json_decode($ruta,true);
		$hol=null;
		for ($i=0; $i < sizeof($rut); $i++) { 
			if ($rut[$i]["idEmpresa"]==$id) {
				$hol=$rut[$i];
			}
		}
		echo json_encode($hol);
	}

	public function ponerPeli($nombre,$emp,$imagen,$descripcion,$actores,$duracion,$year,$Director,$a,$b,$c,$d){
		$ruta = file_get_contents('../data/peliserie.json');
		$rut=json_decode($ruta,true);
		$hol=array();
		$pep=$rut[0]["ultimapeli"]."p";
		if($a!=-1){$hol[]=$a;}
		if($b!=-1){$hol[]=$b;}
		if($c!=-1){$hol[]=$c;}
		if($d!=-1){$hol[]=$d;}
		$rut[0]["pelis"][]=array(
			"id"=>$rut[0]["ultimapeli"]."p",
			"nombre"=>$nombre,
			"emp"=>$emp,
			"imagen"=>$imagen,
			"descripcion"=>$descripcion,
			"actores"=>$actores,
			"duracion"=>$duracion,
			"year"=>$year,
			"Director"=>$Director,
			"genero"=>$hol
		);
		$rut[0]["ultimapeli"]++;

		$archivo = fopen('../data/peliserie.json','w');
		fwrite($archivo,json_encode($rut));
		fclose($archivo);

		$ruta = file_get_contents('../data/companias.json');
		$rat=json_decode($ruta,true);
		for ($i=0; $i < sizeof($rat) ; $i++) { 
			if ($rat[$i]["nombreEmpresa"]==$emp) {
				$rat[$i]["ps"][0]["p"][]=$pep;
				break;
			}
		}

		$archivo = fopen('../data/companias.json','w');
		fwrite($archivo,json_encode($rat));
		fclose($archivo);

		echo json_encode($rut);
	}

	public function ponerSerie($nombre,$emp,$imagen,$descripcion,$actores,$duracion,$year,$Director,$a,$b,$c,$d){
		$ruta = file_get_contents('../data/peliserie.json');
		$rut=json_decode($ruta,true);
		$hol=array();
		$pet=array();
		$pep=$rut[0]["ultimaserie"];
		if($a!=-1){$hol[]=$a;}
		if($b!=-1){$hol[]=$b;}
		if($c!=-1){$hol[]=$c;}
		if($d!=-1){$hol[]=$d;}
		$rut[0]["series"][]=array(
			"id"=>$rut[0]["ultimaserie"],
			"nombre"=>$nombre,
			"emp"=>$emp,
			"imagen"=>$imagen,
			"descripcion"=>$descripcion,
			"actores"=>$actores,
			"duracion"=>$duracion,
			"year"=>$year,
			"Director"=>$Director,
			"genero"=>$hol,
			"tem"=>$pet
		);
		$rut[0]["ultimaserie"]++;

		$archivo = fopen('../data/peliserie.json','w');
		fwrite($archivo,json_encode($rut));
		fclose($archivo);

		$ruta = file_get_contents('../data/companias.json');
		$re=json_decode($ruta,true);
		for ($i=0; $i < sizeof($re) ; $i++) { 
			if ($re[$i]["nombreEmpresa"]==$emp) {
				$re[$i]["ps"][0]["s"][]=$pep;
				break;
			}
		}

		$archivo = fopen('../data/companias.json','w');
		fwrite($archivo,json_encode($re));
		fclose($archivo);

		echo json_encode($rut);
	}
    
    public static function empresas(){
        $ruta = file_get_contents('../data/companias.json');
        echo $ruta;
    }

	public function getID(){
		return $this->ID;
	}

	public function setID($ID){
		$this->ID = $ID;
	}
	public function getNombre(){
		return $this->nombre;
	}

	public function setNombre($nombre){
		$this->nombre = $nombre;
	}
	public function getImagen(){
		return $this->imagen;
	}

	public function setImagen($imagen){
		$this->imagen = $imagen;
	}
	public function getDescripcion(){
		return $this->descripcion;
	}

	public function setDescripcion($descripcion){
		$this->descripcion = $descripcion;
	}
	public function getActores(){
		return $this->actores;
	}

	public function setActores($actores){
		$this->actores = $actores;
	}
	public function getGenero(){
		return $this->genero;
	}

	public function setGenero($genero){
		$this->genero = $genero;
	}
	public function getDuracion(){
		return $this->duracion;
	}

	public function setDuracion($duracion){
		$this->duracion = $duracion;
	}
	public function getYear(){
		return $this->year;
	}

	public function setYear($year){
		$this->year = $year;
	}
	public function getDirector(){
		return $this->Director;
	}

	public function setDirector($Director){
		$this->Director = $Director;
	}
	public function getTemp(){
		return $this->temp;
	}

	public function setTemp($temp){
		$this->temp = $temp;
	}

}
?>