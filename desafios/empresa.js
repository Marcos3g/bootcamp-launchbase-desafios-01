const usuario = {
  nome: "Diego",
  empresa: {
    nome: "Rocketseat",
    cor: "roxo",
    endereco: {
      Rua: "Rua Guilherme Gembala Nº 260",
    }
  }
};

console.log(`A empresa ${usuario.empresa.nome} está localizada na ${usuario.empresa.endereco.Rua}`)
