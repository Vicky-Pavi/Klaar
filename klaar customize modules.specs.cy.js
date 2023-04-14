Cypress.on('uncaught:exception',(err,runnable) =>{
    return false
})
let headings;
let sideMenu;
describe('customize modules ', function(){

it('customize modules', function(){
//STEP 1: LOGIN WITH ADMIN CREDENTIALS

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
//STEP 2: NAVIGATING TO THE SETTINGS MODULE
 cy.contains('Settings').should('be.visible').click({force:true})
 cy.wait(2000)
 //STEP3 : NAVIGATING TO THE CUSTOMER MODULES
 cy.contains('Customize Modules').should('be.visible').click({force:true})
 cy.wait(3000)
 // STEP4 : VERIFYING THE MY STRENGTH TOGGLE AS "ON"
 cy.xpath('/html/body/div[1]/app-root/app-layout/nz-layout/nz-layout/nz-content/div/app-aspiration-settings/div/nz-card[1]/div[2]/div[1]/div[2]/nz-switch/button').should('be.enabled')
 //clicking the profile module
 cy.get('button[data-cy="profile-nav-menu-button"]').should('be.visible').click()
 cy.wait(2000)
 //Printing the headings for validation
 cy.get('div[data-cy="profile-tabs-row"]').then((headings)=>{
    cy.log('Getting the headings from profile module',headings.text())
    })
 //STEP5: VALIDATING THE MY STRENGTH IS VISIBLE IN THE PROFILE PAGE
 cy.contains('My Strengths').click({force:true})
//cy.xpath("/html/body/div[1]/app-root/app-layout/nz-layout/nz-layout/nz-content/div/app-profile-main/app-page-container/div/div/perfect-scrollbar/div/div[1]/div/div[6]/div/div[1]/div[1]/div/div/div/div[2]/h3").should('be.visible')
//STEP 6: KEEP THE MY STRENGTH TOGGLE  AS DISABLED
cy.contains('Settings').should('be.visible').click({force:true})
cy.contains('Customize Modules').should('be.visible').click({force:true})
cy.wait(3000)
cy.xpath('/html/body/div[1]/app-root/app-layout/nz-layout/nz-layout/nz-content/div/app-aspiration-settings/div/nz-card[1]/div[2]/div[1]/div[2]/nz-switch/button').click({force:true})
cy.wait(5000)
cy.xpath("/html/body/div[1]/app-root/app-layout/nz-layout/nz-layout/nz-content/div/app-aspiration-settings/div/nz-card[1]/div[2]/div[2]/div[2]/nz-switch/button")
cy.wait(5000)
//STEP7: VALIDATING THE MY STRENGTH IS NOT VISIBLE IN THE PROFILE PAGE
//clicking the profile module
cy.xpath('/html/body/div[1]/app-root/app-layout/nz-layout/nz-sider/div/div/div[1]/div[2]/ul/div[1]/button').click({force:true})
cy.wait(10000)
//Printing the headings for validation
cy.get('div[data-cy="profile-tabs-row"]').then((headings)=>{
    cy.log('Getting the headings from profile module',headings.text())
})
//STEP8 : KEEP THE MY SKILL TOGGLE  AS DISABLED
cy.contains('Settings').should('be.visible').click({force:true})
cy.contains('Customize Modules').should('be.visible').click({force:true})
cy.wait(3000)
cy.xpath("/html/body/div[1]/app-root/app-layout/nz-layout/nz-layout/nz-content/div/app-aspiration-settings/div/nz-card[1]/div[2]/div[2]/div[2]/nz-switch/button").click({force:true})
cy.wait(5000)
//STEP 9: VALIDATING THE MY STRENGTH IS NOT VISIBLE IN THE PROFILE PAGE
//clicking the profile module
cy.xpath('/html/body/div[1]/app-root/app-layout/nz-layout/nz-sider/div/div/div[1]/div[2]/ul/div[1]/button').click({force:true})
cy.wait(10000)
//Printing the headings for validation
cy.get('div[data-cy="profile-tabs-row"]').then((headings)=>{
    cy.log('Getting the headings from profile module',headings.text())
    })
//STEP 10 : KEEP THE TEAMS TOGGLE  AS DISABLED
//Printing the elements When the Teams Toggle is ON
cy.get(':nth-child(2) > .tw-bg-blue6').then((sideMenu)=>{
    cy.log('Printing the side menu option when the Teams toggle is ON',sideMenu.text())
    })
    cy.contains('Settings').should('be.visible').click({force:true})
cy.contains('Customize Modules').should('be.visible').click({force:true})
cy.wait(3000)
// Disabling the Teams Toggle 
cy.xpath('/html/body/div[1]/app-root/app-layout/nz-layout/nz-layout/nz-content/div/app-aspiration-settings/div/div[2]/div[2]/nz-switch/button').click({force:true})
//Printing the elements When the Teams Toggle is OFF
cy.get(':nth-child(2) > .tw-bg-blue6').then((sideMenu)=>{
    cy.log('Printing the side menu option when the Teams toggle is OFF',sideMenu.text())
    })



})

})

















