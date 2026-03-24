let events = [];

async function loadEventsFromApi() {
  try {
    const res = await fetch("/api/events");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    events = await res.json();

    // rebuild the carousel using the fetched events
    initCarouselFromData();
  } catch (err) {
    console.error("Failed to load events:", err);
  }
}

// Event information
/*const events = [
    {
        id: "1",
        title: "Little Venice Canal Festival",
        date: "15 March 2025",
        time: "11:00 AM - 6:00 PM",
        location: "Paddington Basin, London",
        description: "Join us for a vibrant celebration of canal culture with live music, food stalls, and beautifully decorated narrow boats.",
        thumbnailImage: "images/little-venice.jpg",
        galleryImages: ["images/little-venice.jpg", "images/canal-festival.jpg", "images/music-festival.jpg"],
        detailedInfo: "The Little Venice Canal Festival is one of London's most beloved waterway celebrations. Experience traditional narrow boat displays, live performances, artisan markets, and family-friendly activities along the picturesque Regent's Canal.",
        whatToBring: ["Comfortable walking shoes", "Sun protection", "Reusable water bottle"],
        activities: ["Live music performances", "Canal boat tours", "Artisan market browsing", "Children's activities"],
        directions: "Nearest tube: Warwick Avenue. Follow signs to Blomfield Road for the main festival area."
    },
    {
        id: "2",
        title: "Grand Union Canal Heritage Day",
        date: "22 March 2025",
        time: "10:00 AM - 5:00 PM",
        location: "Brentford Lock, West London",
        description: "Celebrate the rich history of Britain's longest canal with heritage boats, traditional crafts, and historical reenactments.",
        thumbnailImage: "images/heritage-celebration.jpg",
        galleryImages: ["images/heritage-celebration.jpg", "images/historic-rally.jpg", "images/boat-show.jpg"],
        detailedInfo: "Step back in time at our Heritage Day celebration featuring Victorian-era narrow boats, traditional canal crafts demonstrations, and fascinating talks about the Grand Union Canal's role in British industrial history.",
        whatToBring: ["Camera", "Picnic blanket", "Weather-appropriate clothing"],
        activities: ["Historical boat displays", "Craft demonstrations", "Heritage talks", "Traditional music"],
        directions: "Access via Brentford High Street. Parking available at Brentford Dock Marina."
    },
    {
        id: "3",
        title: "Regent's Canal Cleanup Day",
        date: "5 April 2025",
        time: "9:00 AM - 1:00 PM",
        location: "Camden Lock to Victoria Park",
        description: "Help keep our waterways clean! Join volunteers for a community cleanup along the beautiful Regent's Canal towpath.",
        thumbnailImage: "images/cleanup-event.jpg",
        galleryImages: ["images/cleanup-event.jpg", "images/towpath-walk.jpg", "images/wildlife-festival.jpg"],
        detailedInfo: "Make a real difference to our local environment. We'll provide all equipment and refreshments. This is a great way to meet like-minded people while protecting our precious waterways and wildlife habitats.",
        whatToBring: ["Work gloves (if you have them)", "Waterproof clothing", "Enthusiasm!"],
        activities: ["Litter collection", "Towpath clearing", "Wildlife spotting", "Community lunch"],
        directions: "Meet at Camden Lock Market main entrance. Free parking at nearby NCP car parks."
    },
    {
        id: "4",
        title: "Thames Pathway Art Festival",
        date: "12 April 2025",
        time: "12:00 PM - 8:00 PM",
        location: "South Bank, Central London",
        description: "An outdoor art exhibition featuring installations, performances, and workshops celebrating our river heritage.",
        thumbnailImage: "images/thames-pathway.jpg",
        galleryImages: ["images/thames-pathway.jpg", "images/music-festival.jpg", "images/little-venice.jpg"],
        detailedInfo: "Experience art in a unique waterside setting. UK and local artists showcase river-inspired works, from sculptures to performance art, all celebrating our connection to the Thames.",
        whatToBring: ["Sketchbook (optional)", "Comfortable shoes", "Open mind"],
        activities: ["Art installations", "Live performances", "Artist workshops", "Interactive exhibits"],
        directions: "Multiple access points along South Bank. Nearest stations: Waterloo, Embankment, Westminster."
    },
    {
        id: "5",
        title: "Camden Lock Music & Market Day",
        date: "19 April 2025",
        time: "10:00 AM - 7:00 PM",
        location: "Camden Lock, London",
        description: "Experience the vibrant energy of Camden with live bands, street food, and unique market stalls by the canal.",
        thumbnailImage: "images/camden-lock.jpg",
        galleryImages: ["images/camden-lock.jpg", "images/music-festival.jpg", "images/canal-festival.jpg"],
        detailedInfo: "Camden's iconic waterside comes alive with emerging artists, international cuisine, and one-of-a-kind market finds. Browse vintage clothing, handmade jewelry, and enjoy performances from local musicians.",
        whatToBring: ["Shopping bags", "Cash for market purchases", "Appetite for adventure"],
        activities: ["Live music stages", "Street food tasting", "Market shopping", "Canal boat trips"],
        directions: "Camden Town tube station is 5 minutes walk. Limited street parking available."
    },
    {
        id: "6",
        title: "Decorated Boat Parade",
        date: "3 May 2025",
        time: "1:00 PM - 4:00 PM",
        location: "Regent's Canal, Kings Cross to Camden",
        description: "Watch beautifully decorated narrow boats parade along the canal in this colorful spring celebration.",
        thumbnailImage: "images/boat-parade.jpg",
        galleryImages: ["images/boat-parade.jpg", "images/canal-festival.jpg", "images/heritage-celebration.jpg"],
        detailedInfo: "A spectacular procession of narrow boats adorned with flowers, bunting, and creative decorations. Judges will award prizes for best decorated boats in various categories.",
        whatToBring: ["Camera", "Binoculars", "Festival spirit"],
        activities: ["Boat parade viewing", "Photography competition", "Live commentary", "Refreshments"],
        directions: "Best viewing spots along towpath between Kings Cross and Camden. Accessible from both stations."
    },
    {
        id: "7",
        title: "Paddington Basin Summer Festival",
        date: "17 May 2025",
        time: "11:00 AM - 9:00 PM",
        location: "Paddington Basin, London",
        description: "A modern waterside festival featuring contemporary music, food trucks, and family entertainment.",
        thumbnailImage: "images/paddington-basin.jpg",
        galleryImages: ["images/paddington-basin.jpg", "images/music-festival.jpg", "images/thames-pathway.jpg"],
        detailedInfo: "Enjoy a full day of entertainment in this beautifully regenerated urban space. From morning yoga sessions to evening concerts, there's something for everyone at this contemporary canal celebration.",
        whatToBring: ["Yoga mat (for morning session)", "Sunscreen", "Dancing shoes"],
        activities: ["Morning yoga", "Food trucks", "Live DJ sets", "Kids zone"],
        directions: "Paddington Station is 5 minutes walk. Ample secure cycle parking available."
    },
    {
        id: "8",
        title: "Historic Canal Boat Rally",
        date: "24 May 2025",
        time: "10:00 AM - 4:00 PM",
        location: "Grand Union Canal, Uxbridge",
        description: "Admire vintage and historic narrow boats from across the UK at this traditional boat rally.",
        thumbnailImage: "images/historic-rally.jpg",
        galleryImages: ["images/historic-rally.jpg", "images/heritage-celebration.jpg", "images/boat-show.jpg"],
        detailedInfo: "Meet boat owners and enthusiasts, learn about canal boat restoration, and explore beautifully maintained historic vessels. Expert talks throughout the day cover canal history and boat maintenance.",
        whatToBring: ["Notebook", "Questions for boat owners", "Comfortable footwear"],
        activities: ["Boat tours", "Restoration talks", "Heritage displays", "Model boat exhibition"],
        directions: "Uxbridge town center car parks within 10 minutes walk. Metropolitan Line to Uxbridge."
    },
    {
        id: "9",
        title: "Canal Towpath Walking Festival",
        date: "7 June 2025",
        time: "9:00 AM - 3:00 PM",
        location: "Lee Valley Navigation, Hertfordshire",
        description: "Guided walks exploring the natural beauty and history of our canal towpaths. All fitness levels welcome.",
        thumbnailImage: "images/towpath-walk.jpg",
        galleryImages: ["images/towpath-walk.jpg", "images/wildlife-festival.jpg", "images/oxford-canal.jpg"],
        detailedInfo: "Choose from three guided walk distances (5km, 10km, or 15km). Expert guides will point out wildlife, plants, and historical features along this scenic waterway. Refreshment stops included.",
        whatToBring: ["Walking boots", "Water bottle", "Packed lunch", "Binoculars"],
        activities: ["Guided walks", "Wildlife spotting", "Historical talks", "Nature photography"],
        directions: "Meet at Lee Valley Park Centre. Free parking for participants. Train to Cheshunt, then 10-minute walk."
    },
    {
        id: "10",
        title: "Grand Union Canal Boat Show",
        date: "14 June 2025",
        time: "10:00 AM - 6:00 PM",
        location: "Bulls Bridge, Hayes",
        description: "The UK's premier canal boat exhibition featuring new boats, equipment, and canal lifestyle products.",
        thumbnailImage: "images/boat-show.jpg",
        galleryImages: ["images/boat-show.jpg", "images/historic-rally.jpg", "images/heritage-celebration.jpg"],
        detailedInfo: "Whether you're a seasoned boater or dreaming of life on the water, this show has everything. View the latest narrow boats, meet suppliers, attend seminars, and get expert advice on canal living.",
        whatToBring: ["Notepad for contacts", "Measuring tape (if boat shopping)", "Questions"],
        activities: ["Boat viewings", "Equipment demonstrations", "Expert seminars", "Trade stands"],
        directions: "Bulls Bridge Junction on Grand Union Canal. Free parking. Hayes & Harlington station nearby."
    },
    {
        id: "11",
        title: "Canal Wildlife Discovery Day",
        date: "21 June 2025",
        time: "10:00 AM - 4:00 PM",
        location: "River Lee Navigation, Tottenham",
        description: "Family-friendly event celebrating canal wildlife with nature walks, pond dipping, and conservation activities.",
        thumbnailImage: "images/wildlife-festival.jpg",
        galleryImages: ["images/wildlife-festival.jpg", "images/towpath-walk.jpg", "images/cleanup-event.jpg"],
        detailedInfo: "Discover the amazing biodiversity of urban waterways. Conservation experts lead activities including pond dipping, bird watching, and bug hunting. Learn how to help protect canal habitats.",
        whatToBring: ["Wellington boots", "Old clothes", "Magnifying glass", "Curiosity"],
        activities: ["Pond dipping", "Bird watching", "Bug hunting", "Conservation workshop"],
        directions: "Tottenham Hale station 5 minutes walk. Entrance from Ferry Lane car park."
    },
    {
        id: "12",
        title: "Limehouse Basin Heritage Festival",
        date: "5 July 2025",
        time: "11:00 AM - 7:00 PM",
        location: "Limehouse Basin, East London",
        description: "Celebrate the maritime heritage of London's historic dock area with traditional boats and cultural performances.",
        thumbnailImage: "images/limehouse-basin.jpg",
        galleryImages: ["images/limehouse-basin.jpg", "images/heritage-celebration.jpg", "images/boat-parade.jpg"],
        detailedInfo: "This historic dock basin hosts a celebration of East End maritime culture. Experience traditional Thames sailing barges, listen to sea shanties, and learn about the area's fascinating dock history.",
        whatToBring: ["Camera", "Interest in history", "Sense of adventure"],
        activities: ["Historic boat tours", "Sea shanty performances", "Maritime talks", "Traditional crafts"],
        directions: "Limehouse DLR station adjacent. Limited street parking. Cycle superhighway CS3 nearby."
    },
    {
        id: "13",
        title: "Canal Music Festival",
        date: "19 July 2025",
        time: "2:00 PM - 10:00 PM",
        location: "Hackney Wick, London",
        description: "An evening of live music by the canal featuring UK and local artists across multiple stages.",
        thumbnailImage: "images/music-festival.jpg",
        galleryImages: ["images/music-festival.jpg", "images/camden-lock.jpg", "images/paddington-basin.jpg"],
        detailedInfo: "Three stages of diverse music from folk to electronic, all set against the vibrant backdrop of Hackney Wick's creative quarter. Food vendors, craft beer, and a fantastic atmosphere guaranteed.",
        whatToBring: ["Festival spirit", "Cash for food/drinks", "Light jacket for evening"],
        activities: ["Live music", "DJ sets", "Food vendors", "Craft beer garden"],
        directions: "Hackney Wick Overground station 2 minutes walk. Santander cycle hire points nearby."
    },
    {
        id: "14",
        title: "Oxford Canal Spring Celebration",
        date: "2 August 2025",
        time: "10:00 AM - 5:00 PM",
        location: "Oxford Canal, Banbury",
        description: "A countryside canal festival celebrating rural waterway heritage with traditional activities and crafts.",
        thumbnailImage: "images/oxford-canal.jpg",
        galleryImages: ["images/oxford-canal.jpg", "images/heritage-celebration.jpg", "images/historic-rally.jpg"],
        detailedInfo: "Experience traditional canal life in this picturesque rural setting. Traditional narrow boat trips, countryside walks, local food producers, and demonstrations of historic canal working practices.",
        whatToBring: ["Picnic supplies", "Walking shoes", "Country clothing"],
        activities: ["Boat trips", "Craft demonstrations", "Local produce market", "Countryside walks"],
        directions: "Banbury town center 15 minutes walk. Free parking at festival site. Train to Banbury station."
    },
    {
        id: "15",
        title: "Grand Canal Festival Finale",
        date: "16 August 2025",
        time: "12:00 PM - 10:00 PM",
        location: "Multiple locations, Grand Union Canal",
        description: "The grand finale of summer canal festivals with simultaneous celebrations at locations along the Grand Union Canal.",
        thumbnailImage: "images/canal-festival.jpg",
        galleryImages: ["images/canal-festival.jpg", "images/boat-parade.jpg", "images/music-festival.jpg"],
        detailedInfo: "Celebrate summer's end at this multi-location festival. Each participating area offers unique entertainment, from boat rallies to music performances. Fireworks finale at sunset visible from all locations.",
        whatToBring: ["Blanket for fireworks viewing", "Warm layers", "Celebration mood"],
        activities: ["Multi-site festivities", "Boat parade", "Live entertainment", "Fireworks finale"],
        directions: "Multiple access points. Check website for your nearest festival location and parking information."
    }
];*/

