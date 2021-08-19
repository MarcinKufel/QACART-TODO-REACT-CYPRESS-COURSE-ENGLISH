///<reference types="Cypress"/>

describe('filter functionality test cases', () => {


    before(() => {
        cy.visit("/");
        const todosExample = ['todo1', 'todo2', 'todo3', 'todo4', 'todo5'].forEach(todo => {
            cy.addNewTodo(todo);

        })
        cy.get('.todo-checkbox').first().check().should('be.checked');
        cy.get('.todo-checkbox').last().check().should('be.checked');


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