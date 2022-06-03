import BasePage from "./BasePage";

class registerPage extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }
  static get firstName() {
    return cy.get("#firstName");
  }
  static get lastName() {
    return cy.get("#lastName");
  }
  static get email() {
    return cy.get("#userEmail");
  }
  static get control() {
    return cy.get(".custom-control>label");
  }
  static get birthday() {
    return cy.get("#dateOfBirthInput");
  }
  static get month() {
    return cy.get(".react-datepicker__month-select");
  }
  static get year() {
    return cy.get(".react-datepicker__year-select");
  }
  static get day() {
    return cy.get("[aria-label='Choose Friday, February 28th, 1930']");
  }
  static get subject() {
    return cy.get("#subjectsContainer");
  }
  static get img() {
    return cy.get("#uploadPicture");
  }
  static get address() {
    return cy.get("#currentAddress");
  }
  static get state() {
    return cy.get("#state");
  }
  static get city() {
    return cy.get("#city");
  }
  static get submitButton() {
    return cy.get("#submit");
  }
  static get number() {
    return cy.get("#userNumber");
  }
  static get finalScreen() {
    return cy.get("tbody>tr>td");
  }
  static get closeButton() {
    return cy.get("#closeLargeModal");
  }
}
export default registerPage;