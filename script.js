// let c = 15,
//     d = 2;
// let result = c + d;
// alert(result);

// let a = 10,
//     b = 2,
//     c = 5;
// let result = a+b+c;
// alert(result);

// let a = 17,
//     b = 10,
//     c = a - b,
//     d = 7,
//     result = c + d;
// alert(result);

// let str1 = 'Privet,',
//     str2 = 'Mir!';
// alert(str1 + str2);

// let nameMy = 'Dmitriy';
// alert(`Privet ${nameMy}!`);

// let yourName = prompt('Vashe imya?', '');
// alert(`Vas zovut ${yourName}!`);

// let arr = ['a', 'b', 'c'];
// alert(arr);

// let arr = ['a', 'b', 'c'];
// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);

// let arr = ['a', 'b', 'c', 'd'];
// alert(`${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`);

// let arr = [2, 5, 3, 9],
//     result = (arr[0]*arr[1])+(arr[2]*arr[3]);
// alert(result);

// let obj = {'a': '1', 'b': '2', 'cq': '3'};
// alert(obj["cq"]);

// let obj = {
//     'Kolya': '1000',
//     'Vasya': '500',
//     'Petya': '200'
// };
// alert(`Kolya's salary is ${obj['Kolya']} and 
// Petya's salary is ${obj['Petya']}`);

// let obj = {
//     'Monday': '1',
//     'Tuesday': '2',
//     'Wednesday': '3',
//     'Thursday': '4',
//     'Friday': '5',
//     'Saturday': '6',
//     'Sunday': '7'
// };
// alert(obj['Thursday']);

// let obj = {
//     'a': ['1','2','3'],
//     'b': ['4','5','6'],
//     'c': ['7', '8', '9']
// };
// alert(obj['b'][0]);

// let obj = {
//     "js": ["jQuery", "Angular"],
//     "php": "hello",
//     "css": "world"
// };
// alert(obj["js"][0]);

// let obj = {
//     'ru': [
//         'Понедельник',
//         'Вторник',
//         'Среда',
//         'Четверг',
//         'Пятница',
//         'Суббота',
//         'Воскресенье'
//     ],
//     'en': [
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday',
//         'Sunday'
//     ]
// };
// alert(`Today is ${obj['en'][2]} / Сегодня ${obj['ru'][0]}`);

// let obj = {
//     'ru': [
//         'Понедельник',
//         'Вторник',
//         'Среда',
//         'Четверг',
//         'Пятница',
//         'Суббота',
//         'Воскресенье'
//     ],
//     'en': [
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday',
//         'Sunday'
//     ]
// };
// let lang = obj['en'],
//     day = 1;
// alert(lang[day]);

// let a = prompt('?', '');
// if (a == 0 || a == 2) {
//     a = a+7;
//     alert(a);
// } else {
//     alert(a/10);
// }

// let num = 2;
// switch(num) {
//     case '1': 
//         let arr = 'Winter'; 
//     break;
//     case '2':
//         arr = 'Spring';
//     break;
//     case '3':
//         arr = 'Summer';
//     break;
//     case '4':
//         arr = 'Fall';
//     break;
// }

// let day = prompt('# day?', '');
// if (day >= 1 && day <=9) {
//     alert('1 dekada');
// } else if (day >=10 && day <=19) {
//     alert('2 dekada');
// } else if (day >=20 && day <=31) {
//     alert('3 dekada');
// } else {
//     alert('Error!');
// }

// let month = prompt('Text the number of month to know what 
// a period of year!');
// if (month <=2 && month >= 12) {
//     alert('Today is Winter!');
// } else if (month >=3 && month <=5) {
//     alert('Today is Spring!');
// } else if (month >=6 && month <=8) {
//     alert('Today is Summer');
// } else if (month >=9 && month <=11) {
//     alert('Today is Fall!');
// } else {
//     alert('Error!');
// }

// let text = 'abcde';
// if(text[0] == 'a') {
//     alert('Yes!');
// } else {
//     alert('No!');
// }

// for (let i = 11; i <= 33; i++) {
//     document.write(i + '<br>');
// }

// for (let i = 0; i <= 100; i += 2) {
//     document.write(i  + '<br>');
// }

// let result = 0;
// for (let i = 0; i <= 100; i++) {
//     result += i;
    
// }
// alert(result);

// let obj = [1, 2, 3, 4 , 5],
//     result = 0;
// for(let i = 0; i < obj.length; i++) {
//     result += obj[i];
// }
// alert(result);

// let obj = {
//     'green': 'зелёный',
//     'red': 'красный',
//     'blue': 'синий'
// };
// for (let key in obj) {
//     document.write(key + '<br>');
// }

// let obj = {
//     'Kolya': '200',
//     'Vasya': '300',
//     'Petya': '400'
// };
// for (let key in obj) {
//     alert(key + '- salary is ' + obj[key] + '.');
// }

// let obj = [2, 5, 9, 15, 0, 4];
// for(let i = 0; i < obj.length; i++) {
//     if (obj[i] > 3 && obj[i] < 10) {
//         document.write(obj[i] + '<br>');
//     }
// }

// let obj = [1, 2, 3, 4, -10, -20, 20, -1],
//     result = 0;
// for(let i = 0; i < obj.length; i++) {
//     if (obj[i] > 0){
//         result += obj[i];
//     }
// }
// alert(result);

// let obj = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < obj.length; i++) {
//     if (obj[i] == 4) {
//         alert('True');
//         break;
//     }
// }

// let obj = ['10', '20', '30', '50', '235', '3000'];
// for (let i = 0; i < obj.length; i++) {
//     if (obj[i][0] == '1' || obj[i][0] == '2' || obj[i][0] == '5') {
//         document.write(obj[i] + '<br>');
//     }
// }

// let obj = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
//     result = '';
// for (let i = 0; i < obj.length; i++) {
//     result += obj[i] + '-';
// }
// alert('-' + result);

// const obj = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday'
// ];
// for (let i = 0; i < obj.length; i++) {
//     if (i === 5 || i === 6){ 
//         document.write('<b>'+obj[i] + '<br>');
//     } else {
//         document.write(obj[i] + '<br>');
//     }
// }

// const obj = [
//     '',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday'
// ]; 
// let day = prompt('?', '');
// for (let i = 0; i < obj.length; i++) {
//     if (i == day) {
//         document.write('<em>' + obj[i] + '</em>' + '<br>');
//     } else {
//         document.write(obj[i] + '<br>');
//     }
// }

// let n = 1000,
//     result = 0;

// while(n >= 50) {
//     n = n/2;
//     result++;
// }
// alert(`Amount of iteration ${result}`);
// alert(`Result of division ${n}`);

var div = document.querySelector('div');
div.setAttribute('contenteditable', '');