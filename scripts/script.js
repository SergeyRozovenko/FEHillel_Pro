
async function getAllProducts() {
  const response = await fetchAllProducts();
  const prouducts = response.products;

  console.log(prouducts, "prouducts");


  const productsTamplate = `
 <article class="products">
      ${prouducts.map((product) => `
          <section class="product-item">
               <div class="image-wrapper">
                  ${getProductImage(product.thumbnail)}
              </div>
              <div class="content-wrapper">
                  <div class="title">
                      ${getProductTitle(product.title)}
                  </div>
                  <div class="price">
                      ${getProductPrice(product.price, product.discountPercentage)}
                  </div>
                  <div class="description">${getProductDescription(product.description)}</div>
                  <div class="actions">
                      <button id="cart"class="button green-solid cart">
                          Add to Cart
                      </button>
                      <button class="button more">More Details</button>
                  </div>
              </div>
          </section>  
      `).join("")}
 </article>
`;
  document.getElementById("app").innerHTML = productsTamplate;
}


const getProductTitle = (title) => `<h4>${title}</h4>`

const getProductPrice = (price, discount) => {
  const discountPrice = ((price * 100 - (discount / 100) * (price * 100))) / 100;

  return `
  <span><${price}, price with discount ${discountPrice}</span>
  `
}

const getProductDescription = (description) =>  `<span>${description}</span>`

const getProductImage = (url) => {
  if (!url) {
      return <span>Not Found</span>
  }
  return `
      <img
          src="${url}"
          alt=""
          class="image"
      />
  `
}

getAllProducts();