
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
    return Array.isArray(t); //wykorzystanie wbudowanej metody w JS;
    //sprawdzenie czy przekazywana zmienna jest tablica;
    //return (typeof t === 'object' && t.length !== undefined) - próba ręcznego zapisania powyzszej funkcji, która jednak zwróci true takze dla obiektow z key length;
    
}
var t = [2, 56, 'dfdfdfd'];
var r = isArray(t);
console.log('Sprawdzenie ', r);
t = { d: 'dsds', s: 'sds', length: 34 };
r = isArray(t);
console.log(r, Array);

//zadanie 3 str. 44

function odwrotna(p) {
    if (true === isArray(p)) {
        var tab = [];
            //przeglądanie tablicy od tyłu zawsze index mniejszy o 1 od rozmiaru;
        for (let i = (p.length - 1); i >= 0; i--) {
            console.log(i);
            //dekrementacja na powyzszym przykladzie;

            //-- w przypadku standardowej inkrementacji poslugujemy sie na tym przykladzie metoda dodawania na poczatek tablicy: tab.unshift(p[i]); //@info dodanie elementu na poczatek tablicy;
            
            //tab[(p.length-1)-i] = p[i]; //@info dodanie pod index odwrócony
            //uniwersalne ustawianie elementow tablicy tab tak by uzyskac odwrocona tablice p;
            
            //-- w przypadku inkrementacji odwórconej
            tab.push(p[i]);

        }
        return tab;
    } else {
        console.log('parametr nie jest tablicą');
    }
}

//zadanie 4 str. 44
// budowanie l elemenetowej tablicy wielokrotnosci liczny 7;

function init7(l) {
    var tab = [];
    tab[0] = 7;
//    tab[1] = tab[0] + 7;
//    tab[2] = tab[1] + 7;
    
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
console.log(tab, init7(count));


//zadanie 5 str. 44

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

var arr = [3, 5, 8]; // zmienna globalna może być używana w ciele funkcji bez deklaracji
var ret = findMin(arr);
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
//fun(tab, 'szła'); // - 1, wartośc to przyszła

//definicja funkcji

/*
 * Funkcja przeszukuje tablice w poszukiwaniu zadanej frazy i zwraca pierwszy znlaeziony index
 * @param {Array} tab 
 * @param {String} search
 * @returns {integer} zwrcany index w tablicy tab 
 */


function searchPhrase(tab, search) {
    var findIndex = -1; //int -- nr indexu w tablicy tab pod którym znajduje się znalezione słowo;
    for (let index = 0; index < tab.length; index++) {
        var elem = tab[index];
        var f = elem.search(search);
        if (f > -1) {
            return index;
        }
    }
    return findIndex;
}
console.log(searchPhrase(t, 'kupila'));


//zadanie 8 str. 44
// srednia arytmetyczna z sumy el tablicy par;

function arytm(par) {
    var sum = 0;
    for (let index = 0; index < par.length; index++) {
        sum = sum + par[index];
    }
    var srednia = sum / par.length;
    return srednia;
}
let table = [9, 44, 2, 67, 1, 0, 99, 2];
console.log('Srednia arytmetyczna z tablicy ', table, 'wynosi: ', arytm(table));


//zadanie 9 str. 44
/*Napisz funkcję, która dostaje 3 parametry (min, max, count)
zadaniem funkcji jest wygenerowanie tablicy o długości count 
i elementów tablicy o losowej wartości w zakresie min – max*/


function triple(min, max, count) {
    var tab = [];
        for (let index = 0; index < count; index++) {
       var liczba = Math.floor(Math.random() * (max - min)) + min;
            //Math.random - losowanie przypadkowej liczby z przedzialu 0-1; 0% do 100%
            // (20 - 25) => 5 * 0.25 = 1.25 => flor(1,25) => 1 + min
            // 5 * 66% = 3,3 => flor(3,3) => 3 + min
            tab.push(liczba); //wyrzuca mi blad w consoli mowiac ze .push nie jest funkcja; nie umiem obejsc tego bledu;
    }
return tab;
}
var tCount = 5;
var tMin = 23;
var tMax = 122;
console.log('Generowanie tablicy o rozmiarze: ', tCount, 'ktorej elementy zawieraja sie w przedziale', tMin, tMax, triple(tMin, tMax, tCount));


//zadanie 10 str. 44

/*Napisz funkcję, która przyjmuje jeden parametr ’value’ 
który jest stringiem znaków podzielonym znakami ’|’ (np. ’pies|kot|lis’) , 
zadaniem funkcji jest zwrócić tablicę z elementami [’pies’,’kot’,’lis’]*/

function sth(value) {
    console.log(value[0],value[1],value[2],value[3]);
    var noString = value.split('|');
    return noString;
}
//console.log(sth("\"pies|kot|lis\""));
console.log(sth("pies|kot|lis"));


//zadanie 11 str. 44
/*Napisz funkcję ’cloneArray’, która będzie tworzyć kopie tablicy;*/


function cloneArray(tab) {
    var clone = [];
    for (let index = 0; index < tab.length; index++) {
       clone.push(tab[index]);
    } 
    //clone = tab.slice(0,tab.length);

    return clone;
}

var myArray = [11, 2, 0, 66, 44, 55];
var myArray2 = cloneArray(myArray);
console.log(myArray, myArray2);


//zad 1.,2. str. 45 
//Stwórz tablicę dwuwymiarową o rozmiarze 5 na 5 i uzupełnij ją zerami

function matrix(l,w) {
    var table = [];
    for (let i = 0; i < l; i++) {
        var table3 = [];
        for (let iw = 0; iw < w; iw++) {
            table3.push(0);
        }
        table.push(table3);
    }
    return table;
}

var m5 = matrix(5,5);
console.log(m5);

//3. Przerób powyższy przykład tak aby tablica wyglądała następująco:
/*
[[1, 0, 0, 0, 0],=> 0, 0  => tab[0][0] = 1; 
[0, 1, 0, 0, 0], => 1, 1  => tab[1][1] =1 ;
[0, 0, 1, 0, 0], => 2, 2
[0, 0, 0, 1, 0], => 3, 3
[0, 0, 0, 0, 1]] => 4, 4
*/

function copyMatrix(matrix){
    var copy = [];
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i]);
        let clone = cloneArray(matrix[i]);
        copy[i] = clone;
    }
    return copy;
}

function matrix1(matrix) {
   var c = copyMatrix(matrix);
   for (let index = 0; index < c.length; index++) {
       c[index][index] = 1;
}
       return c;

}
console.log(m5, matrix1(m5));



// 4. *Stwórz tablicę dwuwymiarową o rozmiarze N x N i uzupełnij jak na przykładzie: [ [ 1, 0, 0 , 0, 2 ],
// [ 0,1, 0,2,0], [ 0,0,'x',0,0],
// [ 0, 2, 0 , 1, 0 ], [ 2,0, 0,0,1]]
// 5. Napisz funkcję, która przyjmuje dwie tablice [n]x[n] i wykonuje operacje dodawania macierzy
// 6. Napisz funkcję, która przyjmuje dwie tablice [n]x[n] i wykonuje operacje odejmowania macierzy
// 7. Stwórz funkcję, która przyjmuje tablicę wielowymiarową i zwraca nową tablice jednowymiarową z wszystkim elementami np. Input: [[1,2,3][6,3,8]] output: [1,2,3,6,3,8]
// 8. *Napisz funkcje która wygeneruje tablicę: tab[4][5][6]
