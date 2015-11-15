var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://openteach:openteach@localhost:5432/ouverteporte';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, description VARCHAR(40),contact VARCHAR(40), longitude VARCHAR(40), latitude VARCHAR(40)');
query.on('end', function() { client.end(); });
