<?php
class Categoria{
	private $nombre;

	public function __construct(
		$nombre
	){
		$this->nombre = $nombre;
	}

	public function getNombre(){
		return $this->nombre;
	}

	public function setNombre($nombre){
		$this->nombre = $nombre;
    }
    
    public static function cat(){
		$ruta = file_get_contents('../data/categoria.json');
        echo $ruta;
	}

}
?>