'use strict';

const request = {
    name: 'Campaign test',
    userId: 10,
    scheduledTo: '01/01/2030',
    sendTo: 'list',
    content: 'Welcome!'
};

const response = {
    name: 'Campaign test',
    userId: 10,
    createdAt: '01/01/2020',
    scheduledTo: '01/01/2030',
    sendTo: 'list',
    content: 'Welcome!'
};

const requestSearch = {
    userId: 10,
    scheduledTo: '01/01/2030'
};

const responseSearch = [{
    name: 'Campaign test',
    userId: 10,
    createdAt: '01/01/2020',
    scheduledTo: '01/01/2030',
    sendTo: 'list',
    content: 'Welcome!'
}, {
    name: 'Campaign test',
    userId: 10,
    createdAt: '01/01/2020',
    scheduledTo: '01/01/2030',
    sendTo: 'list',
    content: 'Welcome!'
}, {
    name: 'Campaign test',
    userId: 10,
    createdAt: '01/01/2020',
    scheduledTo: '01/01/2030',
    sendTo: 'list',
    content: 'Welcome!'
}, {
    name: 'Campaign test',
    userId: 10,
    createdAt: '01/01/2020',
    scheduledTo: '01/01/2030',
    sendTo: 'list',
    content: 'Welcome!'
}];

module.exports = {
    request, response,
    requestSearch, responseSearch
};