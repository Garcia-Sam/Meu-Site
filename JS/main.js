const   conteudo =  document.querySelector("#trabalhos")
const   paragrafo   =   document.createElement('p')
const   imagem  =   document.createElement('img')

conteudo.appendChild(paragrafo)
paragrafo.textContent = 'lorem'

conteudo.appendChild(imagem)
imagem.setAttribute ('src', './imgs/Projeto-Android.png')
