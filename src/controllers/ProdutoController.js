const ProdutoModel = require("@model/Produto.js");
const mailer = require("@mailer");

const Mailer = new mailer();

const Produto = new ProdutoModel();

class ProdutoController {
	async listar(req, res) {
		const result = await Produto.getAll();
		res.send(result);
	}
	async buscar(req, res){
		const {id} = req.params;
		const produto = await Produto.getById(id);
		res.send(produto);
	}
	async criar(req, res) {
		try{
			const produto = await Produto.create(req.body);
			await Mailer.sendEmail(`novo produto: ${produto.name} cadastrado`);
			res.send(produto);
		}catch(err){
			console.error('deu ruim man', err);
		}
	}
	async editar(req, res){
		const {id} = req.params;
		const {body} = req;
		try{
			if(body.name && body.description && body.price){
				const novoProduto = await Produto.edit(id, body)
				res.send(`${novoProduto}`)
				return true;
			}
			res.send("insira os valores meu vei");
		}catch(err){
			res.send(`deu erro: ${err}`);
		}

	}
	async deletar(req, res){
		const {id} = req.params
		try{
			const del = await Produto.delete(id);
			if(del){
				res.send(`produto excluido`, 200);
				return true;
			}
			res.send('produto inexistente', 404)
		}catch(err){
			res.send(`deu erro ${err}`, 500);
		}
	}
}

module.exports = ProdutoController;
