const buttons = document.querySelectorAll('p');
const inputArea = document.getElementById('inputArea');
const history = document.getElementById('history');

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        const value = button.id
        if (!isNaN(value)){
            handleNumberClick(value)
        } else if(value === 'clear'){
            handleClearClick()
        } else if(value === 'delete'){
            handleDeleteClick()
        } else if(value === '='){
            handleEqualClick()
        } else {
            handleOperatorClick(value)
        }
    })
});

const handleNumberClick = (value) => {
    inputArea.value += value
}

const handleClearClick = (value) => {
    inputArea.value = ''
    history.textContent = ''
}

const handleDeleteClick = (value) => {
    inputArea.value = inputArea.value.slice(0, -1)
}

const handleOperatorClick = (operator) => {
    inputArea.value += operator
}

const handleEqualClick = (value) => {
    try {
        const result = eval(inputArea.value)
        inputArea.value = result
        history.textContent = inputArea.value
    } catch (error) {
        inputArea.value = 'Error'
        history.textContent = ''
    }
}


