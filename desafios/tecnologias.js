// Users and Techs

const usuarios = [
  { nome: 'Marcos', tecnologias: ['HTML', 'CSS'] },
  { nome: 'Yane', tecnologias: ['JavaScript', 'CSS'] },
  { nome: 'Fulano', tecnologias: ['HTML', 'Node.js'] }
]

for (let usuario of usuarios) {
  console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}

// Search for Techs
function checaSeUsuarioUsaCSS(usuario) {
  for (let tecnologia of usuario.tecnologias) {
      if (tecnologia == 'CSS') return true
  }

  return false
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

  if(usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
  }
}