/*funkcja log sluzaca do debugowania funkcjonalnosci*/
const DEBUG = true; //stala DEBUG mowi czy tryb debugowania jest wlaczony czy nie
const PRIO = 1; //'WARRNING=2, ERROR=3, INFO=1 '

const INFO = 1;
const WARRNING = 2;
const ERROR = 3;

function log(fileName, line, message, pr) {
    if (pr === undefined) {
        pr = 1; //domyslnie parametr pr przyjmuje wartosc 1 czyli INFO
    }
    var type = 'INFO';
    if (pr === WARRNING) { type = 'WARRNING'; } else if (pr === ERROR) { type = 'ERROR'; }
    if (DEBUG) {
        if ((PRIO === 3 && pr === 3) ||
            (PRIO === 2 && (pr === 3 || pr === 2)) ||
            PRIO === 1) {
            console.log('[' + type + '] ' + fileName + ': ' + 'line number: ' + line + ', ', message);
            //window.localStorage.set('log',message);
        }
    }
};

//ponizej tworzenie obiektow za pomoca konstruktora funkcji - dwa rozne sposoby zapisu

/*var Product = function(name,count){ //definicja klasy typu Product
   this.nazwa = name;
   this.ilosc = count;
};*/

function Product(name, count) {
    /**
     * Nazwa productu
     * {String}
     */
    this.nazwa = name;
    /**
     * Ilość produktów
     * {int} 
     */
    this.ilosc = count; //ilosc produktu

    this.id = String(this.nazwa).replace(' ', '').trim() + '_' + (Math.floor(Math.random() * 100));
    //generowanie losowe id liczbowego dla produktu
    //replace - zamiana znaku na inny znak
    //trim - czyszczenie stringa z pustych spacji z poczatku i konca

    this.toString = function () {
        return JSON.stringify(this);
    };

    this.toTableRow = function (lp) {
        return '<tr id="' + this.id
            + '"><td>' + lp + '</td><td>'
            + this.nazwa + '</td><td>'
            + this.ilosc + '</td><td>'
            + this.id + '</td><td><button onclick="editProd(\'' + this.id + '\')" id="' + this.id + '" class="editProd">+</button>'
            + '<button onclick="delProd(\'' + this.id + '\')">-</button></td></tr>';
    }
};

/* przyklad na tworzenie nowych obiektow uzywajac operatora new
var x  = 12; //int
var s = 'ala ma kota';// 
var s2 = new String('ala ma kota');
log('',59,s,1);
log('',60,s2,1)
log('',35, (s == s2),1);*/


//tworzenie 6 obiektow typu Product za pomoca operatora new - alokacja pamieci czyli przydzielenie zmiennej miejsca w  pamieci 
var p1 = new Product('Mleko', 2);
var p2 = new Product('Masło', 1);
var p3 = new Product('Cukier', 2);
var p4 = new Product('Mak', 1);
var p5 = new Product('Ser', 2);
var p6 = new Product('szynka', 1);

var tabProd = [p1, p2];
//console.log(tabProd);


function getStorProd(storageKey) {
    let download = window.localStorage.getItem(storageKey);//pobieranie elementu z localstorage pod parametrem strorageKey
    if (download === null || download === undefined || download === '' /*(String(download)).length === 0*/) {
        if (DEBUG) {
            log('jsonZadania.js', 60, 'Pod parametrem ' + storageKey + ' w localstorage nie znajduje sie zadna wartosc', WARRNING);
            //console.log( "Pod parametrem " + storageKey + " w localstorage nie znajduje sie zadna wartosc");
        }
        return [];
    }
    var oldJSON = JSON.parse(download); //pobrany obiekt string typu JSON parsujemy na obiekt typu tablica elementow
    log('jsonZadania.js', 66, download, INFO);
    //console.log(download);

    let verify = Array.isArray(oldJSON);
    if (verify === false) {
        log('jsonZadania.js', 86, storageKey + ' w localstorage nie jest tablica')
    }
    var returnTab = [];
    for (let i = 0; i < oldJSON.length; i++) {
        let el = oldJSON[i];
        log('', 97, el);
        if (el === null) {
            el = {
                nazwa: null, ilosc: null
            };
        }
        var p = new Product(el.nazwa, el.ilosc);
        returnTab.push(p);
    }
    return returnTab;
};

var ali = getStorProd('alibaba');
var gar = getStorProd('garnek');
log('jsonZadania.js', 78, ali, INFO);
log('jsonZadania.js', 79, gar, INFO);

function setStorProd(lsKey, value) {
    var newJSON = JSON.stringify(value);
    //console.log(newJSON);
    window.localStorage.setItem(lsKey, newJSON);
}

