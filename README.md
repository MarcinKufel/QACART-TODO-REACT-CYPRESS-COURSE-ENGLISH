
### Instructions to run the code locally

-   Clone the app into your machine.
-   Download json-server package globaly using `npm install -g json-server`.
-   Go to the directory of the app in the command line.
-   install all the dependences using `npm install`
-   Run the backend using `npm run start:server `
-   The server will be up and running on port 8080.
-   keep the server running and open another window from the terminal.
-   navigate to the directory of the app in the command line.
-   Start the front end using `npm run start:frontend`.
-   The app will be opened in your browser http://localhost:3000/

### API Instructions

We Have 3 API end points:

#### Todos API:

and here is public API, any one can read, write, update and delete, and we use this API in our frontEnd.

details of this API:

-   GET all the todos:
    `GET http://localhost:3000/todos`

and this will return all the todos as below:

```json
[
    {
        "name": "Study Cypress",
        "id": 1,
        "isComplete": true
    },
    {
        "name": "Play PES",
        "id": 2,
        "isComplete": false
    },
    {
        "name": "Contact Paul",
        "id": 3,
        "isComplete": true
    },
    {
        "name": "Go to the market",
        "id": 4,
        "isComplete": false
    }
]
```

-   GET one todo
    `GET http://localhost:3000/todos?id=${id}`

And this call will return one to do as below:

```json
[
    {
        "name": "Study Cypress",
        "id": 1,
        "isComplete": true
    }
]
```

-   POST new todo
    `POST http://localhost:3000/todos`

and the body is:

```json
{
    "name": "Study Cypress",
    "id": 1,
    "isComplete": false
}
```

And this call will return the newely added todo as below:

```json
{
    "name": "study cypress",
    "isComplete": false,
    "id": 5
}
```

-   Update complete status for a todo:

`PUT http://localhost:3000/todos/${id}`

and the body is:

```json
{
    "name": "Study Cypress",
    "id": 1,
    "isComplete": true
}
```

And this call will return the updated tasks:

```json
{
    "name": "study Cypress",
    "isComplete": true,
    "id": 1
}
```

-   Delete a specific todo

`DELETE http://localhost:3000/todos/${id}`

And this will delete the todo

#### users API:

And here we can signup and login users

-   Signup a new user:
    `POST http://localhost:3000/signup`

and the body is

```json
{
    "email": "olivier@mail.com",
    "password": "bestPassw0rd",
    "firstname": "Olivier",
    "lastname": "Monge",
    "age": 32
}
```

This call will retuen the token as below:

```json
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9saXZpZXJAbWFpbC5jb20iLCJpYXQiOjE2MTA1Njk0OTcsImV4cCI6MTYxMDU3MzA5Nywic3ViIjoiMSJ9.zapn_VZP2eBtRUy-9m_0EHGYFmsv2WYWJONSEv04tqA"
}
```

-   Login in a user
    `POST http://localhost:3000/login`

and the body is

```json
{
    "email": "olivier@mail.com",
    "password": "bestPassw0rd"
}
```

This call will retuen the token as below:

```json
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9saXZpZXJAbWFpbC5jb20iLCJpYXQiOjE2MTA1Njk0OTcsImV4cCI6MTYxMDU3MzA5Nywic3ViIjoiMSJ9.zapn_VZP2eBtRUy-9m_0EHGYFmsv2WYWJONSEv04tqA"
}
```

#### courses API:

-   Get all courses
    `GET http://localhost:8080/courses`

user must be logged in to get access to this course
