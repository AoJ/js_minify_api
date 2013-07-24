var express = require('express');
var util = require('util');
var compiler = require('./index');
var bytes = require('bytes');



app = express();
app.configure(function() {
    app.use(express.bodyParser())
    app.use(app.router);
});


app.post('/compile', function(req, res){
	var options = req.body;
	var code = req.body.js_code;
	delete options.js_code;

	util.log('compile, code size: ' + bytes(code.length));

	compiler.compile(code, options, function(err, output){
		if(err) return res.send(err);
		res.send(output);
	})
})



process.on('uncaughtException', function(err) {
    console.error(err.stack);
});

app.listen(process.argv[2] || 3000, function() {
    util.log('server listen on ' + process.argv[2] || 3000);
});