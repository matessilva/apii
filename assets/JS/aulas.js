(function (win, doc) {
  try {
    const data = await postData('https://randomuser.me/api/r', {
      answer: 42
    });
    console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
  } catch (error) {
    console.error(error);
  }

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }



})(window, document)




/* new Vue({
  el: "#exercise",
  data: {
    Idade: "Coloque uma idade",
    Nome: "Coloque um nome",
    NomeX3: "Idade * 3",
    NymeroLe: "Sai um numero",
    testin: "color:red;",
    recebido: "",
    picked: "",
    imagim:
      "https://uploads.spiritfanfiction.com/fanfics/historias/201608/uma-historia-totalmente-aleatoria-interativa-6353447-300820162245.jpg",
    selecionado: "A",
    options: [
      { text: "Um", value: "A" },
      { text: "Dois", value: "B" },
      { text: "Três", value: "C" }
    ],
    option: ""
  },
  methods: {
    takeIdade: function(event) {
      this.Idade = event.target.value;
      this.NomeX3 = event.target.value * 3;
      this.NymeroLe = Math.random();
    },
    takeNome: function(event) {
      this.Nome = event.target.value;
    },
    mudara: function() {
      this.recebido = "Texto foi alterado";
    },
    picked: function() {
      this.picked = this.picked.value;
    },
    option: function() {
      this.selecionado = this.options.value;
    }
  }
}); */

/* (function(doc, win) {
  'use strict'
  var $a = new DOM('[data-js="link"]');

  this.addEventListener("click", function(e) {
    e.preventDefault();
    var recebe = this.prompt("clicou");
    DOM(recebe);
  });

  function DOM(string) {
    var campoo = document.querySelector(string);
    console.log("Elementos selecionados:", campoo);

    processa();

    function processa() {
      var resposta = prompt("ON  /   OFF   /    GET");
      switch (resposta) {
        case "on":
          on(campoo);
          break;

        case "off":
          break;
          on(campoo);
        case "get":
          get(campoo);
          break;
      }
    }
  }
  
  function get(x) {
    console.log(x.children);
  }

  function on(x) {
    var quatidade = x.childElementCount - 1;
    var filhos = x.children;
    console.log(filhos[1]);
    for (i = 0; i != quatidade; ) {
      x.children[i].style.color = "pink";
      i++;
    }
  }
})(document, window);
 */
/* (function(win, doc) {
  var pai = document.querySelector("#pai");
  var texto = document.createTextNode("aPENAS UM TESTE");
  var campo = document.createElement("h1");
  var menu = document.querySelector(".menuRight");
  campo.appendChild(texto);
  pai.replaceChild(campo, menu);
})(window, document);

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

var $a = new DOM('[data-js="link"]');
$a.on("click", function(e) {
  e.preventDefault();
  console.log("clicou");
});

console.log("Elementos selecionados:", $a.get());
console.log("$a é filho de body?", $a.get()[0].parentNode === document.body); */

/*  (function (win, doc) {
  carro = {
    marca: "",
    modelo: "",
    placa: "",
    ano: "",
    cor: "",
    quantasPortas: "",
    assentos: "",
    quantidadePessoas: ""
  };

  var isTruthy = function (a) {
    return console.log(Boolean(a));
  };



  function jj(a) {
    return carro.cor = a;
  }
  jj("verde")
  console.log(carro);
})(window, document); */

//AULA ATÉ 25
/* (function(win, doc) {
  "use strict";
  var $btns = document.querySelectorAll('[data-js="btn"]');
  var gg = document.querySelector('[data-js="sucs"]');
  var $mostra = document.querySelector('[data-js="mostra"]');
  var reg = new RegExp("(\\D+)", "g");
  var $op = document.querySelectorAll('[data-js="btnF"]');
  var $apaga = document.queryS
  elector('[data-js="btnApag"]');
  var valor = "";
  var val1 = 0;
  var val2 = 0;
  var result = 0;

  var formu = new Object();
  var sst = $mostra.value;
  $btns.forEach(function(i) {
    i.addEventListener("click", handleClickNumber, false);
  });

  function handleClickNumber(event) {
    $mostra.value += this.value;
  }

  function handleClickOperation(event) {
    if (isLastItemAnOperation()) $mostra.value = $mostra.value.slice(0, -1);
    $mostra.value += this.value;
  }
  function isLastItemAnOperation() {
    var op = ["+", "-", "x", "/"];
    var lastItem = $visor.value.split("").pop();
  }

  gg.addEventListener("click", function() {
    console.log(valor);
  });

  $apaga.addEventListener("click", function() {
    $mostra.value = 0;
  });

  $op.forEach(function(a) {
    a.addEventListener("click", handleClickOperation, false);
  });
  /* 
      $mostra += +a.value;
      var i = 0;
      if (i === 0) {
        val1 = parseInt(valor);
        valor = 0;
        i++;
      } else {
        console.log(val2);
      }

      /* var i = 0;
      $mostra.value += a.value;
      formu[i] = a.value;
      valor = $mostra.value;

      console.log(a.value);
      console.log($mostra.value);
      console.log(formu[i]); 
    }); */

