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

    it.only('post request', () => {
        cy.request('POST', 'http://localhost:8080/todos', {
            "name": "test1",
            "isComplete": false
        }).then(response => {
            expect(response.status).to.eq(201)
    })
    })

})