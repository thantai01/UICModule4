let perPage = 8;
let start = 0;
let end = perPage;

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


function createApartment() {
    let apartmentImg = document.getElementById("imgURL").value;
    let square = document.getElementById("square").value;
    let quantityRoom = document.getElementById("roomQuantity").value;
    let floor = document.getElementById("floor").value;
    let description = document.getElementById("description").value;
    let address = document.getElementById("address").value;
    let ward = document.getElementById("ward").text;
    let district = document.getElementById("district").text;
    let price = document.getElementById("price").value;
    let type = document.getElementById("apartmentType").value;
    let postTitle = document.getElementById("imgURL").value;
    let userID = localStorage.getItem("userID");

    const newAparment = {
        image: 1,
        square: 1,
        quantityRoom: 1,
        floor: 1,
        description: 1,
        address: 1,
        ward: 1,
        district: 1,
        price:1,
        type:1,
        user: {
            id: 1
        },
        postTitle:"TEST"
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

        },
        error: function (error) {
            console.log(error)
        }
    })
}
