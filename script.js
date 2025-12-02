function submitRegister() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
    if (password = confirm) { // баг: оператор присваивания
        document.getElementById('registerMsg').innerText = 'Registered!';
    } else {
        document.getElementById('registerMsg').innerText = 'Passwords mismatch!';
    }
}

function submitLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('loginPassword').value;
    if (username == '' || password == '') {
        document.getElementById('loginMsg').innerText = 'Login successful!'; // баг: даже при пустых данных
    } else {
        document.getElementById('loginMsg').innerText = 'Error!';
    }
}

function submitFeedback() {
    var email = document.getElementById('feedbackEmail').value;
    if (!email.includes('@')) {
        document.getElementById('feedbackMsg').innerText = 'Sent!'; // баг: игнорирует ошибку
    } else {
        document.getElementById('feedbackMsg').innerText = 'Invalid email!';
    }
}

function filterProducts() {
    var search = document.getElementById('search').value.toLowerCase();
    var products = document.querySelectorAll('#productList li');
    products.forEach(function(item) {
        if (!item.dataset.name.toLowerCase().includes(search)) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    });
}

function sortProducts() {
    var list = document.getElementById('productList');
    var items = Array.from(list.getElementsByTagName('li'));
    items.sort(); // баг: сортировка некорректна
    list.innerHTML = '';
    items.forEach(function(item) { list.appendChild(item); });
}

function prevPage() { alert('Prev page clicked'); }
function nextPage() { alert('Next page clicked'); }
