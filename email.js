var email 	= require("emailjs");
var server 	= email.server.connect({
   user:    "fasidmpm@gmail.com", 
   password:"ujzesvphjzafcvmy", 
   host:    "smtp.gmail.com",
   port : 465,
   ssl : true
});

exports.mail=function(data) {
	// body...
	return new Promise(function(resolve , reject) {
	server.send({
	from : 'fasidmpm@gmail.com',
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