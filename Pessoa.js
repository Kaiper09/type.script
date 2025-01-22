var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, estaVivo, falando) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
        this.falando = falando;
    }
    Pessoa.prototype.fala = function () {
        if (this.falando === true) {
            return "".concat(this.nome, " est\u00E1 falando");
        }
        else {
            return "".concat(this.nome, " n\u00E3o est\u00E1 falando");
        }
    };
    return Pessoa;
}());
var pessoa1 = new Pessoa('Paulo', 0, true, true);
console.log(pessoa1);
console.log(pessoa1.fala());
var pessoal2 = new Pessoa('Gunnar', 17, true, false);
console.log(pessoal2);
console.log(pessoal2.fala());
