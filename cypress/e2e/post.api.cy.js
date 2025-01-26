/// <reference types="cypress" />

describe("Cadastrar dispositivos", () => {
  const payload_cadastro_device = require("../fixtures/cadastrar_sucesso.json");
  it("Cadastrar dispositivo específico", () => {
    cy.CadastrarDevice(payload_cadastro_device).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).not.to.be.empty;
      expect(response.body.createdAt).not.to.be.empty;

      console.log(response.body.createdAt.slice(0, 10));
      console.log(new Date().toISOString().slice(0, 10));
    });
  });
});
