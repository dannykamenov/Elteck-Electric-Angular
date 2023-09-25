const imageUploadForm = document.getElementById('image-upload-form');
const imageInput = document.getElementById('image-input');
const imagePreview = document.getElementById('image-preview');



// Optional: Display selected images in the preview
imageInput.addEventListener('change', function() {
    imagePreview.innerHTML = '';
    for (const file of this.files) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        imagePreview.appendChild(img);
    }
});