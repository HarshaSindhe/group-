describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8071/hotel/')
  })
  it('login in here', () => {
    cy.visit('http://localhost:8071/hotel/')
    cy.get(':nth-child(50) > :nth-child(2) > a').click()
    cy.get('[href="new_user.php"]').click()
    cy.get('[type="text"]').type('harsha')
    cy.get('[type="teli"]').type('1234')

    cy.get('[name="password"]').type('5678')
    cy.get('[name="con_password"]').type('5678')
    cy.get('[type="submit"]').click()

  cy.visit('http://localhost:8071/hotel/login1.php')
    cy.get('[type="text"]').type('harsha')
    cy.get('[type="password"]').type('5678')
    cy.get('[type="submit"]').click()

    

cy.get('[name="cust_id"]').type('12')
cy.get('[name="Fname"]').type('harsha')
cy.get('[name="Lname"]').type('sindhe')
cy.get('[name="phone"]').type('1234')
cy.get('[name="city"]').type('davanagere')
cy.get('[name="state"]').type('kara')
cy.get('[name="pincode"]').type('577004')

cy.get('[style="width: 100px;height:40"]').click()

cy.get('[href="search.html"]').click()


cy.get(':nth-child(1) > input').type('2023-09-07')

cy.get(':nth-child(2) > input').type('2023-09-11')
cy.get('#submit').click()

cy.get(':nth-child(1) > :nth-child(5) > a').click()

cy.get('[type="number "]').type('9')
cy.get('[name="cust_id"]').type('12')
cy.get('[name="reserv_date"]').type('2023-09-07')
cy.get('[type="checkbox"]').click()
cy.get('span').click()
cy.get('[type="submit"]').click()


cy.get('[name="reservation_id"]').type('9')
cy.get('[name="trans_id"]').type('2')
cy.get('select').type('credit')
cy.get('[name="amount"]').type('5000')

cy.get('[type="text"]').type('poo')
cy.get('[type="submit"]').click()
cy.get('.pb').click()
cy.get('a').click()
cy.get('[href="logout.php"]').click()



 })
    
})