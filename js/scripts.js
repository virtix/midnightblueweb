document.addEventListener("DOMContentLoaded", function () {
  
  fetch("https://raw.githubusercontent.com/virtix/midnightblueweb/main/events.json")
    .then((response) => response.json())
    .then((events) => {
      const eventsList = document.querySelector(".events__list");
      eventsList.innerHTML = "";

      events.forEach((event) => {
        target = (event.url == "#contact")? "_self" : "_blank";
        const eventElement = `
                    <article class="event">
                        <h4 class="event__title">
                            <a href="${event.url}" target="${target}">${event.title}</a>
                        </h4>
                        <div class="event__details">
                            <p class="event__meta"><strong>Date:</strong> ${event.date}</p>
                            <p class="event__meta"><strong>Time:</strong> ${event.time}</p>
                            <p class="event__meta">
                                <a href="${event.map}" target="_blank">
                                    <img src="images/map.svg" alt="map icon">
                                    ${event.location}
                                </a>
                            </p>
                        </div>
                    </article>
                `;
        eventsList.innerHTML += eventElement;
      });
    })
    .catch((error) => console.error("Error loading events:", error));
});
