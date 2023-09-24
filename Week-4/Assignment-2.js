function ajax(src, callback) {
    // your code here
    fetch(src)
    .then((response) => {
        if(!response.ok){ 
        // 請求若成功 response.ok 會顯示true，200~299之間
            throw new Error('Not OK');
        }
        return response.json();
    })
    .then((data) => {
        callback(data);
    })
    .catch((error) => {
        console.warn('Error:', error);
    });
}

function render(data) {
// your code here
// document.createElement() and appendChild() methods are referred.
    let container = document.createElement('div');
    container.classList.add('productContainer');

    for(let product of data){
        let productItem = document.createElement('div');

        let productName = document.createElement('p');
        productName.textContent = product.name;

        let productPrice = document.createElement('span');
        productPrice.textContent = `Price: ${product.price}`;

        let productDescription = document.createElement('span');
        productDescription.textContent = `產品特色: ${product.description}`;

        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        productItem.appendChild(productDescription);
        container.appendChild(productItem);
    }
    document.body.appendChild(container);
}

ajax('https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products',
    function (response) {
        render(response);
    }
); // you should get product information in JSON format and render data in the page