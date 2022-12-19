describe("Open single page", () => {
  it("should navigate to the single page", () => {
    // Should open the index page
    cy.visit("http://localhost:3000/");

    // Should find a link with an href attribute containing "/stations/1" and click it
    cy.get('a[href*="/stations/1"]').click({ multiple: true });

    // The new url should include id = 1
    cy.url().should("include", "/1");

    // Should find element in new page
    cy.get("h1").contains("ID: 1");
  });
});
