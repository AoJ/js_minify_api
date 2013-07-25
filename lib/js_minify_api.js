/*!
 * js_minify_api
 * Copyright(c) 2011 AoJ on F <aoj@n13.cz>
 * MIT Licensed
 */

/**
 * Library version.
 */

exports.version = '0.0.1';
var cc = require('closure-compiler');
var bytes = require('bytes');



exports.compile = function(code, options, cb) {
	cc.compile(code, options, function(err, stdout, stderr){
		if(err || stderr) return cb({error: err, message: stderr});
		cb(null, stdout);
	})
}
