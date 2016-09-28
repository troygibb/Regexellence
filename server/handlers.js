const url = require('url');

const dbHandlers = require('./db/dbQueryHandler');
const checkAuth = require('./utils').checkAuth;

module.exports = (app) => {
  app.get('/regex/challenges', (req, res) => {
  // Review if async issues become a problem!
    dbHandlers.getChallenges((challenges) => {
      res.send(challenges);
    });
  });
  app.get('/regex/tutorial', (req, res) => {
    dbHandlers.getTutorial((tutorial) => {
      res.send(tutorial);
    });
  });
  app.post('/regex/challenges?*', (req, res) => {
    const query = url.parse(req.url).query;
    dbHandlers.postChallengeAnswer(req.body, query, (updatedChallenge) => {
      res.end('Successftully updated answer!');
    });
  });
  app.post('/regex/challenges', (req, res) => {
    dbHandlers.postChallenge(req.body, () => {
      res.end('challenge created');
    });
  });
  app.get('/regex/user-info', (req, res) => {
    if (req.user) {
      console.log('requested user info is ', req.user._id);
      res.send(req.user);
    } else {
      res.send('Not logged in!')
    }
  });
  app.get('/regex/logout', (req, res) => {
    console.log("session destroyed");
    req.session.destroy((err) => {
      if (err) throw err;
      console.log("in da callback")
      res.redirect('/');
    });
  })
};
