const travelDestinations = [
    { destination: "Paris, France", activities: ["Eiffel Tower Visit", "Louvre Museum Tour", "Seine River Cruise"], costEstimate: 1200, duration: "5 days", flightTime: "10:00 AM", airport: "Charles de Gaulle Airport", location: "48.8588443,2.2943506", image: "eiffel-tower.jpg" },
    { destination: "Tokyo, Japan", activities: ["Shibuya Crossing", "Senso-ji Temple", "Tokyo Tower"], costEstimate: 1500, duration: "7 days", flightTime: "2:00 PM", airport: "Narita Airport", location: "35.6761919,139.6503106", image: "sensoji-temple.jpg" },
    { destination: "New York City, USA", activities: ["Statue of Liberty", "Broadway Show", "Central Park"], costEstimate: 1800, duration: "6 days", flightTime: "6:00 AM", airport: "JFK International Airport", location: "40.712776,-74.005974", image: "ellistour1.jpeg" },
    { destination: "Sydney, Australia", activities: ["Sydney Opera House", "Bondi Beach", "Harbour Bridge Climb"], costEstimate: 2000, duration: "7 days", flightTime: "8:00 AM", airport: "Sydney Kingsford Smith Airport", location: "-33.868820,151.209296", image: "Sydney-Opera-House.webp" },
        { destination: "Rome, Italy", activities: ["Colosseum Tour", "Vatican Museums", "Pasta Cooking Class"], costEstimate: 1400, duration: "5 days", flightTime: "12:00 PM", airport: "Leonardo da Vinci Airport", location: "41.902782,12.496366", image: "vation museums.jpg" },
        { destination: "Cairo, Egypt", activities: ["Pyramids of Giza", "Nile River Cruise", "Egyptian Museum"], costEstimate: 1300, duration: "6 days", flightTime: "4:00 PM", airport: "Cairo International Airport", location: "30.044420,31.235712", image: "cruise.jpg" },
        { destination: "Rio de Janeiro, Brazil", activities: ["Christ the Redeemer", "Copacabana Beach", "Samba Show"], costEstimate: 1600, duration: "5 days", flightTime: "7:00 AM", airport: "Rio de Janeiro–Galeão International Airport", location: "-22.906847,-43.172897", image: "img- beach.jpg" },
        { destination: "Cape Town, South Africa", activities: ["Table Mountain", "Robben Island", "Wine Tasting Tour"], costEstimate: 1700, duration: "7 days", flightTime: "1:00 PM", airport: "Cape Town International Airport", location: "-33.924870,18.424055", image: "cape-town-city.jpeg" },
        { destination: "Bangkok, Thailand", activities: ["Grand Palace", "Floating Market", "Thai Cooking Class"], costEstimate: 900, duration: "6 days", flightTime: "9:00 AM", airport: "Suvarnabhumi Airport", location: "13.756331,100.501765", image: "grand palce.webp" },
        { destination: "Istanbul, Turkey", activities: ["Hagia Sophia", "Grand Bazaar", "Bosphorus Cruise"], costEstimate: 1100, duration: "5 days", flightTime: "3:00 PM", airport: "Istanbul Airport", location: "41.008238,28.978359", image: "turkey.jpg" },
        { destination: "Barcelona, Spain", activities: ["Sagrada Familia", "Park Güell", "Tapas Tour"], costEstimate: 1500, duration: "6 days", flightTime: "10:30 AM", airport: "Barcelona El Prat Airport", location: "41.385063,2.173404", image: "sagarada familia.jpg" },
        { destination: "Dubai, UAE", activities: ["Burj Khalifa", "Desert Safari", "Shopping in Mall of the Emirates"], costEstimate: 2000, duration: "5 days", flightTime: "11:00 AM", airport: "Dubai International Airport", location: "25.276987,55.296249", image: "burj khaifa.jpg" },
        { destination: "Amsterdam, Netherlands", activities: ["Canal Cruise", "Van Gogh Museum", "Anne Frank House"], costEstimate: 1200, duration: "4 days", flightTime: "2:00 PM", airport: "Schiphol Airport", location: "52.367573,4.904139", image: "amsterdam.jpg" },
        { destination: "Moscow, Russia", activities: ["Red Square", "Kremlin Tour", "Bolshoi Theatre"], costEstimate: 1300, duration: "6 days", flightTime: "5:00 AM", airport: "Sheremetyevo International Airport", location: "55.755826,37.617300", image: "red square.webp" },
        { destination: "Lisbon, Portugal", activities: ["Belem Tower", "Fado Dinner Show", "Tram 28 Ride"], costEstimate: 1000, duration: "5 days", flightTime: "7:30 AM", airport: "Lisbon Portela Airport", location: "38.716670,-9.139980", image: "belem-towner.jpg" },
      { destination: "Kuala Lumpur, Malaysia", activities: ["Petronas Towers", "Batu Caves", "Street Food Tour"], costEstimate: 700, duration: "5 days", flightTime: "3:30 PM", airport: "Kuala Lumpur International Airport", location: "3.139003,101.686855", image: "twin towers.jpg" },
        { destination: "Montreal, Canada", activities: ["Old Montreal", "Mount Royal Park", "Biodome"], costEstimate: 1200, duration: "6 days", flightTime: "4:00 PM", airport: "Montréal-Pierre Elliott Trudeau International Airport", location: "45.501690,-73.567253", image: "old.jpg" },
           { destination: "Hanoi, Vietnam", activities: ["Halong Bay Tour", "Street Food Tour", "Old Quarter Exploration"], costEstimate: 800, duration: "6 days", flightTime: "8:00 AM", airport: "Noi Bai International Airport", location: "21.028511,105.804817", image: "tour.jpg" },
        { destination: "San Francisco, USA", activities: ["Golden Gate Bridge", "Alcatraz Island", "Chinatown"], costEstimate: 1600, duration: "5 days", flightTime: "1:30 PM", airport: "San Francisco International Airport", location: "37.774929,-122.419416", image: "chinatown.jpg" },
       { destination: "Mumbai, India", activities: ["Gateway of India", "Elephanta Caves", "Street Food Tour"], costEstimate: 1000, duration: "5 days", flightTime: "6:30 AM", airport: "Chhatrapati Shivaji Maharaj International Airport", location: "19.076090,72.877426", image: "getway of india.jpg" }
];




