// import angularjs and router
import angular from 'angular';
import 'angular-ui-router';

//import configs and constants
import { config } from './config';
import { serverConstant } from './const';

//import controllers
import { AddController } from './controllers/add.controller';
import { homeController } from './controllers/home.controller';


angular
.module('app', ['ui.router'])
.controller('AddController', AddController)
.config(config)
.constant('SERVER', serverConstant)

;
