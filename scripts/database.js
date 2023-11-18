const database = {
    bands: [{
        id: 1,
        name: "The Beatles",
        members: 4,
        genre: "Rock",
        since: 1960
    }, {
        id: 2,
        name: "Blondie",
        members: 5,
        genre: "New Wave",
        since: 1974
    }, {
        id: 3,
        name: "Radiohead",
        members: 4,
        genre: "Art Rock",
        since: 1985
    }, {
        id: 4,
        name: "The Yardbirds",
        members: 4,
        genre: "Blues Rock",
        since: 1963
    }, {
        id: 5,
        name: "Pink Floyd",
        members: 5,
        genre: "Progressive Rock",
        since: 1964
    }, {
        id: 6,
        name: "Led Zeppelin",
        members: 4,
        genre: "Hard Rock",
        since: 1968
    }, {
        id: 7,
        name: "Fleetwood Mac",
        members: 5,
        genre: "Rock",
        since: 1967
    }, {
        id: 8,
        name: "Def Leppard",
        members: 5,
        genre: "Glam Metal",
        since: 1977
    }, {
        id: 9,
        name: "Daft Punk",
        members: 1,
        genre: "French House",
        since: 1993
    }],
    members: [{
        id: 1,
        bandId: 1,
        firstName: "John",
        lastName: "Lennon",
        born: "1940-10-09",
        role: "Vocals, Guitar",
    }, {
        id: 2,
        bandId: 1,
        firstName: "Paul",
        lastName: "McCartney",
        born: "1942-06-18",
        role: "Vocals, Bass"
    }, {
        id: 3,
        bandId: 1,
        firstName: "George",
        lastName: "Harrison",
        born: "1943-02-25",
        role: "Guitar, Vocals"
    }, {
        id: 4,
        bandId: 1,
        firstName: "Ringo",
        lastName: "Starr",
        born: "1940-07-07",
        role: "Drums, Vocals"
    }, {
        id: 5,
        bandId: 2,
        firstName: "Deborah",
        lastName: "Harry",
        born: "1945-07-01",
        role: "Vocals"
    }, {
        id: 6,
        bandId: 2,
        firstName: "Chris",
        lastName: "Stein",
        born: "1950-01-05",
        role: "Guitar"
    }, {
        id: 7,
        bandId: 2,
        firstName: "Clem",
        lastName: "Burke",
        born: "1955-11-24",
        role: "Drums"
    }, {
        id: 8,
        lastName: "Destri",
        firstName: "Jimmy",
        lastName: "Destri",
        born: "1954-04-13",
        role: "Keyboards, Synthesizers"
    }, {
        id: 9,
        bandId: 2,
        firstName: "Gary",
        lastName: "Valentine",
        born: "1955-12-24",
        role: "Bass"
    }, {
        id: 10,
        bandId: 3,
        firstName: "Thom",
        lastName: "Yorke",
        born: "1968-10-07",
        role: "Vocals, Guitar, Piano"
    }, {
        id: 11,
        bandId: 3,
        firstName: "Jonny",
        lastName: "Greenwood",
        born: "1971-11-05",
        role: "Guitar, Keyboards, Ondes Martenot"
    }, {
        id: 12,
        bandId: 3,
        firstName: "Colin",
        lastName: "Greenwood",
        born: "1969-06-26",
        role: "Bass, Synthesizers"
    }, {
        id: 13,
        bandId: 3,
        firstName: "Ed",
        lastName: "O'Brien",
        born: "1968-04-15",
        role: "Guitar, Backing Vocals"
    }, {
        id: 14,
        bandId: 3,
        firstName: "Philip",
        lastName: "Selway",
        born: "1967-05-23",
        role: "Drums, Percussion"
    }, {
        id: 15,
        bandId: 4,
        firstName: "Keith",
        lastName: "Relf",
        born: "1943-03-22",
        role: "Vocals, Harmonica"
    }, {
        id: 16,
        bandId: 4,
        firstName: "Eric",
        lastName: "Clapton",
        born: "1945-03-30",
        role: "Guitar"
    }, {
        id: 17,
        bandId: 4,
        firstName: "Jeff",
        lastName: "Beck",
        born: "1944-06-24",
        role: "Guitar"
    }, {
        id: 18,
        bandId: 4,
        firstName: "Jimmy",
        lastName: "Page",
        born: "1944-01-09",
        role: "Guitar"
    }, {
        id: 19,
        bandId: 4,
        firstName: "Chris",
        lastName: "Dreja",
        born: "1946-11-11",
        role: "Rhythm Guitar"
    }, {
        id: 20,
        bandId: 5,
        firstName: "David",
        lastName: "Gilmour",
        born: "1946-03-06",
        role: "Vocals, Guitar"
    }, {
        id: 21,
        bandId: 5,
        firstName: "Roger",
        lastName: "Waters",
        born: "1943-09-06",
        role: "Vocals, Bass"
    }, {
        id: 22,
        bandId: 5,
        firstName: "Richard",
        lastName: "Wright",
        born: "1943-07-28",
        role: "Keyboards"
    }, {
        id: 23,
        bandId: 5,
        firstName: "Nick",
        lastName: "Mason",
        born: "1944-01-27",
        role: "Drums, Percussion"
    }, {
        id: 24,
        bandId: 6,
        firstName: "Robert",
        lastName: "Plant",
        born: "1948-08-20",
        role: "Vocals"
    }, {
        id: 25,
        bandId: 6,
        firstName: "Jimmy",
        lastName: "Page",
        born: "1944-01-09",
        role: "Guitar"
    }, {
        id: 26,
        bandId: 6,
        firstName: "John Paul",
        lastName: "Jones",
        born: "1946-01-03",
        role: "Bass, Keyboards"
    }, {
        id: 27,
        bandId: 6,
        firstName: "John",
        lastName: "Bonham",
        born: "1948-05-31",
        role: "Drums"
    }, {
        id: 28,
        bandId: 7,
        firstName: "Stevie",
        lastName: "Nicks",
        born: "1948-05-26",
        role: "Vocals"
    }, {
        id: 29,
        bandId: 7,
        firstName: "Lindsey",
        lastName: "Buckingham",
        born: "1949-10-03",
        role: "Vocals, Guitar"
    }, {
        id: 30,
        bandId: 7,
        firstName: "Christine",
        lastName: "McVie",
        born: "1943-07-12",
        role: "Vocals, Keyboards"
    }, {
        id: 31,
        bandId: 7,
        firstName: "John",
        lastName: "McVie",
        born: "1945-11-26",
        role: "Bass"
    }, {
        id: 32,
        bandId: 7,
        firstName: "Mick",
        lastName: "Fleetwood",
        born: "1947-06-24",
        role: "Drums"
    }, {
        id: 33,
        bandId: 8,
        firstName: "Joe",
        lastName: "Elliott",
        born: "1959-08-01",
        role: "Vocals"
    }, {
        id: 34,
        bandId: 8,
        firstName: "Phil",
        lastName: "Collen",
        born: "1957-12-08",
        role: "Guitar"
    }, {
        id: 35,
        bandId: 8,
        firstName: "Vivian",
        lastName: "Campbell",
        born: "1962-08-25",
        role: "Guitar"
    }, {
        id: 36,
        bandId: 8,
        firstName: "Rick",
        lastName: "Savage",
        born: "1960-12-02",
        role: "Bass"
    }, {
        id: 37,
        bandId: 8,
        firstName: "Rick",
        lastName: "Allen",
        born: "1963-11-01",
        role: "Drums"
    }, {
        id: 38,
        bandId: 9,
        firstName: "Thomas",
        lastName: "Bangalter",
        born: "1975-01-03",
        role: "Electronic Musician"
    }, {
        id: 39,
        bandId: 9,
        firstName: "Guy-Manuel",
        lastName: "de Homem-Christo",
        born: "1974-02-08",
        role: "Electronic Musician"
    }],
    venues: [{
        id: 1,
        name: "JW Marriott",
        address: "201 8th Avenue South Nashville, TN 37203",
        sqft: 79000,
        maxOccupancy: 1580
    }, {
        id: 2,
        name: "3rd and Lindsley",
        address: "818 3rd Avenue South Nashville, TN 37210",
        sqft: 7000,
        maxOccupancy: 700
    }, {
        id: 3,
        name: "The Bluebird Cafe",
        address: "4104 Hillsboro Pike Nashville, TN 37215",
        sqft: 900,
        maxOccupancy: 90
    }, {
        id: 4,
        name: "PRG",
        address: "533 New Paul Road, Suite 100 LaVergne, TN 37086",
        sqft: 10000,
        maxOccupancy: 1000
    }],
    bookings: [{
        id: 1,
        bandId: 7,
        venueId: 2,
        date: "09/01/2023"
    }, {
        id: 2,
        bandId: 3,
        venueId: 3,
        date: "09/01/2023"
    }, {
        id: 3,
        bandId: 6,
        venueId: 1,
        date: "09/02/2023"
    }, {
        id: 4,
        bandId: 5,
        venueId: 3,
        date: "09/02/2023"
    }, {
        id: 5,
        bandId: 7,
        venueId: 1,
        date: "09/08/2023"
    }, {
        id: 6,
        bandId: 2,
        venueId: 1,
        date: "09/08/2023"
    }, {
        id: 7,
        bandId: 8,
        venueId: 3,
        date: "09/09/2023"
    }, {
        id: 8,
        bandId: 5,
        venueId: 2,
        date: "09/09/2023"
    }, {
        id: 9,
        bandId: 4,
        venueId: 1,
        date: "09/15/2023"
    }, {
        id: 10,
        bandId: 3,
        venueId: 2,
        date: "09/15/2023"
    }, {
        id: 11,
        bandId: 4,
        venueId: 2,
        date: "09/16/2023"
    }, {
        id: 12,
        bandId: 7,
        venueId: 2,
        date: "09/16/2023"
    }]
}

export const getBands = () => {
    return database.bands.map(band => ({ ...band }))
}

export const getVenues = () => {
    return database.venues.map(venue => ({ ...venue }))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({ ...booking }))
}

export const getMembers = () => {
    return database.members.map(member => ({...member}))
}