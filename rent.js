// Hàm lấy thông tin 1 Rent để hiển thị lên trang cá nhân
function getRent(rent) {
    return `<div class="col-4 mt-2"><img src="images/page1-img1.jpg" alt="" class="img-border">
                <h3>${rent.apartment.postTitle}</h3>
                <p>${rent.apartment.description}</p>
                <button class="btn btn-primary" onclick="showMyOrder(${rent.id},${rent.status.id})">More</button></div>`;
}
// Hàm lấy về list các Rent mà mình là người đi thuê
function personalRentedList() {
    let statusId = document.getElementById('rented').value;
    let userId = localStorage.getItem('id');
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/rents/" + statusId + "/" + userId,
        success: function (data) {
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content += getRent(data[i]);
            }
            document.getElementById('post').innerHTML = content;
            document.getElementById('request').value = 0;
        },
        error: function () {
            document.getElementById('post').innerHTML = `<div class="card">Không có kết quả tìm kiếm phù hợp</div>`;
            document.getElementById('request').value = 0;
        }
    })
}
// Hàm hiển thị chi tiết 1 Rent của cá nhân
function showMyOrder(id, statusId) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/rents/" + id,
        success: function (data) {
            // console.log(data)
            document.getElementById('post').innerHTML = `<div class="col-12">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="img/page1-img3.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="img/page1-img2.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="img/page1-img1.jpg" class="d-block w-100" alt="...">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-6 card">
                <form>
                    <div class="mb-3">
                        <label class="form-label">Guest Info</label>
                        <hr>
                    </div>
                    <div class="mb-3">
                        <label for="firstName" class="form-label">First Name: </label>
                        <input type="text" disabled class="form-control" id="firstName" value="${data.user.firstName}">
                    </div>
                    <div class="mb-3">
                        <label for="lastName" class="form-label">Last Name: </label>
                        <input type="text" disabled class="form-control" id="lastName" value="${data.user.lastName}">
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone: </label>
                        <input type="text" disabled class="form-control" id="phone" value="${data.user.phoneNumber}">
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">Address: </label>
                        <input type="text" disabled class="form-control" id="address" value="${data.user.address}">
                    </div>
                </form>
            </div>
            <div class="col-6 card">
                <form>
                    <div class="mb-3">
                        <label class="form-label text-center">Owner's Info</label>
                        <hr>
                    </div>
                    <div class="mb-3">
                        <label for="firstName1" class="form-label">Owner's First Name: </label>
                        <input type="text" disabled class="form-control" id="firstName1" value="${data.apartment.user.firstName}">
                    </div>
                    <div class="mb-3">
                        <label for="lastName1" class="form-label">Owner's Last Name: </label>
                        <input type="text" disabled class="form-control" id="lastName1" value="${data.apartment.user.lastName}">
                    </div>
                    <div class="mb-3">
                        <label for="phone1" class="form-label">Owner's Phone: </label>
                        <input type="text" disabled class="form-control" id="phone1" value="${data.apartment.user.phoneNumber}">
                    </div>
                    <div class="mb-3">
                        <label for="address1" class="form-label">Owner's Address: </label>
                        <input type="text" disabled class="form-control" id="address1" value="${data.apartment.user.address}">
                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-12 card">
                <div class="mb-3">
                    <label class="form-label text-center">Apartment Info</label>
                    <hr>
                </div>
                <div class="mb-3">
                    <label for="address2" class="form-label">Apartment address: </label>
                    <input type="text" disabled class="form-control" id="address2" value="${data.apartment.address}, ${data.apartment.ward}, ${data.apartment.district}">
                </div>
                <div class="mb-3">
                    <label for="price" class="form-label">Apartment Price: </label>
                    <input type="text" disabled class="form-control" id="price" value="${data.apartment.price}">
                </div>
                <div class="mb-3">
                    <label for="startDate" class="form-label">Start Date: </label>
                    <input type="date" disabled class="form-control" id="startDate" value="${data.startDate}">
                </div>
            </div>
            <button type="button" class="btn btn-success mt-3" id="accept" onclick="acceptRent(${id},${data.apartment.id})">Accept</button>
            <button type="button" class="btn btn-danger mt-3" id="cancel" onclick="avoidRent(${id},${data.apartment.id})">Cancel</button>
        </div>`;
            if (data.user.id == localStorage.getItem('id')){
                switch (statusId) {
                    case 1, 2:
                        document.getElementById('accept').disabled = true;
                        break;
                    case 3:
                        document.getElementById('accept').disabled = true;
                        document.getElementById('cancel').disabled = true;
                        break;
                }
            }
            if (data.apartment.user.id == localStorage.getItem('id')){
                switch (statusId) {
                    case 2:
                        document.getElementById('accept').disabled = true;
                        break;
                    case 3:
                        document.getElementById('accept').disabled = true;
                        document.getElementById('cancel').disabled = true;
                        break;
                }
            }

        }
    })
}
// Hàm hủy Rent của cá nhân
function avoidRent(id, apartmentId) {
    let rent = {
        user: {
            id: localStorage.getItem('id')
        },
        apartment: {
            id: apartmentId
        },
        status: {
            id: 3
        }
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        type: "PUT",
        url: "http://localhost:8080/api/" + id + "/rents",
        data: JSON.stringify(rent),
        success: function () {
            document.getElementById('post').innerHTML = `<div class="card">Bạn đã hủy đơn thuê nhà</div>
                <button class="btn btn-outline-primary" onclick="loadingLayout()">Quay lại</button>`
        }
    })

}
// Hàm đồng ý Rent của chủ sở hữu nhà
function acceptRent(id, apartmentId) {
    let rent = {
        user: {
            id: localStorage.getItem('id')
        },
        apartment: {
            id: apartmentId
        },
        status: {
            id: 2
        }
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        type: "PUT",
        url: "http://localhost:8080/api/" + id + "/rents",
        data: JSON.stringify(rent),
        success: function () {
            document.getElementById('post').innerHTML = `<div class="card">Bạn đã hủy đơn thuê nhà</div>
                <button class="btn btn-outline-primary" onclick="loadingLayout()">Quay lại</button>`
        }
    })

}
// Hàm hiển thị các Rent mà mình là chủ sở hữu
function personalRequest() {
    let statusId = document.getElementById('request').value;
    let userId = localStorage.getItem('id');
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/rents/" + userId + "/" + statusId + "/list",
        success: function (data) {
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content += getRent(data[i]);
            }
            document.getElementById('post').innerHTML = content;
            document.getElementById('rented').value = 0;
        },
        error: function () {
            document.getElementById('post').innerHTML = `<div class="card">Không có kết quả tìm kiếm phù hợp</div>`;
            document.getElementById('rented').value = 0;
        }
    })
}
// Hàm hiển thị các nhà mà mình là người sở hữu
function personalApartmentList() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/apartments/" + localStorage.getItem('id') + "/list",
        success: function (data) {
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content += getApartment(data[i]);
            }
            document.getElementById('post').innerHTML = content;
        }
    })
}