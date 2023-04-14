const bcrypt = require('bcryptjs');

const users = [
    {
        name: 'Faith',
        email: 'faith@gmail.com',
        password: bcrypt.hashSync('123456', 10) ,
        isAdmin: true,
    },
    {
        name: 'Omono',
        email: 'omono@gmail.com',
        password: bcrypt.hashSync('123456', 10) ,
    },
    {
        name: 'Daisy',
        email: 'daisy@gmail.com',
        password: bcrypt.hashSync('123456', 10) ,
    },
]

module.exports = users