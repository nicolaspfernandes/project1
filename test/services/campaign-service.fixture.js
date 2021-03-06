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
    userId: 10
};

const responseSearch = {
    Items: [{
        name: 'Campaign 1 User 10',
        userId: 10,
        createdAt: '01/01/2020',
        scheduledTo: '01/01/2030',
        sendTo: 'list',
        content: 'Welcome!'
    }, {
        name: 'Campaign 2 User 10',
        userId: 10,
        createdAt: '01/01/2020',
        scheduledTo: '01/01/2030',
        sendTo: 'list',
        content: 'Welcome!'
    }, {
        name: 'Campaign 1 User 20',
        userId: 20,
        createdAt: '01/01/2020',
        scheduledTo: '01/01/2030',
        sendTo: 'list',
        content: 'Welcome!'
    }, {
        name: 'Campaign 2 User 20',
        userId: 20,
        createdAt: '01/01/2020',
        scheduledTo: '01/01/2030',
        sendTo: 'list',
        content: 'Welcome!'
    },  {
        name: 'Campaign 3 User 20',
        userId: 20,
        createdAt: '01/01/2020',
        scheduledTo: '01/01/2030',
        sendTo: 'list',
        content: 'Welcome!'
    }, {
        name: 'Campaign 1 User 30',
        userId: 30,
        createdAt: '01/01/2020',
        scheduledTo: '01/01/2030',
        sendTo: 'list',
        content: 'Welcome!'
    }]
};

module.exports = {
    request, response,
    requestSearch, responseSearch
};