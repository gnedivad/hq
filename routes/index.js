module.exports = function(app) {
  app.get('/', function(request, response) {
    response.render('index.html');
  });

  app.get('/api/users', function(request, response) {
    console.log('Ping! /api/users');
    response.send(200);
  });

  app.get('/api/users/:id', function(request, response) {
    console.log('Ping! /api/users/' + request.params.id);
    // retrieve user information for _id: request.params.id
    // for now send hardcoded response
    response.json({
      _id: '1',
      firstname: 'David',
      lastname: 'Eng',
      avatarUrl: 'delta.davideng.me/static/david.jpg'
    });
  });

  app.get('/api/users/:id/commands', function(request, response) {
    console.log('Ping! /api/users/' + request.params.id + '/commands');
    response.json([
      {
        active: true,
        created: new Date(2015, 6, 25),
        updated: new Date(2015, 11, 10),
        condition: '@gnedivad tweets',
        consequence: 'Message (949) 241-7906 from me',
        owner: {
          _id: '1',
          firstname: 'David',
          lastname: 'Eng',
          avatarUrl: 'delta.davideng.me/static/david.jpg'
        }
      },
      {
        active: true,
        created: new Date(2015, 9, 28),
        updated: new Date(2015, 11, 10),
        condition: '@cadongg tweets',
        consequence: 'Message me',
        owner: {
          _id: '1',
          firstname: 'David',
          lastname: 'Eng',
          avatarUrl: 'delta.davideng.me/static/david.jpg'
        }
      }
    ]);
  });

  app.get('/api/commands/:id', function(request, response) {
    console.log('Ping! /api/commands/' + request.params.id);
    response.send(200);
  });
}