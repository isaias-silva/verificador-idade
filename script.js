function verificar() {
    var data = new Date();
    var ano = data.getUTCFullYear();
    var fano = document.getElementById("ano_n");
    var resposta = document.getElementById("res");
    if (fano.value.length == 0 || fano.value > ano || fano.value.length != 4 || fano.value < 1800) {
        alert("erro verifique os dados e tente novamente");
    } else {
        var fsex = document.getElementsByName("sex");
        var idade = ano - Number(fano.value);
        var genero = ""
        var imge = document.createElement('img')
        imge.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = "homem"

            if (idade >= 0 && idade < 6) {
                //baby
                imge.setAttribute('src', 'img/h_bebe.jpeg')
            }


            if (idade >= 6 && idade < 12) {
                //criança
                imge.setAttribute('src', 'img/h_criança.jpeg')
            }
            if (idade >= 12 && idade < 18) {
                //jovem
                imge.setAttribute('src', 'img/h_jovem.jpeg')
            }

            if (idade >= 18 && idade < 60) {

                imge.setAttribute('src', 'img/h.jpeg')
                    //adulto
            }

            if (idade >= 60) {
                //idoso
                imge.setAttribute('src', 'img/h_idoso.jpeg')
            }


        } else if (fsex[1].checked) {
            genero = "mulher"

            if (idade >= 0 && idade < 6) {
                //baby
                imge.setAttribute('src', 'img/m_bebe.jpg')
            }


            if (idade >= 6 && idade < 12) {
                //criança
                imge.setAttribute('src', 'img/m_crianca.jpeg')
            }
            if (idade >= 12 && idade < 18) {
                //jovem
                imge.setAttribute('src', 'img/m_jovem.jpeg')
            }

            if (idade >= 18 && idade < 60) {

                imge.setAttribute('src', 'img/m.jpeg')
                    //adulto
            }

            if (idade >= 60) {
                //idoso
                imge.setAttribute('src', 'img/m_idosa.jpg')
            }

        }


        resposta.innerHTML = `detectado ${genero} de ${idade} anos`
        resposta.appendChild(imge)
    }
}