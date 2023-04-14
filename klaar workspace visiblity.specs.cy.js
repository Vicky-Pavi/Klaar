Cypress.on('uncaught:exception',(err,runnable) =>{
    return false
})
let rootMenu;
describe('workspace visiblity validation for admin and non admin credentials', function(){
    it('workspace visiblity validation for admin credentials', function(){
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
//NAVIGATING TO THE SETTINGS MODULE
 cy.contains('Settings').should('be.visible').click({force:true})

//Printing the side root menu for workspace visiblity validation
cy.xpath("/html/body/div[1]/app-root/app-layout/nz-layout/nz-sider/div/div/div[2]/div/ul").then((rootMenu)=>{
    cy.log('Side root menu: ',rootMenu.text())
})
      })

      it('workspace visiblity validation for non admin credentials', function(){
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
    //NAVIGATING TO THE SETTINGS MODULE
 cy.contains('Settings').should('be.visible').click({force:true})

 //Printing the side root menu for workspace visiblity validation
 cy.xpath("/html/body/div[1]/app-root/app-layout/nz-layout/nz-sider/div/div/div[2]/div/ul").then((rootMenu)=>{
     cy.log('Side root menu: ',rootMenu.text())
 })
    
        
        })


    })