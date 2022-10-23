
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
	heal: () => {
		if (soldier.inventory.includes('stimpak')) {
			soldier.stats.health += 20;
			if (soldier.stats.health>soldier.stats.maxHealth) {
				soldier.stats.health = soldier.stats.maxHealth;
			}
			soldier.inventory.splice(soldier.inventory.indexOf('stimpak'), 1);
			return true;
		}
		return false;
	},
	action: (enemy, action) => {
		let log = '';
		if (action === 'plasmaShot') {
			let powerArmorAttack = soldier.attack();
			enemy.hurt(powerArmorAttack);
			log = `Hostile target receive ${powerArmorAttack} of damage`;
		}
		else if (action === 'stimpak') {
			soldier.heal();
			log = `Power Armor heal ${20}HP`;
		}
		return log;
	}
}