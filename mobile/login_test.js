Feature('login')

Scenario('testando o app',  ({ I , loginScreen}) => {

    
    loginScreen.submit('GB0S6J')
    I.see('Minha conta')
})

Scenario('não deve logar com matricula incorreta', ({loginScreen})=>{
    loginScreen.submit('XPTO123')

    const message ='Acesso não autorizado! Entre em contato com a central de atendimento.'
    loginScreen.messageHaveText(message)
})
