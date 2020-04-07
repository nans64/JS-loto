
const newGame = () => {

  let resultDiv = document.querySelector(".result");
 
  const firstname = document.formLoto.firstname.value;
  const lastname = document.formLoto.lastname.value;
  const email = document.formLoto.email.value;

  const number1 = document.formLoto.number1.value;
  const number2 = document.formLoto.number2.value;
  const number3 = document.formLoto.number3.value;
  const number4 = document.formLoto.number4.value;
  const number5 = document.formLoto.number5.value;
  const number6 = document.formLoto.number6.value;

  let number = [Number(number1), Number(number2), Number(number3), Number(number4), Number(number5), Number(number6)].sort();

  if(! checkValidation(firstname, lastname, email, resultDiv)){
    return false;
    }
  if(!checkCustomValidationEmail(email, resultDiv)){
    return false;
  }

  checkLoto(number, resultDiv);


};

checkValidation = (firstname, lastname, email, resultDiv) => {
  if(firstname == "") {
    resultDiv.innerHTML = `<div class="alert alert-danger" role="alert">
      Please add your firstName !
      </div>`;
      console.log("je suis la");
    return false;
  }

  if(lastname == "") {
    resultDiv.innerHTML = `<div class="alert alert-danger" role="alert">
    Please provide your Lastname !
    </div>`;
    return false;
  }

  if(email == "") {
    resultDiv.innerHTML = `<div class="alert alert-danger" role="alert">
    Please provide your email !
    </div>`;
    return false;
  }
  return true
}



const checkCustomValidationEmail = (email, resultDiv) =>{

   if (customEmailTest(email).length > 0){
    resultDiv.innerHTML = `<div class="alert alert-danger" role="alert">
    ${customEmailTest(email)}
    </div>`;
    console.log("je suis la aussi");
    return false;
  }
  return true;
}



const customEmailTest = (email) => {
  let messages = [];
  let extension = email.split('.').pop();
  if (email.length < 8){
    message = "Le mail fait moins de 8 caractère";
    messages.push(message);
  }
  if (email.length>30){
    message = "Le mail fait plus de 30 caractère";
    messages.push(message);
  }
  if (!email.includes("@") || !email.includes(".")  ){
    message = "Le mail ne contient pas de @ ou de. "
    messages.push(message);
  }
  if (extension.length !== 2 && extension.length !== 3 ){
    message = "L'extension ne fait pas 2 ou 3 caractere";
    messages.push(message);
  }
  return messages;
}


const checkLoto = (number, resultDiv) => {
  let rand1 = getRandomIntInclusive(1, 10);
  let rand2 = getRandomIntInclusive(1, 10);
  let rand3 = getRandomIntInclusive(1, 10);
  let rand4 = getRandomIntInclusive(1, 10);
  let rand5 = getRandomIntInclusive(1, 10);
  let rand6 = getRandomIntInclusive(1, 10);
  let random =[rand1, rand2, rand3, rand4, rand5, rand6].sort();

  for (let i = 0; i < random.length; i++) {
		if (random[i] !== number[i]){ 
      resultDiv.innerHTML = `<div class="alert alert-warning" role="alert">
      Sorry you lost. The winning numbers were ${rand1}, ${rand2}, ${rand3}, ${rand4}, ${rand5}, ${rand6}
      <br>
      <a href="" class="mt-2 btn btn-info" >start a new game </a>
      </div>`;
     return false;
    } 
  }
  resultDiv.innerHTML = `<div class="alert alert-warning" role="alert">
     Congratulation, you just won 1 million dollar </div>`;
    return true; 
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}