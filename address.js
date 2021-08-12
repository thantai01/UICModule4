
function renderDistricts() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/districts",
        success: function (districts) {
            let str =``;
            str += `<option>--Select</option>`
            for(let i =0; i < districts.length;i++) {
                str += `<option value="${districts[i].id}"> ${districts[i].dicName} </option>`
            }
            document.getElementById("district").innerHTML = str;
        },
        error: function (error) {
            console.log(error);
        }
    })
}

function renderWardsByDistrict(dicId) {
    let districtId = document.getElementById('district').value;
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/districts/" + districtId,
        success: function (data) {
            let content = `<option>--Select</option>`;
            for (let i = 0; i < data.length; i++) {
                content += `<option value="${data[i].id}">${data[i].wardName}</option>`;
            }
            document.getElementById('ward').innerHTML = content;
        }
    })
}


function personalRentedList() {

}
function personalApartmentList() {

}
function personalHistory() {

}

function renderProvinceAPI() {
    $.ajax({
       type: "GET",
       url: "https://provinces.open-api.vn/api/p",
        success: function (province) {
            let str =``;
            str += `<option>--Select--</option>`
            for(let i =0; i < province.length; i++) {
                str += `<option value="${province[i].code}"> ${province[i].name} </option>`
            }
            document.getElementById("province").innerHTML = str;

        },
        error: function (error) {
            console.log(error)
        }
    });
}

function renderDistrictAPI(code) {
    let sld = document.getElementById("province").value;
    $.ajax({
        type: "GET",
        url: "https://provinces.open-api.vn/api/d",
        success: function (district) {
            let str =``;
            str += `<option>--Select--</option>`
            for(let i =0; i < district.length; i++) {
                if(district[i].province_code == sld || district[i].province_code == code) {
                    str += `<option value="${district[i].code}"> ${district[i].name}`;
                    str += `</option>`
                }

            }
            document.getElementById("district").innerHTML = str;
        },
        error: function (error) {
            console.log(error)
        }
    });
}

function renderWardAPI(code) {
    let sld = document.getElementById("district").value;
    $.ajax({
        type: "GET",
        url: "https://provinces.open-api.vn/api/w",
        success: function (ward) {
            let str =``;
            str += `<option>--Select--</option>`
            for(let i =0; i < ward.length; i++) {
                if(ward[i].district_code == sld || ward[i].district_code == code) {
                    str += `<option value="${ward[i].code}"> ${ward[i].name} </option>`;
                }
            }
            document.getElementById("ward").innerHTML = str;

        },
        error: function (error) {
            console.log(error)
        }
    });
}

function renderApartmentType() {
    $.ajax({
        type: "GET",
        url : "http://localhost:8080/api/apartment-types",
        success: function (aType) {
            let str = `<option>--Select--</option>`;
            for(let i =0; i < aType.length; i++) {
                str += `<option value="${aType[i].id}"> ${aType[i].name}`
                str += `</option>`;
            }
            document.getElementById("apartmentType").innerHTML = str;
        },
        error: function (error) {
            console.log(error)
        }
    })
}

