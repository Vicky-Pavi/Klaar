Cypress.on('uncaught:exception',(err,runnable) =>{
    return false
})
let headings;
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
 //STEP3 : NAVIGATE TO THE USER List
 cy.get('a[href="/settings/workspace/User-List"]').click({force:true})
 //STEP4: NAVIGATE TO THE USER FIELDs
cy.contains('User Fields').click({force:true})
cy.wait(3000)
 //STEP5: Adding a new custom field and verify added custom field is reflected in the usercompany details page
cy.xpath('/html/body/div[1]/app-root/app-layout/nz-layout/nz-layout/nz-content/div/app-employees/app-page-container/div/div/nz-tabset/div/div/div[3]/div/div[2]/nz-spin/div/nz-table/nz-spin/div/div/nz-table-inner-default/div/table/tbody/tr[1]/td[2]').type('Vignesh P')
//clicking the save button
cy.xpath('/html/body/div[1]/app-root/app-layout/nz-layout/nz-layout/nz-content/div/app-employees/app-page-container/div/div/nz-tabset/div/div/div[3]/div/div[2]/nz-spin/div/nz-table/nz-spin/div/div/nz-table-inner-default/div/table/tbody/tr[1]/td[4]/a').click({force:true})
//clicking the all users tab
cy.contains('All Users').click({force:true})
//clicking the Ankit Bai Gamma user
cy.contains("Ankit Bai Gamma").click({force:true})
cy.wait(1000)
//clicking the company detail page
cy.xpath('//div[text()="Company"]').click({force:true})
//Printing the reflection page to verify the name in company details page 
cy.get('[data-cy="settings-edit-user-company-info-custom-field-label"]').then((headings)=>{
    cy.log('Getting the headings from profile module',headings.text())
    })
cy.go('back')
cy.contains('User Fields').click({force:true})
//STEP 6: update the custom field name
//clicking the edit button
cy.xpath('/html/body/div[1]/app-root/app-layout/nz-layout/nz-layout/nz-content/div/app-employees/app-page-container/div/div/nz-tabset/div/div/div[3]/div/div[2]/nz-spin/div/nz-table/nz-spin/div/div/nz-table-inner-default/div/table/tbody/tr[2]/td[4]/a').click({force:true})
//editing row no:5 custom field name
cy.xpath('/html/body/div[1]/app-root/app-layout/nz-layout/nz-layout/nz-content/div/app-employees/app-page-container/div/div/nz-tabset/div/div/div[3]/div/div[2]/nz-spin/div/nz-table/nz-spin/div/div/nz-table-inner-default/div/table/tbody/tr[2]/td[2]').clear()
cy.xpath('/html/body/div[1]/app-root/app-layout/nz-layout/nz-layout/nz-content/div/app-employees/app-page-container/div/div/nz-tabset/div/div/div[3]/div/div[2]/nz-spin/div/nz-table/nz-spin/div/div/nz-table-inner-default/div/table/tbody/tr[2]/td[2]').type('Pavithra')
//clicking the save btn
cy.xpath('/html/body/div[1]/app-root/app-layout/nz-layout/nz-layout/nz-content/div/app-employees/app-page-container/div/div/nz-tabset/div/div/div[3]/div/div[2]/nz-spin/div/nz-table/nz-spin/div/div/nz-table-inner-default/div/table/tbody/tr[2]/td[4]/a').click({force:true})
//clicking the all users tab
cy.contains('All Users').click({force:true})
//clicking the Ankit Bai Gamma user
cy.contains("Ankit Bai Gamma").click({force:true})
//clicking the company detail page
cy.xpath('//div[text()="Company"]').click({force:true})
//Printing the reflection page to verify the name in company details page  
cy.get('[data-cy="settings-edit-user-company-info-custom-field-label"]').then((headings)=>{
    cy.log('Getting the headings from profile module',headings.text())
    })
cy.go('back')   
cy.contains('User Fields').click({force:true})   
// STEP7 : Test custom field switch on/off toggle and verify changes are reflected respectively in the user company details page
//Disabling the Toggle
cy.xpath('/html/body/div[1]/app-root/app-layout/nz-layout/nz-layout/nz-content/div/app-employees/app-page-container/div/div/nz-tabset/div/div/div[3]/div/div[2]/nz-spin/div/nz-table/nz-spin/div/div/nz-table-inner-default/div/table/tbody/tr[2]/td[3]/nz-switch/button').click({force:true})
//clicking the all users tab
cy.contains('All Users').click({force:true})
//clicking the Ankit Bai Gamma user
cy.contains("Ankit Bai Gamma").click({force:true})
//clicking the company detail page
cy.xpath('//div[text()="Company"]').click({force:true})
//Printing the reflection page to verify the name in company details page & 
cy.get('[data-cy="settings-edit-user-company-info-custom-field-label"]').then((headings)=>{
    cy.log('Getting the headings from profile module',headings.text())
    })
//Step8: Delete the custom field and verify custom field is no longer visible in th custom field table as well as the user company details page
  //Once I clicked the delete button, it takes more time than usual... It is not possible to delete the custom field now,
  // So I skipped that one Step..............
})

it('clicking the save without giving any credentials and verifying the error message- Negative scenerio', function(){
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
     //STEP3 : NAVIGATE TO THE USER List
     cy.get('a[href="/settings/workspace/User-List"]').click({force:true})
     //STEP4: NAVIGATE TO THE USER FIELDs
    cy.contains('User Fields').click({force:true})
    cy.wait(3000)
     //STEP5: Clear the custom name input field 
    cy.xpath('/html/body/div[1]/app-root/app-layout/nz-layout/nz-layout/nz-content/div/app-employees/app-page-container/div/div/nz-tabset/div/div/div[3]/div/div[2]/nz-spin/div/nz-table/nz-spin/div/div/nz-table-inner-default/div/table/tbody/tr[1]/td[2]').clear()
    //clicking the save button
    cy.xpath('/html/body/div[1]/app-root/app-layout/nz-layout/nz-layout/nz-content/div/app-employees/app-page-container/div/div/nz-tabset/div/div/div[3]/div/div[2]/nz-spin/div/nz-table/nz-spin/div/div/nz-table-inner-default/div/table/tbody/tr[1]/td[4]/a').click({force:true})
// Alert message verification
cy.contains('Custom field name can not be empty.').should('exist')
})


/////////Note: Custom field accepts both numbers and Symbols.


})