import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './buscabike.html';

import { name as Login } from '../login/login';
import { name as Register } from '../register/register';
import { name as Eventos } from '../eventos/eventos';
import { name as CriarEvento } from '../criarEvento/criarEvento';

class Buscabike {}

const name = 'buscabike';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    Login,
    Register,
    Eventos,
    CriarEvento,
    'accounts.ui'
]).component(name, {
    template,
    controllerAs: name,
    controller: Buscabike
}).config(config)
    .run(run);

function config($locationProvider, $urlRouterProvider, $qProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/login');

    $qProvider.errorOnUnhandledRejections(false);
}

function run($rootScope, $state) {
    'ngInject';

    $rootScope.$on('$stateChangeError',
        (event, toState, toParams, fromState, fromParams, error) => {
            if (error === 'AUTH_REQUIRED') {
                $state.go('login');
            }
        }
    );

    Accounts.onLogin(function () {
        if ($state.is('login')) {
            $state.go('eventos');
        }
    });

    Accounts.onLoginFailure(function () {
        $state.go('login');
    });
}