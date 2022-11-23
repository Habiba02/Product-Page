const products = [
  {
    id: 1,
    title: "Nike airforce 1",
    category: "Sneakers",
    price: 66.99,
    image: "./images/aiforce.jpg",
    description: `Anim culpa cupidatat consectetur qui proident sint sunt dolor esse tempor eu ullamco nulla. Excepteur exercitation laborum eu laborum.`,
  },
  {
    id: 2,
    title: "Brown Leather Heels",
    category: "Heels",
    price: 66.55,
    image: "./images/Leather.jpg",
    description: `Anim culpa cupidatat consectetur qui proident sint sunt dolor esse tempor eu ullamco nulla. Excepteur exercitation laborum eu laborum.`,
  },
  {
    id: 3,
    title: "Brown Male Boots",
    category: "Boots",
    price: 55.99,
    image: "./images/Brown.jpg",
    description: `Anim culpa cupidatat consectetur qui proident sint sunt dolor esse tempor eu ullamco nulla. Excepteur exercitation laborum eu laborum.`,
  },
  {
    id: 4,
    title: "Red Converse All Star",
    category: "Sneakers",
    price: 55.99,
    image: "./images/Converse.jpg",
    description: `Anim culpa cupidatat consectetur qui proident sint sunt dolor esse tempor eu ullamco nulla. Excepteur exercitation laborum eu laborum.`,
  },
  {
    id: 5,
    title: "Weeding Heels",
    category: "Heels",
    price: 55.99,
    image: "./images/Weeding.jpg",
    description: `Anim culpa cupidatat consectetur qui proident sint sunt dolor esse tempor eu ullamco nulla. Excepteur exercitation laborum eu laborum.`,
  },
  {
    id: 6,
    title: "Male Boots",
    category: "Boots",
    price: 72.55,
    image: "./images/Male.jpg",
    description: `Anim culpa cupidatat consectetur qui proident sint sunt dolor esse tempor eu ullamco nulla. Excepteur exercitation laborum eu laborum.`,
  },
  {
    id: 7,
    title: "Floral Heels",
    category: "Heels",
    price: 42.99,
    image: "./images/Floral.jpg",
    description: `Anim culpa cupidatat consectetur qui proident sint sunt dolor esse tempor eu ullamco nulla. Excepteur exercitation laborum eu laborum.`,
  },
  {
    id: 8,
    title: "Jordan 1 Retro",
    category: "Sneakers",
    price: 76.99,
    image: "./images/Jordan.jpg",
    description: `Anim culpa cupidatat consectetur qui proident sint sunt dolor esse tempor eu ullamco nulla. Excepteur exercitation laborum eu laborum.`,
  },
  {
    id: 9,
    title: "Midwest Trekking",
    category: "Boots",
    price: 72.99,
    image: "./images/Midwest.jpg",
    description: `Anim culpa cupidatat consectetur qui proident sint sunt dolor esse tempor eu ullamco nulla. Excepteur exercitation laborum eu laborum.`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// load items
window.addEventListener("DOMContentLoaded", function () {
  displayProductsItems(products);
  displayProductsButtons();
});

function displayProductsItems(productsItems) {
  let displayProducts = productsItems.map(function (item) {
    return `<article class="product">
  <img src= ${item.image} alt=${item.title} class="photo" />
  <div class="product-info">
    <header>
      <h4>${item.title}</h4>
      <h4 class="price">$${item.price}</h4>
    </header>
    <hr />
    <p class="product-text">
    ${item.description}
    </p>
  </div>
</article>`;
  });

  displayProducts = displayProducts.join("");
  sectionCenter.innerHTML = displayProducts;
}
function displayProductsButtons() {
  const categories = products.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<div class="filter-btn" type="button" data-id=${category}>${category}</div>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const productsCategory = products.filter(function (productsItems) {
        if (productsItems.category === category) {
          return productsItems;
        }
      });
      if (category === "All") {
        displayProductsItems(products);
      } else {
        displayProductsItems(productsCategory);
      }
    });
  });
}
