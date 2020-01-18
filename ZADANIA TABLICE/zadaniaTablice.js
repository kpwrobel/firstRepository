
var a = 0;
var b = 1;
var c = { imie: "Ala", nazwisko: "makota" };
console.log(a, b, c);
b = a;
console.log(a, b, c);
b = c;
console.log(a, b, c);
b.imie = 'Ola';
console.log(a, b, c);
c.nazwisko = 'kowalski';
console.log(a, b, c);

a = 'pierwszy';
b = 'trzeci';
console.log(a, b, c);
c = 'piaty';
console.log(a, b, c);
b = c;
console.log(a, b, c);
b = a;
a = 'ostatni';
console.log(a, b, c);

var t1 = [[0, 0, 0], [1, ['aaa', 'bbbb', 'ccc', 'tiktak', 'bolo'], 3], [4, 5, 6]];
console.log((t1[1])[1][4]);
console.log(t1);


//zadanie 1 str. 44
var tab = [56, 'uuu', null, [2, 3, 4], { imie: "Ala", nazwisko: "makota" }];
console.log(tab);

//zadanie 2 str. 44

function isArray(t) {
    //Math
    //String.
    return Array.isArray(t);
    //return (typeof t === 'object' && t.length !== undefined);
}
var t = [2, 56, 'dfdfdfd'];
var r = isArray(t);
console.log(r);
t = { d: 'dsds', s: 'sds', length: 34 };
r = isArray(t);
console.log(r, Array);

//zadanie 3 str. 44

function odwrotna(p) {
    if (true === isArray(p)) {
        var tab = [];
        //przeglądanie tablicy od tyłu zwsze index mniejszy o 1 od rozmiaru 
        for (let i = (p.length - 1); i >= 0; i--) {
            console.log(i);
            //-- w przypadku standardowej inkrementacji
            //tab.unshift(p[i]); //@info dodanie elementu na poczatek tablicy
            //tab[p.length-i-1] = p[i]; //@info dodanie pod index odwrócony
            //-- w przypadku inkrementacji odwórconej
            tab.push(p[i]);

        }
        return tab;
    } else {
        console.log('parametr nie jest tablicą');
    }

}

//zadanie 4 str. 44

function init7(l) {
    var tab = [];
    tab[0] = 7;
    for (let i = 1; i < l; i++) {
        tab[i] = tab[i - 1] + 7;
        // tab.push() -- dodaje element na koniec tablicy
        // tab[i] = -- dodaje lub podminia element w tablicy pod indexem 'i'
        //console.log(tab);
        //tab.push(tab[i - 1] + 7);
    }
    return tab;
}
var count = 100;
console.log(init7(count));


// jako test -- var ret = odwrotna([1, 2, 3, 4]);
// console.log(ret);

//zadanie 5 str. 44
var arr = [3, 5, 8]; // zmienna globalna może być używana w ciel funkcji bez deklaracji
function findMin(a) {
    console.log("tablica wejsciowa to: ", a);
    var min = a[0]; //uznajemy że pierwszy element tabklcy ma najmniejsza wartość
    var index = 0; // a w takim przypadku dla tej wartości index róny jes 0 czyli pierwszy element tablicy
    //szukamy dalej mninimum w pozostałych elementach tablicy 
    for (let i = 1; i < a.length; i++) {
        if (a[i] < min) {  // 7,3,5,9,8 //
            min = a[i];
            index = i;
        }
    }
    console.log('Znaleziony index MIN to:', index, ' a wartosc elementu min to: ', min);
    return index;
}
var testTable = [1, 2, 3, 4]; //search index  = 0
var testTable1 = [4, 2, 5, 1, 6, 8]; //search index  =  3
var testTable2 = [5, 4, 3, 2, 1]; //search index  = 4
var testTable3 = [7, 3, 5, 9, 8]; //search index  = 1

var ret = findMin([1, 2, 3]);
//console.log(
findMin(testTable);
findMin(testTable1);
findMin(testTable2);
findMin(testTable3);

//zadanie 6 str. 44

function customJoin(g) {
    var www = '';
    for (let index = 0; index < g.length; index++) {
        //var wartosc = g[index];
        console.log('Wartosc poarametru www: ', www);
        //www = www + g[index] + ', ';
        www += g[index];        // + ', ';

        //@INFO TEN KOD WYKONA MI SIE JEŚLI NIE JESTEM W OSTATNIM INDEXIE TABLICY
        if (index !== (g.length - 1)) {
            //to jestem w ostatnim idexie
            www += ', ';
        }
        //-----------------------------

        // 'www +=' : 'www = www +' te dwa zapisy sa sobie równe wykonuja dokładnie to samo
        console.log('Wartość parametru www po inkrementacji: ', www);
    }
    return www;
}
var arrS = ['Ala', 'ma', 'kota'];
console.log(customJoin(arrS));


//zadanie 7 str. 44

var t = ['ala', 'przyszła', 'samochód', 'węgiel', 'kota'];
//fun(tab, 'szła'); // - 1, warośc to przyszła

//definicja funkcji