function displayDestinations(destinations) {
    const destinationsDiv = document.getElementById('destinations');
    destinationsDiv.innerHTML = ''; 
    destinations.forEach(destination => {
        const card = createDestinationCard(destination);
        destinationsDiv.appendChild(card);
    });
}

function createDestinationCard(destination) {
    const card = document.createElement("div");
    card.className = "destination";

    const img = document.createElement("img");
    img.src = destination.image;
    img.alt = destination.destination;

    const title = document.createElement("h3");
    title.textContent = destination.destination;

    
    const detailsContainer = document.createElement("div");
    detailsContainer.className = "details-container";
    detailsContainer.style.display = "none"; 

    const activitiesList = document.createElement("ul");
    destination.activities.forEach(activity => {
        const listItem = document.createElement("li");
        listItem.textContent = activity;
        activitiesList.appendChild(listItem);
    });

    const details = document.createElement("p");
    details.textContent = `Cost Estimate: $${destination.costEstimate}, Duration: ${destination.duration}, Flight Time: ${destination.flightTime}, Airport: ${destination.airport}`;

    const location = document.createElement("p");
    location.textContent = `Location: ${destination.location}`;

    const mapLink = document.createElement("a");
    mapLink.href = `https://www.google.com/maps/search/?api=1&query=${destination.location}`;
    mapLink.target = "_blank";
    mapLink.textContent = "View on Map";
    mapLink.style.color = '#ffee00'; 

    detailsContainer.appendChild(activitiesList);
    detailsContainer.appendChild(details);
    detailsContainer.appendChild(location);
    detailsContainer.appendChild(mapLink);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "button";
    removeButton.onclick = function () {
        card.remove(); 
    };

    const viewDetailsButton = document.createElement("button");
    viewDetailsButton.textContent = "View Details";
    viewDetailsButton.className = "button";
    viewDetailsButton.onclick = function () {
       
        if (detailsContainer.style.display === "none") {
            detailsContainer.style.display = "block";
            viewDetailsButton.textContent = "Hide Details"; 
        } else {
            detailsContainer.style.display = "none";
            viewDetailsButton.textContent = "View Details"; 
        }
    };

    const likeButton = document.createElement("button");
    likeButton.textContent = "Like";
    likeButton.className = "button";

    let isLiked = false; 
    likeButton.onclick = function () {
        isLiked = !isLiked; 
        if (isLiked) {
            likeButton.textContent = "Unlike"; 
            likeButton.style.backgroundColor = "green"; 
            alert(`You liked ${destination.destination}!`);
        } else {
            likeButton.textContent = "Like"; 
            likeButton.style.backgroundColor = ""; 
            alert(`You unliked ${destination.destination}.`);
        }
    };

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save to Itinerary";
    saveButton.className = "button";
    saveButton.onclick = function () {
        saveToItinerary(destination);
    };

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(viewDetailsButton); 
    card.appendChild(detailsContainer); 
    card.appendChild(removeButton);
    card.appendChild(likeButton); 
    card.appendChild(saveButton);

    return card;
}

function saveToItinerary(destination) {
    let savedItinerary = JSON.parse(localStorage.getItem('itinerary')) || [];

    if (!savedItinerary.some(trip => trip.destination === destination.destination)) {
        savedItinerary.push(destination);
        localStorage.setItem('itinerary', JSON.stringify(savedItinerary));
        alert(`${destination.destination} has been added to your itinerary!`);
    } else {
        alert(`${destination.destination} is already in your itinerary.`);
    }
}

document.getElementById('add-destination-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const newDestination = {
        destination: document.getElementById('destination-name').value,
        activities: document.getElementById('destination-activities').value.split(',').map(activity => activity.trim()),
        costEstimate: parseInt(document.getElementById('destination-cost').value),
        duration: document.getElementById('destination-duration').value,
        flightTime: document.getElementById('destination-flight-time').value,
        airport: document.getElementById('destination-airport').value,
        location: document.getElementById('destination-location').value,
        image: document.getElementById('destination-image').value
    };
    document.getElementById('add-destination-form').reset(); 
    
    travelDestinations.push(newDestination); 
    displayDestinations(travelDestinations); 
    this.reset(); 
});









document.getElementById('searchBar').addEventListener('input', searchDestinations);


displayDestinations(travelDestinations);


function searchDestinations() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const filteredDestinations = travelDestinations.filter(destination =>
        destination.destination.toLowerCase().includes(searchValue)
    );
    displayDestinations(filteredDestinations);
}

