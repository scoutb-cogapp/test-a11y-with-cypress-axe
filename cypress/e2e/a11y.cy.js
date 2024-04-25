describe("Different levels a11y testing", () => {
  const now = new Date();
  const page =
    "https://peck.ackland.org/artworks/figures-dancing-around-a-fire";

  it("should run accessibility audits for WCAG A and AA", () => {
    cy.visit(page);
    cy.injectAxe();
    cy.checkA11y(
      null,
      {
        runOnly: {
          type: "tag",
          values: ["wcag2a", "wcag2aa"],
        },
      },
      (violations) => {
        cy.writeFile("../a11y-reports/a11y-AA.json", violations, "utf8");
      }
    );
  });

  it("should run accessibility audits for WCAG AAA", () => {
    cy.visit(page);
    cy.injectAxe();
    cy.checkA11y(
      null,
      {
        runOnly: {
          type: "tag",
          values: ["wcag2aaa"],
        },
      },
      (violations) => {
        cy.writeFile(
          "./cypress/a11y-reports/a11y-AAA.json",
          violations,
          "utf8"
        );
      }
    );
  });
});
