const productList = [
    { id: 1, name: 'Kola', price: 4, img: 'https://i.sozcu.com.tr/wp-content/uploads/2016/01/19/diyet-kola.jpg' },
    { id: 2, name: 'Iskender', price: 30, img: 'https://i.lezzet.com.tr/images-xxlarge-recipe/ev-yapimi-iskender-33bd7089-fa36-4398-95f8-02c6463ea27c.jpg' },
    { id: 3, name: 'Yat', price: 450000, img: 'https://i.ytimg.com/vi/9BCZpcgsAb8/maxresdefault.jpg'  },
    { id: 4, name: 'Bahceli Ev', price: 9500000, img: 'https://www.neredekal.com/res/blog/1582812421_7.jpg' },
    { id: 5, name: 'Araba Fabrikası', price: 120000000, img: 'https://i.ytimg.com/vi/rfMkp55oTv0/maxresdefault.jpg' },
    // ... Kendi örneklerinizi eklemeye çekinmeyin.
]



document.querySelector('.container')
  .innerHTML = productList.reduce((a, product) => a +=
  `<div class="card" id="product${product.id}" style="width: 18rem;">
  
  <img class="card-img-top" src="${product.img}" width="300px" height="175px">
  
  <div class="card-body">
    <h4 id="name">${product.name}</h4>
    <h4 id="price">${product.price} TL   </h4>
    <button onmouseover="amount(this)" onmouseout="amountout(this)" onclick="sepeteEkle(this)" id="${product.id}">Sepete Ekle</button>
    <br><span id="amount"></span>
    <br><span id="increase" ></span>  <span id="text" style="display:none"> Adet Eklediniz</span>
  </div>
  </div>`, ''
);

document.getElementById("kalanPara").innerHTML = Number.MAX_SAFE_INTEGER

let kalanPara = Number.MAX_SAFE_INTEGER;


function sepeteEkle(x) {
let productId =x.id;
let productPrice = productList.find(y => y.id == productId).price;
let currentCard = document.getElementById("product"+productId);

if(productPrice < kalanPara){
    kalanPara = kalanPara - productPrice;
    document.getElementById("kalanPara").innerHTML = kalanPara
    let increaseElement = currentCard.querySelector("#increase")
let count = increaseElement.textContent

count++;
increaseElement.textContent = count;

    let textArea = currentCard.querySelector("#text")
    console.log(textArea);
    textArea.style.display = "inline-block";

}else {
    currentCard.querySelector("button").disabled = true;
}








}  



function amount (x) {
    let productId =x.id;
    let productPrice = productList.find(y => y.id == productId).price;

    x.parentElement.querySelector("#amount").innerHTML = Math.floor(kalanPara / productPrice) + " adet satın alabilirsiniz";



}

function amountout (x) {
     x.parentElement.querySelector("#amount").innerHTML = "";
}

