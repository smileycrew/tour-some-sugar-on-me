import { getBookingsHTML } from "./bookings.js"
import { getVenuesHTML } from "./venues.js"
import { getBandsHTML } from "./bands.js"

const containerEl = document.querySelector("#container")


const bodyHTML = `
    <h1 class="title">Tour Some Sugar On Me</h1>
    <article class="bookings">
        <h2>Bookings</h2>
        ${getBookingsHTML()}
    </article>
    <article class="details">
        <section class="venue-details">
            <h2>Venues</h2>
            ${getVenuesHTML()}
        </section>
        <section class="band-details">
            <h2>Bands</h2>
            ${getBandsHTML()}
        </section>
    </article>
`

containerEl.innerHTML = bodyHTML