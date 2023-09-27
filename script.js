  // Function to toggle dark mode
function toggleDarkMode() {
    const container = document.querySelector('.container');
    container.classList.toggle('dark-mode');
}

  // Check if the user's preference is for dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleDarkMode(); // Enable dark mode if user prefers it
}

  // Add event listener for a button or any other UI element to toggle dark mode
const darkModeButton = document.querySelector('#material-symbols-outlined');
if (darkModeButton) {
    darkModeButton.addEventListener('click', toggleDarkMode);
}

document.getElementById("generate-pdf-button").addEventListener("click", function () {
    // Select the container element that you want to convert to a PDF.
    const element = document.querySelector(".container");

    // Define the options for PDF generation.
    const options = {
        margin: 10,
        filename: 'my-cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Use html2pdf.js to generate the PDF.
    html2pdf().from(element).set(options).toPdf().outputPdf().then(function (pdf) {
        // Create a Blob object containing the PDF data.
        const pdfBlob = new Blob([pdf], { type: 'application/pdf' });

        // Create a URL for the Blob object.
        const pdfUrl = URL.createObjectURL(pdfBlob);

        // Create a link to download the PDF.
        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = 'my-cv.pdf';

        // Trigger a click event on the link to start the download.
        a.click();

        // Release the URL object when done.
        URL.revokeObjectURL(pdfUrl);
    });
});






