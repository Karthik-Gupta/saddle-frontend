context("Risk Flow", () => {
  beforeEach(() => {
    cy.visit(`/#/risk`)
  })

  it("renders the Risk view and its contents", () => {
    cy.get('[data-testid="risk-intro"]').contains(
      "Providing liquidity to Pascal",
    )
    cy.get('[data-testid="risk-audits"]').contains("The Pascal smart")
    cy.get('[data-testid="risk-adminkeys"]').contains("Pascal's admin keys")
    cy.get('[data-testid="risk-lossofpeg"]').contains("If one of the assets")
  })
})
