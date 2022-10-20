const emailElement = document.getElementById('email')
const messageElement = document.getElementById('message')

const form = document.querySelector('#form')
const buttonMailto = document.querySelector('#mail')


form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  if (validateForm()){
    console.log("Validated!")
    const form = new FormData(this)
    buttonMailto.setAttribute('href',
    `mailto:leonelbbravo@gmail.com?subject=Nombre:${form.get('name')}Correo: ${form.get('email')}&body=${form.get('message')}`)
    buttonMailto.click()
  }
  }


let errorLabelEmail = document.createElement('label')
errorLabelEmail.id = "error-label-email"
errorLabelEmail.innerHTML = `<p class="error-label">Verifique que su mail este escrito correctamente.</p>`


let errorLabelMessage = document.createElement('label')
errorLabelMessage.id = "error-label-message"
errorLabelMessage.innerHTML = `<p class="error-label">Ingrese un mensaje mas largo.</p>`

function removeLabels(){
  if( document.getElementById("error-label-email") ) // If the element already exist.
  {
      document.getElementById("error-label-email").remove()
  }
  if( document.getElementById("error-label-message") ) // If the element already exist.
  {
      document.getElementById("error-label-message").remove()
  }
}

function addLabelEmail(){
  errorLabelEmail.appendAfter(emailElement);
}

function addLabelMessage(){
  errorLabelMessage.appendAfter(messageElement);
}

function validateForm(){
  let inputMail = emailElement.value
  let inputMessage = messageElement.value
  let mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  let isAnEmail = mailRegex.test(inputMail)
  removeLabels()
  if(! isAnEmail){
    /* Modify the DOM */
    addLabelEmail()
  }
  if(!(inputMessage.length > 10)){
    /* Modify the DOM */
    addLabelMessage()
  }
  let conditionToValidate = isAnEmail && (inputMessage.length>10)
  console.log(conditionToValidate)
  return conditionToValidate
}