/// <reference types="cypress" />

describe("Deletar dispositivos", () => {
  it("Criar para deletar um dispositivo", () => {
    const body = {
      name: "Meu Celular",
      data: {
        year: 2023,
        price: 999,
        "CPU model": "Intel",
        "Hard disk size": "1 TB",
        owner: "Eu novamente ltda",
      },
    };
    cy.request({
      method: "POST",
      url: "/objects",
      failOnStatusCode: false,
      body: body,
    }).as("postDeviceResult");

    cy.get("@postDeviceResult").then((response) => {
      expect(response.status).equal(200);

      const deviceId = response.body.id;

      cy.request({
        method: "DELETE",
        url: `/objects/${deviceId}`,
        failOnStatusCode: false,
      }).then((response_del) => {
        expect(response_del.status).to.equal(200);
      });
    });
  });
});