/*   function direciona(jj) {}

  function soma(v1, v2) {
    var reg = "(\\d+)\\+(\\d+)";
    alert("teste");
  }
  function sub(v1, v2) {
    var reg = "(\\d+)\\-(\\d+)";
  }
  function div(v1, v2) {
    var reg = "(\\d+)\\/(\\d+)";
  }
  function mult(v1, v2) {
    var reg = "(\\d+)\\*(\\d+)";
  }
})(window, document); */

/* //Abaixo se encontra a tentativa de criar um menu interativo

(function (win, doc) {
  var $menuL = document.querySelector('[data-js="menuL"]');
  var menuR = document.querySelector('[data-js="menuL"]');

  $menuL.addEventListener("mouseover", function (event) {
    if (event.toElement == "ul")
      alert("test")

    event.target.style.color = 'Blue';
    event.target.className = 'border'
    console.log(event)

    setTimeout(function () {
      event.target.style.color = "";
      event.target.className = ""
    }, 500);
  })

})(window, document) */

/* function aula22(){
(function(win, doc) {
  var pessoa1 = { name: "Mateus", LastName: "Oliveira" };
  var pessoa2 = { name: "Cleber", LastName: "Madureiro" };

  function getFullname() {
    return this.name + " " + this.LastName;
  }
  console.log(getFullname.call(pessoa1));
  console.log(getFullname.call(pessoa2));
  var valores = [1, 2, 3, 4, 5, 6];
  sum.apply(valores);
  function sum() {
    console.log(arguments);
    console.log(this);
    var soma = this[0] + this[1] + this[2] + this[3] + this[4] + this[5];
    console.log("Asoma dos valores é " + soma);
  }
  var recebeu = window.prompt("Entre com alguns valores para serem somados");
  console.log("Entrada do usuário: " + recebeu);
  var testee =
    "Esse é o 1 texto para ser testado entre os 500 já fetos em 10 do 15 de 103 A.C";
  limpa(testee);
  limpa(recebeu);
  function limpa(a) {
    console.log(a.match(/(\d+)/g));
  }
})(window, document);
} */

/* function aula21(){
(function (doc, win) {
  var $inicia = document.querySelector('[data-js="inicia"'); 
  var $pausa = document.querySelector('[data-js="pausa"');
  var $reseta = document.querySelector('[data-js="reseta"');
  var $tempo = document.querySelector('[data-js="tempo"]');
  var $BTN = 0;
  var $timer = 0;
  var interval;
  alert($tempo.value)
  $inicia.addEventListener('click', function () {
    $BTN = 1;
    relogio();
  })
  $pausa.addEventListener('click', function () {
    $BTN = 2;
    relogio();
  })
  $reseta.addEventListener('click', function () {
    $BTN = 2;
    $tempo.value = 0;
    $tempo = 0;
    $timer = 0;
    relogio();
    clearInterval(interval);
  })

  function relogio() {
    if ($BTN == 1) {

      interval = $tempo.value = +$tempo.value + 1
      setTimeout(relogio, 1000)
    }
  }
  relogio();

})(window, document);
} */