var lista = getStorProd('tablicaProduktow');

//console.log(lista);
function getProductTableRows() {
    var tableRows = '';
    for (let i = 0; i < lista.length; i++) {
        var p = lista[i];
        tableRows += p.toTableRow(i + 1);
    }
    return tableRows;
    // console.log(tableRows);
};
function refreshTable() {
    document.getElementById('tbodyRow').innerHTML = (getProductTableRows());
};

window.onload = function () {
    //    document.getElementById('tbodyRow').innerHTML = (getProductTableRows());
    this.refreshTable();
    var przycisk = document.getElementById("submit");
    przycisk.addEventListener("click", event => {
        event.preventDefault(); // istotne zeby wstrzymac domyslne dzialanie przegladarki
        var nazwa = document.getElementById("name").value;
        var ilosc = document.getElementById("quantity").value;
        addProd(nazwa, ilosc);
    });

    // updateProd(id, nazwa, ilosc); 
    // //pobrac wartosci z inputow edit
    // //zapisac na liscie produktow, zmienic wartosci odpowiedniego produktu 
    // setStorProd('tablicaProduktow', lista);
    // refreshTable(); //zapisanie w localstorage  

};
//funkcja na dodawanie produktu do listy zakupow 
function addProd(name, count) {
    var p = new Product(name, count);
    lista.push(p);
    setStorProd('tablicaProduktow', lista);
    refreshTable();
};
//funkcja sluzaca do usuniecie produktu z listy o wskazanym id
function delProd(id) {
    //alert('napisz funkcje!! Usuń produkt o id ' + id);
    let conf = confirm('Czy na pewno chcesz usunac produkt ' + id + ' z listy zakupow?');
    log('', 157, conf);
    if (conf === true) {

        log('', 145, 'Szukamy produktu o id: ' + id);
        //wykorzystujac metode wbudowana findIndex znajdujemy element na liscie zakupow o wskazanym id - zwraca nam index elementu tablicy;
        var idx = lista.findIndex(
            function (el) {
                log('', 148, el.id);
                if (el.id === id) {
                    return true;
                } else {
                    return false;
                }
            }
        );
        log('', 152, idx);
        lista.splice(idx, 1);
        setStorProd('tablicaProduktow', lista);
        refreshTable();
    }
};


function editProd(id) {

    log('', 145, 'Szukamy produktu o id: ' + id);
    //wykorzystujac metode wbudowana findIndex znajdujemy element na liscie zakupow o wskazanym id - zwraca nam index elementu tablicy;
    var idx = lista.findIndex(
        function (el) {
            log('', 148, el.id);
            if (el.id === id) {
                return true;
            } else {
                return false;
            }
        }
    );
    log('', 152, lista[idx]);
        var pr = lista[idx]; //edytowany produkt z listy
        var nazwa = document.getElementById("e_name");
        var ilosc = document.getElementById("e_quantity");
        var id = document.getElementById("e_id");
        nazwa.value = pr.nazwa;
        ilosc.value = pr.ilosc;
        id.value = pr.id;
}

/*lista.push(p1);
lista.push(p2);
tabProd.push(p1);
console.log(window.localStorage);*/


/**
 window.onload = function () {
    var przycisk = document.getElementById("submit");
    przycisk.addEventListener("click", event => {
        event.preventDefault(); // istotne zeby wstrzymac domyslne dzialanie przegladarki
        var nazwa = document.getElementById("name");
        var ilosc = document.getElementById("quantity");
        console.log(nazwa.value, ilosc.value);

        var newRow = document.createElement('tr'); //stworzenie nowego wiersza

        var newCell = document.createElement('td'); //stworzenie nowej komorki
        newCell.innerText = nazwa.value; //wprowadzenie odpowiadajacej jej wartosci
        newRow.appendChild(newCell); //dodanie nowej komorki do wiersza w HTML


        var newCellSecond = document.createElement('td');
        newCellSecond.innerText = ilosc.value;
        newRow.appendChild(newCellSecond);

        var corp = document.getElementsByTagName('tbody')[0]; //pobranie body tabeli czyli tbody
        corp.appendChild(newRow); //dodanie nowego wiersza

        var shoppingItem = {name: nazwa.value, quantity: ilosc.value};
        console.log(shoppingItem);

        //var upload = JSON.stringify(shoppingItem);
        // console.log(upload);

        var upload = JSON.stringify(shoppingItem);
        localStorage.setItem("shoppingItem", upload);
    })
    var webpageReload = localStorage.getItem("shoppingItem")

}
*/