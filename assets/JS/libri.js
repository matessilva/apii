/* (function (win, doc) {
    'use strict'


    function DOM(elements) {
        this.element = document.querySelectorAll(elements);
    }

    DOM.prototype.on = function on(string) {

    };
    DOM.prototype.off = function off() {};
    DOM.prototype.get = function get() {
        return this.element;
    };

    var $a = new DOM('[data-js="link"]');
    $a.on("click", function (e) {
        e.preventDefault();
        console.log("clicou");
    });

    console.log("Elementos selecionados:", $a.get());
    console.log("$a é filho de body?", $a.get()[0].parentNode === document.body);
})(window, document)
 */

(function (win, doc) {
  //Endpoint via axios

  (async () => {
    var fot = document.querySelector("#campImg");
    var response = await axios.get("https://raw.githubusercontent.com/matessilva/apii/master/assets/JS/api.json");
    /* var caminho = JSON.parse('response') */
    var caminho = response.data.results;
    console.log(caminho);
    var corp = doc.querySelector("#Corpo")
    caminho.forEach(function (item) {
      var Modelo = document.createElement("P");
      var motor = document.createElement("P");
      var cambio = document.createElement("P");
      var etanol = document.createElement("P");
      var gasolina = document.createElement("P");
      var Kim = document.createElement("P");
      var Co2 = document.createElement("P");
      var div = document.createElement('div');
      div.setAttribute('class', 'carros');

      Modelo.innerHTML = item.modelo;
      motor.innerHTML = item.motor;
      cambio.innerHTML = item.cambio;
      etanol.innerHTML = item.Etanol;
      gasolina.innerHTML = item.gasolina;
      Kim.innerHTML = item.MjKm;
      Co2.innerHTML = item.CO2;
      div.appendChild(Modelo);
      div.appendChild(motor);
      div.appendChild(cambio);
      div.appendChild(etanol);
      div.appendChild(gasolina);
      div.appendChild(Kim);
      div.appendChild(Co2);

      doc.querySelector("#Corpo").appendChild(div);

    })
    /*  mail.innerHTML = response.data.results["0"].email;
     name.innerHTML =
       response.data.results["0"].name.first +
       " " +
       response.data.results["0"].name.last;
     fot.src = response.data.results["0"].picture.large; */
  })();

  function criarCorpo(quantidade) {
    var test = document.querySelector("#corpo").cloneNode(true);
    console.log(test)
  }

  //Variáveis para ambos os métodos de Endpoint

  /*   container = document.querySelector("#root");
    var mail = document.querySelector("#email");
    var name = document.querySelector("#nome");
    var fot = document.querySelector("#campImg");

    var xmlhttp = new XMLHttpRequest();
    var url = "assets/js/jason.json"; // caminho do arquivo

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        handle(myArr);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function handle(arr) {
      // forEach aqui para criar o select
    }
   */



  //Endpoint via fetch

  /* var container = document.querySelector("#root");
  var mail = document.querySelector("#email");
  var name = document.querySelector("#nome");
  var fot = document.querySelector("#campImg");

  function traer() {
    fetch("assets/js/libri.js")
      .then(res => {
        console.log(res);
        res.json();
      })
      .then(data => {
        console.log(data.results["0"].picture.large);
        mail.innerHTML = data.results["0"].email;
        name.innerHTML =
          data.results["0"].name.first + " " + data.results["0"].name.last;
        fot.src = data.results["0"].picture.large;
      })
      .catch(status => {
        alert("tese" + "  " + err);
      });
  }
  traer(); */
})(window, document);