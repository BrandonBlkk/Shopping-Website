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
document.addEventListener('DOMContentLoaded', () => {
    const popularCatelogItems = document.querySelector('.popular-catelog-items');
    const goBackBtn = document.getElementById('goBackBtn');
    const goForwardBtn = document.getElementById('goForwardBtn');

    goBackBtn.addEventListener('click', () => {
        popularCatelogItems.scrollLeft -= 100; 
    });

    goForwardBtn.addEventListener('click', () => {
        popularCatelogItems.scrollLeft += 100;
    });
});


//Button to move forward and backward
const hotDealContainer = document.querySelectorAll('.hot-deal-container');

hotDealContainer.forEach(container => {
    const hotContainer = container.querySelector('.hot-deal-wrapper');
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');

    prevBtn.addEventListener('click', () => {
        hotContainer.scrollLeft -= 250;
    })

    nextBtn.addEventListener('click', () => {
        hotContainer.scrollLeft += 250;
    })
})

//Add to cart
const counterBox = document.querySelectorAll('.counter-box');

counterBox.forEach(box => {
    const decreaseBtn = box.querySelector('.decreaseBtn');
    const increaseBtn = box.querySelector('.increaseBtn');
    const quantity = box.querySelector('.Quantity');

    let itemCount = quantity.textContent;

    decreaseBtn.addEventListener('click', () => {
        itemCount--;
    
        if (itemCount < 1) {
            itemCount = 1;
        }
        quantity.textContent = itemCount;
    })

    increaseBtn.addEventListener('click', () => {
        itemCount++;
        quantity.textContent = itemCount;
    })
})

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
