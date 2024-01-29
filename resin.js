//所有的商品資訊 第一頁及第二頁
var productList=[
    {
        title: "IVE concept color keychain",fileName:"ive.jpg",price:149,id:"001"
    },
    {
        title: "Pink shining keychain",fileName:"sophia.jpg",price:149,id:"002"
    },
    {
        title: "aespa Winter keychain",fileName:"winter.jpg",price:159,id:"003"
    },
    {
        title: "SEVENTEEN fml keychain",fileName:"fml.jpg",price:189,id:"004"
    },
    {
        title: "Sparkling phone keychain",fileName:"phone.jpg",price:189,id:"005"
    },
    {
        title: "IN THE OCEAN keychain",fileName:"sea.jpg",price:199,id:"006"
    },
    {
        title: "NewJeans phone keychain",fileName:"nwjns.jpg",price:179,id:"007"
    },
    {
        title: "Milk tea color griptok",fileName:"grip.jpg",price:189,id:"008"
    }
];
var productList2=[
    {
        title: "Blue ribbon card holder",fileName:"bae.jpg",price:79,id:"009"
    },
    {
        title: "Blue wings card holder",fileName:"bluewings.jpg",price:79,id:"010"
    },
    {
        title: "NMIXX expérgo keychain",fileName:"nmixx.jpg",price:199,id:"011"
    },
    {
        title: "Caramel pudding keychain",fileName:"pudding.jpg",price:169,id:"012"
    },
    {
        title: "Melon soda keychain",fileName:"melon.jpg",price:189,id:"013"
    },
    {
        title: "Black ribbon card holder",fileName:"black.jpg",price:79,id:"014"
    }
];
//建立空字串存放要渲染的html
let listHTML='';
let listHTML2='';
//用forEach將各商品的html存放至字串
productList.forEach(renderHTML);
productList2.forEach(renderHTML2);
function renderHTML(item,index){ //index從0開始
    listHTML+=`
    <div class="col-6 col-md-4">
        <div class="wrap">
            <div class="card">
                <img src="resin_pics/${item.fileName}" >
                <div class="txt">
                    <div class="name">
                        ${item.title}
                    </div>
                    <div class="price">
                        $${item.price}
                    </div>                                    
                </div>                                    
            </div>
            <div class="add-cart">
                <button class="js-add-cart" data-product-id="${item.id}">ADD TO CART</button>
            </div> 
        </div>    
    </div>`;
};
listHTML+=`
<div class="col-12 col-md-4" style="position: relative;">
                <div class="see-more" id="see-more">
                    <button onclick="NextPage()">See more...</button>
                </div> 

            </div>
`;
function renderHTML2(item,index){ //index從0開始
    listHTML2+=`
    <div class="col-6 col-md-4">
        <div class="wrap">
            <div class="card">
                <img src="resin_pics/${item.fileName}" >
                <div class="txt">
                    <div class="name">
                        ${item.title}
                    </div>
                    <div class="price">
                        $${item.price}
                    </div>                                    
                </div>                                    
            </div>
            <div class="add-cart">
                <button class="js-add-cart" data-product-id="${item.id}">ADD TO CART</button>
            </div> 
        </div>    
    </div>`;
};
//渲染至網頁上
document.getElementById('row1').innerHTML=listHTML;
document.getElementById('row2').innerHTML=listHTML2;
num=0;
let cart=[];
document.querySelectorAll('.js-add-cart').forEach((button) => {
    button.addEventListener('click',() => {
        //console.log(button.dataset.productId);      
        let matching;
        cart.forEach((item)=>{
            //console.log("Here! ");
            if(item.productID === button.dataset.productId){
                //item.quant+=1;
                matching=item;
            }
            
        });
        if(matching){
            matching.quant+=1;
        }
        else{
            cart.push({
                productID: button.dataset.productId,
                quant:1
            });
        }
        console.log(cart);
        num++;
        document.getElementById("number").textContent = num;
        document.getElementById("shopping").classList.add("animate");
    });
});


var item;
var buyQuantity=[];

function addCart(item){
    buyQuantity.push(item);
    num++;
    document.getElementById("number").textContent = num;
    document.getElementById("shopping").classList.add("animate");
        //alert(item);
    console.log(buyQuantity);           
}

function NextPage(){
    document.getElementById("see-more").style.display="none";
    document.getElementById("nextPage").style.display="block";
           
}
function cartPage(){
    window.location.replace("cart.html");
    //alert(num);
    localStorage.setItem('cart',JSON.stringify(cart));
 }

 