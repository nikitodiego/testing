import supertest from "supertest";
import app from "./main.js"

const request = supertest;

describe("GET /api", () => {
    it("respond with json containing a list of all products", (done) => {
        request(app)
            .get("/api/productos")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done)
    });

    it("respond with json containing a list of all carritos", (done) => {
        request(app)
            .get("/api/carritos")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done)
    });

    it("respond with json containing a new empty carrito", (done) => {
        request(app)
            .post("/api/carritos")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done)
    });

    it("respond with json edited", (done) => {
        const data = { title: "Python", price: 6500, thumbnail: "python.png", stock: 45 }
        request(app)
            .put("/api/productos/6222958c155f5ad4cd007933")
            .send(data)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200, done)
    });
});  
