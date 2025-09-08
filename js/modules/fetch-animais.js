import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // Cria a div contendo informações
  // com o total de animais.
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Preenche cada animal no Dom
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  //puxa os animais através de um arquivo json
  // e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // fetch espera a resposta e transforma a resposta em json
      const animaisResponse = await fetch(url);

      // após a transformação em json, ativa as funções para preencher
      // e animar os números
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach((animal) => {
        preencherAnimais(animal);
        animaAnimaisNumeros();
      });
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
