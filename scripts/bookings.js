import { getBookings, getBands, getVenues } from "./database.js"

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()

addEventListener("click", (clickEvent) => {
    const getClickedElement = clickEvent.target
    if (getClickedElement.dataset.type === "booking") {
        const bandId = parseInt(getClickedElement.dataset.bandid)
        for (const band of bands) {
            if (band.id === bandId) {
                window.alert(`
                ${band.name}
                ${band.genre}
                Formed in ${band.since}
                ${band.members} band members
                `)
            }
        }

    }
})

export const getBookingsHTML = () => {
    let HTML = "<ul>"
    for (const booking of bookings) {
        for (const band of bands) {
            if (band.id === booking.bandId) {
                for (const venue of venues) {
                    if (venue.id === booking.venueId) {
                        HTML += `
                        <li data-type="booking" data-bandId="${band.id}">
                            ${band.name} are playing at ${venue.name} on ${booking.date}
                        </li>
                        `
                    }
                }
            }
        }
    }
    HTML += "</ul>"
    return HTML
}