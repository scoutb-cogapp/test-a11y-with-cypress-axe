describe("Test accessibility for WCAG 2.2 AAA", () => {
  const page =
    "https://peck.ackland.org/artworks/figures-dancing-around-a-fire";

  it("should run accessibility audits for WCAG 2.2 AAA rules", () => {
    cy.visit(page);
    cy.injectAxe();
    cy.checkA11y(
      null,
      {
        runOnly: {
          type: "rule",
          values: [
            "color-contrast-enhanced",
            "identical-links-same-purpose",
            "meta-refresh-no-exceptions",
          ],
        },
      },
      (violations) => {
        cy.writeFile(
          "./cypress/a11y-reports/a11y-AAA-by-rule.json",
          violations,
          "utf8"
        );
      }
    );
  });
});
