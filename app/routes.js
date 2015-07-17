module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    // add your routes here
app.get('/welcome', function (req, res) {
      res.render(
        'welcome',
        {'name': req.query.name,
          'date': (new Date())
        }
      );
    });
  }
};
