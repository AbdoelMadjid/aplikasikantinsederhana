<?php

//add req autoload
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

// Seting Pathnya
$app = new \Slim\Slim(array('templates.path' => 'templates'));

// Seting Viewnya
$view = $app->view();
$view->setTemplatesDirectory('templates');

//add req
require 'app/router.php';

//run slim
$app->run();