document.addEventListener("DOMContentLoaded", function () {
  
  //Maybe use a GIST or parse google calendar
  //OLD :  https://raw.githubusercontent.com/virtix/midnightblueweb/main/events.json
  //var json_calendar = 'https://gist.githubusercontent.com/virtix/7c31933cae0830ba166c9cdd594e325c/raw/c77886187e3af2f3bc6fe183cbac3f4d291baa20/events.json';

  fetch("https://raw.githubusercontent.com/virtix/midnightblueweb/main/events.json")
    .then((response) => response.json())
    .then((events) => {
      const eventsList = document.querySelector(".events__list");
      eventsList.innerHTML = "";

      events.forEach((event) => {
        const eventElement = `
                    <article class="event">
                        <h4 class="event__title">
                            <a href="${event.url}" target="_blank">${event.title}</a>
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
