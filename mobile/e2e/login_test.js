const students = require('../fixtures/students.json')

Feature('login', 'account')

Scenario('testando o app', async ({ I, login, account }) => {
    const dataTest = students.sucess_login;

    I.resetStudent(dataTest.student)
    const enrollment_code = await I.createEnroll(dataTest)

    login.submit(enrollment_code)
    account.userLoggedIn()
});

Scenario('não deve logar com matricula incorreta', ({ I, login }) => {
    login.submit('YZI5W5')
    I.popHaveText('Acesso não autorizado! Entre em contato com a central de atendimento.')

});

Scenario('não deve logar com plano health', async ({ I, login }) => {
    const dataTest = students.not_login;
    
    I.resetStudent(dataTest.student)
    const enrollment_code = await I.createEnroll(dataTest)

    login.submit(enrollment_code)

    I.popHaveText('Seu plano não possui permissão para uso do App! Entre em contato com a central de atendimento.')

});