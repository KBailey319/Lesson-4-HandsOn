const express = require("express");
const app = express ();
const sqlite = require("sqlite").verbose();
const db = new sqlite.Database("./Chinook_Sqlite_AutoIncrementPKs.sqlite");
app.listen('/albums', () =>{
    console.log('Hello World');
});
app.set("port", process.env.PORT || 3000);
const handlebars = require("express-handlebars").create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
const stmt = db.prepare();
app.use((require('body-parser')()));

const query = 'SELECT Name, Title FROM Album INNER JOIN Artist ON album.ArtistId = artist.ArtistId';
db.each(query, (err, table) => {
    if (err) throw err;
    console.log(table)
});
app.post('/table', (req,res) => {
    // db.run('') *** This is where I get lost.
    //  I'm not wanting to insert which is what we did in the example, 
    //  but I'm not sure how to create something that will print 
    //  to the main.handlebars page.

app.post('/fullstory', (req,res) => {
    console.log("Name: " + req.body.name);
    console.log("Album: " + req.body.album);
});

db.close()
});
