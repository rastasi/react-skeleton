const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/public`));

const exphbs = require('express-handlebars');
app.set('views', `${__dirname}/views`);
app.engine('handlebars', exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');


app.get('/**', (req, res) => {
  res.render('index');
});

app.listen(8080);
