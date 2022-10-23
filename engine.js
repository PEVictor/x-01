var logs = document.querySelector('#logs');

const win = () => {
	newLog(logs, "Hostile target down.");
}
const lose = () => {
	newLog(logs, "The integrity of the power armor has been compromised. You are dead.");
}

const reset = () => {
	newLog(logs, "Reset");
	window.location.reload();
}

const setStats = () => {
	document.querySelector('#hostile-target-health').innerHTML = hostileTarget.stats.health;
	document.querySelector('#health').innerHTML = powerArmor.stats.health;
	document.querySelector('#power-armor').innerHTML = powerArmor.stats.powerArmor;
}

const refresh = (log) => {
	setStats();
	newLog(logs, log);
	if (hostileTarget.stats.health === 0) {
		win();
	} else if (powerArmor.stats.health === 0) {
		lose();
	}
   	logs.scrollTop = logs.scrollHeight - logs.clientHeight;
}

refresh('Hostile target spotted.');
setStats();

document.querySelector('#plasma-shot').onclick = () => {
	console.log("plasmaShot");
	refresh(powerArmor.action(hostileTarget, 'plasmaShot'));
	refresh(hostileTarget.action(powerArmor));
}
document.querySelector('#dodge-propulsion').onclick = () => {
	refresh(powerArmor.action(hostileTarget, 'dodgePropulsion'));
	refresh(hostileTarget.action(powerArmor));
}
document.querySelector('#stimpak').onclick = () => {
	refresh(powerArmor.action(hostileTarget, 'stimpak'));
	refresh(hostileTarget.action(powerArmor));
}
document.querySelector('#reset').onclick = () => {
	reset();
}