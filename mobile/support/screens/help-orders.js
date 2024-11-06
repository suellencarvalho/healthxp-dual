

module.exports = {

  locator: {
    btnOrder: {android: '#btnHelperOrder'},
    textQuestion: {android: '#textQuestion'},
    btnSubmit: {android: '#btnSubmit'}
  },

  submitOrder(question){
    const { I } = inject();
    
    I.tap('Pedir ajuda')

    I.click(this.locator.btnOrder)

    I.fillField(this.locator.textQuestion, question)

    I.click(this.locator.btnSubmit)

  }

}
