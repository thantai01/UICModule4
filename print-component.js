
function printTopMenuComponent() {
    document.getElementById("top-menu").innerHTML =
        "<nav class=\"navbar navbar-expand-lg navbar-dark\" style=\"background-color: #61b9f5\">\n" +
        "            <div class=\"container-fluid\">\n" +
        "                <a class=\"navbar-brand\">\n" +
        "                    <img src=\"https://png.pngtree.com/template/20191014/ourlarge/pngtree-building-logo-design-template-real-estate-vector-logo-template-logo-for-image_317913.jpg\" alt=\"\" width=\"100\" height=\"80\">\n" +
        "                </a>\n" +
        "                <a class=\"navbar-brand\"><strong>SkyCrapper</strong></a>\n" +
        "                <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
        "                    <span class=\"navbar-toggler-icon\"></span>\n" +
        "                </button>\n" +
        "                <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n" +
        "                    <div class=\"navbar-nav\">\n" +
        "                        <a class=\"nav-link\" href=\"landing-page.html\">Home</a>\n" +
        "                        <a class=\"nav-link\" href=\"#\">News</a>\n" +
        "                        <a class=\"nav-link\" href=\"#\">Contact Us</a>\n" +
        "                        <a class=\"nav-link\" href=\"#\">Member</a>\n" +
        " " +
        "\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </nav>";
}

function printBannerComponent() {
    document.getElementById("banner").innerHTML =
        " <div id=\"carouselExampleControls\" class=\"carousel slide\" data-bs-ride=\"carousel\" data-bs-interval =\"3000\">\n" +
        "                <div class=\"carousel-inner\">\n" +
        "                    <div class=\"carousel-item active\">\n" +
        "                        <img src=\"/img/wallpaper1.jpg\" class=\"d-block w-100\" alt=\"...\">\n" +
        "                    </div>\n" +
        "                    <div class=\"carousel-item\">\n" +
        "                        <img src=\"/img/wallpaper2.jpg\" class=\"d-block w-100\" alt=\"...\">\n" +
        "                    </div>\n" +
        "                    <div class=\"carousel-item\">\n" +
        "                        <img src=\"/img/walpaper3i.png\" class=\"d-block w-100\" alt=\"...\">\n" +
        "                    </div>\n" +
        "                    <div class=\"carousel-item\">\n" +
        "                        <img src=\"/img/wallpaper4.jpg\" class=\"d-block w-100\" alt=\"...\">\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"prev\">\n" +
        "                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n" +
        "                    <span class=\"visually-hidden\">Previous</span>\n" +
        "                </button>\n" +
        "                <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleControls\" data-bs-slide=\"next\">\n" +
        "                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n" +
        "                    <span class=\"visually-hidden\">Next</span>\n" +
        "                </button>\n" +
        "            </div>";
}



function printPersonal() {
    document.getElementById("personal").innerHTML =
        `<a class="btn btn-outline-success" href="create-apartment.html" " >Create New Apartment For Lease</a>` + `&nbsp`+
        `<a class="btn btn-outline-success" onclick="personalApartmentList()" >My Apartment List </a>`+ `&nbsp`+
        `<a class="btn btn-outline-success" onclick="personalRentedList()" >My Rented List </a>`+ `&nbsp`+
        `<a class="btn btn-outline-success" onclick="personalHistory()" >My History </a>`;
}


