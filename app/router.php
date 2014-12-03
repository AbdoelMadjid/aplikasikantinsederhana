<?php
// http://docs.slimframework.com/#Routing-Overview
$app->get('/', function () use ($app) {$app->render('login.htm');});
$app->get('/aplikasi', function () use ($app) {$app->render('aplikasi.htm');});