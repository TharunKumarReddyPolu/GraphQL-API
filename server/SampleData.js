const UserList = [
    {
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "CANADA",
        friends: [
            {
                id: 2,
                name: "Sarah",
                username: "cameron",
                age: 25,
                nationality: "BRAZIL",
            },
            {
                id: 3,
                name: "Tharun",
                username: "tharun",
                age: 23,
                nationality: "INDIA",
            },
        ],
    },
    {
        id: 2,
        name: "Sarah",
        username: "cameron",
        age: 25,
        nationality: "BRAZIL",
    },
    {
        id: 3,
        name: "Tharun",
        username: "tharun",
        age: 23,
        nationality: "INDIA",
    },
    {
        id: 4,
        name: "Shivani",
        username: "shivani",
        age: 24,
        nationality: "AUSTRALIA", 
        friends: [
            {
                id: 3,
                name: "Tharun",
                username: "tharun",
                age: 23,
                nationality: "INDIA",
            },
        ]
    },
];


const MovieList = [
    {
        id: 1,
        name: "Avengers Endgame",
        yearOfPublication: 2019,
        isInTheatres: true,
    },
    {
        id: 2,
        name: "Interstellar",
        yearOfPublication: 2007,
        isInTheatres: true,
    },
    {
        id: 3,
        name: "Superbad",
        yearOfPublication: 2009,
        isInTheatres: true,
    },
    {
        id: 4,
        name: "Avatar 5",
        yearOfPublication: 2040,
        isInTheatres: false,
    },
];

module.exports = { UserList, MovieList };