document.getElementById('video-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const videoPreview = document.getElementById('video-preview');
    
    if (file) {
        const videoURL = URL.createObjectURL(file);
        videoPreview.src = videoURL;
        videoPreview.style.display = 'block';
    } else {
        videoPreview.src = '';
        videoPreview.style.display = 'none';
    }
});
