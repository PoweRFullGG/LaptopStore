//Переменные для отслеживания состояния кнопки

if (localStorage.getItem("bTNDiscount1Bool") === null) {
    localStorage.setItem("bTNDiscount1Bool", false);
}

if (localStorage.getItem("bTNDiscount2Bool") === null) {
    localStorage.setItem("bTNDiscount2Bool", false);
}

if (localStorage.getItem("bTNDiscount3Bool") === null) {
    localStorage.setItem("bTNDiscount3Bool", false);
}

var bTNDiscount1Bool = localStorage.getItem("bTNDiscount1Bool") === 'true';
var bTNDiscount2Bool = localStorage.getItem("bTNDiscount2Bool") === 'true';
var bTNDiscount3Bool = localStorage.getItem("bTNDiscount3Bool") === 'true';

function updatePricesBasedOnLocalStorage() {
    const textPriceBtn1 = document.getElementById("prc1");
    const buttonDiscount1 = document.getElementById("bTNDiscount1");
    const conTextNB1 = document.getElementById("conTextNB1");

    if (bTNDiscount1Bool) {
        OldPrice("₽49,990", conTextNB1, 1);
        textPriceBtn1.innerText = "₽29,500";
        textPriceBtn1.style.color = "red";
        buttonDiscount1.innerText = "Купить по обычной цене";
    }

    const textPriceBtn2 = document.getElementById("prc2");
    const buttonDiscount2 = document.getElementById("bTNDiscount2");
    const conTextNB2 = document.getElementById("conTextNB2");

    if (bTNDiscount2Bool) {
        OldPrice("₽54,990", conTextNB2, 2);
        textPriceBtn2.innerText = "₽45,500";
        textPriceBtn2.style.color = "red";
        buttonDiscount2.innerText = "Купить по обычной цене";
    }

    const textPriceBtn3 = document.getElementById("prc3");
    const buttonDiscount3 = document.getElementById("bTNDiscount3");
    const conTextNB3 = document.getElementById("conTextNB3");

    if (bTNDiscount3Bool) {
        OldPrice("₽129,990", conTextNB3, 3);
        textPriceBtn3.innerText = "₽89,990";
        textPriceBtn3.style.color = "red";
        buttonDiscount3.innerText = "Купить по обычной цене";
    }
}

updatePricesBasedOnLocalStorage();

// Функция для создания старой цены с зачёркиванием
function OldPrice(price, container, num) {
    const newElement = document.createElement("p");
    newElement.className = "price";
    newElement.id = `oldPrice${num}`;
    newElement.style.color = "gray";
    newElement.innerText = price;
    newElement.style.textDecoration = "line-through";
    container.appendChild(newElement);
}

function OnClickButtonDiscount_1() {
    // Необходимые элементы для работы
    const buttonDiscount1 = document.getElementById("bTNDiscount1");
    const textPriceBtn1 = document.getElementById("prc1");
    const conTextNB1 = document.getElementById("conTextNB1");
    // Проверка состояния кнопки
    if (!bTNDiscount1Bool) {

        OldPrice("₽49,990", conTextNB1, 1);

        textPriceBtn1.innerText = "₽29,500";
        textPriceBtn1.style.color = "red";
        buttonDiscount1.innerText = "Купить по обычной цене";

        localStorage.setItem("bTNDiscount1Bool", true);
        bTNDiscount1Bool = localStorage.getItem("bTNDiscount1Bool") === 'true';
    } else {
        const oldPrice = document.getElementById("oldPrice1");
        if (oldPrice) {
            oldPrice.remove();
        }
        textPriceBtn1.innerText = "₽49,990";
        textPriceBtn1.style.color = "black";
        buttonDiscount1.innerText = "Купить со скидкой";

        localStorage.setItem("bTNDiscount1Bool", false);
        bTNDiscount1Bool = localStorage.getItem("bTNDiscount1Bool") === 'true';
    }
}

function OnClickButtonDiscount_2() {
    // Необходимые элементы для работы
    const buttonDiscount2 = document.getElementById("bTNDiscount2");
    const textPriceBtn2 = document.getElementById("prc2");
    const conTextNB2 = document.getElementById("conTextNB2");
    // Проверка состояния кнопки
    if (!bTNDiscount2Bool) {

        OldPrice("₽54,990", conTextNB2, 2);

        textPriceBtn2.innerText = "₽45,500";
        textPriceBtn2.style.color = "red";
        buttonDiscount2.innerText = "Купить по обычной цене";

        localStorage.setItem("bTNDiscount2Bool", true);
        bTNDiscount2Bool = localStorage.getItem("bTNDiscount2Bool") === 'true';
    } else {
        const oldPrice = document.getElementById("oldPrice2");
        if (oldPrice) {
            oldPrice.remove();
        }
        textPriceBtn2.innerText = "₽54,990";
        textPriceBtn2.style.color = "black";
        buttonDiscount2.innerText = "Купить со скидкой";

        localStorage.setItem("bTNDiscount2Bool", false);
        bTNDiscount2Bool = localStorage.getItem("bTNDiscount2Bool") === 'true';
    }
}

function OnClickButtonDiscount_3() {
    // Необходимые элементы для работы
    const buttonDiscount3 = document.getElementById("bTNDiscount3");
    const textPriceBtn3 = document.getElementById("prc3");
    const conTextNB3 = document.getElementById("conTextNB3");
    // Проверка состояния кнопки
    if (!bTNDiscount3Bool) {

        OldPrice("₽129,990", conTextNB3, 3);

        textPriceBtn3.innerText = "₽89,990";
        textPriceBtn3.style.color = "red";
        buttonDiscount3.innerText = "Купить по обычной цене";

        localStorage.setItem("bTNDiscount3Bool", true);
        bTNDiscount3Bool = localStorage.getItem("bTNDiscount3Bool") === 'true';
    } else {
        const oldPrice = document.getElementById("oldPrice3");
        if (oldPrice) {
            oldPrice.remove();
        }
        textPriceBtn3.innerText = "₽129,990";
        textPriceBtn3.style.color = "black";
        buttonDiscount3.innerText = "Купить со скидкой";

        localStorage.setItem("bTNDiscount3Bool", false);
        bTNDiscount3Bool = localStorage.getItem("bTNDiscount3Bool") === 'true';
    }
}

function OnClickBuyButton (modelNB, priceNB, discountPriceNB, bool) {
    const model = modelNB;
    let price;
    if (!bool) {
        price = priceNB;
    } else {
        price = discountPriceNB;
    }
    // Открытие страницы покупки с передачей модели и цены в адресе
    window.location.href = `buyNB.html?model=${encodeURIComponent(model)}&price=${price}`;
}

function OnClickBuyButton_1 () {
    OnClickBuyButton("Ноутбук Dell Inspiron 15", "₽49,990", "₽29,500", bTNDiscount1Bool)
}

function OnClickBuyButton_2 () {
    OnClickBuyButton("Ноутбук HP Pavilion 14", "₽54,990", "₽45,500", bTNDiscount2Bool)
}

function OnClickBuyButton_3 () {
    OnClickBuyButton("Ноутбук Lenovo ThinkPad X1", "₽129,990", "₽89,990", bTNDiscount3Bool)
}
