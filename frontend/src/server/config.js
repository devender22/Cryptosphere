//connecting mysql database with nodejs
const fs = require('fs');

const config =
{
    db: {
        host: 'cryptosphere.mysql.database.azure.com',
        user: 'abhirami',
        password: 'Desisproject@1',
        database: 'cryptodb',
        port: 3306,
        ssl: { ca: fs.readFileSync("C:/Users/parid/Downloads/DigiCertGlobalRootCA.crt.pem") }
    },
  
};
module.exports = config;
