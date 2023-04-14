Cypress.on('uncaught:exception',(err,runnable) =>{
    return false
})
describe('add a new user', function(){

it('add a new user-POSITIVE SCENERIO', function(){

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
//STEP 3: NAVIGATE TO THE USER PAGE
cy.contains('User List').should('be.visible').click({force:true})
//STEP 4: VERIYING THE LANDING PAGE
cy.url().should('eq','https://dev.klaarhq.com/settings/workspace/User-List')
//STEP 5: ADD A SINGLE USER
cy.xpath('//button[@class="ant-btn ant-dropdown-trigger tw-h-[36px] tw-flex tw-w-[118px] ant-btn-primary"]').click()
cy.contains('Add User').click()
//full name
cy.xpath('//input[@formcontrolname="full_name"]').type('Vignesh Pushpanathan')
//mail id
cy.xpath('//input[@formcontrolname="email"]').type('vicky@gmail.com')
//department
cy.get('nz-select[formcontrolname="department"]').click({force:true})
//selcting finance & adminstratin
cy.contains('Finance & Administration').click({force:true})
//title 
cy.get('nz-select[nzplaceholder="Enter title here"]').click(({force:true}))
//selecting Quality Manager
cy.contains('Quality Manager').click({force:true})
//Managers
cy.get('nz-select[formcontrolname="manager_email"]').click(({force:true}))
//selecting Anil Ray Manager
cy.contains('Anil Ray (anil.ray@gamma.klaar.team)').click({force:true})
//employee id
cy.get('input[placeholder="Enter employee id here"]').type(996690)
//Location
cy.get('input[placeholder="Enter location here"]').type('Tamil Nadu')
//HRBP
cy.get('nz-select[formcontrolname="hrbp_email"]').click({force:true})
//selecting Arti solanki
cy.contains('Arti Solanki (arti.solanki@gamma.klaar.team)').click({force:true})
//clicking the submit button
cy.xpath('//span[text()="Add Now"]').click({force:true})
//clicking the user pending verification
cy.contains('Users Pending Verification').click({force:true})
//clicking the userId I created
cy.contains('Vignesh Pushpanathan').click({force:true})
//verifying the edit user page
cy.url().should('include','https://dev.klaarhq.com/settings/workspace/User-List/user/edit')
//alert message validation
cy.contains(" * This user's verification is pending, this user can not login to Klaar. ").should('exist')
//hitting the save button
cy.contains("Save").click({force:true})
//update message validation
cy.get('.toast-message').should('be.visible')
})
it('add a new user-Negative SCENERIO for the input fields, clicking the add now button when all the input fields are empty', function(){

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
    //STEP 3: NAVIGATE TO THE USER PAGE
    cy.contains('User List').should('be.visible').click({force:true})
    //STEP 4: VERIYING THE LANDING PAGE
    cy.url().should('eq','https://dev.klaarhq.com/settings/workspace/User-List')
    //STEP 5: ADD A SINGLE USER
    cy.xpath('//button[@class="ant-btn ant-dropdown-trigger tw-h-[36px] tw-flex tw-w-[118px] ant-btn-primary"]').click()
    cy.contains('Add User').click()
// STEP6 : click the submit btn
cy.xpath('//span[text()="Add Now"]').click({force:true})
// Error message validation below full name input field
cy.contains('Enter full name here').should('exist')
//error message validation below email input field
cy.contains('Enter email here').should('exist')
})

it('add a new user-Negative SCENERIO for the input fields, fill the input fields with numbbers and symbols', function(){

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
    //STEP 3: NAVIGATE TO THE USER PAGE
    cy.contains('User List').should('be.visible').click({force:true})
    //STEP 4: VERIYING THE LANDING PAGE
    cy.url().should('eq','https://dev.klaarhq.com/settings/workspace/User-List')
    //STEP 5: ADD A SINGLE USER
    cy.xpath('//button[@class="ant-btn ant-dropdown-trigger tw-h-[36px] tw-flex tw-w-[118px] ant-btn-primary"]').click()
    cy.contains('Add User').click()
//full name
cy.xpath('//input[@formcontrolname="full_name"]').type('123654$%^&')
//mail id
cy.xpath('//input[@formcontrolname="email"]').type('vickygmail.com')

// STEP6 : click the submit btn
cy.xpath('//span[text()="Add Now"]').click({force:true})

//error message validation below email input field
cy.contains('Invalid Email').should('exist')
})

})