/* function aula20(){
(function(win, doc) {
  "use strict";
  var nome = prompt("Qual seu nome?");;
  if (nome == "" || nome == null) nome = "Desconhecido";
  alert("Seja bem vindo " + nome);
  var $email = prompt("Digite seu email");

  var $Nome = document.querySelector('input[type="text"]');
  var $Email = document.querySelector('input[type="email"]');
  var $Mensagem = document.querySelector("textarea");
  var $Button = document.querySelector("button");
  $Email.value = $email;
  $Nome.value = nome;
  $Button.addEventListener("click", function(event) {
    event.preventDefault();
    if ($Nome.value && $Email.value && $Mensagem.value != "") valida($Email);
    else if ($Nome.value === "") alert("Preencha um Nome");
    else if ($Email.value === "") alert("Preencha um Email");
    if ($Mensagem.value === "") alert("Preencha uma mensagem");

    function valida(email) {
      var teste = email.value;
      var reg = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}");
      if (teste.match(reg)) {
        var confirma = confirm("Tem certeza que deseja enviar o formulário?");
        if (confirma == true) {
          alert("Formulário enviado com sucesso");
        } else {
          alert("Não enviaremos o formulário");
        }
      } else {
        alert("E-mail inválido");
      }
    }
  }),
    false;
})(window, document);
}
 */
/* function aula19 (){
(function() {
  "use strict";
  var text =
    "10 anos.\n50 discos vendidos.\nE nem 10% dos meus amigos o conhece.";
  var otherText =
    "Silvio Santos, nome artístico de Senor Abravanel (Rio de Janeiro, 12\n de dezembro de 1930), é um apresentador de televisão e empresário brasileiro.\n Proprietário do Grupo Silvio Santos, que inclui empresas como a Liderança\n Capitalização (administradora da loteria Tele Sena), a Jequiti Cosméticos e o\n Sistema Brasileiro de Televisão (mais conhecido como SBT), Silvio Santos possui\n um patrimônio avaliado em aproximadamente 6\n bilhões de reais.";
  var reg = new RegExp("\\d+$", "gmi");
  var regex = new RegExp("^\\d+", "gmi");
  console.log(text.match(regex));
  console.log(otherText.match(reg));

  var markup =
    '<main>\n  <div class="container">\n    <span class="text date"></span>\n    <p class=\'excerpt\'></p>\n  </div>\n</main>';

  hasclass("dibbv", "texadtt", markup);
  function hasclass(markup, cssClass) {
    var regex = new RegExp(
      "class=[\"|'](?:[\\w\\s]+)?" + cssClass + "(?:[\\w\\s]+)?[\"']"
    );
    return regex.test(markup);
  }

  var classes = ["container", "text", "date", "excerpt", "main"];
  classes.forEach(function(cssClass) {
    console.log(hasclass(markup, cssClass) + " para a classe " + cssClass);
  });
})();
} */

/* function aula18() {
  (function() {
    "use strict";

    function clencpf(a) {
      var limp = a.replace(/\D/g, "");
      console.log(limp);
      limp.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, function(
        regex,
        a,
        b,
        c,
        d
      ) {
        return console.log(a + "." + b + "." + c + "-" + d);
      });
    }
    clencpf("210.458.522-05");
    clencpf("049-214 3421-1");
    clencpf("101.123-131x32");
    clencpf("735 500 794 - 22");
    var retornames =
      "Os meses de janeiro, junho e julho começam com a letra j.";
    console.log(retornames.match(/(ju\w+)/g));
    var htmlabre =
      "<div><section><blockquote>Texto <img /></blockquote></section></div>";
    console.log(htmlabre.match(/(<\w+>)/g));
    var htmlabrefecha =
      "<div><ul><li></li><li></li><li><span></span></li></ul></div>";
    console.log(htmlabrefecha.match(/(<\/?\w+>)/g));

    var textohtml =
      "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>";
    console.log(
      textohtml.replace(
        /(<\w+>)([^<+]+)(<\/\w+>)/g,
        '$1 Otexto detro da tag "$1" é " $2 " $3\n'
      )
    );
  })();
} */

