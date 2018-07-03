# Project1

Welcome to the test project. By running this application, you will be able to create and list campaigns on your end and see how [Serverless](https://serverless.com) works.

#### Dependencies

In order to run this project, we need to setup some dependencies first:
 - [Node.js](https://nodejs.org/) 
 - [Docker](https://www.docker.com)
 - [Yarn](https://yarnpkg.com/lang/en/)

#### Steps
 - Download the source code from this repository;
 - Install all dependencies mentioned above;
 - Open a terminal window and run `yarn install` in order to download all required packages;
 - Run `npm run env:up` in order to set up both DynamoDB local instance and create a new table into it;
 - Run `npm start` to start the application.

#### Endpoints

| Endpoint | HTTP Verb | Description
| ----- | ----- | ----- |
| /campaigns | POST | Creates a new campaign.
| /campaigns | GET | Lists all existing campaigns.
| /campaigns/:userId | GET | Lists a group of campaigns for the given user identification.

#### Tests

Run the command below to see all test cases running:
```sh
$ npm test
```

If you want to see detailed coverage report, run the command below:
```sh
$ npm run coverage
```

#### Others

If you want to see ESLint running, just run the command below:
```sh
$ npm run lint
```