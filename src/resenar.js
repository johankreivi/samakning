/*Javascript för resenär nedan...
Grupp gud, robin
*/

const onload = (window.onload = () => {
  //TODO: Skapa en loop för att ladda alla fälten från localstorage, använd arrayen nedan
  let faltAttKolla = [
    "antalResenarer",
    "antalResenarer",
    "enkelPendling",
    "nar",
    "friText",
    "fran",
    "till",
    "pris",
  ];

  //TODO: kolla separat för varje fält i localstorage (skapa en ny function)
  if (localStorage.getItem("antalResenarer")) {
    let antalResenarer = localStorage.getItem("antalResenarer");
    let enkelPendling = localStorage.getItem("enkelPendling");
    let nar = localStorage.getItem("nar");
    let friText = localStorage.getItem("friText");
    let fran = localStorage.getItem("fran");
    let till = localStorage.getItem("till");
    let pris = localStorage.getItem("pris");

    let eAntalResenarer = document.getElementById("antalResenarer");
    let eEnkelPendling = document.getElementById("enkelPendling");
    let eNar = document.getElementById("nar");
    let eFriText = document.getElementById("friText");
    let eFran = document.getElementById("fran");
    let eTill = document.getElementById("till");
    let ePris = document.getElementById("pris");

    eAntalResenarer.value = antalResenarer;
    eEnkelPendling.value = enkelPendling;
    eNar.value = nar;
    eFriText.value = friText;
    eFran.value = fran;
    eTill.value = till;
    ePris.value = pris;
  }
});

const saveResForm = (event) => {
  // preventDefault() hindrar sidan att laddas om
  event.preventDefault();

  //Lagra datan från formuläret i objektet {resFormData}
  //ex: resFormData.antalResenarer innehåller sedan antaler resenärer
  const resFormData = {
    antalResenarer: document.getElementById("antalResenarer").value,
    enkelPendling: document.getElementById("enkelPendling").value,
    nar: document.getElementById("nar").value,
    friText: document.getElementById("friText").value,
    fran: document.getElementById("fran").value,
    till: document.getElementById("till").value,
    pris: document.getElementById("pris").value,
  };

  //TODO: Validera alla fält innan koden nedan körs

  //Alla fälten sparas med respektive nyckel i localstorage
  localStorage.setItem("antalResenarer", resFormData.antalResenarer);
  localStorage.setItem("enkelPendling", resFormData.enkelPendling);
  localStorage.setItem("nar", resFormData.nar);
  localStorage.setItem("friText", resFormData.friText);
  localStorage.setItem("fran", resFormData.fran);
  localStorage.setItem("till", resFormData.till);
  localStorage.setItem("pris", resFormData.pris);
};
