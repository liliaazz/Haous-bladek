document.addEventListener("DOMContentLoaded", function() {
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let thumbnails = document.querySelectorAll('.thumbnail .item');
    let locationInput = document.getElementById("location"); 
    let destinationInput = document.getElementById("destination"); 
    let btn = document.getElementById('btn');

    let busNum = document.getElementById("bus-num");
    let estimatedTime = document.getElementById("estimate-time");
    let codeqrimg = document.getElementById('qr_code');
    let btnPay = document.getElementById('btn-pay');

    let countItem = items.length;
    let itemActive = 0;
    let refreshInterval;

    refreshInterval = setInterval(() => {
        next.click();
    }, 4000);

    function showSlider() {
        let itemActiveOld = document.querySelector('.slider .list .item.active');
        let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
        itemActiveOld.classList.remove('active');
        thumbnailActiveOld.classList.remove('active');

        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');

        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
            next.click();
        }, 5000);
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            itemActive = index;
            showSlider();
        });
    });

    btnPay.addEventListener("click", function() {
        // Retrieve the values from the input fields
        let firstName = document.getElementById('fname').value.trim();
        let lastName = document.getElementById('lname').value.trim();

        let firstTag = document.getElementById('name_Tag');
        let lastTag = document.getElementById('last_Tag');
    
        firstTag.textContent = firstName;

        lastTag.textContent = lastName;
    
        codeqrimg.src = 'css/ic_code_qr.svg';
    });
    
    btn.addEventListener("click", function() {
        let location = locationInput.value.trim(); 
        let destination = destinationInput.value.trim();

        if (location === 'eucalyptus' && destination === 'bab hassen') {
            changeImg('css/euca_to_babhassen.svg');
            busNum.textContent = '4701'
            estimatedTime.textContent = '3 min'
        } else if (location === 'eucalyptus' && destination === 'place des martyrs'){
            changeImg('css/euca-to-martyr.svg');
            busNum.textContent = '4702'
            estimatedTime.textContent = '10 min'
        } else {
            changeImg('css/img-bus-thingy.png');
            busNum.textContent = 'XYZ'
            estimatedTime.textContent = 'X min'
        }
    });

    function changeImg(newSrc) {
        var img = document.getElementById('default-img');
        img.classList.add('fade-out');

        setTimeout(function() {
            img.src = newSrc;
            img.classList.remove('fade-out');
        }, 1000); // animation duration
    }
});
