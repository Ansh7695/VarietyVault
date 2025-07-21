function viewComicPDF(pdfUrl) {
    // Replace this code with your preferred PDF viewer implementation
    // For example, you can open the PDF in a new tab:
    window.open(pdfUrl, '_blank');
}

// Add the following code to handle the search functionality
const searchInput = document.getElementById('searchInput');
const comicCards = document.getElementById('comicCards').children;

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    for (let i = 0; i < comicCards.length; i++) {
        const comicCard = comicCards[i];
        const comicTitle = comicCard.querySelector('h2').textContent.toLowerCase();

        if (comicTitle.includes(searchTerm)) {
            comicCard.style.display = 'block';
        } else {
            comicCard.style.display = 'none';
        }
    }
});