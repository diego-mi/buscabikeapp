import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './login.html';

class Login {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.usuario = {};
    }

    login() {
        Meteor.loginWithPassword(this.usuario.email, this.usuario.password);
    }
}

const name = 'login';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter
]).component(name, {
    template,
    controllerAs: name,
    controller: Login
}).config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('login', {
            url: '/login',
            template: '<login></login>'
        });
}