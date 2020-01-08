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

        var upload = JSON.stringify(shoppingItem);
        console.log(upload);
        
    })

}