



# Title

A simple task management application written in Typescript using the MERN stack.

## About

This application supports basic CRUD operations on the client as well as the server. It allows users to manage daily tasks with a simple, minimalistic and responsive UI.

## Prerequisites
Node > v16 <br>
NPM<br>
MongoDB<br>
Docker (if you choose second setup)<br>

## Setup and Installation

Clone the project by running:

```

$ git clone https://github.com/GrooyaO/task-manager.git

```

### There are two ways to setup this project:

For both approaches, make sure you've got .env setup. You can copy values from env.example.

1. **Regular setup with npm and local MongoDB instance connection (MongoDB Compass preferred) - this is preferred way**

Once the project is cloned, cd into the "root" directory and run:

```

$ npm install

```

The command above will install root dependencies.

The next step is to install client and server directory dependencies. Run this command in **root**:

```

$ npm run installDeps

```
**Note:**
MongoDB should be run via shell or via any desktop client in order to achieve local connection to the DB.
Database connection will fallback to default which is 'mongodb://localhost:27017/' if not specified in .env.

In order to start the project, just run the following command in **root**, it will run both client and server projects:

```

$ npm start

```
The client address should be on http://localhost:5173/<br>
The server address should be on http://localhost:8000/<br>

2. **Docker containers**

You must have Docker installed in order to go with this approach.

Once the project is cloned, cd into the **root** directory and run:

```

$ docker compose build

```

This will build Docker images. Then run:

```

$ docker compose up

```

This will start Docker containers inside Docker.
Then just enter the url into browser bar (the one from .env or just copy .env.exaple).<br>
The client address should be on http://localhost:5173/<br>
The server address should be on http://localhost:8000/<br>
## Development Approach

For faster development at the start, I've used concurrently to run both client and server in parallel. It is easier and less hassle to develop with both of these running simultaneously.

At a later stage, the Docker was introduced in order to bridge the gap when it comes to rolling this into production. The setup is only for development purposes, but the base is there.

## Client-side libraries

React queries are used for server-side data fetching as well as query invalidation and catching async errors on the client.

Axios is used as the primary HTTP network client.

MUI is used for componentization.

## Server side

Express is used as the server of choice.

MongoDB is the database of choice alongside Mongoose as an ODM library.

## Next steps

Tests should be primary objective to be added next and then the CI/CD pipeline once there is need for it.<br>
Error handling middleware should be more robust.

