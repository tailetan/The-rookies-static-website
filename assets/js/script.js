// var _ = require("lodash");

const products = [
    {
        name: "Product 4",
        imageUrl:
            "./assets/images/product-4.png",
        description: "This is a description of product 4",
        price: 5000,
        category: "men",
    },
    {
        name: "Product 5",
        imageUrl:
            "./assets/images/product-5.png",
        description: "This is a description of product 5",
        price: 5000,
        category: "woman",
    },
    {
        name: "Product 6",
        imageUrl:
            "./assets/images/product-6.png",
        description: "This is a description of product 6",
        price: 6000,
        category: "woman",
    },
    {
        name: "Product 7",
        imageUrl:
            "./assets/images/product-7.png",
        description: "This is a description of product 7",
        price: 7000,
        category: "woman",
    },
    {
        name: "Product 8",
        imageUrl:
            "./assets/images/product-8.png",
        description: "This is a description of product 5",
        price: 8000,
        category: "men",
    },
    {
        name: "Product 9",
        imageUrl:
            "./assets/images/product-9.png",
        description: "This is a description of product 9",
        price: 9000,
        category: "men",
    },
];

const womanContainerElem = document.getElementById("womanProduct");
womanContainerElem.classList.add("mt-3");

// Create woman products header
const h4Elem = document.createElement("h4");
h4Elem.innerText = "Woman Products";
womanContainerElem.appendChild(h4Elem);

// Create woman products header
const rowElem = document.createElement("div");
rowElem.classList.add("row");
womanContainerElem.appendChild(rowElem);

// Filter product list to get woman products
const womanProducts = products.filter((item) => item.category === "woman");

const womanProductsChunks = _.chunk(womanProducts, 2);
console.log(womanProductsChunks);

womanProducts.forEach((item) => {
    const productItemElem = `
        <div class="col-md-4 col-sm-6 col-12 product-item mt-3 ">
            <div class="card border-0">
                <img src="${item.imageUrl}" class="card-img" alt="PRODUCT 3" />
                <div class="card-body p-0">
                    <div class="product-infor text-center mt-3">
                        <h5 class="product-name">${item.name}</h5>
                        <p class="product-description mb-0">
                        ${item.description}
                        </p>
                        <div class="product-price py-2"><strong> ${item.price}</strong> <span>VNĐ</span></div>
                    </div>

                    <a href="#" class="btn btn-fluid btn-dark mx-auto d-block">ADD TO CART</a>
                </div>
            </div>
            </div>
    
     
      `;

    rowElem.innerHTML += productItemElem;
});

const menContainerElem = document.getElementById("menProduct");
menContainerElem.classList.add("mt-3");

// Create men products header
const h4MenElem = document.createElement("h4");
h4MenElem.innerText = "Men Products";
menContainerElem.appendChild(h4MenElem);

// Create men products header
const rowMenElem = document.createElement("div");
rowMenElem.classList.add("row");
menContainerElem.appendChild(rowMenElem);

// Filter product list to get men products
const menProducts = products.filter((item) => item.category === "men");

const menProductsChunks = _.chunk(menProducts, 2);
console.log(menProductsChunks);

menProducts.forEach((item) => {
    const menProductItemElem = `
        <div class="col-md-4 col-sm-6 col-12 product-item mt-3 ">
            <div class="card border-0">
                <img src="${item.imageUrl}" class="card-img" alt="PRODUCT 3" />
                <div class="card-body p-0">
                    <div class="product-infor text-center mt-3">
                        <h5 class="product-name">${item.name}</h5>
                        <p class="product-description mb-0">
                        ${item.description}
                        </p>
                        <div class="product-price py-2"><strong> ${item.price}</strong> <span>VNĐ</span></div>
                    </div>

                    <a href="#" class="btn btn-fluid btn-dark mx-auto d-block">ADD TO CART</a>
                </div>
            </div>
            </div>
    
     
      `;

    rowMenElem.innerHTML += menProductItemElem;
});

