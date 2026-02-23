// ------------------------Book Appointment Model----------------------------------
let appointmentBox = document.querySelector('#appModel')
let toastMessage = document.querySelector('#toast')
let appointmentForm = document.querySelector("#appointmentForm")

function openModel() {
    appointmentBox.classList.add('show')
}

function closeModel() {
    appointmentBox.classList.remove('show')
}

appointmentForm.addEventListener('submit', function (e) {
    e.preventDefault()
    closeModel()
    toastMessage.classList.add('showToast')
    setTimeout(() => {
        toastMessage.classList.remove('showToast')
    }, 2500)
    appointmentForm.reset();
})
// ----------------------------check (N) letters--------------------------------------------------
let counter = document.querySelector("#counter")
let tArea = document.querySelector("#message")
let count = document.querySelector("p.count") , maxLength=10

tArea.addEventListener("input", function () {
    count.style.display = "block"
    counter.innerHTML = tArea.value.length;
    if (tArea.value.length > maxLength) {
        tArea.style.boxShadow = "0 0 0 2px red"
    }else
        tArea.style.boxShadow = "0 0 0 2px #3b82f6"
})
// ---------------------------contact Form--------------------------------------
let form = document.getElementById('contactForm')
let message = document.querySelector('.contactMessage')

form.addEventListener('submit', function (e) {
    if(tArea.value.length > maxLength) {
        e.preventDefault()
        alert(`Message must be ${maxLength} characters or less`)
        return
    }else{
    e.preventDefault()
    message.style.background = 'linear-gradient(135deg, #14b8a6 0%, #2563eb  100%)';
    message.style.color = 'white'
    message.classList.add('showContactMessage')
    setTimeout(() => {
        message.classList.remove('showContactMessage')
    }, 2500)
    form.reset(); }
})

// ----------------------------------------------------------------------------


