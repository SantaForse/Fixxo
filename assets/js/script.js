
const submitForm = event => {
    event.preventDefault()
    validate(event)
}

const validate = (event) => {
    switch(event.type) {
        case 'keyup':
            validateElement(event.target)
            break;

            case 'submit':
                for(let element of event.target)
                validateElement(element)
            break;
    }
}

const validateElement = (element) => {
    
    if (element.required){
        
        let error = ""

        switch(element.type) {
            case 'text':
                if (!isNullOrEmpty(element.value)) {
                    if (!isMinimumLength(element.value, element.dataset.requiredMin)) {
                        error = `Your ${element.id.toLocaleLowerCase()} must contain at least ${element.dataset.requiredMin} letters.`
                    } 
                } else {
                    error = `You must enter a ${element.id.toLocaleLowerCase()}.`
                }
                break;

            case 'email':
                if (!isNullOrEmpty(element.value)) {
                    if(!isEmailValid(element.value)) {
                        error = `Your ${element.id.toLocaleLowerCase()} is invalid (example: example@domain.com).`

                    }
                } else {
                    error = `You must enter an ${element.id.toLocaleLowerCase()}.`
                }
                break;

            case 'textarea':
                if (!isNullOrEmpty(element.value)) {
                    if (!isMinimumLength(element.value, element.dataset.requiredMin)) {
                        error = `Your ${element.id.toLocaleLowerCase()} must contain at least ${element.dataset.requiredMin} characters.`
                    } 
                } else {
                    error = `You must enter a ${element.id.toLocaleLowerCase()}.`
                }
                break;
        }

        document.getElementById(`${element.id.toLocaleLowerCase()}ErrorMessage`).innerText = error

    }

}










const isNullOrEmpty = value => {
    if (value.length === 0) {
        return true 
    } else {
        return false
    }           
}

const isMinimumLength = (value, minLength = 2) => {
    if (value.length >= minLength) {
        return true
    } else {
        return false
    }
}

const isEmailValid = (email) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/d

    if (regEx.test(email)) {
        return true
    } else {
        return false
    }
}




















// const checkLength = (element, errorMessage = "This field is required", minLength = 2) => {
//     console.log(element.target.id)

//     if (element.target.value.length < minLength) {
//         document.getElementById(element.target.id).classList.add('error')
//         document.getElementById(`${element.target.id}ErrorMessage`).innerText = errorMessage
//     } else {
//         document.getElementById(element.target.id).classList.remove('error')
//         document.getElementById(`${element.target.id}ErrorMessage`).innerText = ""
//     }
// }


// const checkEmail = (element) => {
//     if (element.match(/))
// }




// const validate = (e) => {
//     switch(e.target.type) {
//         case "text":
//             checkLength(e, `You must enter a ${e.target.id}`, 2)
//             break;
//         case "email":
//             break;
//         case "textarea":
//             checkLength(e, `You must enter a ${e.target.id}`, 5)
//             break;
//     }
// }



















