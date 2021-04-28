<?php
class PeliculaSerie{
	private $id;
	private $nombre;
	private $emp;
	private $imagen;
	private $descripcion;
	private $actores;
	private $genero;
	private $duracion;
	private $year;
	private $Director;

	public function __construct(
		$id = null,
		$nombre = null,
		$emp = null,
		$imagen = null,
		$descripcion = null,
		$actores = null,
		$genero = null,
		$duracion = null,
		$year = null,
		$Director = null
	){
		$this->id = $id;
		$this->nombre = $nombre;
		$this->emp = $emp;
		$this->imagen = $imagen;
		$this->descripcion = $descripcion;
		$this->actores = $actores;
		$this->genero = $genero;
		$this->duracion = $duracion;
		$this->year = $year;
		$this->Director = $Director;
	}

	public static function traeTodo(){
		$ruta = file_get_contents('../data/peliserie.json');
        echo $ruta;
	}

	public static function fav(){
		$ruta = file_get_contents('../data/usuario.json');
		$ru=json_decode($ruta,true);

	}

	public function getId(){
		return $this->id;
	}

	public function setId($id){
		$this->id = $id;
	}
	public function getNombre(){
		return $this->nombre;
	}

	public function setNombre($nombre){
		$this->nombre = $nombre;
	}
	public function getEmp(){
		return $this->emp;
	}

	public function setEmp($emp){
		$this->emp = $emp;
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

}
?>