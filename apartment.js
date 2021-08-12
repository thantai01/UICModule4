let perPage = 8;
let start = 0;
let end = perPage;

function renderApartmentByList(num) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/apartments?page=" + num,
        success: function (apartments) {
            window.localStorage.setItem("apartmentLength",apartments.content.length);
            let str = ``;
            const content = apartments.content.map((item,index) => {
                if(index >= start && index < end) {
                    str += `<div class="col-3 mt-3" style="float: top">`
                    str += `<div class="card" style="width: 19rem; height: 600px !important;">`
                    str += `<img src="${item.image}" class="card-img-top" alt="" style="height: 250px !important;">`
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
            str += `<button onclick="renderApartmentByList(${apartments.number-1})">` +`Prev` + `</button>`
            str += `<button class="page-item" id="totalPage" value="${apartments.totalPages}" >${apartments.number+1} / ${apartments.totalPages} </button>`
            if(apartments.number >= apartments.totalPages-1) {
                str += `<button disabled>`+ `Next` + `</button>`
            }else {
                str += `<button onclick="renderApartmentByList(${apartments.number +1 })">`+ `Next` + `</button>`
            }


            document.getElementById("post").innerHTML = str;
        },
        error: function (error) {
            console.log(error);
        }
    });
}

// renderApartmentByList();

function findDisNameByDisID(disID) {
    $.ajax({
        type:"GET",
        url: "https://provinces.open-api.vn/api/d",
        success: function getDistrict(district) {
            console.log(district)
            for(let i=0;i < district.length;i++) {
                if(district[i].code == disID) {
                    return  district[i].name;
                }
            }
        }
    })
    return null;
}
function findWardNameWardID(wardID) {
    $.ajax({
        type: "GET",
        url: "https://provinces.open-api.vn/api/w",
        success: function getDistrict(ward) {
            console.log(ward)
            for (let i = 0; i < district.length; i++) {
                if (ward[i].code == wardID) {
                    return ward[i].name;
                }
            }
        }
    })
    return null;
}
findWardNameWardID();
findDisNameByDisID();


function createApartment() {
    let apartmentImg = document.getElementById("imgURL").value;
    let square = document.getElementById("square").value;
    let quantityRoom = document.getElementById("roomQuantity").value;
    let floor = document.getElementById("floor").value;
    let description = document.getElementById("description").value;
    let address = document.getElementById("address").value;

    let ward = findWardNameWardID(document.getElementById("ward").value);
    let district = findDisNameByDisID(document.getElementById("district").value);

    let price = document.getElementById("price").value;
    let type = document.getElementById("apartmentType").value;
    let postTitle = document.getElementById("postTitle").value;
    let userID = localStorage.getItem("id");

    const newAparment = {
        image: apartmentImg,
        square: square,
        quantityRoom: quantityRoom,
        floor: floor,
        description: description,
        address: address,
        ward: ward,
        district: district,
        price: price,
        type: {
            id: type
        },
        user: {
            id: 1
        },
        postTitle:postTitle
    }
    console.log(newAparment)
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(newAparment),
        url: "http://localhost:8080/api/apartments",
        processData: false,
        contentType: false,
        cache: false,
        success: function () {
            alert("Successfully created new Apartment !!!!")
            console.log("GUD")
            window.location.assign('http://localhost:63342/casestudy4/landing-page.html');

        },
        error: function (error) {
            console.log(error)
        }
    })
}

function renderApartmentByUserId(userId) {
    let str = `<table class="table table-light table-bordered" `;
        str += `<tr>`;
        str += `<th> Title </th>`;
        str += `<th> Created </th>`;
        str += `<th> Address </th>`;
        str += `<th> Ward </th>`;
        str += `<th> District </th>`;
        str += `<th> Type </th>`;
        str += `<th> A1 </th>`;
        str += `<th> A2 </th>`;
        str += `</tr>`;
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/apartments/"+ userId +"/apartmentList/",
        success: function (apartment) {
            console.log(apartment)
            for(let i =0;i < apartment.length;i++) {
                str += `<tr>`;
                str += `<td>${apartment[i].postTitle}</td>`;
                str += `<td>${apartment[i].createdTime}</td>`;
                str += `<td>${apartment[i].address}</td>`;
                str += `<td>` + `renderWardAPI(${apartment[i].ward})` + `</td>`;
                str += `<td>` + `renderDistrictAPI(${apartment[i].district})` + `</td>`;
                str += `<td>${apartment[i].type.name}</td>`;
                str += `<td> <a class="btn btn-info"> Detail </a></td>`;
                str += `<td> <a class="btn btn-info"> Delete </a></td>`;
                str += `</tr>`;
            }
            str += `</table>`
            document.getElementById("post").innerHTML = str;
        },
        error: function (error) {
            console.log(error)
        }
    });

}