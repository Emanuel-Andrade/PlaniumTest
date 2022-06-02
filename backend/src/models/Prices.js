const knex = require('../database/connection');

class Prices {
  async get(planCode, lifesQntd) {
    if (!planCode) return { error: 'É necessário enviar o código do plano' };
    if (!lifesQntd) return { error: 'É necessário enviar número de pessoas' };

    if (planCode === 1 && lifesQntd > 3) {
      try {
        const price = await knex.select('*').from('prices').where({ codigo: 1, minimo_vidas: 4 });
        return price;
      } catch (error) {
        return false;
      }
    }
    if (planCode === 6 && lifesQntd > 1) {
      try {
        const price = await knex.select('*').from('prices').where({ codigo: 6, minimo_vidas: 2 });
        return price;
      } catch (error) {
        return false;
      }
    }

    try {
      const price = await knex.select('*').from('prices').where({ codigo: planCode, minimo_vidas: 1 });
      return price;
    } catch (error) {
      return false;
    }
  }

  async getAll() {
    try {
      const prices = await knex.select('*').from('prices');
      return prices;
    } catch (error) {
      return error.message;
    }
  }
}

module.exports = new Prices();
