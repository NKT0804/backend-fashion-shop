import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        role: 'admin',
    },
    {
        name: 'User',
        email: 'user@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
];

export default users;