/*
 * Funkcja przeszukuje tab;lice w poszukiwaniu zadanej frazy i zwraca pierwszy znlaeziony index
 * @param {Array} tab 
 * @param {String} serch
 * @returns {integer} zwrcany index w tablicy tab 
 */


function searchPhrase(tab, serch) {
    var findIndex = -1; //int -- nr indexu w tablicy tab pod którym znajduje się znalezione słowo
    //@toDo ...
    for (let index = 0; index < tab.length; index++) {
        var f = tab[index].search(serch);
        if (f > -1) {

            return index;
        }
    }

    return findIndex;
}

//wywołanie
console.log(searchPhrase(t, 'kupila'));


//zadanie 8 str. 44

function arytm(par) {
    var sum = 0;
    for (let index = 0; index < par.length; index++) {
        sum = sum + par[index];
    }
    var srednia = sum / 2;
    return srednia;
}
console.log(arytm([9, 44, 2, 67, 1, 0, 99, 2]));


//zadanie 9 str. 44 - na pewno zle, ale nie moge ogarnac; 
/*Napisz funkcję, która dostaje 3 parametry (min, max, count)
zadaniem funkcji jest wygenerowanie tablicy o długości count i elementów tablicy o losowej wartości w zakresie min – max*/


// function potrojna(min, max, count) {
//     var tab = [];
//         for (let index = 0; index < count; index++) {
//        var liczba = Math.floor(Math.random() * (max - min)) + min;
//         tab = tab + tab.push('liczba'); //wyrzuca mi blad w consoli mowiac ze .push nie jest funkcja; nie umiem obejsc tego bledu;
//     }
// return tab;
// }
// console.log(potrojna(3, 99, 5));


// //a. 0 do 40

// function showNumbers4a(a, b) {
//     for (var x = a; b <= 40; a++) {
//         console.log(x)
//     }
// }
// showNumbers4a(0, 40);

//zadanie 10 str. 44

/*Napisz funkcję, która przyjmuje jeden parametr ’value’ 
który jest stringiem znaków podzielonym znakami ’|’ (np. ’pies|kot|lis’) , 
zadaniem funkcji jest zwrócić tablicę z elementami [’pies’,’kot’,’lis’]*/

function sth(string) {
    var noString = string.split(1,13);
    return noString;
}
console.log(sth("pies|kot|lis"));


//zadanie 11 str. 44
/*Napisz funkcję ’cloneArray’, która będzie tworzyć kopie tablicy;*/

var myArray = [11, 2, 0, 66];

function cloneArray() {
    var clone = myArray.slice(0);
    return clone;
}

console.log(cloneArray());


//zadanie 1,2 str. 45
//1. Stwórz tablicę dwuwymiarową o rozmiarze 5 na 5 i uzupełnij ją zerami
//2. Wyświetl tablice

var table = [[-66, 88, 65, 444, 43],
[22, 11, 0, -1, 3],
[89999, 456, 123, 22, 1],
[4, 5, 6, 2, 3],
[8, 77, -1, -345, 66]];

console.log(table);



// const level = [
//     [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 1, 0, 0, 1, 1, 0, 0, 1, 1]
// ];
// let str = '';
// //robimy pętlę po tablicy
// for (let i = 0; i < level.length; i++) {
//     //pobieram podtablicę pod zmienną subTab
//     const subTab = level[i];
//     //i robię po niej pętlę
//     for (let j = 0; j < subTab.length; j++) {
//         switch (subTab[j]) {
//             case 0: str += "  "; break;
//             case 1: str += "▓▓"; break;
//         }
//     }
//     str += "\n";
// }

// console.log(str);

3. Przerób powyższy przykład tak aby tablica wyglądała następująco:
[[1, 0, 0, 0, 0],
[0, 1, 0, 0, 0],
[0, 0, 1, 0, 0],
[0, 0, 0, 1, 0],
[0, 0, 0, 0, 1]]

function change(parameter) {
    for (let index = 0; index < table.length; index++) {
        let subTable = table[index];
        for (let i = 0; i < subTable.length; i++) {
            let element = subTable[i];

        }

    }
}


// 4. *Stwórz tablicę dwuwymiarową o rozmiarze N x N i uzupełnij jak na przykładzie: [ [ 1, 0, 0 , 0, 2 ],
// [ 0,1, 0,2,0], [ 0,0,'x',0,0],
// [ 0, 2, 0 , 1, 0 ], [ 2,0, 0,0,1]]
// ZADANIE.
// 5. Napisz funkcję, która przyjmuje dwie tablice [n]x[n] i wykonuje operacje dodawania macierzy
// 6. Napisz funkcję, która przyjmuje dwie tablice [n]x[n] i wykonuje operacje odejmowania macierzy
// 7. Stwórz funkcję, która przyjmuje tablicę wielowymiarową i zwraca nową tablice jednowymiarową z wszystkim elementami np. Input: [[1,2,3][6,3,8]] output: [1,2,3,6,3,8]
// 8. *Napisz funkcje która wygeneruje tablicę: tab[4][5][6]
