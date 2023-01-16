const { Sequelize } = require("sequelize");

const drive = new Sequelize("own", "postgres", "92406695", {
	host: "localhost",
    port: 5433,
	dialect: "postgres",
});

const Produtos = drive.define("produtos", {
    id: {
        type: Sequelize.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        required: true
    },
    description: {
        type: Sequelize.STRING,
        require: true
    },
    price: {
        type: Sequelize.DECIMAL,
        required: true
    }
}, {
    tableName: "produtos",
    freezeTableName: false,
    timestamps: false
});


module.exports = {Produtos};