function printSearchComponent() {
    document.getElementById('search').innerHTML =
            `<!--<form>-->
                  <div class="col-3 m-3">
                       <div class="mb-3">
                            <h5> Cấu trúc: </h5>
                            <label for="quantity" class="form-label">Số phòng ngủ </label>
                            <input type="number" id="quantity" aria-describedby="emailHelp">
                            <label for="floor" class="form-label">Số tầng</label>
                            <input type="number"  id="floor">
                      </div>
                  </div>
                  <div class="col-3 m-3">
                      <div class="mb-3">
                        <h5>Khoảng giá: </h5>
                            <label class="form-label"> Thấp nhất</label>
                            <input type="number" id="low">
                            <label class="form-label">Cao nhất</label>
                            <input type="number"  id="high">
                      </div>
                  </div>
                  <div class="col-8 m-3">
                      <div class="mb-3">
                      <h5>Khu vực : </h5>
                        <label for="exampleInputPassword2" class="form-label"> Tỉnh/Thành phố </label>
                        <select name="province" id="province" onchange="renderDistrictAPI()"></select>
                        <label for="exampleInputPassword1" class="form-label">Quận/Huyện </label>
                        <select name="district" id="district" onchange="renderWardAPI()"></select>
                        <label for="exampleInputPassword1" class="form-label">Phường/Xã </label>
                        <select name="ward" id="ward"></select>
                      </div>
                    </div>
                 
                  <button type="button" class="btn btn-outline-success" onclick="searchByElement()" style="text-decoration-color: white">Search</button>
<!--            </form>-->`;
}

function showApartmentFormCreate() {
    document.getElementById("apartment-create").innerHTML = `<!--<form>-->
  <!-- 4 column grid layout with text inputs  -->
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <select  id="province" class="form-control" onchange="renderDistrictAPI()"></select>
        <label class="form-label" for="province"> Tỉnh/Thành Phố </label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <select  id="district" class="form-control" onchange="renderWardAPI()"></select>
        <label class="form-label" for="district">Quận/Huyện</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <select  id="ward" class="form-control"> </select>
        <label class="form-label" for="ward">Phường/Xã</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="address" class="form-control">
        <label class="form-label" for="address">Số nhà/ Ngõ/ Đường</label>
      </div>
    </div>
  </div>
    
  <!-- Text input -->
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="postTitle" class="form-control" placeholder="8-16 character"/>
        <label class="form-label" for="postTitle"> Title </label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <select id="apartmentType" class="form-control"></select>
        <label class="form-label" for="apartmentType"> Kiểu/Loại nhà</label>
      </div>
    </div>
  </div>
  
  <!-- 4 column grid layout with text inputs  -->
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="square" class="form-control" placeholder="0"/>
        <label class="form-label" for="square"> Tổng diện tích mặt sàn (m2) </label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="roomQuantity" class="form-control" placeholder="0"/>
        <label class="form-label" for="roomQuantity">Số phòng ngủ</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="floor" class="form-control" placeholder="0"/> 
        <label class="form-label" for="floor">Số tầng</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="price" class="form-control" placeholder="$/month"/>
        <label class="form-label" for="price">Giá đề xuất</label>
      </div>
    </div>
  </div>
  
  <!-- Message input -->
  <div class="form-outline mb-4">
    <textarea class="form-control" id="description" rows="4"></textarea>
    <label class="form-label" for="description">Mô tả chi tiết</label>
  </div>
  
  <!--   Select image input -->
<div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="file" id="photo" class="form-control" onchange="uploadImage()"/>
<!--        <button class="form-control" onclick="uploadImage()">Upload</button>-->
      </div>
    </div>
    <div class="col mb-4">
      <div class="form-outline">
        <img src="" id="image" alt="" style="height: 150px;width: 150px">
        <input hidden id="imgURL">
      </div>
    </div>
  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4" onclick="createApartment()" >Create new apartment for rent</button>
<!--</form>-->`

}

function printImgDescription() {
        let html = `<div class="col">`
        html += `<div class="form-outline">
                    <input type="file" id="file1" class="form-control"/>
                 </div>`
        html += `<div class="form-outline">
                    <input type="file" id="file2" class="form-control"/>
                </div>`
        html += `<div class="form-outline">
                    <input type="file" id="file3" class="form-control"/>
                </div>`
        html += `<div class="form-outline">
                    <input type="file" id="file4" class="form-control"/>
                </div>`
        html += `<div class="form-outline">
                    <input type="file" id="file5" class="form-control"/>
                </div>`
        html += `<div class="form-outline">
                    <input type="file" id="file6" class="form-control"/>
                </div>`

        html += `<button class="form-control" onclick="uploadDescriptionImg()">Upload</button>`
        html += `</div>`

    document.getElementById("image-card").innerHTML = html;
}