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


})(window, document);