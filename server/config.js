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
        ssl: { ca: fs.readFileSync("D:/desis/project/azure_stuff/DigiCertGlobalRootCA.crt.pem") }
    },
  
};
module.exports = config;
