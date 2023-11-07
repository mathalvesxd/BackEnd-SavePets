const { request, response } = require('express');

const test = async (req, res) => {
  res.json({ ok:"isso aqui é a saida"});
};

module.exports = { test };
