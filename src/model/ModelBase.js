const { Produtos } = require("@database");
class ModelBase {
	create() {
		throw new Error("metodo create não implementado.");
	}
    edit(){
		throw new Error("metodo edit não implementado.");
    }
	delete() {
		throw new Error("metodo delete não implementado.");
	}
}

module.exports = ModelBase;
