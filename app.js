function pesquisar(){
    //console.log("Clicou"); // Linha comentada, provavelmente usada para debugar o clique

    // Busca o elemento HTML com o ID "resultados-pesquisa" 
    // que deve ser uma seção onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == ''){
        section.innerHTML = "<p>Nada foi encontrado!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicia uma string vazia que irá concatenar os resultados.
    let resultados = "";

    // Loop que itera sobre cada objeto dentro da variável 'dados'.
    // 'dados' parece ser um array de objetos contendo informações de cada atleta.
    for (let dado of dados){
        console.log(toString(dado))
        if (dado.titulo.toLowerCase().includes(campoPesquisa) || dado.descricao.toLowerCase().includes(campoPesquisa)){
            // Para cada 'dado' (atleta) no array, cria o código HTML para exibi-lo.
            // Utiliza template literals (``) para facilitar a formatação.
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `;
        };
    };

    if (!resultados){
        section.innerHTML = "<p>Nada foi encontrado!</p>"
        return
    }

    // Adiciona o HTML concatenado dentro da seção de resultados.
    section.innerHTML = resultados;
}