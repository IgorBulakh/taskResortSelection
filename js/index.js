'use strict';


// const sharm = "Sharm";
// const hurgada = "Hurgada";
// const tabata = "Tabata";

// let resortName;
// let numOfTicket;

// let resortNum = prompt(
//     `Обрати курорт!
//     1 - Sharm;
//     2 - Hurgada;
//     3 - Tabata;`, 1);


// if (resortNum === 1){
//     resortName = sharm;
//     numOfTicket = 15;
// } else if (resortNum === 2){
//     resortName = hurgada;
//     numOfTicket = 25;
// } else if (resortNum === 3){
//     resortName = tabata;
//     numOfTicket = 6;
// } else{
//     ('Такого курорту не існує!!!');
// }

//console.log(resortName, numOfTicket);

const resort = prompt('введите число 1, 2 или 3', '1-taba, 2-sharm, 3-hurgada');

switch (resort) {
    case '1':
        alert('пользователь выбрал курорт taba');
        break;
    case '2':
        alert('пользователь выбрал курорт sharm');
        break;
    case '3':
        alert('пользователь выбрал курорт hurgada');
        break;
    default:
        alert('введено число, варианта курорта для которого не было');
}

// console.log(resort); 
 

const members = prompt('введите число участников группы', 'целое положительное число');

if (members == Math.abs(members) && members == Math.round(members)) {

    // Всего имеется три группы sharm, hurgada и taba.
    //   	В группах ограничено кол-во свободных мест:
    let sharm = 15;
    let hurgada = 25;
    let taba = 6;

    // решение предложено для случая неоднократного запуска программы, когда 
    // число мест в группах может уменьшаться

    // если группа изначально помещается в sharm, отрабатываем отказы пользователя

    if (members <= sharm) {
        var agree = confirm("есть место в группе sharm, согласны?");
        if (agree == true) {
            sharm = sharm - members;
            console.log('sharm осталось', sharm)
        } else if (members <= hurgada) {
            var agree = confirm("есть место в группе hurgada, согласны?");
            if (agree == true) {
                hurgada = hurgada - members;
                console.log('hurgada осталось', hurgada)
            } else if (members <= taba) {
                var agree = confirm("есть место в группе taba, согласны?");
                if (agree == true) {
                    taba = taba - members;
                    console.log('taba осталось', taba)
                }
            } else alert('в оставшихся группах мест нет!')
        } else alert('в оставшихся группах мест нет!')

        // если группа изначально помещается в hurgada, отрабатываем отказы пользователя

    } else if (members <= hurgada) {
        var agree = confirm("есть место в группе hurgada, согласны?");
        if (agree == true) {
            hurgada = hurgada - members;
            console.log('hurgada осталось', hurgada)
        } else if (members <= taba) {
           var agree = confirm("есть место в группе taba, согласны?");
            if (agree == true) {
                taba = taba - members;
                console.log('taba осталось', taba)
            }
        } else alert('в оставшихся группах мест нет!')

       // если группа изначально помещается в taba
    } else if (members <= taba) {
        var agree = confirm("есть место в группе taba, согласны?");
        if (agree == true) {
            taba = taba - members;
            console.log('taba осталось', taba)
        }
    } else alert('Мест нет!');
    console.log('целое положительное число')
} else alert('ошибка, не целое положительное число')