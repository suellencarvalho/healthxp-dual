import students from '../fixtures/students.json'

import studentPage from '../support/pages/StudentPage'


describe('alunos', () => {

    it('deve poder cadastrar um novo aluno', () => {

        const student = students.create

        cy.task('deleteStudent', student.email)

        cy.adminLogin()


        studentPage.goToRegister()
        studentPage.submitForm(student)
        studentPage.popup.haveText('Dados cadastrados com sucesso.')

    })

    it('não deve cadastrar com e-mail duplicado', () => {
        const student = students.duplicate


        cy.task('resetStudent', student)

        cy.adminLogin()

        studentPage.goToRegister()
        studentPage.submitForm(student)
        studentPage.popup.haveText('O email informado já foi cadastrado!')
    })

    it('deve remover um aluno sem matricula', () => {

        const student = students.remove

        cy.task('resetStudent', student)

        cy.adminLogin()

        studentPage.search(student.name)
        studentPage.remove(student.email)
        studentPage.popup.confirm()
        studentPage.popup.haveText('Exclusão realizada com sucesso.')
    })

    it('todos os campos são obrigatórios', () => {
        const student = students.required

        cy.adminLogin()
        studentPage.goToRegister()
        studentPage.submitForm(student)
        studentPage.requiredMessage('Nome completo', 'Nome é obrigatório')
        studentPage.requiredMessage('E-mail', 'O email é obrigatório')
        studentPage.requiredMessage('Idade', 'A idade é obrigatória')
        studentPage.requiredMessage('Peso (em kg)', 'O peso é obrigatório')
        studentPage.requiredMessage('Altura', 'A altura é obrigatória')

    })

    // Tentar cadastrar um aluno menor de 16 anos:

    it('não deve cadastrar aluno menor de 16 anos', () => {

        const student = students.aluno_menor
        // Dado que estou logado como Administrador da academia
        cy.adminLogin()
        // E que acessei o formulário de cadastro de alunos
        studentPage.goToRegister()
        // Quando tento cadastrar um aluno com idade igual ou menor a 16 anos
        studentPage.submitForm(student)

        // Então o sistema não permite o cadastro, exibindo uma mensagem de alerta no campo idade
        studentPage.requiredMessage('Idade', 'A idade mínima para treinar é 16 anos!')

    })

// Tentar cadastrar informando peso incorreto:
    it('não deve cadastrar com peso incorreto', () =>{
        const student = students.peso_zero
        cy.task('deleteStudent', student.email)
        // Dado que estou logado como Administrador da academia
        cy.adminLogin()
        // E que acessei o formulário de cadastro de alunos
        studentPage.goToRegister()
        // Quando tento cadastrar um aluno informando um peso menor ou igual a ZERO
        studentPage.submitForm(student)

        // Então o sistema não permite o cadastro, exibindo uma mensagem de alerta no campo idade
        studentPage.requiredMessage('Peso (em kg)', 'O peso é obrigatório')
    })

    // Tentar cadastrar informando altura incorreta:
    it('não deve cadastrar com altura incorreta', () =>{
        const student = students.altura_zero

        cy.task('deleteStudent', student.email)
        // Dado que estou logado como Administrador da academia
        cy.adminLogin()
        // E que acessei o formulário de cadastro de alunos
        studentPage.goToRegister()
        // Quando tento cadastrar um aluno informando um peso menor ou igual a ZERO
        studentPage.submitForm(student)

        // Então o sistema não permite o cadastro, exibindo uma mensagem de alerta no campo idade
        studentPage.requiredMessage('Altura', 'Altura minima permitida 1.45' )
    })
    // Dado que estou logado como Administrador da academia
    // E que acessei o formulário de cadastro de alunos
    // Quando tento cadastrar um aluno informando uma altura menor ou igual a ZERO
    // Então o sistema não permite o cadastro, exibindo uma mensagem de alerta no campo altura

})