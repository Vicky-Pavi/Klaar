Cypress.on('uncaught:exception',(err,runnable) =>{
    return false
})
describe('Workspace Settings', function(){

it('Workspace Settings', function(){

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
//STEP 3: Verifying the landed the Workspace settings page
//checking the url of the landed page
cy.url().should('eq', 'https://dev.klaarhq.com/settings/workspace/details')
//STEP 4: Validating the heading- Workspace settings page
cy.contains('Workspace Settings').should('be.visible')
const logo= 'baby.jpg'
//STEP5 : Adding a new logo
cy.get('input[type="file"]').attachFile(logo)
//clicking the save button
cy.get('button[data-cy="settings-workspace-logo-save-upload-button"]').click({force:true})
cy.wait(3000)
  // verifying the new logo
  //cy.get('img[class="orgShortLogo"]').should('have.attr','src', 'https://klaar-resources.s3.ap-south-1.amazonaws.com/org_logo_5718fbb5-fbc3-4ae4-ab1b-812cf3c2cdea')
 cy.wait(5000)
  //STEP 6: edit and replacing the new logo
  const newLogo= 'daisy.jpg'
  cy.get('input[type="file"]').attachFile(newLogo)
  //clicking the save button
cy.get('button[data-cy="settings-workspace-logo-save-upload-button"]').click({force:true})
cy.reload()
cy.wait(3000)
  // verifying the new logo
cy.get('img[class="orgShortLogo"]').should('have.attr','src', 'https://klaar-resources.s3.ap-south-1.amazonaws.com/org_logo_5718fbb5-fbc3-4ae4-ab1b-812cf3c2cdea')
//STEP 7:Deleting the added logo
cy.get('button[data-cy="settings-workspace-logo-delete-button"]').click({force:true})
//clicking the confirm delete btn
cy.get('button[data-cy="settings-workspace-logo-confirm-delete-button"]').click({force:true})
})

})


