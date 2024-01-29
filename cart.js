var productList = [
  {
    title: "IVE concept color keychain",
    fileName: "ive.jpg",
    price: 149,
    id: "001",
  },
  {
    title: "Pink shining keychain",
    fileName: "sophia.jpg",
    price: 149,
    id: "002",
  },
  {
    title: "aespa Winter keychain",
    fileName: "winter.jpg",
    price: 159,
    id: "003",
  },
  {
    title: "SEVENTEEN fml keychain",
    fileName: "fml.jpg",
    price: 189,
    id: "004",
  },
  {
    title: "Sparkling phone keychain",
    fileName: "phone.jpg",
    price: 189,
    id: "005",
  },
  {
    title: "IN THE OCEAN keychain",
    fileName: "sea.jpg",
    price: 199,
    id: "006",
  },
  {
    title: "NewJeans phone keychain",
    fileName: "nwjns.jpg",
    price: 179,
    id: "007",
  },
  {
    title: "Milk tea color griptok",
    fileName: "grip.jpg",
    price: 189,
    id: "008",
  },
  {
    title: "Blue ribbon card holder",
    fileName: "bae.jpg",
    price: 79,
    id: "009",
  },
  {
    title: "Blue wings card holder",
    fileName: "bluewings.jpg",
    price: 79,
    id: "010",
  },
  {
    title: "NMIXX expérgo keychain",
    fileName: "nmixx.jpg",
    price: 199,
    id: "011",
  },
  {
    title: "Caramel pudding keychain",
    fileName: "pudding.jpg",
    price: 169,
    id: "012",
  },
  {
    title: "Melon soda keychain",
    fileName: "melon.jpg",
    price: 189,
    id: "013",
  },
  {
    title: "Black ribbon card holder",
    fileName: "black.jpg",
    price: 79,
    id: "014",
  },
];
var productList2 = [
  {
    title: "Blue ribbon card holder",
    fileName: "bae.jpg",
    price: 79,
    id: "009",
  },
  {
    title: "Blue wings card holder",
    fileName: "bluewings.jpg",
    price: 79,
    id: "010",
  },
  {
    title: "NMIXX expérgo keychain",
    fileName: "nmixx.jpg",
    price: 199,
    id: "011",
  },
  {
    title: "Caramel pudding keychain",
    fileName: "pudding.jpg",
    price: 169,
    id: "012",
  },
  {
    title: "Melon soda keychain",
    fileName: "melon.jpg",
    price: 189,
    id: "013",
  },
  {
    title: "Black ribbon card holder",
    fileName: "black.jpg",
    price: 79,
    id: "014",
  },
];
//console.log( (productList));
var buyCart = JSON.parse(localStorage.getItem("cart"));
//console.log(buyCart);
//run all data to array
let matchPD;
let pID;
let dataIndex = 0;
function renderOnPage(cart) {
  let inCart = "";
  let Tprice = 0;
  cart.forEach((item) => {
    const pID = item.productID;
    const matchPD = productList.find((p) => p.id === pID);
    Tprice += matchPD.price * item.quant;
    inCart += `
            <div class="buy-items row" id="${item.productID}">
                <div class="pic col-4">
                    <img src="resin_pics/${matchPD.fileName}">
                </div>
                <div class="col-8">
                    <div class="item-title">
                        ${matchPD.title}    
                        <button class="delBtn" data-index="${item.productID}">  Delete </button>          
                    </div>
                    <div>
                        <div class="item-pri">$${matchPD.price}</div>
                        <div  class="item-quan">
                            <button class="js-change-quant" data-id="${item.productID}" data-act="minus">-</button>
                            <span id="${item.productID}num">${item.quant}</span>
                            <button  class="js-change-quant" data-id="${item.productID}" data-act="plus">+</button>
                        </div>
                    </div>          
                </div>
            </div>
        `;
    dataIndex++;
  });
  if (inCart === ``) {
    console.log("EMPTY");
    inCart = `<div class="pre">
                <div class="pre-page-text">Your cart is empty.</div>
                <div class="pre-page" onClick="prePage()" >Go shopping!</div>
            </div>`;
  }
  document.getElementById("cart-container").innerHTML = inCart;

  document.getElementById("AllPrice").textContent = Tprice;
  //inCart='';
  //console.log("func done");
}
renderOnPage(buyCart);
//算金額

//改變數量
let actingMode;
let actingID;
let matchItem;
let plusORminus = 0;
document.querySelectorAll(".js-change-quant").forEach((button) => {
  button.addEventListener("click", () => {
    //console.log(button.dataset);
    actingID = button.dataset.id;
    actingMode = button.dataset.act;
    //console.log(typeof );

    buyCart.forEach((item) => {
      if (item.productID === actingID) {
        matchItem = item;
      }
    });
    //console.log(matchItem);
    if (actingMode === "plus") {
      console.log("plus" + actingID);
      plusORminus = 1;
    } else {
      console.log("minus" + actingID);
      plusORminus = -1;
    }

    let n =
      parseInt(document.getElementById(actingID + "num").textContent) +
      plusORminus;
    if (n < 1) {
      alert("Quantity must greater than 0!");
    } else {
      document.getElementById(actingID + "num").textContent = n;
    }

    matchItem.quant += plusORminus;
    //console.log(buyCart);
    //算金額

    Tprice = 0;
    buyCart.forEach((item) => {
      pID = item.productID;
      //console.log(item) ;
      productList.forEach((p) => {
        if (p.id === pID) {
          matchPD = p;
        }
      });
      Tprice += matchPD.price * item.quant;
    });
    document.getElementById("AllPrice").innerText = Tprice;
  });
});

//刪除品項
let cartItem;
document.getElementById("cart-container").addEventListener("click", (event) => {
  if (event.target.classList.contains("delBtn")) {
    const productID = event.target.dataset.index;

    // 使用 filter 函數來過濾掉要刪除的商品
    //檢查每個項目的 productID 是否不等於指定的 productID。如果不等於，則該項目會被保留在新陣列中，否則被排除。
    buyCart = buyCart.filter((item) => item.productID !== productID);

    // 重新渲染購物車內容
    renderOnPage(buyCart);
  }
});

//上一頁
function prePage() {
  window.location.replace("resin.html");
}
