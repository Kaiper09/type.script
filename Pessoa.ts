class Pessoa {
	nome: string;
	idade: number;
	estaVivo: boolean;
    falando: boolean;
    
	constructor(nome: string, idade: number, estaVivo: boolean, falando: boolean){
		this.nome = nome;
		this.idade = idade;
		this.estaVivo = estaVivo;
		this.falando = falando;
	}
    fala():string {
        if(this.falando===true){
			return `${this.nome} está falando` 
		} else {
			return `${this.nome} não está falando` 
			}     
    }
}

let pessoa1 = new Pessoa('Paulo', 0, true, true);
console.log(pessoa1)
console.log(pessoa1.fala())

let pessoal2= new Pessoa('Gunnar', 17, true, false); 
console.log(pessoal2)
console.log(pessoal2.fala())


