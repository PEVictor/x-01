
const probability = (val) => {
	return Math.floor(Math.random() * (100 - 0))>(100-val);
}

const percentage = (partialValue, totalValue) => {
   return (100 * partialValue) / totalValue;
}

function newLog(logs, log) {
  var node = document.createElement("P");
  var textnode = document.createTextNode(log);
  node.appendChild(textnode);
  logs.appendChild(node);
}

const wait = (ms) => {
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}