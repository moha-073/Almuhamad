<<<<<<< HEAD
const buttons = document.querySelectorAll(".order-btn");
const names = document.querySelectorAll(".name");
const prices = document.querySelectorAll(".price");
const cartBtn = document.getElementById("cart-btn");
const viewCartBtn = document.getElementById("view-cart");
const images = document.querySelectorAll(".container .box li .img");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest("li");

    const name = item.querySelector(".name").textContent;
    const price = Number(item.querySelector(".price").dataset.price);
    const image = item.querySelector(".img").src;

    const existing = cart.find(p => p.name === name);

    if (existing) {
      existing.quantity++;
    } else {
      cart.push({ name, price, image, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      animateAddToCart(btn);
  });

});

function updateCartCount() {
  let count = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartBtn) cartBtn.textContent = `Cart (${count})`;
}

function animateAddToCart(button) {
  button.classList.add("added");
  setTimeout(() => button.classList.remove("added"), 300);
}

updateCartCount();

cartBtn.addEventListener("click", () => {
  window.location.href = "cart.html";
});



=======
const cartBtn = document.getElementById('cart-btn');
const cartIcon = document.getElementById('cart-icon');
const viewCart = document.getElementById('view-cart');
const orderBtns = document.querySelectorAll('.order-btn');
const itemName = document.querySelectorAll('.name');
const itemPrice = document.querySelectorAll('.price');

let cartCount = 0;
  const cartItems = [
    {name: itemName[0].textContent,
    price: itemPrice[0].textContent
    },
    {name: itemName[1].textContent,
    price: itemPrice[1].textContent
    },
    {name: itemName[2].textContent,
    price: itemPrice[2].textContent
    },
    {name: itemName[3].textContent,
    price: itemPrice[3].textContent
    },
    {name: itemName[4].textContent,
    price: itemPrice[4].textContent
    },
    {name: itemName[5].textContent,
    price: itemPrice[5].textContent
    },
    {name: itemName[6].textContent,
    price: itemPrice[6].textContent
    },
    {name: itemName[7].textContent,
    price:itemPrice[7].textContent
    },
    {name: itemName[8].textContent,   
    price: itemPrice[8].textContent
    },
    {name: itemName[9].textContent,
    price:itemPrice[9].textContent
    },
    {name: itemName[10].textContent,
    price: itemPrice[10].textContent
    },
    {name: itemName[11].textContent,
    price: itemPrice[11].textContent
    },
    {name: itemName[12].textContent,
    price: itemPrice[12].textContent
    },
    {name: itemName[13].textContent,
    price: itemPrice[13].textContent
    },
    {name: itemName[14].textContent,
    price: itemPrice[14].textContent
    },
    {name: itemName[15].textContent,
    price: itemPrice[15].textContent
    },
    {name: itemName[16].textContent,
    price: itemPrice[16].textContent
    },
    {name: itemName[17].textContent,
    price: itemPrice[17].textContent
    },
    {name: itemName[18].textContent,
    price: itemPrice[18].textContent
    },
    {name: itemName[19].textContent,
    price: itemPrice[19].textContent
    },
  ];


    const orderItems = orderBtns.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    cartBtn.textContent = `Cart ${cartCount}`;
    alert(`${cartItems.name.textContent} added to cart at ${cartItems.price.textContent}`);
  })
})
  



cartBtn.addEventListener("click", () => {
orderItems;
} )



cartIcon.addEventListener("click", () => {

viewCart.classList.toggle('active');
})


function displayCartItems() {
  
    cartItems.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.textContent = `${item.name}    ${item.price}`;
      viewCart.appendChild(itemElement);
      
    });
  
}




viewCart.addEventListener('click', () => {
  displayCartItems();
});
>>>>>>> 3a644cbd076a1a6a7167a4c44a7b936df3205540
