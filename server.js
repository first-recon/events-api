const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const EventsService = require('./lib/service');

const eventsService = new EventsService();

const server = express(bodyParser.json());

server.get('/', (req, res) => {
    if (req.query.id) {
        eventsService.getById(req.query.id)
            .then((events) => {
                res.send({ success: true, results: events });
            })
            .catch((error) => {
                console.log(error);
                res.send({ success: false, error });
            });
    } else {
        eventsService.getAll()
            .then((events) => {
                res.send({ success: true, results: events });
            })
            .catch((error) => {
                console.log(error);
                res.send({ success: false, error });
            });
    }
});

server.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
});