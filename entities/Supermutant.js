
var supermutant = {
	name: 'Super mutant',
	stats: {
		damage: 40,
		maxHealth: 400,
		health: 400,
		critical: 20
	},
	attack: () => {
		let critical = probability(supermutant.stats.critical);
		return critical ? supermutant.stats.damage*2 : supermutant.stats.damage;
	},
	hurt: (dmg) => {
		supermutant.stats.health -= dmg;
		if (supermutant.stats.health<0) {
			supermutant.stats.health = 0;
		}
	},
	heal: () => {
		supermutant.stats.health += 20;
		if (supermutant.stats.health>supermutant.stats.maxHealth) {
			supermutant.stats.health = supermutant.stats.maxHealth;
		}
		return true;
	},
	action: (character) => {
		let log = '';
		if (supermutant.stats.health != 0) {
			if (percentage(supermutant.stats.health)>66 && probability(33) && supermutant.stats.health!=supermutant.stats.maxHealth) {
				supermutant.heal();
				log = `Supermutant heal ${20}HP`;
			} else if (percentage(supermutant.stats.health, supermutant.stats.maxHealth)>33 && probability(66)) {
				hostileTarget.heal();
				log = `Supermutant heal ${20}HP`;
			} else if (percentage(supermutant.stats.health, supermutant.stats.maxHealth)<33 && probability(90)) {
				supermutant.heal();
				log = `Supermutant heal ${20}HP`;
			} else {
				let attack = supermutant.attack();
				character.hurt(attack);
				log = `Character receive ${attack} of damage`;
			}
		} else {
			log = `Supermutant dies.`;
		}
		return log;
	}
}