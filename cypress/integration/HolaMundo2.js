/// <reference types="Cypress"  />
// con la sentencia superior nosotros le indicamos al software que estamos trabajando con cypress, por ende, nos ayudará con las referencias. 

describe("Esto es el segundo Template",()=>{  //El describe es solo para describir que proyecto estamos realizando, se suele utilizar para el nombre del proyecto. 

it("Esta es la segunda prueba",()=>{ // Aquí está el test a ejecutar. Es una función de JavaScript como tal. 
    cy.log("Hola Mundo!")
})

})