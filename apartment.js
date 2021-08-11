let perPage = 8;
let currentPage = 1;
let start = 0;
let end = perPage;

let cur = 0;

function renderApartmentByList(num) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/apartments?page=" + num,
        success: function (apartments) {
            // console.log(apartments)
            window.localStorage.setItem("apartmentLength",apartments.content.length);
            let str = ``;
            const content = apartments.content.map((item,index) => {
                if(index >= start && index < end) {
                    str += `<div class="col-3 mt-3" style="float: top">`
                    str += `<div class="card" style="width: 18rem;" >`
                    str += `<img src="${item.image}" class="card-img-top" alt="">`
                    str += `<div class="card-body">`
                    str += `<h5 class="card-title">${item.postTitle}</h5>`
                    str += `<p class="card-text">`
                    str += `<ul style="list-style: none">`
                    str += `<li>Creator: ${[item.user.username]}</li>`
                    str += `<li>Created: ${item.createdTime}</li>`
                    str += `<li>Type : ${item.type.name}</li>`
                    str += `<li>Room Quantity: ${item.quantityRoom}</li>`
                    str += `<li>Floor: ${item.floor}</li>`
                    str += `<li>Square: ${item.square} m2</li>`
                    str += `<li>Suggest Price: ${item.price} $</li></ul>`
                    str += `</p>`
                    str += `<p style="text-align: center">` +
                        `<a href="#" class="btn btn-info"> Detail </a>`+ `&nbsp` +
                        `<a href="#" class="btn btn-info"> Rent </a>` + `&nbsp` +
                        `<a href="#" class="btn btn-info"> Vote </a>` + `</p>`
                    str += `</div></div>`
                    str += `</div>`
                    return str;
                }
            });
            str += `<hr>`
            str += `<button onclick="prevPage(${apartments.number})">` +`Prev` + `</button>`
            str += `<button class="page-item" id="totalPage" value="${apartments.totalPages}" >${apartments.number+1} / ${apartments.totalPages} </button>`
            str += `<button onclick="nextPage(${apartments.number})">`+ `Next` + `</button>`
            document.getElementById("post").innerHTML = str;
        },
        error: function (error) {
            console.log(error);
        }
    });
}



renderApartmentByList();
const apartment = window.localStorage.getItem("apartmentLength");
const totalPages = Math.ceil(apartment/perPage);

function getCurrentPage(currentPage) {
    start = (currentPage-1)*perPage;
    end = currentPage * perPage;
}

function nextPaging() {
    currentPage++;
    if(currentPage>totalPages) {
        currentPage = totalPages;
    }
    getCurrentPage(currentPage);
    renderApartmentByList();
}
function previousPaging() {
    currentPage--;
    if(currentPage<=1) {
        currentPage = 1;
    }
    getCurrentPage(currentPage);
    renderApartmentByList();
}

// function renderListPages() {
//     let html = `<ul class="pagination">`;
//     for(let i=1; i <= totalPages;i++) {
//         html += `&nbsp`
//         html += `<li class="page-item"><a class="page-link" onclick="changePage()">${i}</a></li>`;
//         html += `&nbsp`
//     }
//     html += `</ul>`
//     document.getElementById("number-page").innerHTML = html;
// }

// changePage();
// function changePage() {
//     const currentPages = document.querySelectorAll('.number-page ul li');
//     const a = document.querySelectorAll('.number-page ul li a');
//     for (let i = 0; i < idPages.length; i++) {
//         idPages[i].onclick = function () {
//             let value = i + 1;
//             const current = document.getElementsByClassName('active');
//             current[0].className = current[0].className.replace('active', '');
//             this.classList.add('active');
//             if (value > 1 && value < idPages.length) {
//                 $('.btn-prev').removeClass('btn-active');
//                 $('.btn-next').removeClass('btn-active');
//             }
//             if (value == 1) {
//                 $('.btn-prev').addClass('btn-active');
//                 $('.btn-next').removeClass('btn-active');
//             }
//             if (value == idPages.length) {
//                 $('.btn-next').addClass('btn-active');
//                 $('.btn-prev').removeClass('btn-active');
//             }
//             idPage = value;
//             getCurrentPage(idPage);
//             renderProduct(productArr);
//         };
//     }
// }
