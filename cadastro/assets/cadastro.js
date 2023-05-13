document.getElementById("cadastro").addEventListener("click", cadastrar);
function cadastrar() {
  // alert(recebe.value);
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
  console.log(form);
}
