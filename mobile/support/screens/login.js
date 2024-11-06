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
    I.fillField(this.locator.ip, '10.10.2.106')

    I.waitForElement(this.locator.enrollment,5)
    I.fillField(this.locator.enrollment, enrollmentCode)

    I.tap('Entrar')

  }

}
