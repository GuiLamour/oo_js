// Classe abstrata

class Veiculo {
    constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    }

    acelerar() {
    console.log("Acelerando o veículo");
    }
}

  // Classes herdeiras

class Carro extends Veiculo {
    acelerar() {
    console.log("Acelerando o carro!");
    }
}

class Moto extends Veiculo {
    acelerar() {
    console.log("Acelerando a moto!");
    }
}

  // Criando instâncias de objetos

const veiculoGenerico = new Veiculo("Deconhecida","Desconhecido");
const meuCarro = new Carro("Toyota", "Corolla");
const minhaMoto = new Moto("Honda", "CBR");

  // Exibindo informações

console.log(veiculoGenerico);
console.log(meuCarro);
console.log(minhaMoto);

  // Chamando métodos

veiculoGenerico.acelerar();
meuCarro.acelerar();
minhaMoto.acelerar();
