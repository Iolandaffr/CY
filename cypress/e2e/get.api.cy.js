/// <reference types="cypress" />

describe("Buscar dispositivos", () => {
  it("Buscar um dispositivo específico", () => {
    const device_id = "7";

    cy.buscarDeviceEspecifico(device_id).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(device_id); // poderia utilizar aspas : equal("7"); ou equal(String(7));
      expect(response.body.name).to.equal("Apple MacBook Pro 16");
      expect(response.body).not.empty;
      expect(response.body.data).not.empty;
      expect(response.body.data.year).not.string;
      expect(response.body.year).to.equal(2019);
      expect(response.body.price).not.empty;
      expect(response.body.price).to.equal(1849.99);
      expect(response.body.data["CPU model"]).not.empty;
      expect(response.body.data["Hard disk size"]).not.empty;
    });
  });
});
