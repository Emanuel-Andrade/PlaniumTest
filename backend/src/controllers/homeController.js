class Home {
  index(req, res) {
    res.send('Olá Mundo!');
  }
}

module.exports = new Home();
