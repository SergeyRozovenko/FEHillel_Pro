
  
const fetchAllProducts = async () => {
    return (await fetch("https://dummyjson.com/products")).json();
  };

async function getAllProducts(filter) {
 const response = await fetchAllProducts();
const prouducts = response.products;

// prouducts.sort((a, b) => b.rating - a.rating);

// фільтрація продуктів
const filteredProducts = prouducts.filter((product) => {
    if (filter.name && !product.title.toLowerCase().includes(filter.name.toLowerCase())) {
      return false;
    }

    if (filter.minPrice && product.price < filter.minPrice) {
      return false;
    }

    if (filter.maxPrice && product.price > filter.maxPrice) {
      return false;
    }

    if (filter.rating && product.rating < filter.rating) {
      return false;
    }

    return true;
  });

  console.log(filteredProducts, "filteredProducts");

  const productsTamplate = `

 <article class="products">
      ${filteredProducts.sort((a, b) => b.rating - a.rating).map((product) => `
          <section class="product-item">
          ${getProductItem(product)}
          </section>  
      `).join("")}
 </article>
`;

  document.getElementById("app").innerHTML = productsTamplate;
}

const getUserSearchParams = () => {
    const name = prompt("Enter product name:");
    const minPrice = prompt("Enter minimum price:");
    const maxPrice = prompt("Enter maximum price:");
    const rating = prompt("Enter minimum rating:");
    
    return {
      name,
      minPrice,
      maxPrice,
      rating
    };
  };

const getProductItem = (item) => `<div class="image-wrapper">
${getProductImage(item.thumbnail)}
</div>
<div class="content-wrapper">
<div class="title">
${getProductTitle(item.title)}
<div class="rating">
${getProductRating(item.rating)}
            </div>
</div>
<div class="price">
${getProductPrice(item.price, item.discountPercentage)}
</div>
<div class="description">${getProductDescription(item.description)}</div>
<div class="actions">
<button id="cart"class="button green-solid cart">
Add to Cart
</button>
<button class="button more">More Details</button>
</div>
</div> `

const getProductTitle = (title) => `<h4>${title}</h4>`

const getProductRating = (rating) =>  {
return `
<img
src="./assets/star_77949 (1).svg"
alt="star"
class="image_star"
/>
<span>${rating}</span>
`}

const getProductPrice = (price, discount) => {

    const discountPrice = ((price - (price / discount)).toFixed(2))

  return `
  <span>$${price}, price with discount $${discountPrice}</span>
  `
}

const getProductDescription = (description) =>  `<span>${description}</span>`

const getProductImage = (url) => {
  if (!url) {
      return `<span>Not Found </span>`
  }
  return `
      <img
          src="${url}"
          alt=""
          class="image"
      />
  `
}
const searchParams = getUserSearchParams();
getAllProducts(searchParams);
