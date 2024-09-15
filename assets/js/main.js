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
    const resultsSection = document.getElementById('results-section');
    const resultsTable = document.getElementById('results-table');

    // Hide the process button and show the processing status
    processBtn.style.display = 'none';
    processingStatus.style.display = 'block';

    // Simulate video processing
    setTimeout(function() {
        // Hide processing status and show completion message
        processingStatus.style.display = 'none';
        processingComplete.style.display = 'block';

        // Simulate results (replace with actual video analysis in the future)
        const simulatedResults = [
            { time: 5, position: 'Guard' },
            { time: 10, position: 'Mount' },
            { time: 15, position: 'Side Control' },
            { time: 20, position: 'Back Control' },
        ];

        // Populate the results table
        simulatedResults.forEach(result => {
            const row = document.createElement('tr');
            const timeCell = document.createElement('td');
            const positionCell = document.createElement('td');
            timeCell.textContent = result.time;
            positionCell.textContent = result.position;
            row.appendChild(timeCell);
            row.appendChild(positionCell);
            resultsTable.appendChild(row);
        });

        // Show the results section
        resultsSection.style.display = 'block';

    }, 5000);  // Simulating a 5-second processing delay
});
