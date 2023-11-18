import { getVenues, getBookings, getBands } from "./database.js";

const venues = getVenues()
const bookings = getBookings()
const bands = getBands()

addEventListener("click", (clickEvent) => {
    const getClickedElement = clickEvent.target
    if (getClickedElement.dataset.type === "venue") {
        const venueId = parseInt(getClickedElement.dataset.venueid)
        let windowAlert = ""
        for (const booking of bookings) {
            if (booking.venueId === venueId) {
                for (const band of bands) {
                    if (band.id === booking.bandId) {
                        windowAlert +=
                            `
                                ${band.name} on ${booking.date}
                            `
                    }
                }
            }
        }
        if (windowAlert === "") {
            window.alert("Bands will be playing here soon!")
        } else {
            window.alert(windowAlert)
        }
    }
})

export const getVenuesHTML = () => {
    let HTML = "<ul>"
    for (const venue of venues) {
        HTML += `
        <li data-type="venue" data-venueid="${venue.id}">
            ${venue.name}
        </li>
        `
    }
    HTML += "</ul>"
    return HTML
}