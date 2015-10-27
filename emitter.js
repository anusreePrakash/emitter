
var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('karnataka',function(){
	console.log("hegidhiyya")
})

eventEmitter.emit('karnataka');













