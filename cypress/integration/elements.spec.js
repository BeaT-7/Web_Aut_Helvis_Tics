import registerPage from "../pageObjects/registerPage";

// Final task in Automation testing
context("Elements scenarions", () => {
  context("Automation practice form", () => {
    it("Form fillings", () => {
      registerPage.visit();
      registerPage.firstName.type('Helvis');
      registerPage.lastName.type('Tīcs');
      registerPage.email.type('helvis.tics@va.lv');
      registerPage.control.contains('Male').click();
      registerPage.number.type("26511868")
      registerPage.birthday.click();
      registerPage.year.select('1930');
      registerPage.month.select('February');
      registerPage.day.click({force:true});
      registerPage.subject.type('Economics' + "{enter}");
      registerPage.control.contains('Music').click();
      registerPage.img.selectFile('cypress/files/pic.jpg');
      registerPage.address.type('Address 12A');
      registerPage.state.type('NCR' + "{enter}");
      registerPage.city.type('Delhi' + "{enter}");
      registerPage.submitButton.click();
      registerPage.finalScreen
      .should("contain", 'Helvis')
      .should("contain", 'Tīcs')
      .should("contain", 'helvis.tics@va.lv')
      .should("contain", 'Male')
      .should("contain", '28 February,1930')
      .should("contain", '26511868')
      .should("contain", 'Economics')
      .should("contain", 'Music')
      .should("contain", 'Address 12A')
      .should("contain", 'NCR')
      .should("contain", 'Delhi')
      .should("contain", 'Helvis');
      registerPage.closeButton.click();
    });
  });
});