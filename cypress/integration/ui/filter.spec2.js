///<reference types="Cypress"/>

describe('filter functionality test cases', () => {


    before(() => {
        cy.addDummyTodos();
        cy.visit("/") 
    })

    it("should filter out the complete todos correctly", () => {

    })


    after(() => {
        cy.get('body').then($el => {
            if($el.find('.delete-item').length > 0) {
                cy.get('.delete-item').click({multiple: true});
            }
        })
        
    })
})