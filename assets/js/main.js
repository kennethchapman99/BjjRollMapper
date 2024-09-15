document.getElementById('video-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const videoPreview = document.getElementById('video-preview');
    const processBtn = document.getElementById('process-video-btn');
    
    if (file) {
        const videoURL = URL.createObjectURL(file);
        videoPreview.src = videoURL;
        videoPreview.style.display = 'block';
        processBtn.style.display = 'block';  // Show process button when a video is uploaded
    } else {
        videoPreview.src = '';
        videoPreview.style.display = 'none';
        processBtn.style.display = 'none';
    }
});

document.getElementById('process-video-btn').addEventListener('click', function() {
    const processBtn = document.getElementById('process-video-btn');
    const processingStatus = document.getElementById('processing-status');
    const processingComplete = document.getElementById('processing-complete');

    // Hide the process button and show the processing status
    processBtn.style.display = 'none';
    processingStatus.style.display = 'block';

    // Simulate video processing
    setTimeout(function() {
        // Hide processing status and show completion message
        processingStatus.style.display = 'none';
        processingComplete.style.display = 'block';
    }, 5000);  // Simulating a 5-second processing delay
});
