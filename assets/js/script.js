const submitForm = event => {
    event.preventDefault()

    for (let element of event.target) {
        if (element.required){
        
            let error = ""

            switch(element.type) {
                case 'text':
                    if (!isNullOrEmpty(element.value)) {
                        if (!isMinimumLength(element.value, 2)) {
                            error = `Your ${element.id} must contain at least 2 letters.`
                        } 
                    } else {
                        error = `You must enter a ${element.id}.`
                    }
                    break;

                case 'email':
                    if (!isNullOrEmpty(element.value)) {
                        if (!isMinimumLength(element.value, 5)) {
                            error = `Your ${element.id} must contain at least 5 letters.`
                        } 
                    } else {
                        error = `You must enter an ${element.id}.`
                    }
                    break;

                case 'textarea':
                    if (!isNullOrEmpty(element.value)) {
                        if (!isMinimumLength(element.value, 10)) {
                            error = `Your ${element.id} must contain at least 10 letters.`
                        } 
                    } else {
                        error = `You must enter a ${element.id}.`
                    }
                    break;
            }

            document.getElementById(`${element.id}ErrorMessage`).innerText = error

        }    
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



















