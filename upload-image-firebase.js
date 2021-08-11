function uploadImage(){
    const  ref=firebase.storage().ref();
    const file=document.querySelector("#photo").files[0];
    const name=file.name;
    const metadata={
        contentType:file.type
    }
    const task=ref.child(name).put(file,metadata);

    task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            console.log("Image upload successful");
            const image=document.querySelector("#image");
            image.src=url;
            console.log(url)
            document.getElementById('imgURL').innerHTML = `<img src="${url}" alt=""/>`

        })
}

function uploadDescriptionImg() {

}