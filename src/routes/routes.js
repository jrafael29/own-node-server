const express = require("express");
const route = express.Router();
const ProdutoController = require("@controllers/ProdutoController.js");

const produtoController = new ProdutoController();

route.get("/", function (req, res) {
	res.send("Seja bem vindo");
});

route.get("/produtos", produtoController.listar);
route.post("/produto", produtoController.criar);
route.get('/produto/:id', produtoController.buscar)
route.put('/produto/:id', produtoController.editar)
route.delete('/produto/:id', produtoController.deletar)

module.exports = route;
