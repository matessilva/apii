(function(win, doc) {
  "use strict";
  function person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.getFullname = function getFullname() {
      return this.name + " " + this.lastName;
    };
    this.getAge = function getAge() {
      return this.age;
    };
    this.addAge = function addAge() {
      this.age += arguments[0];
      return this;
    };
  }
  var mateus = new person("Mateus", "Oliveira", 21);
  console.log(mateus);
  console.log(mateus.getFullname());
  console.log();
})(window, document);

(function(win, doc) {
  function cardapio(p1, p2, p3) {
    this.valor = p1;
    this.prato = p2;
    this.acompanhamento = p3;
    this.total = function total() {
      return console.log(
        this.prato + " com " + this.acompanhamento + " sai:R$" + this.valor
      );
    };
  }
  var teste = new cardapio(100, "Miojo", "feijão");
  console.log(teste.total());
})(window, document);

/* 
$(function() {
  $(btnMenu1).hover(function() {
    $("#btnMenu1").addClass("border");
  });
  $(btnMenu1).mouseout(function() {
    $("#btnMenu1").removeClass("border");
  });
  $(btnMenu2).hover(function() {
    $("#btnMenu2").addClass("border");
  });
  $(btnMenu2).mouseout(function() {
    $("#btnMenu2").removeClass("border");
  });
  $(btnMenu3).hover(function() {
    $("#btnMenu3").addClass("border");
  });
  $(btnMenu3).mouseout(function() {
    $("#btnMenu3").removeClass("border");
  });
  $(btnMenu4).hover(function() {
    $("#btnMenu4").addClass("border");
  });
  $(btnMenu4).mouseout(function() {
    $("#btnMenu4").removeClass("border");
  });
  $(btnMenu5).hover(function() {
    $("#btnMenu5").addClass("border");
  });
  $(btnMenu5).mouseout(function() {
    $("#btnMenu5").removeClass("border");
  });
  $(btnMenu6).hover(function() {
    $("#btnMenu6").addClass("border");
  });
  $(btnMenu6).mouseout(function() {
    $("#btnMenu6").removeClass("border");
  });
});

 */
