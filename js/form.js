const inputFile = document.querySelector("#picture_input");
const picture_Image = document.querySelector(".picture_image");
const picture_ImageTxt = "Escolha uma imagem";
picture_Image.innerHTML = picture_ImageTxt;

inputFile.addEventListener('change', function(e) {
    const inputTarget = e.target;
    const files = inputTarget.files;

    if (files.length > 0) {
        if (picture_Image.innerHTML === picture_ImageTxt) {
            picture_Image.innerHTML = '';
        }

        Array.from(files).forEach(file => {
            const reader = new FileReader();

            reader.addEventListener('load', function(e) {
                const readerTarget = e.target;

                const img = document.createElement('img');
                img.src = readerTarget.result;
                img.classList.add('picture_img');

                picture_Image.appendChild(img);
            });

            reader.readAsDataURL(file);
        });
    } else {
        picture_Image.innerHTML = picture_ImageTxt;
    }

    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:8080/upload', {
    method: 'POST',
    body: formData
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.error('Erro:', error));

    const inputFile = document.querySelector("#picture_input");
const pictureImageContainer = document.querySelector(".picture__image");

inputFile.addEventListener("change", function (e) {
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();

            reader.addEventListener("load", function (event) {
                const img = document.createElement("img");
                img.src = event.target.result;
                img.classList.add("picture_img");

                pictureImageContainer.appendChild(img);
            });

            reader.readAsDataURL(file);
        }
    }
});


});
