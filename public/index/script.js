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
		// H1
		let h1 = document.getElementById("title-name");
		h1.style.opacity = 0;

		setTimeout(fadeIn => {
				h1.style.opacity = 1;
						// Pages
			// let landing       = document.getElementById("landing-page");
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
					// Changes H1
					h1.innerHTML = "Astris Apparel";
					
					// Changes Page
					newArrivals.classList.add("hide");
					men.classList.add("hide");
					women.classList.add("hide");
					boys.classList.add("hide");
					girls.classList.add("hide");
					genderNeutral.classList.add("hide");
				break;

				case 1: // New Arrivals
					// Changes H1
					h1.innerHTML = "New Arrivals";

					// Changes Page
					newArrivals.classList.remove("hide");
					men.classList.add("hide");
					women.classList.add("hide");
					boys.classList.add("hide");
					girls.classList.add("hide");
					genderNeutral.classList.add("hide");
				break;

				case 2: // Men
					// Changes H1
					h1.innerHTML = "Men";

					// Changes Page
					newArrivals.classList.add("hide");
					men.classList.remove("hide");
					women.classList.add("hide");
					boys.classList.add("hide");
					girls.classList.add("hide");
					genderNeutral.classList.add("hide");
				break;

				case 3: // Women
					// Changes H1
					h1.innerHTML = "Women";

					// Changes Page
					newArrivals.classList.add("hide");
					men.classList.add("hide");
					women.classList.remove("hide");
					boys.classList.add("hide");
					girls.classList.add("hide");
					genderNeutral.classList.add("hide");
				break;

				case 4: // Boys
					// Changes H1
					h1.innerHTML = "Boys";

					// Changes Page
					newArrivals.classList.add("hide");
					men.classList.add("hide");
					women.classList.add("hide");
					boys.classList.remove("hide");
					girls.classList.add("hide");
					genderNeutral.classList.add("hide");
				break;

				case 5: // Girls
					// Changes H1
					h1.innerHTML = "Girls";

					// Changes Page
					newArrivals.classList.add("hide");
					men.classList.add("hide");
					women.classList.add("hide");
					boys.classList.add("hide");
					girls.classList.remove("hide");
					genderNeutral.classList.add("hide");
				break;

				case 6: // Gender Neutral
					// Changes H1
					h1.innerHTML = "Gender Neutral";

					// Changes Page
					newArrivals.classList.add("hide");
					men.classList.add("hide");
					women.classList.add("hide");
					boys.classList.add("hide");
					girls.classList.add("hide");
					genderNeutral.classList.remove("hide");
				break;

				case 7: // Sign Up
					// Changes H1
					h1.innerHTML = "Sign Up";

					// Changes Page
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
					// Changes H1
					h1.innerHTML = "Log In";

					// Changes Page
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
		}, 250); // 1 Second

		setTimeout(() => {
			btnDebounce = false;
		}, 250); // waits 250ms (0.5s)
	}
}

//———————————————————————————————————————//
// SECTION Sockets                       //
//———————————————————————————————————————//


