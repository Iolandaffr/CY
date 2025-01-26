/// <reference types="cypress" />

describe("Aterar um dispositivo", () => {
  const body_cadastro = require("../fixtures/cadastrar_sucesso.json");
  const body_update = require("../fixtures/update.json");

  it("Alterando um dispositivo", () => {
    cy.request({
      method: "POST",
      url: "/objects",
      failOnStatusCode: false,
      body: body_cadastro,
    }).then((response_post) => {
      expect(response_post.status).equal(200);
      expect(response_post.body.name).equal(body_cadastro.name);

      const deviceId = response_post.body.id;

      cy.request({
        method: "PUT",
        url: `/objects/${deviceId}`,
        failOnStatusCode: false,
        body: body_update,
      }).then((response_put) => {
        expect(response_put.status).to.equal(200);
        expect(response_put.body).to.have.property("name", "Meu Celular novo");
        expect(response_put.body.data.owner).to.equal("Teste");
      });
    });
  });
});
