///<reference types="Cypress"/>


describe('Request command suite', () => {

    it('Get request', () => {
        cy.request('GET', 'http://localhost:8080/todos').then(response => {

        expect(response.status).to.be.eq(200)
        expect(response.duration).to.be.below(20000)
        expect(response.body[0].isComplete).to.be.true
        })
    })

    it('Get request', () => {
        cy.visit('http://localhost:3000')
        cy.request({
            method: 'GET',
            url:'http://localhost:8080/todos',
            qs: {
                "id": 1
            },

        }).then(response => {

        expect(response.body[0].isComplete).to.be.true
        })
    })

    it('post request', () => {
        cy.request('POST', 'http://localhost:8080/todos', {
            "name": "test1",
            "isComplete": false
        }).then(response => {
            expect(response.status).to.eq(201)
    })
    })

    it('Put request', () => {
        
        cy.request('PUT', 'http://localhost:8080/todos/7147', {"name":"test1","isComplete":true,"id":7147})
    })

    it('Delete', () => {
        cy.request('DELETE', 'http://localhost:8080/todos/7150')
    })

    it('secured api', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/courses',
            auth: {
                bearer: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9saXZpZXIyMjJAbWFpbC5jb20iLCJpYXQiOjE2MjkyODcwMTAsImV4cCI6MTYyOTI5MDYxMCwic3ViIjoiNSJ9.7VqIjzRszQvpna8mgG14YRF0dm19nyN-2t7-Z9lw97c'
            }
        })
    })

    it.only('secured api2', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/courses',
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9saXZpZXIyMjJAbWFpbC5jb20iLCJpYXQiOjE2MjkyODcwMTAsImV4cCI6MTYyOTI5MDYxMCwic3ViIjoiNSJ9.7VqIjzRszQvpna8mgG14YRF0dm19nyN-2t7-Z9lw97c"
            }
        })
    })
})