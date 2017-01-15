import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './eventos.html';

class Eventos {}

const name = 'eventos';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter
]).component(name, {
    template,
    controllerAs: name,
    controller: Eventos
}).config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('eventos', {
            url: '/eventos',
            template: '<eventos></eventos>',
            resolve: {
                currentUser($q) {
                    if (Meteor.userId() === null) {
                        return $q.reject('AUTH_REQUIRED');
                    } else {
                        return $q.resolve();
                    }
                }
            }
        });
}