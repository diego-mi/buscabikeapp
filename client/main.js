import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as Buscabike } from '../imports/ui/components/buscabike/buscabike';

function onReady() {
    angular.bootstrap(document, [
        Buscabike
    ], {
        strictDi: true
    });
}

if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}