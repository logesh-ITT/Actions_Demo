import Scenarioforlaptop from '../PageObjects/Scenarioforlaptop';
const laptop = new Scenarioforlaptop();
describe("NdtvGadjectsTestcases", function () {
    before(function () {
        cy.visit('/') //Homepage
        laptop.productFinderLaptops().trigger('mouseover'); //mouseover to product finder
        laptop.laptoplink().click({ force: true }); //click the laptop button 
    });
    it('Verify Laptops in ProductFinder', function () {
        cy.title().should('contains', 'Laptops: Latest & Best Laptops online 2020, Laptop Finder with Price'); //validate the title
        laptop.brandCheckBox().check().should('be.checked'); //click the checkbox
        laptop.asusLaptop().first().click({ force: true }); //click the dell laptop
        cy.title().should('contains', 'Asus VivoBook Ultra K14 (K413) Price (14 Sep 2020) Specification & Reviews । Asus Laptops');
    });
});
