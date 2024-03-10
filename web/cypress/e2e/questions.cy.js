import data from '../fixtures/questions.json'

describe('receber perguntas', ()=>{
    
    it('deve poder receber uma notificação com uma pergunta do aluno', ()=>{

        const dataTest = data.create
        cy.resetStudent(dataTest.student)
        cy.createEnroll(dataTest)
        cy.createQuestion(dataTest.question)


    })

})