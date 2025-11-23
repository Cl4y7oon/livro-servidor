const banco = require('./conexao');

const LivroSchema = new banco.Schema({
  codEditora: Number,
  titulo: String,
  resumo: String,
  autores: [String]
});

const Livro = banco.model('livros', LivroSchema);

module.exports = Livro;

