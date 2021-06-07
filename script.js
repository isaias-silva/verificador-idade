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
        var fsex = document.getElementsByName("sex");
        //idade
        var idade = ano - Number(fano.value);
        //genero
        var genero = "";
        //imagem que será inserida
        var imge = document.createElement("img");
        imge.setAttribute("id", "foto");

        //se homem estiver marcado
        if (fsex[0].checked) {
            genero = "homem";

            if (idade >= 0 && idade < 6) {
                //baby
                imge.setAttribute("src", "img/h_bebe.jpeg");
            }

            if (idade >= 6 && idade < 12) {
                //criança
                imge.setAttribute("src", "img/h_criança.jpeg");
            }
            if (idade >= 12 && idade < 18) {
                //jovem
                imge.setAttribute("src", "img/h_jovem.jpeg");
            }

            if (idade >= 18 && idade < 60) {
                imge.setAttribute("src", "img/h.jpeg");
                //adulto
            }

            if (idade >= 60) {
                //idoso
                imge.setAttribute("src", "img/h_idoso.jpeg");
            }
        }
        // se não se mulher estiver marcado
        else if (fsex[1].checked) {
            genero = "mulher";

            if (idade >= 0 && idade < 6) {
                //baby
                imge.setAttribute("src", "img/m_bebe.jpg");
            }

            if (idade >= 6 && idade < 12) {
                //criança
                imge.setAttribute("src", "img/m_crianca.jpeg");
            }
            if (idade >= 12 && idade < 18) {
                //jovem
                imge.setAttribute("src", "img/m_jovem.jpeg");
            }

            if (idade >= 18 && idade < 60) {
                imge.setAttribute("src", "img/m.jpeg");
                //adulto
            }

            if (idade >= 60) {
                //idoso
                imge.setAttribute("src", "img/m_idosa.jpg");
            }
        }

        //escrevendo
        resposta.innerHTML = `detectado ${genero} de ${idade} anos`;
        //colocando foto
        resposta.appendChild(imge);
    }
}