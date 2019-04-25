<?php
class Foo {
	private $bar;
	private $baz;

	public function __construct(string $newBar, int $newBaz){
		$this->setBar($newBar);
		$this->setBaz($newBaz);
}


public function getBar() : string {
		return $this->bar;
}

public function setBar(string $newBar) : void {
		$this->bar = $newBar;
}
public function getBaz() : int {
		return $this->baz;
}


public function setBaz($Baz) : void {
		$this->baz = $newBaz;
}

public function concat() : string {
		return $this->bar . (string)$this->baz;
}

}

$foo =