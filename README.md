##Aplikasi Pemesanan Kantin Sederhana
![Gambar Aplikasi](http://i1087.photobucket.com/albums/j474/Zulfindra_Juliant/aplikasi-kantin_zps68a41c51.jpg)

##Tentang Aplikasi
- Dengan Boostrap 3.3.1
- Pure Javascript
- Slim Framework (Hanya Routing and Template render)

##Cara Instalasi (Local Web Server)
- pertama download source-nya dari sini [Download Source](https://github.com/zulfinjuliant/aplikasikantinsederhana/archive/master.zip)
- pastikan kalian sudah menginstall xampp / wamp (saya memakai xampp)
- copas ke source htdocs dan rename dengan nama aplikasi-js
- sekarang gunakan virtual host di xampp kalian, lihat tutorialnya disini [Tutorial Virtual Host](http://blog.zulfin.web.id/membuat-virtual-host-di-lokal-web-server-xampp/)
- karena menggunakan slim framework sebagai routing dan viewnya, lihat tutorialnya disini [Tutorial Slim Template Render](http://docs.slimframework.com/#Rendering) dan [Tutorial Slim Routing](http://docs.slimframework.com/#Routing-Overview)

##Dokumentasi Code (index.php pada aplikasi-js/index.php)
```php
<?php

//add req autoload
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

//seting pathnya
$app = new \Slim\Slim(array('templates.path' => 'templates'));

//seting viewnya
$view = $app->view();
$view->setTemplatesDirectory('templates');
//path template ada di aplikasi-js/templates

//add req
require 'app/router.php';

//run slim yihaa
$app->run();

```
##Dokumentasi Code (router.php pada aplikasi-js/app/router.php)
```php
<?php
// http://docs.slimframework.com/#Routing-Overview
$app->get('/', function () use ($app) {$app->render('login.htm');});
$app->get('/aplikasi', function () use ($app) {$app->render('aplikasi.htm');});

```
##License
Lisensinya [GNU GPL V2](https://github.com/zulfinjuliant/aplikasikantinsederhana/blob/master/LICENSE)