/* function aula17(){
(function () {
  "use strict";
  var text =
    "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de 'O Centauro de Luvas', foi um militar, político, abolicionista e monarquista brasileiro.";
  console.log(
    text.replace(/(Manuel Marques de Sousa)/, "Mateus Da Silva Olveira")
  );
  console.log(text.replace(/(brasileiro)/, "Paulista"));
  console.log(text.replace(/(\d)/g, "-"));
  console.log(text.replace(/[D-Za-h]/g, "0"));
  console.log(text.replace(/[Aa]/g, "4"));
  text.replace(/O Centauro de Luvas/g, function (a) {
    return console.log(a.toUpperCase());
  });

  function manda(bb) {
    var monsths = {
      janeiro: '01',
      agosto: '08',
      maio: '05',
      junho: '06',
      julho: '07'
    }
    return monsths[bb];
  }
  console.log('o mês de agosto tem o número ' + manda('agosto'))

  var regexDate = (/(\d\d) de (junho|julho) de (\d\d\d\d)/gi);

  function replac(regex, dia, mes, ano) {
    return dia + '/' + manda(mes) + '/' + ano;
  }
  console.log(text.replace(regexDate, replac));




})();
} */

/* function AULA16() {
  (function () {
    'use strict'
    var name = 'Mateus'
    var fullName = 'mateus-oliveira'
    for (var i = 0; i < 6; i++) {
      console.log(i + 1 + "° letra é " + name.charAt(i))
    }
    var nomee = fullName.replace('m', 'M')
    nomee = nomee.replace('o', 'O')

    console.log(nomee.split('-').join(" "))

    var amigg = [
      'Juao',
      'Carlos',
      'Maria',
      'Dona Benta',
      'Juarez',
      'Marcos'
    ];
    var tiraUlt = amigg.length
    var UltName = amigg[tiraUlt]
    console.log(amigg.slice(0, tiraUlt - 2) + ' e ' + amigg[tiraUlt - 1] + ' São meus amigos');

    var tt = 'Roberto'.split('o').join('a')
    console.log(tt.replace('a', 'o'))
    console.log('Fernando'.substring(8, 3))

    var nname = "eSSA É uma VARIavel teste";
    var tamaNom = nname.length;
    var arra = nname.split('');

    for (i = 0; i < tamaNom; i++) {
      if (i % 2 == 0) {
        arra[i] = arra[i].toUpperCase();
      } else {
        arra[i] = arra[i].toLowerCase();
      }

    }

    console.log(arra.toString().split(',').join(''))

  })();
} */

/* (function () {
  var obj = {

    prop1: 'prop31',
    prop2: 'prop32',
    prop3: 'prop33',

  }
  var teste = "Muuuuito"
  console.log(delete obj.prop1, obj);
  console.log("Muuuuito".split('u').join('ç'));
})();
 */

/* function aula14() {
  (function () {
    var numberObj = [];
    for (var i = 0; i <= 10; i++) {
      numberObj.push = ({
        number: i
      });
    }


    var operation = [];
    operation = Justn.reduce(function (item, indes) {
      return Justn[6] + 1;
    });
    var recebe = NumberObj.forEach(function (a, b, c) {
      return console.log(" / ", a, " / ", b, " / ", c);
    });
  });
  (function () {
    console.log([1, 2, 3, 4, 5, 6].toString());
    var sul = ["paraná", "Santa Cata, Curitiba"];
    var sudest = ["São Paulo, Rio de Janeiro"];
    var br = sul.contact(sudest);
    br.unshift("Acre", "Amanias ");
    var newSul = br.slice(2, 5);
    var nordeste = ["Alagoas", "Bahia", "Ceara"];
    console.log(nordeste);
  });
}

function aula15() {
  (function () {
    function Person(Name, LastName, Age) {
      this.Name = Name;
      this.LastName = LastName;
      this.Age = Age;
      this.getFullname = function getFullname() {
        return this.Name + " " + this.LastName;
      }
      this.getAge = function getAge() {
        return this.Age
      };
      this.addage = function addage() {
        this.age += arguments[0];
        return this
      }
    }

    var Mateus = new Person('Mateus', 'Oliveira', 20);
    var Julia = new Person('Julia', 'Mendonça', 35);
    var Lucas = new Person('Lucas', 'Jack', 24);
    console.log(Mateus)
    console.log(Julia)
    console.log(Lucas)

    console.log('Nome das pessoas')
    console.log(Mateus.getFullname() + ' Tem ' + Mateus.getAge() + ' anos');
    console.log(Julia.getFullname() + ' Tem ' + Julia.getAge() + ' anos');
    console.log(Lucas.getFullname() + ' Tem ' + Lucas.getAge() + ' anos');

    console.log(Mateus.getFullname() + ' agora tem ' + Mateus.addage(2).getAge() + ' anos')

  })();

}; */