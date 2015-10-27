
var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('karnataka',function(){
	console.log("hegidhiyya")
});
eventEmitter.once('karnataka',function(){
	console.log('goth aaytha')
});
eventEmitter.once('malayalam',function(){
	console.log('sukam ano')
});
eventEmitter.once('marathi',function(){
	console.log('kashya hes')
});
eventEmitter.once('bengali',function(){
	console.log('kya mo nacho')
});
eventEmitter.once('telungu',function(){
	console.log('ela unnav')
});
eventEmitter.once('tamil',function(){
	console.log('eppadi irukk')
});



eventEmitter.emit('karnataka');
eventEmitter.emit('karnataka');
eventEmitter.emit('malayalam');
eventEmitter.emit('marathi');
eventEmitter.emit('bengali');
eventEmitter.emit('telungu');
eventEmitter.emit('tamil');

















