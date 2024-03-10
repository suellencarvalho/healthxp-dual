const { I } = inject();

module.exports = {

  locator: {
    ip: {android: '#ipAddress'},
    enrollment: {android: '#enrollment_code'},
    message: {android: '#android:id/message'}
  },

  submit(enrollmentCode){

    I.seeAppIsInstalled('com.papitorocks.healthxp')

    I.waitForElement(this.locator.ip,5)
    I.fillField(this.locator.ip, '192.0.0.115')

    I.waitForElement(this.locator.enrollment,5)
    I.fillField(this.locator.enrollment, enrollmentCode)

    I.tap('Entrar')

  },

  messageHaveText(text){

    I.waitForElement(this.locator.message,5)
    I.see(text, this.locator.message)

  }
}
