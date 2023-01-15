require('module-alias/register')
const app = require('@src/app.js');
app.listen(3000, () => console.log("rodando na 3000"));