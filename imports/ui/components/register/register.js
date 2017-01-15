import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './register.html';

class Register {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.usuario = {};
    }

    create() {
        Accounts.createUser({
            email: this.usuario.email,
            password: this.usuario.password
        });
    }
}

const name = 'register';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter
]).component(name, {
    template,
    controllerAs: name,
    controller: Register
}).config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('register', {
            url: '/register',
            template: '<register></register>'
        });
}