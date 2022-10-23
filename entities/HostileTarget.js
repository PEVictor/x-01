
var hostileTarget = {
	stats: {
		damage: 40,
		maxHealth: 400,
		health: 400,
		critical: 20
	},
	attack: () => {
		let critical = probability(hostileTarget.stats.critical);
		return critical ? hostileTarget.stats.damage*2 : hostileTarget.stats.damage;
	},
	hurt: (dmg) => {
		hostileTarget.stats.health -= dmg;
		if (hostileTarget.stats.health<0) {
			hostileTarget.stats.health = 0;
		}
	},
	heal: () => {
		hostileTarget.stats.health += 20;
		if (hostileTarget.stats.health>hostileTarget.stats.maxHealth) {
			hostileTarget.stats.health = hostileTarget.stats.maxHealth;
		}
		return true;
	},
	action: (character) => {
		let log = '';
		if (hostileTarget.stats.health != 0) {
			if (percentage(hostileTarget.stats.health)>66 && probability(33) && hostileTarget.stats.health!=hostileTarget.stats.maxHealth) {
				hostileTarget.heal();
				log = `Supermutant heal ${20}HP`;
			} else if (percentage(hostileTarget.stats.health, hostileTarget.stats.maxHealth)>33 && probability(66)) {
				hostileTarget.heal();
				log = `Supermutant heal ${20}HP`;
			} else if (percentage(hostileTarget.stats.health, hostileTarget.stats.maxHealth)<33 && probability(90)) {
				hostileTarget.heal();
				log = `Supermutant heal ${20}HP`;
			} else {
				let attack = hostileTarget.attack();
				character.hurt(attack);
				log = `Character receive ${attack} of damage`;
			}
		} else {
			log = `Supermutant dies.`;
		}
		return log;
	}
}