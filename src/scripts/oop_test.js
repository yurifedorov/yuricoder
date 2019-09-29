class Tank {
	constructor(ammunition) {
		this.ammunition = ammunition;
	}

	fireTo() {
		//Перед выстрелом проверяем снаряды:
		if (this.canFire()) {
			this.ammunition = this.ammunition - 1;
		}
	}

	//Вспомогательный метод для проверки снарядов:
	canFire(ammunition) {
		if (ammunition > 0) {
			return true;
		} else {
			return false;
		}
	}
}

let tank = new Tank(10);
alert(tank.ammunition);

tank.fireTo(10, 20);
alert(tank.ammunition);

tank.fireTo(10, 20);
alert(tank.ammunition);

tank.fireTo(10, 20);
alert(tank.ammunition);

tank.fireTo(10, 20);
alert(tank.ammunition);

tank.fireTo(10, 20);
alert(tank.ammunition);