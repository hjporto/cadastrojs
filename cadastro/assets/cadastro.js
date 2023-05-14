const preencherCep = document.getElementById("cep");
const completarCep = document.getElementById("completarCep");
let cep = "";
completarCep.addEventListener("click", () => {
  const meuCep = `https://viacep.com.br/ws/${preencherCep.value}/json/ `;
  console.log(meuCep);

  fetch(meuCep)
    .then((response) => response.json())
    .then((json) => {
      cep = json;
      console.log(cep);
    });
  document.getElementById("endereco").value = cep.logradouro;
  document.getElementById("bairro").value = cep.bairro;
  document.getElementById("numero").value = cep.numero;
  document.getElementById("cidade").value = cep.localidade;
});
document.getElementById("cadastro").addEventListener("click", cadastrar);
function cadastrar() {
  const form = {
    nome: document.getElementById("name").value,
    cpf: document.getElementById("cpf").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    nascimento: document.getElementById("nascimento").value,
    genero: document.getElementById("genero").value,
    escolaridade: document.getElementById("escolaridade").value,
    estado_civil: document.getElementById("estado-civil").value,
    endereco: document.getElementById("endereco").value,
    cep: document.getElementById("cep").value,
    bairro: document.getElementById("bairro").value,
    numero: document.getElementById("numero").value,
    cidade: document.getElementById("cidade").value,
    estado: document.getSelection("estado").value,
  };
  console.log(JSON.stringify(form));
}
