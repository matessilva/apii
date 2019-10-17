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
    const response = await axios.get("assets/js/jason.json");
    /* var caminho = JSON.parse('response') */
    caminho = response.data.results;
    console.log(caminho);


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