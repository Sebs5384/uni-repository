# ALTA DE PRODUCTOS Y CATEGORIAS

Este es un pequeño programa de tipo CRUD el cual tiene como proposito ayudar al usuario a hacer registros tanto de productos como de categorias.



# DEPENDENCIAS

- [Bootstrap](https://getbootstrap.com/) - El framework mas popular de CSS que nos ayuda a construir webs con diseño responsive.
- [Cypress](https://www.cypress.io/) - Cypress es un framework que utilizamos para hacer pruebas e2e (extremo a extremo) basado en el lenguaje Javascript
- [Http-server](https://www.npmjs.com/package/http-server) - Un servidor HTTP que usa linea de comandos simple para correr archivos estaticos localmente.
- [XAMPP](https://www.apachefriends.org/index.html) - Packete de software que incluye, Apache, PHP, mySql y Pearl para desarrollo local.
- [PHPMyAdmin](https://www.phpmyadmin.net/) - Una herramienta con bases en web la cual nos ayuda a administrar nuestra base de datos.



# INSTALACION

Primeramente necesitamos clonar el repositorio

```git clone https://github.com/Sebs5384/uni-repository.git```

Seguido de esto vamos a instalar nuestras dependencias con NPM

```npm install```

Levantamos nuestros servidores, uno de ellos tiene que ser bajado de la internet.

- Para correr el servidor ya instalado en nuestras dependencias, debemos de hacer uso de 
```npm start http-server```

- Para correr Apache debemos de bajarnos [XAMPP](https://www.apachefriends.org/index.html) desde la pagina oficial una vez logrado esto solo debemos encargarnos de correr Apache y MySql en la interfaz que nos ofrece XAMPP 

En cuanto a nuestra dependencia de testeo, cypress. Esta no se vera descargada ya que es una dependencia de tipo -dev, la cual yo mismo use para hacer testeo de mi propio programa.

- Aun asi, si se desea descargar hay que hacer la instalacion por ende, ```npm install cypress``` o ```npm install --save-dev cypress```
 Si es que se busca solo usar Cypress como dependencia de desarrollador.

- Si se desean correr los test debemos de remplazar la ```constante URL``` en el respectivo spec por nuestro respectivo ```localhost```

# Administracion de la base de datos

Para lograr administrar de la base de datos, se debe de visitar el ```localhost/dashboard``` de nuestro servidor que esta corriendo localmente y dirigirse al apartado PhpMyAdmin
Aqui vamos a poder hacer uso de la base de datos que deseamos crear, en nuestro caso la base de datos se llama "MIPROYECTO"

Para lograr conectarnos a esta debemos de hacer llamado de la clase ```database``` creando una nueva instancia de esta con los datos de la misma.

# Proximamente

Este proyecto esta siendo impartido por mi universidad y el mismo se ve incompleto, proximamente se veran agregadas nuevos features que nos serviran para hacer un mejor uso de este programa.
