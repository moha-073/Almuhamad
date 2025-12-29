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