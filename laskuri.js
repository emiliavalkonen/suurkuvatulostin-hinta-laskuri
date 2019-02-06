
// HUOM JOS HINTOJA PITÄÄ MUUTTAA, TEE SE TÄSSÄ!
const paperPrice = 0.40;
const inkPrice = 6.00;


// Hakee paperin pituuden jonka asiakas on syöttänyt

function getPaperInput() {
  let theForm = document.forms['userInput'];
  let paperInput = theForm.elements['paperLength'];
  let paperLength = 0;


  if (paperInput.value != "") {

      paperLength = parseFloat(paperInput.value);

  }
  console.log(paperLength);
  return paperLength;
}

// Hakee musteen määrän jonka asiakas on syöttänyt

function getInkInput() {
  let theForm = document.forms['userInput'];
  let inkInput = theForm.elements['inkAmount'];
  let inkAmount = 0;

  if (inkInput.value != "") {

      inkAmount = parseFloat(inkInput.value);
  }
  console.log(inkAmount);
  return inkAmount;
}

// Laskee tulostuksen hinnan perustuen asiakkaan syöttämiin paperin ja musteen määriin ja lisää loppusumman sivulle

function calculatePrice() {
  let totalPrice = (paperPrice * getPaperInput()) + (inkPrice * getInkInput());
  document.getElementById('totalPrice').innerHTML = 'Hinta/Price: ' + totalPrice.toFixed(2);
}
