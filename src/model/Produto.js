const { Produtos } = require("@database");
const ModelBase = require("./ModelBase.js");

class Produto extends ModelBase {
	constructor() {
		super();
	}
	async getAll() {
		const products = await Produtos.findAll();
		return products;
	}
	async getById(id){
		const product = await Produtos.findOne({where: {id}});
		return product;
	}
	async create(object) {
		const product = await Produtos.create(object);
		return product;
	}
	async edit(id, object) {
		const newProduto = await Produtos.update({
			name: object.name,
			description: object.description,
			price: object.price
		}, {
			where: {
				id
			}
		});
		return newProduto;
	}
	async delete(id){
		const result = await Produtos.destroy({where:{id}});
		return result;
	}
}

module.exports = Produto;
