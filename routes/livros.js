const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao obter livros' });
  }
});

router.post('/', async (req, res) => {
  try {
    await incluir(req.body);
    res.json({ mensagem: 'Livro incluído com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao incluir livro' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const codigo = req.params.id;
    await excluir(codigo);
    res.json({ mensagem: 'Livro excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao excluir livro' });
  }
});

module.exports = router;

