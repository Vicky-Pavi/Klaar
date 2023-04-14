Cypress.on('uncaught:exception',(err,runnable) =>{
    return false
})
describe('Klaar-1. Login test', function(){

    it('Login test Negative Scenerio- clicking the submit btn without entering any credentials for error Message Validation', function(){
        //Launching the web application
        cy.visit('https://dev.klaarhq.com/auth/sign_in?returnUrl=%2Fprofile')
        cy.wait(2000)
        //controlling the size of the screen
        cy.viewport(1366,768)
        //clicking the submit btn
        cy.get('#login-btn').should('be.visible').click()
        //verifying the alert message under the username input field
        cy.contains('Please enter valid email or phone number ').should('exist')
        //verifying the alert message under the Password input field
        cy.contains("Please enter your password here").should('exist')
        })
        
    it('Validating the error message with invalid username and valid password - Negative Scenerio', function(){
        //Launching the web application
        cy.visit('https://dev.klaarhq.com/auth/sign_in?returnUrl=%2Fprofile')
        cy.wait(2000)
        //controlling the size of the screen
        cy.viewport(1366,768)
        //Username
        cy.get('#email-field').should('be.visible').type('21364#$%^')
        //verifying the alert message under the username input field
cy.contains('Please enter valid email or phone number ').should('exist')
        //Password
        cy.get('#password-field').should('be.visible').type('Klaar2021')
        //clicking the remember me checkbox 
        cy.xpath("/html/body/div[1]/app-root/app-sign-in/div/div[2]/div[1]/form/div/label/span[1]/input").should('not.be.checked').click
        //clicking the submit btn
        cy.get('#login-btn').should('be.visible').click()
        //verifying the alert message under the username input field
cy.contains('Please enter valid email or phone number ').should('exist')
        
        })
        it('Validating the error message with valid username and invalid password - Negative Scenerio', function(){
            //Launching the web application
            cy.visit('https://dev.klaarhq.com/auth/sign_in?returnUrl=%2Fprofile')
            cy.wait(2000)
            //controlling the size of the screen
            cy.viewport(1366,768)
            //Username
            cy.get('#email-field').should('be.visible').type('deepa.nayak@gamma.klaar.team')
            //Password
            cy.get('#password-field').should('be.visible').type('223366')
            //clicking the remember me checkbox 
            cy.xpath("/html/body/div[1]/app-root/app-sign-in/div/div[2]/div[1]/form/div/label/span[1]/input").should('not.be.checked').click
            //clicking the submit btn
            cy.get('#login-btn').should('be.visible').click()
            //verifying the alert message 
            cy.xpath('/html/body/div[1]/app-root/app-sign-in/div/div[2]/div[1]/app-alerts/div/p').should('exist')
            })

it('Admin Login Test - Positive Scenerio', function(){
//Launching the web application
cy.visit('https://dev.klaarhq.com/auth/sign_in?returnUrl=%2Fprofile')
cy.wait(2000)
//controlling the size of the screen
cy.viewport(1366,768)
//Username
cy.get('#email-field').should('be.visible').type('deepa.nayak@gamma.klaar.team')
//Password
cy.get('#password-field').should('be.visible').type('Klaar2021')
//clicking the remember me checkbox 
cy.xpath("/html/body/div[1]/app-root/app-sign-in/div/div[2]/div[1]/form/div/label/span[1]/input").should('not.be.checked').click
//clicking the submit btn
cy.get('#login-btn').should('be.visible').click()
//checking the launching URL of the page
cy.url().should('eq','https://dev.klaarhq.com/profile')
//validating the Profile name
cy.contains('Deepa Nayak').should('be.visible')
})

it('Non Admin Login Test - Positive Scenerio', function(){
    //Launching the web application
    cy.visit('https://dev.klaarhq.com/auth/sign_in?returnUrl=%2Fprofile')
    cy.wait(2000)
    //controlling the size of the screen
    cy.viewport(1366,768)
    //Username
    cy.get('#email-field').should('be.visible').type('arya.mahato@gamma.klaar.team')
    //Password
    cy.get('#password-field').should('be.visible').type('Klaar2021')
    //clicking the remember me checkbox 
    cy.xpath("/html/body/div[1]/app-root/app-sign-in/div/div[2]/div[1]/form/div/label/span[1]/input").should('not.be.checked').click
    //clicking the submit btn
    cy.get('#login-btn').should('be.visible').click()
    //checking the launching URL of the page
    cy.url().should('eq','https://dev.klaarhq.com/profile')
    //validating the profile name
    cy.contains('Arya Mahato').should('be.visible')


    
    })

})