describe("Test accessibility for different WCAG levels", () => {
  const now = new Date();
  const page =
    "https://peck.ackland.org/artworks/figures-dancing-around-a-fire";

  it("should run accessibility audits for WCAG 2.2 A and AA", () => {
    cy.visit(page);
    cy.injectAxe();
    cy.checkA11y(
      null,
      {
        runOnly: {
          type: "tag",
          values: ["wcag22a", "wcag22aa"],
        },
      },
      (violations) => {
        cy.writeFile("./cypress/a11y-reports/a11y-AA.json", violations, "utf8");
      }
    );
  });

  it("should run accessibility audits for WCAG 2.2 AAA", () => {
    cy.visit(page);
    cy.injectAxe();
    cy.checkA11y(
      null,
      {
        runOnly: {
          type: "tag",
          values: ["wcag22aaa"],
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
