import ScenarioforMobilephone from '../PageObjects/ScenarioforMobilephone';
const Mobile = new ScenarioforMobilephone();
describe("MobilePhoneTestcase", function () {
    before(function () {
        cy.visit('/') //Homepage 
        Mobile.compareMobiles().trigger('mouseover'); //mouseover to compare
        Mobile.clickTheMobiles().should('be.visible').click({ force: true }); //click the mobiles button
    });
    it('Compare Mobile phones', function () {
        Mobile.compareMobilesTextbox().should('be.visible').type('Samsung Galaxy M31s') //type in textbox
        Mobile.getMobilePhone().click() //getting that mobilephone
        Mobile.compareSecondMobilesTextbox().should('be.visible').type('apple iphone x') //type in textbox
        Mobile.getSecondMobilePhone().last().click() //getting that mobilephone
        Mobile.compareResult().should('be.visible').click() //click that compare button
        cy.title().should('contains', 'Compare Samsung Galaxy M31s vs Apple iPhone X Price, Specs, Ratings');
    });
});
