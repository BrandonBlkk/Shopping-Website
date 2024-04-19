//Sidebar appear
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('left-0');
});

function focusSearchInput() {
    let searchInput = document.getElementById('searchInput');
    searchInput.focus();
}

//Add to favorite
function toggleFavorite(icon) {
    if (icon.style.color === 'orange') {
        icon.style.color = '#aaa'; 
    } else {
        icon.style.color = 'orange'; 
    }
}

//Check noti popup
function notiPopUp() {
    let noti = document.getElementById("noti");
    
    if (noti.style.display === "flex") {
        noti.style.display = "none";
    }
    else {
        noti.style.display = "flex";
    }
}
//close noti popup
function closeNotiPopUp() {
    let noti = document.getElementById("noti");
    
    noti.style.display = "none";
}

//Check profile popup
function profilePopUp() {
    let profileEdit = document.getElementById("profile-edit");
    
    if (profileEdit.style.display === "flex") {
        profileEdit.style.display = "none";
    }
    else {
        profileEdit.style.display = "flex";
    } 
}

//Check more popup
function morePopUp() {
    let more = document.getElementById("more");
    
    if (more.style.display === "flex") {
        more.style.display = "none";
    }
    else {
        more.style.display = "flex";
    }
}

//Button to move forward and backward
const container = document.querySelector('.popular-catelog-items');
const goBackBtn = document.getElementById('goBackBtn');
const goForwardBtn = document.getElementById('goForwardBtn');

goBackBtn.addEventListener('click', () => {
    container.scrollLeft -= 100; 
});

goForwardBtn.addEventListener('click', () => {
    container.scrollLeft += 100;
});

//Button to move forward and backward
const hotContainer = document.querySelector('.hot-deal-wrapper');
const goBackBtnn = document.getElementById('goBackBtnn');
const goForwardBtnn = document.getElementById('goForwardBtnn');

goBackBtnn.addEventListener('click', () => {
    hotContainer.scrollLeft -= 250; 
});

goForwardBtnn.addEventListener('click', () => {
    hotContainer.scrollLeft += 250;
});

//Change image when hover the image
function changeMainImage(img) {
    let mainImage = document.getElementById('mainImage');
    mainImage.src = img.src;
}

//Change back to the image when not hover
function resetMainImage() {
    let mainImage = document.getElementById('mainImage');
    mainImage.src = 'Image/beat.jfif';
}

//Change image when click the img
function changeImage(newImageUrl) {
    let mainImage = document.getElementById('mainImage');
    mainImage.src = newImageUrl;
}

//Add quantity
const addQuantity = () => {
    const quantity = document.getElementById("Quantity");
    const number = parseInt(quantity.textContent);

    if (quantity.textContent < 10) {
        quantity.textContent = number + 1;
    }
    else {
        quantity.textContent = 10;
    }
}

//Remove quantity
const remove = () => {
    const quantity = document.getElementById("Quantity");
    const number = parseInt(quantity.textContent);

    if (quantity.textContent <= 1) {
        quantity.textContent = 1;
    }
    else {
        quantity.textContent--;
    }
} 

//Payment form popup
function paymentPopUp() {
    let payment = document.getElementById("payment");
    
    if (payment.style.display === "flex") {
        payment.style.display = "none";
    }
    else {
        payment.style.display = "flex";
    }
}

//Payment method options
function selectPaymentMethod(element) {
    const checkbox = element.querySelector('input[type="checkbox"]');
    const checkIcon = element.querySelector('.fa-circle-check');
    
    checkbox.checked = !checkbox.checked;
    
    if (checkbox.checked) {
        checkIcon.style.display = 'flex';
    } else {
        checkIcon.style.display = 'none';
    }
}   

//Remove product from favorite
function removeFromFav() {
    let product = document.getElementById("product");
    product.style.display = "none";
}