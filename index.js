// script.js

// Use querySelector to find the button inside the specified class.
// The . before the class name indicates you are selecting a class.
document.querySelector('.generate-portfolio-btn button').addEventListener('click', async () => {
    
    // 1. Get the student data. 
    // This data would typically come from your server or a database.
    const studentData = {
        "name": "John Doe",
        "course": "B.Tech in Computer Science",
        "college": "University of Technology",
        // ... all other data as shown in the previous example
    };

    // 2. Call a function to send the data to your backend API.
    const generatedPortfolio = await generatePortfolioWithGemini(studentData);

    // 3. Handle the response and trigger the download.
    if (generatedPortfolio) {
        alert("Portfolio successfully generated! Check your downloads.");

        // Placeholder for the actual PDF generation and download logic.
        // You'll need a library like jsPDF and a solid backend setup for this part.
    } else {
        alert("Failed to generate portfolio. Please try again.");
    }
});

// This is a conceptual function for interacting with Gemini.
// The actual implementation must be on your server to keep your API key secure.
async function generatePortfolioWithGemini(data) {
    try {
        const response = await fetch('your-backend-api-endpoint/generate-cv', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        return result.portfolio;
    } catch (error) {
        console.error('Error generating portfolio:', error);
        return null;
    }
}