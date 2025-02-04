const merchJson = "/public/data/merch.json";
const merch = document.querySelector(".shop-content");

fetch(merchJson)
    .then((respone) => {
        return respone.json();
    })
    .then((data) => {
        data.forEach((product) => {
            const { link, name, price, image } = product;
            merch.innerHTML += `
        <div class="merch-box">
          <a href="${link}" aria-label="${name}"><img
          src="${image}" alt="${name}" class="product-img"></a>
          <div class="info-section">
            <h2 class="product-title">${name}</h2>
            <span class="product-price">${price}</span>
          </div>
		</div>
        `;
        });
    });
