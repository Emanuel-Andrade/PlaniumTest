const Plans = require('../models/Plans');
const Prices = require('../models/Prices');

class PlansController {
  async create(req, res) {
    const {
      code, age, lifesQntd, name,
    } = req.body;

    // Validation
    if (!lifesQntd || lifesQntd === ' ') return res.status(400).json('É necessário preencher quantos beneficiários.');
    if (!code || code === ' ') return res.status(400).json('É necessário preencher código do produto.');
    if (!name || name === ' ') return res.status(400).json('É necessário preencher campo "Nome".');
    if (!age || age === ' ') return res.status(400).json('É necessário preencher campo "Idade".');
    if (isNaN(code)) return res.status(400).json('É necessário que o código seja número.');

    try {
      const plan = await Prices.get(code, lifesQntd);
      if (plan.length === 0) return res.status(400).json('Não foi encontrado nenhum plano.');

      let value;
      if (age < 18) value = plan[0].faixa1;
      if (age >= 18 && age <= 40) value = plan[0].faixa2;
      if (age >= 41) value = plan[0].faixa3;

      const newPlan = {
        name,
        age,
        value,
      };

      return res.json(newPlan);
    } catch (error) {
      return res.status(500).json({ error: 'Houve um problema, por favor tente mais tarde' });
    }
  }

  async getPlan(req, res) {
    const { id } = req.params;
    if (isNaN(id)) return res.status(404).json('Não foi encontrado plano com esse id');

    try {
      const plans = await Plans.getByIdParam(id);
      return res.json(plans);
    } catch (error) {
      return res.status(500).json({ error: 'Houve um problema, por favor tente mais tarde' });
    }
  }

  async getPlans(req, res) {
    try {
      const plans = await Plans.getAll();
      return res.json(plans);
    } catch (error) {
      return res.status(500).json({ error: 'Houve um problema, por favor tente mais tarde' });
    }
  }
}

module.exports = new PlansController();
