
var soldier = {
	stats: {
		damage: 60,
		maxHealth: 200,
		health: 200,
		maxPowerArmor: 1900,
		powerArmor: 1900,
		critical: 40
	},
	inventory: [
		"stimpak",
		"stimpak",
		"stimpak"
	],
	stimpak: 40,
	attack: () => {
		let critical = probability(soldier.stats.critical);
		return critical ? soldier.stats.damage*2 : soldier.stats.damage;
	},
	hurt: (dmg) => {
		soldier.stats.health -= dmg;
		if (soldier.stats.health<0) {
			soldier.stats.health = 0;
		}
	},
	healStimpak: () => {
		let log;
		if (soldier.inventory.includes('stimpak')) {
			if (soldier.stats.health!=soldier.stats.maxHealth) {
				soldier.stats.health += soldier.stimpak;
				if (soldier.stats.health>soldier.stats.maxHealth) {
					soldier.stats.health = soldier.stats.maxHealth;
				}
				soldier.inventory.splice(soldier.inventory.indexOf('stimpak'), 1);
				log = `Soldier heals ${soldier.stimpak}HP`;
			} else {
				log = `Soldier has full health`;
			}
		} else {
			log = `No stimpak left`;
		}
		return log;
	},
	action: (enemy, action) => {
		let log = '';
		if (action === 'plasmaShot') {
			let powerArmorAttack = soldier.attack();
			enemy.hurt(powerArmorAttack);
			log = `Hostile target receives ${powerArmorAttack} of damage`;
		}
		else if (action === 'stimpak') {
			log = soldier.healStimpak();
		}
		return log;
	}
}