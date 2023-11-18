import { getBands, getBookings, getVenues, getMembers } from "./database.js";

const bands = getBands()
const bookings = getBookings()
const venues = getVenues()
const members = getMembers()

const findBand = (bandId) => {
    let message = ""
    for (const member of members) {
        if (member.bandId === bandId) {
            message +=
                `
                ${member.firstName} ${member.lastName} (${member.role})
                `
        }
    }
    return message
}

addEventListener("click", (clickEvent) => {
    const getClickedElement = clickEvent.target
    if (getClickedElement.dataset.type === "band") {
        const bandId = parseInt(getClickedElement.dataset.bandid)
        let memberMessage = findBand(bandId)
        let windowAlert = ""
        for (const booking of bookings) {
            if (booking.bandId === bandId) {
                for (const venue of venues) {
                    if (venue.id === booking.venueId) {
                        windowAlert +=
                            `
                            ${venue.name} on ${booking.date}
                        `
                    }
                }
            }
        }
        if (windowAlert === "") {
            window.alert("This band is coming soon.")
        } else {
            window.alert(`${memberMessage}
            Upcoming shows:
            ${windowAlert}`)
        }
    }
})

export const getBandsHTML = () => {
    let HTML = "<ul>"
    for (const band of bands) {
        HTML += `
        <li data-type="band" data-bandid="${band.id}">
            ${band.name}
        </li>
        `
    }
    HTML += "</ul"
    return HTML
}