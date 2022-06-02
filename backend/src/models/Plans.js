const knex = require('../database/connection');

class Plans {
  async get(planCode) {
    if (!planCode) return { error: 'É necessário enviar um código' };

    try {
      const plans = await knex.select('*').from('plans').where({ codigo: planCode });
      return plans;
    } catch (error) {
      return error.message;
    }
  }

  async getByIdParam(id) {
    if (!id) return { error: 'É necessário enviar um código' };

    try {
      const plans = await knex.select('*').from('plans').where({ codigo: id });
      return plans;
    } catch (error) {
      return error.message;
    }
  }

  async getAll() {
    try {
      const plans = await knex.select('*').from('plans');
      return plans;
    } catch (error) {
      return error.message;
    }
  }
}

module.exports = new Plans();
