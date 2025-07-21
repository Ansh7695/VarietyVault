const musicCards = document.getElementById('musicCards');
const searchInput = document.getElementById('searchInput');

// Sample music data
const musicData = [
    {
        title: 'Safar',
        artist: 'Juss x Mixsingh',
        image: './songlist/SAFAR.jpg',
        audio: './songlist/SAFAR.mp3',
        manuallyPaused: false // Track whether the audio was manually paused
    },
    {
        title: 'Cheque',
        artist: 'Shubh',
        image: './songlist/Cheque.jpg',
        audio: './songlist/Cheque.mp3',
        manuallyPaused: false
    },
    {
        title: 'Tere Hawaale',
        artist: 'Arijit Singh',
        image: './songlist/tere hawaale.webp',
        audio: './songlist/Tere Hawaale.mp3',
        manuallyPaused: false
    },
    {
        title: 'Dhokha',
        artist: 'Arijit Singh',
        image: './songlist/DHOKHA-Piano-Chords-Arijit-Singh.jpg',
        audio: './songlist/Arijit Singh - Dhokha.mp3',
        manuallyPaused: false
    },
    {
        title: 'Brobar Boli',
        artist: 'Nimrat khaira',
        image: './songlist/Brobar boli.jpg',
        audio: './songlist/Brobar boli.mp3',
        manuallyPaused: false
    },
    {
        title: 'Kesariya',
        artist: 'Arijit Singh',
        image: './songlist/Kesariya-From-Brahmastra-.jpg',
        audio: './songlist/Kesariya.mp3',
        manuallyPaused: false
    },
    {
        title: 'Maan Meri jaan',
        artist: 'King',
        image: './songlist/maan meri jaan.jpg',
        audio: './songlist/Maan Meri Jaan.mp3',
        manuallyPaused: false
    },
    {
        title: 'Manike',
        artist: 'Jubin Nautiyal',
        image: './songlist/Manike-From-Thank-God-.jpg',
        audio: './songlist/Manike.mp3',
        manuallyPaused: false
    },
    {
        title: 'Tere Pyar Mein',
        artist: 'Arijit singh',
        image: './songlist/Tere-Pyaar-Mein-From-Tu-Jhoothi-Main-Makkaar.jpg',
        audio: './songlist/Tere Pyar Mein.mp3',
        manuallyPaused: false
    },
    {
        title: 'Pyar Hota Kayi Baar Hai',
        artist: 'Arijit Singh',
        image: './songlist/Pyaar-Hota-Kayi-Baar-Hai-.jpg',
        audio: './songlist/Pyaar Hota Kayi Baar Hai.mp3',
        manuallyPaused: false
    },
    {
        title: 'Gone Girl',
        artist: 'Badshah, Payal Dev',
        image: './songlist/gone girl.jpg',
        audio: './songlist/Gone Girl.mp3',
        manuallyPaused: false
    },
    {
        title: 'Har Har Shambhu',
        artist: 'Jeetu Sharma',
        image: './songlist/Har-Har-Shambhu-Shiv-Mahadeva-.jpg',
        audio: './songlist/Har Har Shambhu Shiv Mahadeva.mp3',
        manuallyPaused: false
    },
    {
        title: 'Chogada',
        artist: 'Darshan Raval',
        image: './songlist/chogada.jpg',
        audio: './songlist/01 Chogada - Loveratri.mp3',
        manuallyPaused: false
    },
    {
        title: 'Proper Patola',
        artist: 'Diljit Dosanjh',
        image: './songlist/Proper patola.jpg',
        audio: './songlist/01 Proper Patola - Diljit Dosanjh feat. Badshah.mp3',
        manuallyPaused: false
    },
    {
        title: 'Apna Har Din',
        artist: 'Shaan, Anushka Manchanda',
        image: './songlist/apna har din .jpg',
        audio: './songlist/02 - Apna Har Din ( www.PagalWorld.com).mp3',
        manuallyPaused: false
    },
    {
        title: 'Maine Tujhko Dekha',
        artist: 'Neeraj Shidhar, sukriti Kakar',
        image: './songlist/mane tujhko dakha.jpeg',
        audio: './songlist/02 - Maine Tujhko Dekha - GA [DJMaza.Info].mp3',
        manuallyPaused: false
    },
    

    // Add more music data entries as needed
];

// Variable to hold the currently playing audio
let currentAudio = null;

// Function to create and play audio
function playAudio(audioUrl) {
    if (currentAudio) {
        if (currentAudio.src === audioUrl) {
            // If the same audio is clicked again, toggle play/pause
            if (currentAudio.paused) {
                currentAudio.play();
            } else {
                currentAudio.pause();
            }
        } else {
            // If a new audio is clicked, stop the current audio and play the new one
            currentAudio.pause();
            currentAudio = new Audio(audioUrl);
            currentAudio.play();
        }
    } else {
        // If no audio is playing, create and play the audio
        currentAudio = new Audio(audioUrl);
        currentAudio.play();
    }
}

// Function to render music cards
function renderMusicCards() {
    musicCards.innerHTML = '';
    const searchText = searchInput.value.toLowerCase();

    musicData.forEach((music, index) => {
        if (music.title.toLowerCase().includes(searchText) || music.artist.toLowerCase().includes(searchText)) {
            const card = document.createElement('div');
            card.classList.add('bg-white', 'rounded-lg', 'p-4', 'shadow-md');

            const img = document.createElement('img');
            img.src = music.image;
            img.alt = `Music ${index + 1}`;
            img.classList.add('w-full', 'rounded-lg');

            const title = document.createElement('h2');
            title.classList.add('text-xl', 'font-semibold', 'mt-2');
            title.textContent = music.title;

            const artist = document.createElement('p');
            artist.classList.add('text-gray-600');
            artist.textContent = music.artist;

            const playButton = document.createElement('button');
            playButton.textContent = 'Play';
            playButton.addEventListener('click', () => {
            playAudio(music.audio);
            updatePlayButton(playButton);
        });

        const pauseButton = document.createElement('button');
        pauseButton.textContent = 'Pause';
        pauseButton.style.marginLeft = '10px'; // Add margin here
        pauseButton.addEventListener('click', () => {
            currentAudio.pause();
            updatePlayButton(playButton);
        });

            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(artist);
            card.appendChild(playButton);
            card.appendChild(pauseButton);
            musicCards.appendChild(card);
        }
    });
}

// Function to update play button text based on audio state
function updatePlayButton(playButton) {
    if (currentAudio && !currentAudio.paused) {
        playButton.textContent = 'Play';
    } else {
        playButton.textContent = 'Play';
    }
}

// Listen for input changes in the search bar
searchInput.addEventListener('input', renderMusicCards);

// Initial rendering of music cards
renderMusicCards();
