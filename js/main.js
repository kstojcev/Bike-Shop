// write your code here
$(function () {
  let allBikes = [];
  let bikeCardsContainer = $("#bikeCardsContainer");
  let showAllFilter = $("#showAllFilter");
  let maleFilter = $("#maleFilter");
  let femaleFilter = $("#femaleFilter");
  let leGrandFilter = $("#leGrandFilter");
  let krossFilter = $("#krossFilter");
  let explorerFilter = $("#explorerFilter");
  let visitorFilter = $("#visitorFilter");
  let ponyFilter = $("#ponyFilter");
  let forceFilter = $("#forceFilter");
  let ebikesFilter = $("#ebikesFilter");
  let idealFilter = $("#idealFilter");

  let buttonArray = [
    showAllFilter,
    maleFilter,
    femaleFilter,
    leGrandFilter,
    krossFilter,
    explorerFilter,
    visitorFilter,
    ponyFilter,
    forceFilter,
    ebikesFilter,
    idealFilter,
  ];

  $.ajax({
    url: "https://json-project3.herokuapp.com/products",
    async: false,
    success: function (data) {
      allBikes = data;
    },
  });

  function listBikes(filter = "", gender = "") {
    bikeCardsContainer.html("");
    if (filter != "") {
      allBikes.forEach((bike) => {
        if (bike["brand"] == filter) {
          bikeCardsContainer.append(
            `
            <div class="col-md-4 d-flex justify-content-center mb-4">
              <div class="card" style="width: 15rem;">
                <img src="./img/${bike.image}.png" class="card-img-top p-3" alt="..."/>
                <div class="card-body" style="background-color: orange">
                  <p class="card-title fw-bold">${bike.name}</p>
                  <p class="card-text">${bike.price}$</p>
                </div>
              </div>
            </div>
          `
          );
        }
      });
    } else if (gender != "") {
      allBikes.forEach((bike) => {
        if (bike["gender"] == gender) {
          bikeCardsContainer.append(
            `
            <div class="col-md-4 d-flex justify-content-center mb-4">
              <div class="card" style="width: 15rem;">
                <img src="./img/${bike.image}.png" class="card-img-top p-3" alt="..."/>
                <div class="card-body" style="background-color: orange">
                  <p class="card-title fw-bold">${bike.name}</p>
                  <p class="card-text">${bike.price}$</p>
                </div>
              </div>
            </div>
          `
          );
        }
      });
    } else {
      allBikes.forEach((bike) => {
        bikeCardsContainer.append(
          `
            <div class="col-md-4 d-flex justify-content-center mb-4">
              <div class="card" style="width: 15rem;">
                <img src="./img/${bike.image}.png" class="card-img-top p-3" alt="..."/>
                <div class="card-body" style="background-color: orange">
                  <p class="card-title fw-bold">${bike.name}</p>
                  <p class="card-text">${bike.price}$</p>
                </div>
              </div>
            </div>
          `
        );
      });
    }
  }

  listBikes();

  function clearButtonColors() {
    buttonArray.forEach((button) => {
      button.removeClass("active");
    });
  }
  function addButtonColor(node) {
    node.addClass("active");
    node.find("span").addClass("active");
  }

  showAllFilter.on("click", function () {
    clearButtonColors();
    listBikes();
    addButtonColor(showAllFilter);
  });
  maleFilter.on("click", function () {
    clearButtonColors();
    listBikes("", "MALE");
    addButtonColor(maleFilter);
  });
  femaleFilter.on("click", function () {
    clearButtonColors();
    listBikes("", "FEMALE");
    addButtonColor(femaleFilter);
  });
  leGrandFilter.on("click", function () {
    clearButtonColors();
    listBikes("LE GRAND BIKES");
    addButtonColor(leGrandFilter);
  });
  krossFilter.on("click", function () {
    clearButtonColors();
    listBikes("KROSS");
    addButtonColor(krossFilter);
  });
  explorerFilter.on("click", function () {
    clearButtonColors();
    listBikes("EXPLORER");
    addButtonColor(explorerFilter);
  });
  visitorFilter.on("click", function () {
    clearButtonColors();
    listBikes("VISITOR");
    addButtonColor(visitorFilter);
  });
  ponyFilter.on("click", function () {
    clearButtonColors();
    listBikes("PONY");
    addButtonColor(ponyFilter);
  });
  forceFilter.on("click", function () {
    clearButtonColors();
    listBikes("FORCE");
    addButtonColor(forceFilter);
  });
  ebikesFilter.on("click", function () {
    clearButtonColors();
    listBikes("E-BIKES");
    addButtonColor(ebikesFilter);
  });
  idealFilter.on("click", function () {
    clearButtonColors();
    listBikes("IDEAL");
    addButtonColor(idealFilter);
  });
});
