import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';

import template from './criarEvento.html';
import { Eventos } from '../../../api/eventos';

class CriarEvento {
    constructor($scope, $reactive, $state) {
        'ngInject';

        $reactive(this).attach($scope);

        this.evento = {};
    }

    submit() {
        this.evento.owner = Meteor.userId();
        Eventos.insert(this.evento);
        this.reset();
        $state.transitionTo('eventos');
    }

    reset() {
        this.evento = {};
    }
}

const name = 'criarEvento';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter
]).component(name, {
    template,
    controllerAs: name,
    controller: CriarEvento
}).config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('criar-evento', {
            url: '/criar-evento',
            template: '<criar-evento></criar-evento>'
        });
}