// Carousel to show 2
let currentIndex = 0;
const cardsPerView = 2;

//new function to initialize carousel with fetched data neww 
function initCarouselFromData() {
  const track = document.getElementById('carouselTrack');
  track.innerHTML = "";       // clear old cards
  currentIndex = 0;           // reset carousel index

  events.forEach(event => {
    const card = createEventCard(event);
    track.appendChild(card);
  });

  updateCarousel();
}

// Initialize carousel
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    
    // Create event cards
    events.forEach(event => {
        const card = createEventCard(event);
        track.appendChild(card);
    });
    
    updateCarousel();
}

// Create event card HTML
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
        <div class="event-image">
            <img src="${event.thumbnailImage}" alt="${event.title}">
            ${event.galleryImages.length > 1 ? `<div class="image-badge">+${event.galleryImages.length - 1} more</div>` : ''}
        </div>
        <div class="event-content">
            <div class="event-date">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>${event.date}</span>
            </div>
            <h3 class="event-title">${event.title}</h3>
            <div class="event-info">
                <div class="event-info-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>${event.time}</span>
                </div>
                <div class="event-info-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>${event.location}</span>
                </div>
            </div>
            <p class="event-description">${event.description}</p>
            <div class="event-actions">
                <button class="btn btn-primary" onclick="openModal('${event.id}')">View Information</button>
                <button class="btn btn-success" onclick="joinEvent('${event.title}')">Join Event</button>
            </div>
        </div>
    `;
    return card;
}

// Update carousel position
function updateCarousel() {
    const track = document.getElementById('carouselTrack');
    const cardWidth = track.querySelector('.event-card').offsetWidth;
    const gap = 24;
    const offset = -(currentIndex * (cardWidth + gap));
    track.style.transform = `translateX(${offset}px)`;
    
    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('nextBtn').disabled = currentIndex >= events.length - cardsPerView;
}

// Carousel navigation
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < events.length - cardsPerView) {
        currentIndex++;
        updateCarousel();
    }
});

// Modal functionality
let currentEvent = null;
let currentLightboxIndex = 0;

function openModal(eventId) {
    currentEvent = events.find(e => e.id === eventId);
    if (!currentEvent) return;
    
    document.getElementById('modalTitle').textContent = currentEvent.title;
    document.getElementById('modalDate').textContent = currentEvent.date;
    document.getElementById('modalTime').textContent = currentEvent.time;
    document.getElementById('modalLocation').textContent = currentEvent.location;
    document.getElementById('modalDetails').textContent = currentEvent.detailedInfo || currentEvent.description;
    
    const gallery = document.getElementById('imageGallery');
    gallery.innerHTML = '';
    currentEvent.galleryImages.forEach((img, index) => {
        const div = document.createElement('div');
        div.className = 'gallery-image';
        div.innerHTML = `<img src="${img}" alt="${currentEvent.title} - Image ${index + 1}">`;
        div.onclick = () => openLightbox(index);
        gallery.appendChild(div);
    });
    
    const extras = document.getElementById('modalExtras');
    extras.innerHTML = '';
    
    if (currentEvent.whatToBring && currentEvent.whatToBring.length > 0) {
        const section = document.createElement('div');
        section.className = 'extras-section';
        section.innerHTML = `
            <h3>What to Bring</h3>
            <ul>${currentEvent.whatToBring.map(item => `<li>${item}</li>`).join('')}</ul>
        `;
        extras.appendChild(section);
    }
    
    if (currentEvent.activities && currentEvent.activities.length > 0) {
        const section = document.createElement('div');
        section.className = 'extras-section';
        section.innerHTML = `
            <h3>Activities</h3>
            <ul>${currentEvent.activities.map(item => `<li>${item}</li>`).join('')}</ul>
        `;
        extras.appendChild(section);
    }
    
    if (currentEvent.directions) {
        const section = document.createElement('div');
        section.className = 'extras-section';
        section.innerHTML = `
            <h3>Getting There</h3>
            <p>${currentEvent.directions}</p>
        `;
        extras.appendChild(section);
    }
    
    document.getElementById('eventModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('eventModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    currentEvent = null;
}

// Lightbox functionality
function openLightbox(index) {
    if (!currentEvent) return;
    currentLightboxIndex = index;
    updateLightbox();
    document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function updateLightbox() {
    if (!currentEvent) return;
    const img = document.getElementById('lightboxImage');
    const counter = document.getElementById('lightboxCounter');
    
    img.src = currentEvent.galleryImages[currentLightboxIndex];
    img.alt = `${currentEvent.title} - Image ${currentLightboxIndex + 1}`;
    counter.textContent = `${currentLightboxIndex + 1} / ${currentEvent.galleryImages.length}`;
}

// Event listeners (Triggers)
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('closeLightbox').addEventListener('click', closeLightbox);

document.getElementById('lightboxPrev').addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentLightboxIndex > 0) {
        currentLightboxIndex--;
        updateLightbox();
    }
});

document.getElementById('lightboxNext').addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentEvent && currentLightboxIndex < currentEvent.galleryImages.length - 1) {
        currentLightboxIndex++;
        updateLightbox();
    }
});

// Close modals on overlay click
document.getElementById('eventModal').addEventListener('click', (e) => {
    if (e.target.id === 'eventModal') {
        closeModal();
    }
});

document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});

// Join event
function joinEvent(eventTitle) {
    console.log('Join event:', eventTitle);
    alert(`You've clicked to join: ${eventTitle}`);
}

// Register event
document.querySelector('.btn-register').addEventListener('click', () => {
    if (currentEvent) {
        console.log('Register for event:', currentEvent.title);
        alert(`You've clicked to register for: ${currentEvent.title}`);
    }
});

// Window resize
window.addEventListener('resize', updateCarousel);

// Initialize when page loads (multiple checks for compatibility)
/*if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
} else {
    // DOM is already loaded  ----> trigger to intialise carousel
    initCarousel();
}*/

//neww
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadEventsFromApi);
} else {
  loadEventsFromApi();
}