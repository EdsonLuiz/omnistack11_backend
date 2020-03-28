const connection = require('../database/connection')
const generateUUID = require('../utils/generateUUID')

module.exports = {
  async store(req, res) {
    const {name, email, whatsapp, city, uf} = req.body

    const id = generateUUID()

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return res.json({id})
  },

  async index(req, res) {
    const ongs = await connection('ongs').select('*')
    return res.json(ongs)
  }
}

