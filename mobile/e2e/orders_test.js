const orders = require('../fixtures/orders.json')
Feature('Pedido de ajuda')

Scenario('Deve poder enviar um pedido de ajuda', async ({ I, login, account, helpOrder }) => {

    const dataTest = orders.help


    I.resetStudent(dataTest.student)
    const enrollment_code = await I.createEnroll(dataTest)

    login.submit(enrollment_code)
    account.userLoggedIn()
    helpOrder.submitOrder(dataTest.question)


    I.popHaveText('Sua dúvida foi recebida e será avaliada pela nossa equipe. Agora é só aguardar para receber o nosso feedback.')

}) 