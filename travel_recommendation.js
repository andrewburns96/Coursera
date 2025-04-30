let travelData = [];

fetch('travel_recommendation_api.json')
  .then(response => response.json())
  .then(data => {
    travelData = data;
    console.log("Fetched data:", travelData);
  })
  .catch(error => console.error("Fetch error:", error));

  function search() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "";
  
    const filtered = travelData.filter(place =>
      place.keywords.some(k => k.toLowerCase() === keyword)
    );
  
    filtered.forEach(place => {
      const card = `
        <div>
          <h3>${place.name}</h3>
          <img src="${place.imageUrl}" alt="${place.name}">
          <p>${place.description}</p>
        </div>
      `;
      resultsDiv.innerHTML += card;
    });
  
    if (filtered.length === 0) {
      resultsDiv.innerHTML = "<p>No results found.</p>";
    }
  }

  function clearResults() {
    document.getElementById('results').innerHTML = "";
    document.getElementById('searchInput').value = "";
  }

  function showTimeInTimeZone() {
    const options = {
      timeZone: 'Asia/Tokyo',
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    const localTime = new Date().toLocaleTimeString('en-US', options);
    console.log("Current time in Japan:", localTime);
  }
  