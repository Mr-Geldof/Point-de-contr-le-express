const express = require('express');
const { engine } = require('express/lib/application');
const app = express();
const port = 8000;

app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/img'))
app.use((req, res, next) =>{
    var time = new Date
    
    if ((time.getDay() == 0 || time.getDay() == 6) && (time.getHours() > 17 || time.getHours() < 9)) {
        res.type('html')
        res.write('<h1>service disponible du lundi au vendredi et de 9h a 17h</h1>', 'utf8');
        res.status(404).end()
    }
    next();
});

// AJOUT EJS 

app.set('view engine','ejs');
app.get('/', function(req, res){
    res.render('accueil');
});
app.get('/service', function(req,res){
res.render('service');
});
app.get('/contact', function(req,res){
    res.render('contact');
    });
app.listen(port,() =>{
    console.log(`Server running on port ${port}`)
})
