class Navbar {

    userLoggedIn(name){

        cy.contains('aside .logged-user', 'Olá, ' + name)
        .should('be.visible')

    }

    goToEnrolls(){
        cy.get('a[href="/enrollments"]')
            .click()
    }

    openNotifications(){
        cy.get('.notifications button').click({force: true}, {timeout: 10000})

    }
}

export default new Navbar()