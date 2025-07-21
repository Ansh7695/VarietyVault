  // Sample digital art data (you can replace this with real data)
  const artData = [
    {
        title: 'Man',
        imageSrc: './Digital Art/man-7412527_1280.webp',
    },
    {
        title: 'Moon',
        imageSrc: './Digital Art/moon-399834_1280.jpg',
    },
    {
        title: 'The Eye',
        imageSrc: './Digital Art/the eye .png',  
    },
    {
        title: 'Advance Civilization',
        imageSrc: './Digital Art/Adavance Civilization.png',
    },
    {
        title: 'Halloween',
        imageSrc: './Digital Art/halloween-5880068_1280.webp',
    },
    {
        title: 'Nature',
        imageSrc: './Digital Art/pexels-photo-9002742.jpeg',
    },
    {
        title: 'Pink sky',
        imageSrc: './Digital Art/wallpaperflare.com_wallpaper (14).jpg',
    },
    {
        title: 'Hi-tech city',
        imageSrc: './Digital Art/wallpaperflare.com_wallpaper (16).jpg',
    },
    {
        title: 'Pirate',
        imageSrc: './Digital Art/wallpaperflare.com_wallpaper (4).jpg',
    },
    {
        title: 'Anime',
        imageSrc: './Digital Art/387226.jpg',
    },
    {
        title: 'Name house',
        imageSrc: './Digital Art/wallpaperflare.com_wallpaper (2).jpg',
    },
    {
        title: 'Pixel',
        imageSrc: './Digital Art/pexels-photo-9454915.webp',
    },
    {
        title: 'Relax',
        imageSrc: './Digital Art/pexels-photo-3142740.jpeg',
    },
    {
        title: 'Sunset',
        imageSrc: './Digital Art/pexels-photo-1168750.jpeg',
    },
    {
        title: 'Demon',
        imageSrc: './Digital Art/demon-161607_1280.webp',
    },
    {
        title: 'Owl',
        imageSrc: './Digital Art/Owl.jpg',
    },
    // Add more artworks as needed
];

// Function to load and display artworks
function loadArtworks() {
    const searchInput = document.getElementById('search');
    const gallery = document.querySelector('.grid');

    // Clear existing artworks
    gallery.innerHTML = '';

    const searchTerm = searchInput.value.toLowerCase();

    artData.forEach((artwork) => {
        // Check if the artwork title matches the search term
        if (artwork.title.toLowerCase().includes(searchTerm) || searchTerm === '') {
            const artCard = document.createElement('div');
            artCard.className = 'bg-white p-4 rounded-lg shadow-md';

            const image = document.createElement('img');
            image.src = artwork.imageSrc;
            image.alt = artwork.title;
            image.className = 'w-full h-32 object-cover mb-2 cursor-pointer';

            // Add click event to enlarge image
            image.addEventListener('click', () => {
                openImageModal(artwork.imageSrc);
            });

            const title = document.createElement('h2');
            title.className = 'text-lg font-semibold';
            title.textContent = artwork.title;

            artCard.appendChild(image);
            artCard.appendChild(title);
            gallery.appendChild(artCard);
        }
    });
}

// Function to open the image modal
function openImageModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const enlargedImage = document.getElementById('enlargedImage');

    enlargedImage.src = imageSrc;
    modal.classList.remove('hidden');

    // Close button click event
    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', () => {
        closeModal();
    });
}

// Function to close the image modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.add('hidden');
}

// Attach an input event listener to the search bar
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', loadArtworks);

// Initial load of artworks
loadArtworks();