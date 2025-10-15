const flashDeals = [
    { id: 1, name: "Ariel Detergent", price: 210, img: "https://m.media-amazon.com/images/I/71f71ITUtKL.jpg", category: "home" },
    { id: 2, name: "Kim Herbal Shampoo", price: 175, img: "https://cdn11.bigcommerce.com/s-s8ill42t95/images/stencil/500x659/products/518/4006/Everyday_Shampoo_8oz__11031.1656003603.png?c=2", category: "beauty" },
    { id: 3, name: "Earphones", price: 499, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0bdl_VH7KRZJwWXf8ntcrUiwguCzwwW2sg&s", category: "electronics" },
    { id: 4, name: "Fresh Apples", price: 120, img: "https://m.media-amazon.com/images/I/81aRkv2DltL._UF894,1000_QL80_.jpg", category: "fresh" },
    { id: 5, name: "Jeans", price: 899, img: "https://img.tatacliq.com/images/i8/1348Wx2000H/MP000000012731987_1348Wx2000H_202204061709191.jpeg", category: "fashion" },
    { id: 6, name: "Samsung LED TV", price: 15000, img: "https://m.media-amazon.com/images/I/51lYbJhOmbL._UF1000,1000_QL80_.jpg", category: "electronics" },
    { id: 7, name: "Face Moisturizer", price: 350, img: "https://www.evolvebeauty.com/cdn/shop/files/Daily_Renew_Facial_Cream_60ml_PDP.jpg?v=1748441429", category: "beauty" },
    { id: 8, name: "Olive Oil", price: 450, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW0yRAqPTZiEhI23am8SwUekNxiPAvG5Fq1g&s", category: "home" },
    { id: 9, name: "Bananas", price: 60, img: "https://images.apollo247.in/pd-cms/cms/2025-05/AdobeStock_299290543.webp?tr=q-80,f-webp,w-400,dpr-2.5,c-at_max%201000w", category: "fresh" },
    { id: 10, name: "Sneakers", price: 1200, img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b983d5bc09a4d4aba39a8bf011869ba_9366/samba-og-shoes.jpg", category: "fashion" },
    { id: 11, name: "Bluetooth Speaker", price: 999, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-vEqzNCK_NOHKFXK-cMHiQGgnneEHG5x0w&s", category: "electronics" },
    { id: 12, name: "Herbal Face Wash", price: 200, img: "https://lh6.googleusercontent.com/proxy/HuZ89N7BFsCiLnN-N9mSmbI3rJ0btv8lHvgCaIf5jvyWaW8ZZZF0hzLtRFP-MCG0e0x7-XZRaUG1nUD-NdtELMhuuv7sCE_tVLA48c6FpvE6jHdjU8TEVi8NClPe1kgts28feJesQOH6nRadKUixFRF5fsrPvnabveOz9xYp3aHiCIg3h9hNgu03", category: "beauty" },
    { id: 13, name: "Cushion Cover", price: 250, img: "https://nestasia.in/cdn/shop/files/SpringtimeCushionCase_6.jpg?v=1704446814", category: "home" },
    { id: 14, name: "Strawberries", price: 180, img: "https://www.jiomart.com/images/product/original/590001814/strawberry-small-pack-180-g-product-images-o590001814-p590116964-1-202412161658.jpg?im=Resize=(420,420)", category: "fresh" },
    { id: 15, name: "Leather Jacket", price: 3500, img: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/103395s.jpg?im=Resize,width=750", category: "fashion" },
];

const diwaliProducts = [
    { id: 101, name: "Masala Chai", price: 50, img: "https://goqii.com/blog/wp-content/uploads/shutterstock_1024718095-1024x682.jpg", category: "Sip & Snack" },
    { id: 102, name: "Mixed Nuts", price: 200, img: "https://satvikk.com/wp-content/uploads/2022/08/mixedbuts.jpg", category: "Sip & Snack" },
    { id: 103, name: "Ghee", price: 350, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRclvZbGOlyG9cIY8Ll31XQY1s8IfBMN_1zSA&s", category: "Cooking & Hosting" },
    { id: 104, name: "Serving Platter", price: 1200, img: "https://lh6.googleusercontent.com/proxy/2Q-YZxpyjPjP2QpqAuYmJuIalFKmM_5q7VOKEOZIbN6WjohH6G7tZjqhqsF4v0R5hD7tDr-QqlzqiG1GsATQ5aCJQTQE4Y9oeMSu0dnMpWttNxZVZesnO7L9oUtaePNYNUbHtnISro6xii7AfI6AUYDLG2ssGZ5sDZD2", category: "Cooking & Hosting" },
    { id: 105, name: "String Lights", price: 500, img: "https://rukminim2.flixcart.com/image/480/640/l2arp8w0/rice-light/f/o/j/100-bottle-2-usb10wwy-copper-string-led-light-10-mtr-100-led-usb-original-imagdzhxgtrbmdxe.jpeg?q=90", category: "Decor & Lights" },
    { id: 106, name: "Rangoli Colors", price: 250, img: "https://auradecor.co.in/cdn/shop/files/IMG_8585_957cad94-264f-4ce8-a4a5-99d07c6be419.jpg?v=1695366904&width=1946", category: "Decor & Lights" },
    { id: 107, name: "Cold Coffee", price: 150, img: "https://www.sharmispassions.com/wp-content/uploads/2020/02/iced-coffee-recipe.jpg", category: "Cafe Specials" },
    { id: 108, name: "Chocolate Muffin", price: 120, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKc1PSTltV8JxYj4VLTo3NcdCRwcwg6nmBeQ&s", category: "Cafe Specials" },
    { id: 109, name: "Bluetooth Speaker", price: 1200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-vEqzNCK_NOHKFXK-cMHiQGgnneEHG5x0w&s", category: "Music & Games" },
    { id: 110, name: "Board Game Set", price: 800, img: "https://www.jogenii.com/cdn/shop/files/NormalLudo03_1024x.jpg?v=1702288075", category: "Music & Games" },
];

// 1. Select the necessary DOM containers
const dealContainer = document.getElementById("deal-items");
const diwaliContainer = document.getElementById("diwali-products");
const searchInput = document.getElementById("search"); // Also ensure the search input is selected

// Display flash deals products
function displayProducts(items) {
    if (!dealContainer) return; // Safety check
    dealContainer.innerHTML = "";
    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
          <img src="${item.img}" alt="${item.name}">
          <h4>${item.name}</h4>
          <p>₹${item.price}</p>
          <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        dealContainer.appendChild(div);
    });
}

// Display diwali products
function displayDiwaliProducts(items) {
    if (!diwaliContainer) return; // Safety check
    diwaliContainer.innerHTML = "";
    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("diwali-product");
        div.innerHTML = `
          <img src="${item.img}" alt="${item.name}">
          <h4>${item.name}</h4>
          <p>₹${item.price}</p>
          <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        diwaliContainer.appendChild(div);
    });
}

// 2. Core Cart Logic (Corrected and verified)
function addToCart(id) {
    // Try to find the product in flashDeals first, if not found check diwaliProducts
    let product = flashDeals.find(p => p.id === id);
    if (!product) {
        product = diwaliProducts.find(p => p.id === id);
    }
    if (!product) {
        alert("Product not found");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

// Category filters for flashDeals
function filterCategory(cat) {
    if (cat === "all") {
        displayProducts(flashDeals);
    } else {
        displayProducts(flashDeals.filter(p => p.category === cat));
    }
}

// Category filters for diwaliProducts (not used in the sample HTML, but kept for completeness)
function filterDiwali(category) {
    if (category === "all") {
        displayDiwaliProducts(diwaliProducts);
    } else {
        displayDiwaliProducts(diwaliProducts.filter(p => p.category === category));
    }
}

// Search bar filters both flashDeals and diwaliProducts simultaneously
if (searchInput) {
    searchInput.addEventListener("keyup", function (e) {
        const term = e.target.value.toLowerCase();

        const filteredDeals = flashDeals.filter(p => p.name.toLowerCase().includes(term));
        const filteredDiwali = diwaliProducts.filter(p => p.name.toLowerCase().includes(term));

        displayProducts(filteredDeals);
        displayDiwaliProducts(filteredDiwali);
    });
}

// Initial display of all products
displayProducts(flashDeals);
displayDiwaliProducts(diwaliProducts);