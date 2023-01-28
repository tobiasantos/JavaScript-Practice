const mongoose = require("mongoose");
const validator = require("validator");

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, require: true },
  sobrenome: { type: String, require: false, default: "" },
  email: { type: String, require: false, default: "" },
  telefone: { type: String, require: false, default: "" },
  criadoEm: { type: Date, default: Date.now },
  loginId: { type: String, default: "" },
});

const ContatoModel = mongoose.model("Contato", ContatoSchema);

function Contato(body) {
  this.body = body;
  this.errors = [];
  this.contato = null;
}

Contato.prototype.register = async function (id) {
  this.valida();
  if (this.errors.length > 0) return;
  this.body.loginId = id;
  this.contato = await ContatoModel.create(this.body);
  console.log(this.contato);
};

Contato.prototype.valida = function () {
  this.cleanUp();

  if (this.body.email && !validator.isEmail(this.body.email))
    this.errors.push("E-mail inválido");
  if (!this.body.nome) this.errors.push("Nome é um campo obrigatório");
  if (!this.body.email && !this.body.telefone) {
    this.errors.push(
      "Pelo menos um contato precisa ser enviado: e-mail ou telefone."
    );
  }
};

Contato.prototype.cleanUp = function () {
  for (const key in this.body) {
    if (typeof this.body[key] !== "string") {
      this.body[key] = "";
    }
  }

  this.body = {
    nome: this.body.nome,
    sobrenome: this.body.sobrenome,
    email: this.body.email,
    telefone: this.body.telefone,
  };
};

Contato.prototype.edit = async function (id) {
  if (typeof id !== "string") return;
  this.valida();
  if (this.errors.length > 0) return;
  this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, {
    new: true,
  });
};

// Métodos estáticos
Contato.buscaPorId = async function (id) {
  if (typeof id !== "string") return;
  const user = await ContatoModel.findById(id);
  return user;
};

Contato.buscaContatos = async function (id) {
  const contatos = await ContatoModel.find({ loginId: id }).sort({
    criadoEm: -1,
  });
  return contatos;
};

Contato.delete = async function (id) {
  if (typeof id !== "string") return;
  const contatos = await ContatoModel.findOneAndDelete({ _id: id });
  return contatos;
};

module.exports = Contato;
