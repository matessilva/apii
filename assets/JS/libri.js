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
      var Modelo = document.createElement("h3");
      var motor = document.createElement("P");
      var cambio = document.createElement("P");
      var etanol = document.createElement("P");
      var gasolina = document.createElement("P");
      var Kim = document.createElement("P");
      var Co2 = document.createElement("P");
      var contCar = document.createElement('div');
      contCar.setAttribute('class', 'container-carro');
      var NomeC = document.createElement('div');
      NomeC.setAttribute('class', 'nomeIma');
      var inforSup = document.createElement('div');
      inforSup.setAttribute('class', 'informacoes inforSup');
      var inforInf = document.createElement('div');
      inforInf.setAttribute('class', 'informacoes inforInf');

      Modelo.innerHTML = item.modelo;
      motor.innerHTML = item.motor;
      cambio.innerHTML = item.cambio;
      etanol.innerHTML = item.Etanol;
      gasolina.innerHTML = item.gasolina;
      Kim.innerHTML = item.MjKm;
      Co2.innerHTML = item.CO2;

      NomeC.appendChild(Modelo);
      inforSup.appendChild(motor);
      inforSup.appendChild(cambio);
      inforSup.appendChild(etanol);
      inforInf.appendChild(gasolina);
      inforInf.appendChild(Kim);
      inforInf.appendChild(Co2);

      contCar.appendChild(NomeC);
      contCar.appendChild(inforSup);
      contCar.appendChild(inforInf);
      doc.querySelector("#Corpo").appendChild(contCar);

    })
    /*  mail.innerHTML = response.data.results["0"].email;
     name.innerHTML =
       response.data.results["0"].name.first +
       " " +
       response.data.results["0"].name.last;
     fot.src = response.data.results["0"].picture.large; */
  })();


})(window, document);