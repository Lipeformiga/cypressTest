describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://github.com/Lipeformiga')
    cy.get('.color-border-muted > .container-xl > .Layout > .Layout-main > .UnderlineNav > .UnderlineNav-body > [data-hydro-click-hmac="049d6ef115087eebfc1891cf6d786d98db95a3cf1213edf823ea8f47c0561bee"]').click()
    cy.get(':nth-child(1) > .col-10 > .d-inline-block > .wb-break-all > a').click()
  })
})