//———————————————————————————————————————//
// SECTION TODO's                        //
//———————————————————————————————————————//



//———————————————————————————————————————//
// SECTION Variables                     //
//———————————————————————————————————————//

// TODO: In the future do a JSON file for the productList instead of this variable.
// NOTE: !!!TEST VARIABLE!!!
    let productList = {
        product1: {
            name: "Apple",
            desc: "A delicious fruit."
        },

        product2: {
            name: "Orange",
            desc: "A delicious fruit."
        },

        product2: {
            name: "Pear",
            desc: "A delicious fruit."
        }
    };
    console.log("Product name: " + productList.product1.name + "\n" + "Product desc: " + productList.product1.desc);
// NOTE: !!!TEST VARIABLE!!!

//———————————————————————————————————————//
// SECTION Functions                     //
//———————————————————————————————————————//

function searchBar(key) {
    // TODO: Create proper amount of li's to generate product list.
    // TODO: In CSS, make li's look sexy!
    const productListElement  = document.getElementById("product-list"); // Gets product ul element.

    // Creating elements.
    if (value) {
        productList.style.display = "block"; // Shows productList once words are typed in.

        // TODO: Product name filtering based on user input in the search bar.
        for (i = 0; i <= productList.length - 1; i++) {
            let productLi      = document.createElement("li");  // Creates product li elements.
            let productImg     = document.createElement("img"); // Creates image element.
            let productTitle   = document.createElement("h1");  // Creates h1 element.
            let productDesc    = document.createElement("p");   // Creates p element.
            let productElement = document.createElement("div"); // Creates div element.

            productElement.classList.add("product-element");
            productTitle.classList.add("product-title");
            productDesc.classList.add("product-desc");

            productElement.appendChild(productImg, productTitle, productDesc); // Puts img, h1, & p element inside li element.
            productLi.appendChild(productElement); // Puts productElement div inside li.
            productListElement.appendChild(productLi); // Puts li element inside ul element.

            // Adds actual text into created elements.
            productTitle.innerHTML = productList.product1.name;
            productDesc.innerHTML  = productList.product1.desc;
        }
    }
}

//———————————————————————————————————————//
// SECTION Sockets                       //
//———————————————————————————————————————//


