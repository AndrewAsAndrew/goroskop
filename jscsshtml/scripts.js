//твоя дата и год рождения
let birthYear = 1997
let birthMonth = 8
let birthday = 18
//сегодняшняя дата и год
let todayYear = 2022
let todayMonth = 3
let today = 3
//конечное число
let myOld = todayYear - birthYear
//текст
let txt
//формула возраста
if(birthday > today) {
    todayMonth -= 1
}
if(birthMonth > todayMonth) {
    myOld -= 1
}
//формула текста
if((myOld % 10 < 5) || (birthMonth > todayMonth && myOld % 10 === 5)) {
    txt = "года"
} else {
    txt = "лет"
}
//вывод
console.log(myOld, txt)
//вывод в хтмл
let p = document.querySelector("#out")
p.innerHTML +=`<b><i>${myOld}</i></b> ${txt}`
