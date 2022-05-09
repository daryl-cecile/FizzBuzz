let answerArr = [];

const output = (...args) => {
	console.log.call(this,...args);
	answerArr.push(args[0]);
}
