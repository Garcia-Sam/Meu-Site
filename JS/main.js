function adicionarConteudoEImagem(conteudo, imagemSrc) {
    var divTrabalhos = document.getElementById('trabalhos');
    
    var novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = conteudo;
    divTrabalhos.appendChild(novoParagrafo);

    var novaImagem = document.createElement("img");
    novaImagem.classList.add('imgprojetos')
    novaImagem.setAttribute('src', imagemSrc);
    divTrabalhos.appendChild(novaImagem);
}

adicionarConteudoEImagem("Projeto Fokus. Este projeto é inspirado na técnica Pomodoro, que visa a concentração em tarefas importantes. Dessa forma, concentramo-nos em uma atividade por 25 minutos, por exemplo, e após esse período, é possível pausar por 5 minutos ou optar por uma pausa mais longa de 15 minutos.", '/imgs/Projeto-Cordel.png')

adicionarConteudoEImagem('O Alura Midi é um instrumento musical de interface digital, onde a cada botão vamos reproduzir o som de um instrumento o Pom, o Tim e o Splash.', '/imgs/Projeto-Cordel.png')

adicionarConteudoEImagem('Aparecida Nutrição. Este projeto surgiu na premissa A nutricionista Aparecida fazia controle dos clientes com fichas cadastrais, preenchidas manualmente. Com a criação do site, ela conseguirá armazenar as informações, a serem exibidas em uma tabela, em que novos cadastros serão adicionados dinamicamente por meio do JavaScript, e poderão ser filtrados posteriormente. Ela também não precisará mais fazer cálculos manualmente. Todos serão realizados utilizando-se o JavaScript.', '/imgs/Projeto-Cordel.png')