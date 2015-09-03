console.log("Arrancando server de Node");

var express = require("express");
var parcero = require("body-parser");
var web = express();
web.use(parcero.urlencoded());
var servidor;

var basededatos = {
	usuario: "freddier",
	password: "mejorandola"
};


servidor = web.listen(8080,function  () {
	// body...
	console.log("Servidor Arrancado!!!");
});

web.get("/",function  (req, res) {
	// body...
	// console.log(req);
	// res.send("Buen Trabajo, lograste un servidor web!" );
	res.sendfile("formulario.html");

});

web.post("/entrar", function  (req, res) {
	// body...
	if (req.body.usuario == basededatos.usuario && req.body.clave == basededatos.password) {
		res.send("Bienvenido al area Secreta");
	}
	else{
		res.send("Shuu, shuu, shuu, fuera de aqui!");
	}
	console.log(req.body);
	res.send("Entraste!");

})


/*PRUEBA DE URLs
web.get("/hola/mama-es-linda",function  (req, res) {
	// body...
	res.send("Hola <strong>mama</strong>, estoy triunfando");
});
//prueba de variable get
web.get("/test",function  (req, res) {
	// body...
	console.log(req);
	res.send("Tu avion es el " + req.query.avion + " y tu edad es " +req.query.edad );
});*/
