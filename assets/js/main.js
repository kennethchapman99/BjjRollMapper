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

        // Simulate results for both athletes (replace with actual video analysis in the future)
        const simulatedResults = [
            { time: 5, athlete1Position: 'Guard', athlete2Position: 'Top Control' },
            { time: 10, athlete1Position: 'Mount', athlete2Position: 'Bottom' },
            { time: 15, athlete1Position: 'Side Control', athlete2Position: 'Guard' },
            { time: 20, athlete1Position: 'Back Control', athlete2Position: 'Defending' },
        ];

        // Clear previous results
        resultsTable.innerHTML = '';

        // Populate the results table
        simulatedResults.forEach(result => {
            const row = document.createElement('tr');
            const timeCell = document.createElement('td');
            const athlete1Cell = document.createElement('td');
            const athlete2Cell = document.createElement('td');
            timeCell.textContent = result.time;
            athlete1Cell.textContent = result.athlete1Position;
            athlete2Cell.textContent = result.athlete2Position;
            row.appendChild(timeCell);
            row.appendChild(athlete1Cell);
            row.appendChild(athlete2Cell);
            resultsTable.appendChild(row);
        });

        // Show the results section
        resultsSection.style.display = 'block';

    }, 5000);  // Simulating a 5-second processing delay
});
