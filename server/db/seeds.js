use guests;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Shrek",
        email: "shrek@swampmail.com",
        status: true
    },
    {
        name: "Donkey",
        email: "wafflelover@swampmail.com",
        status: true
    },
    {
        name: "Fiona",
        email: "greenqueen@swampmail.com",
        status: true
    }

]);