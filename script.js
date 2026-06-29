document.addEventListener('DOMContentLoaded', () => {
    const adForm = document.getElementById('ad-form');
    const outputSection = document.getElementById('copy-output-section');
    const copyTextArea = document.getElementById('generated-copy');
    const downloadBtn = document.getElementById('download-asset-btn');

    // Handle form submission and API call to Node backend
    adForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const productName = document.getElementById('product-name').value;
        const platform = document.getElementById('ad-platform').value;
        
        // Construct the prompt clearly
        const structuralPrompt = `Create high-converting, professional premium social media ad copy for the product "${productName}" targeting the ${platform} platform. Make it engaging, punchy, and structured perfectly for luxury, high-value brand positioning.`;

        try {
            // Point explicitly to your Node backend running on port 3000
            const response = await fetch('http://localhost:3000/api/ads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt: structuralPrompt })
            });

            if (!response.ok) {
                throw new Error('Network response failure.');
            }

            const data = await response.json();
            
            if (data.text) {
                copyTextArea.value = data.text;
                outputSection.style.display = 'block';
                outputSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                alert('Could not generate text. Check backend logs.');
            }

        } catch (error) {
            console.error('Error handling generation:', error);
            alert('Failed to connect to backend server on port 3000.');
        }
    });

    // Fix and handle file downloads seamlessly without broken asset pathways
    downloadBtn.addEventListener('click', () => {
        const generatedText = copyTextArea.value;
        if (!generatedText) return;

        // Bundle your text copy into a downloadable file blob
        const blob = new Blob([generatedText], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = `adcreator-campaign-package.txt`;
        
        document.body.appendChild(downloadLink);
        downloadLink.click();
        
        // Cleanup memory allocations
        document.body.removeChild(downloadLink);
        window.URL.revokeObjectURL(url);
    });
});
