console.log("%cHello! Let me know how I can improve by dropping me an email at: %cmbwoodyard@hotmail.com", "font-size: 18px;", "font-size: 18px; color: lightblue; text-decoration: underline;");

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
// console.log("Product name: " + productList.product1.name + "\n" + "Product desc: " + productList.product1.desc);

let btnDebounce = false;

//———————————————————————————————————————//
// SECTION Functions                     //
//———————————————————————————————————————//

function buttons(page) {
    if(!btnDebounce) {
        let landing       = document.getElementById("landing-page")
        let newArrivals   = document.getElementById("new-arrivals-page");
        let men           = document.getElementById("men-page");
        let women         = document.getElementById("women-page");
        let boys          = document.getElementById("boys-page");
        let girls         = document.getElementById("girls-page");
        let genderNeutral = document.getElementById("gender-neutral-page");
		let signUp		  = document.getElementById("sign-up-page");
		let logIn		  = document.getElementById("log-in-page");

        switch(page) {
            case 0: // Landing
				landing.classList.remove("hide");
				newArrivals.classList.add("hide");
				men.classList.add("hide");
				women.classList.add("hide");
				boys.classList.add("hide");
				girls.classList.add("hide");
				genderNeutral.classList.add("hide");
            break;

            case 1: // New Arrivals
				landing.classList.add("hide");
				newArrivals.classList.remove("hide");
				men.classList.add("hide");
				women.classList.add("hide");
				boys.classList.add("hide");
				girls.classList.add("hide");
				genderNeutral.classList.add("hide");
            break;

            case 2: // Men
				landing.classList.add("hide");
				newArrivals.classList.add("hide");
				men.classList.remove("hide");
				women.classList.add("hide");
				boys.classList.add("hide");
				girls.classList.add("hide");
				genderNeutral.classList.add("hide");
            break;

            case 3: // Women
				landing.classList.add("hide");
				newArrivals.classList.add("hide");
				men.classList.add("hide");
				women.classList.remove("hide");
				boys.classList.add("hide");
				girls.classList.add("hide");
				genderNeutral.classList.add("hide");
            break;

            case 4: // Boys
				landing.classList.add("hide");
				newArrivals.classList.add("hide");
				men.classList.add("hide");
				women.classList.add("hide");
				boys.classList.remove("hide");
				girls.classList.add("hide");
				genderNeutral.classList.add("hide");
            break;

            case 5: // Girls
				landing.classList.add("hide");
				newArrivals.classList.add("hide");
				men.classList.add("hide");
				women.classList.add("hide");
				boys.classList.add("hide");
				girls.classList.remove("hide");
				genderNeutral.classList.add("hide");
            break;

            case 6: // Gender Neutral
				landing.classList.add("hide");
				newArrivals.classList.add("hide");
				men.classList.add("hide");
				women.classList.add("hide");
				boys.classList.add("hide");
				girls.classList.add("hide");
				genderNeutral.classList.remove("hide");
            break;

            case 7: // Sign Up
				landing.classList.add("hide");
				newArrivals.classList.add("hide");
				men.classList.add("hide");
				women.classList.add("hide");
				boys.classList.add("hide");
				girls.classList.add("hide");
				genderNeutral.classList.add("hide");
				signUp.classList.remove("hide");
				logIn.classList.add("hide");
            break;

            case 8: // Log In
				landing.classList.add("hide");
				newArrivals.classList.add("hide");
				men.classList.add("hide");
				women.classList.add("hide");
				boys.classList.add("hide");
				girls.classList.add("hide");
				genderNeutral.classList.add("hide");
				signUp.classList.add("hide");
				logIn.classList.remove("hide");
            break;

        }

        setTimeout(() => {
			btnDebounce = false;
		}, 250); // waits 250ms (0.5s)
    }
}

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

// TODO: Figure out a better way to go about toggling the way the searchbar products look.
function productToggle(num) {
    let productPage = document.getElementById("product-list");
    switch(num) {
        case 1:
            //productPage.style
        break;

        case 2:

        break;
    }
}

//———————————————————————————————————————//
// SECTION Sockets                       //
//———————————————————————————————————————//


