



describe("test all the todos using the API", () => {


    it("should add a todo correctly using", () => {
             cy.request({
                method:"POST",
                url: "http://localhost:8080/todos",
                body: {
                    "name": "todo1",
                    "isComplete": false
                }
             }).then(response => {
                 expect(response.status).to.eq(201)
                 expect(response.body.name).to.eql('todo1')
             })
    })
})