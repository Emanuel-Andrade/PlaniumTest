const Prices = require('../models/Prices');

class PriceController {
  async getAll(req, res) {
    try {
      const prices = await Prices.getAll();
      return res.json(prices);
    } catch (error) {
      return res.status(500).json({ error: 'Houve um problema, por favor tente mais tarde' });
    }
  }
}

module.exports = new PriceController();
