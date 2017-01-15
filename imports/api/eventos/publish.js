import { Meteor } from 'meteor/meteor';

import { Eventos } from './collection';

if (Meteor.isServer) {
    Meteor.publish('eventos', function() {
        const selector = {
            $or: [{
                // the public parties
                $and: [{
                    public: true
                }, {
                    public: {
                        $exists: true
                    }
                }]
            }, {
                // when logged in user is the owner
                $and: [{
                    owner: this.userId
                }, {
                    owner: {
                        $exists: true
                    }
                }]
            }]
        };

        return Eventos.find(selector);
    });
}
