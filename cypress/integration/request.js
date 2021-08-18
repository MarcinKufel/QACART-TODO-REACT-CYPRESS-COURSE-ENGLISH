/// <reference types="Cypress" />


describe('Request command suite', () => {

    it('Get request', () => {
        cy.request('GET', 'http://localhost:8080/todos').then(response => {

        cy.log(response.status)
        })
    })

})