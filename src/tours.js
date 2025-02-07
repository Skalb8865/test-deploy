const jsonFile = "/data/tours.json";
const tourCards = document.querySelector(".tours");

// Modal elements
const modal = document.getElementById("tourModal");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalLocation = document.getElementById("modalLocation");
const modalPlace = document.getElementById("modalPlace");
const modalPrice = document.getElementById("modalPrice");
const closeBtn = document.querySelector(".close");

// fetch(jsonFile)
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach((tour) => {
//             const { date, location, place, buttonid } = tour;
//             tourCards.innerHTML += `
//         <div class="tour-card">
//             <p class="tour-dates">${date}</p>
//             <p class="tour-location">${location}</p>
//             <p class="tour-place">${place}</p>
//             <button class="tours-btn" data-id="${buttonid}">Buy Tickets</button>
//         </div>
//         `;
//         });

//         // Add event listeners to all buttons after they're created
//         document.querySelectorAll('.tours-btn').forEach(button => {
//             button.addEventListener('click', (e) => {
//                 const tourData = data.find(tour => tour.buttonid === e.target.dataset.id);
//                 modalTitle.textContent = "Tour Details:";
//                 modalDate.textContent = `Date: ${tourData.date}`;
//                 modalLocation.textContent = `Location: ${tourData.modalLocation}`;
//                 modalPlace.textContent = `Place: ${tourData.place}`;
//                 modalPrice.textContent = `Price: ${tourData.ticketsPrice}`;
//                 modal.style.display = "block";
//             });
//         });
//     })

let xhr = new XMLHttpRequest();
xhr.onload = function(){
    if(xhr.status ===200){
        let responseObject = JSON.parse(xhr.responseText)

        responseObject.forEach((tour) => {
            const { date, location, place, buttonid } = tour;
            tourCards.innerHTML += `
        <div class="tour-card">
            <p class="tour-dates">${date}</p>
            <p class="tour-location">${location}</p>
            <p class="tour-place">${place}</p>
            <button class="tours-btn" data-id="${buttonid}">Buy Tickets</button>
        </div>
        `;
        });
    }
}

xhr.open('GET', jsonFile, true)
xhr.send(null)