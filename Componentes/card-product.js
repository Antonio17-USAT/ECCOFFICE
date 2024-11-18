

export const cardProduct = (product) => {  
    let productSrc  = './media/products/' + (product.photos[0] || 'box-empty.png')
    const productItem = createElement('a', {
        href: 'product.html?item=' + product.id_product,
        className: 'card-product-item-reg',
        innerHTML: /*html*/`
        <div class="photo">
            <div class="icons-float">
                <div class="cursorp icon-favorite">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <picture>
                <img src="${productSrc}" alt="producto">
            </picture>
        </div>
        <div class="details">
            <div class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <div class="product-name">${product.title}</div>
            <div class="price">USD ${product.price}</div>
        </div>
        `
    });
};