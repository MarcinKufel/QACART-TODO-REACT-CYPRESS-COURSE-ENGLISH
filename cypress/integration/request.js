///<reference types="Cypress"/>


describe('Request command suite', () => {

    it('Get request', () => {
        cy.request('GET', 'http://localhost:8080/todos').then(response => {

        expect(response.status).to.be.eq(200)
        expect(response.duration).to.be.below(20000)
        expect(response.body[0].isComplete).to.be.true
        })
    })

})