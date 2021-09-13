let monthyincome = document.getElementById('income')
let descriptionincome = document.getElementById('descriptionincome')
let mountincome = document.getElementById('mountincome')
let expense = document.getElementById('expense')
let amountexpense = document.getElementById('expensemount')
let html = document.getElementById('html')
const boton = document.getElementById('boton')
const boton1 = document.getElementById('boton1')

boton.addEventListener('click', ()=>{

    parsedIncome = parseInt(monthyincome.value,10)
    parsedMount = parseInt(mountincome.value, 10)
    if (parsedIncome < parsedMount) {
        alert('You have not budget available')
    }else{
        result = parsedIncome - parsedMount
    text = descriptionincome.value
    let myDate = new Date();
    var dia  = myDate.getDate();
    var mes  = myDate.getMonth();
    var anio = myDate.getFullYear();
    let paragraph = document.createElement('H5');
    paragraph.classList.add('h11')
    paragraph.innerText = 'DATE: ' + dia + "/" + mes + "/" + anio + " $ " + 'AMOUNT: $' + parsedMount + ' ' + 'DESCRIPTION: ' + text
    toDoContainer.appendChild(paragraph);
    console.log(result)
    monthyincome.value = result
    mountincome.value = ''
    descriptionincome.value = ''
    }
})

boton1.addEventListener('click', ()=>{
    location.reload()
})
