var email 	= require("emailjs");
var server 	= email.server.connect({
   user:    "xxxxx@gmail.com", 
   password:"xxxxxxxxxxxxx", 
   host:    "smtp.gmail.com",
   port : 465,
   ssl : true
});

exports.mail=function(data) {
	// body...
	console.log(data.email , 'try')
	return new Promise(function(resolve , reject) {
	server.send({
	from : 'xxxxxxxxx@gmail.com',
	text : data.desc,
	to:data.email,
	subject:`${data.subject}`
} , function (err, message) {
	// body...
	if (err) {
		console.log(err);
		reject(err);
	} else {
		resolve(message);
	}
});
	});
}
