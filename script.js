function submitRegister() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
    var msg = '';

    if (!email.includes('@') || !email.includes('.')) {
        msg += 'Invalid email format. ';
    }
    if (password.length < 6) {
        msg += 'Password too short. ';
    }
    if (password !== confirm) {
        msg += 'Passwords do not match. ';
    }

    if (msg === '') {
        msg = 'Registration successful!';
    }
    document.getElementById('registerMsg').innerText = msg;
}

function submitLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('loginPassword').value;
    var msg = '';

    if (username === '') {
        msg += 'Username required. ';
    }
    if (password === '') {
        msg += 'Password required. ';
    } else if (password.length < 6) {
        msg += 'Password too short. ';
    }

    if (msg === '') {
        msg = 'Login successful!';
    }
    document.getElementById('loginMsg').innerText = msg;
}

function submitFeedback() {
    var email = document.getElementById('feedbackEmail').value;
    var message = document.getElementById('message').value;
    var msg = '';

    if (!email.includes('@') || !email.includes('.')) {
        msg += 'Invalid email. ';
    }
    if (message.length > 500) {
        msg += 'Message too long (max 500 chars). ';
    }

    if (msg === '') {
        msg = 'Feedback sent!';
    }
    document.getElementById('feedbackMsg').innerText = msg;
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

function sortByName() {
    var list = document.getElementById('productList');
    var items = Array.from(list.getElementsByTagName('li'));
    items.sort(function(a,b){return a.dataset.name.localeCompare(b.dataset.name);});
    list.innerHTML = '';
    items.forEach(function(item){list.appendChild(item);});
}

function sortByPrice() {
    var list = document.getElementById('productList');
    var items = Array.from(list.getElementsByTagName('li'));
    items.sort(function(a,b){return parseFloat(a.dataset.price)-parseFloat(b.dataset.price);});
    list.innerHTML = '';
    items.forEach(function(item){list.appendChild(item);});
}

var currentPage = 1;
var itemsPerPage = 2;
function showPage(page){
    var items = document.querySelectorAll('#productList li');
    items.forEach(function(item,index){
        if(index >= (page-1)*itemsPerPage && index < page*itemsPerPage){
            item.style.display='block';
        } else {
            item.style.display='none';
        }
    });
}
showPage(currentPage);
function prevPage(){if(currentPage>1){currentPage--;showPage(currentPage);}else{alert('No previous page');}}
function nextPage(){var items=document.querySelectorAll('#productList li');if(currentPage*itemsPerPage<items.length){currentPage++;showPage(currentPage);}else{alert('No next page');}}
