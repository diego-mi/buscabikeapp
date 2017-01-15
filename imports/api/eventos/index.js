import { Mongo } from 'meteor/mongo';

export const Eventos = new Mongo.Collection('eventos');

Eventos.allow({
    insert(userId, evento) {
        return userId && evento.owner === userId;
    },
    update(userId, evento, fields, modifier) {
        return userId && evento.owner === userId;
    },
    remove(userId, evento) {
        return userId && evento.owner === userId;
    }
});