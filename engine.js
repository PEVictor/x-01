var logs = document.querySelector('#logs');

var combatOverSwitch = false;

var hostileTarget = supermutant;

const win = () => {
	newLog(logs, "Hostile target down.");
	combatOver();
}
const lose = () => {
	//newLog(logs, "The integrity of the power armor has been compromised. You're probably going to die.");
	newLog(logs, "Your health has been compromised and you can't fight anymore. You are dead.");
	combatOver();
}

console.log(document.getElementsByClassName('action')[0]);
const combatOver = () => {
	combatOverSwitch = true;
	Array.prototype.forEach.call(document.getElementsByClassName('action'), (ele) => {
		ele.style.display = 'none';
	});
}

const reset = () => {
	newLog(logs, "Reset");
	window.location.reload();
}

const setStats = () => {
	document.querySelector('#hostile-target').innerHTML = hostileTarget.name;
	document.querySelector('#hostile-target-health').innerHTML = hostileTarget.stats.health;
	document.querySelector('#health').innerHTML = soldier.stats.health;
	document.querySelector('#power-armor').innerHTML = soldier.stats.powerArmor;
}

const refresh = (log) => {
	setStats();
	newLog(logs, log);
	if (hostileTarget.stats.health === 0) {
		win();
	} else if (soldier.stats.health === 0) {
		lose();
	}
   	logs.scrollTop = logs.scrollHeight - logs.clientHeight;
}

refresh('Hostile target spotted.');
setStats();

document.querySelector('#plasma-shot').onclick = () => {
	console.log("plasmaShot");
	refresh(soldier.action(hostileTarget, 'plasmaShot'));
	refresh(hostileTarget.action(soldier));
}
document.querySelector('#dodge-propulsion').onclick = () => {
	refresh(soldier.action(hostileTarget, 'dodgePropulsion'));
	refresh(hostileTarget.action(soldier));
}
document.querySelector('#stimpak').onclick = () => {
	refresh(soldier.action(hostileTarget, 'stimpak'));
	refresh(hostileTarget.action(soldier));
}
document.querySelector('#reset').onclick = () => {
	reset();
}