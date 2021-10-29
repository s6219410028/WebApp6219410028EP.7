//
let money = document.getElementById('money');
let person = document.getElementById('person');
let btnCal = document.getElementById('btnCal');
let btnCancel = document.getElementById('btnCancel');
let result = document.getElementById('result');

//ทดสอบตัวแปลที่สร้างไวข้าางต้นว่าอ้างอิงไปยังเอกสาร HTML เรียบร้อยแล้วหรือยัง
btnCal.addEventListener('click', () => {
    //alert(money.value)
    if (money.value.trim().length == 0) {
        alert('ป้อนเงินเซ่!')
    } else if (person.value.trim().length == 0) {
        alert('ป้อนคนด้วย!!!')
    } else {

        let moneyshare = Number(money.value) / Number(person.value)
        result.innerHTML = moneyshare.toFixed(2)


    }
})

// btnCancel.addEventListener('click', () => {
//     //alert(person.value)
//     money.value = ''
//     person.value = ''
//     result.innerHTML = '0.00'

// })

btnCancel.addEventListener('click', clearScreen)

function clearScreen(){
    money.value = ''
    person.value = ''
    result.innerHTML = '0.00'
}

