function verificar() {
    //conseguindo a data
    var data = new Date();
    // retirando o ano da data
    var ano = data.getUTCFullYear();
    //pegando o ano do input
    var fano = document.getElementById("ano_n");
    //local onde será escrito a resposta
    var resposta = document.getElementById("res");
    //se
    if (
        fano.value.length == 0 ||
        fano.value > ano ||
        fano.value.length != 4 ||
        fano.value < 1800
    ) {
        //erro
        alert("erro verifique os dados e tente novamente");
    }
    //se não
    else {
        //sexo 
        var fsex = document.getElementsByName("sex")[0].checked ? "h" : "m";

        //idade
        var idade = ano - Number(fano.value);

        //imagem que será inserida
        var imge = document.createElement("img");
        imge.setAttribute("id", "foto");

        // Verifica se o genero é homem ou mulher e aplica o background de acordo
        document.body.style.background = fsex === "h" ? " rgb(0, 28, 54)" : " rgb(172, 5, 61)";

        if (idade >= 0 && idade < 6) {
            //baby
            imge.setAttribute("src", `img/${fsex}_bebe.jpeg`);
        }

        if (idade >= 6 && idade < 12) {
            //criança
            imge.setAttribute("src", `img/${fsex}_crianca.jpeg`);
        }
        if (idade >= 12 && idade < 18) {
            //jovem
            imge.setAttribute("src", `img/${fsex}_jovem.jpeg`);
        }

        if (idade >= 18 && idade < 60) {
            imge.setAttribute("src", `img/${fsex}.jpeg`);
            //adulto
        }

        if (idade >= 60) {
            //idoso					 // Verifica se é homem ou mulher mudando o genero da plavra
            imge.setAttribute("src", `img/${fsex}_idos${fsex === "m" ? "a" : "o"}.jpeg`);
        }

        //escrevendo
        resposta.innerHTML = `detectado ${fsex === "h" ? "homem" : "mulher"} de ${idade} anos`;
        //colocando foto
        resposta.appendChild(imge);
    }
}