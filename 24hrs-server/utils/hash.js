const bcrypt = require('bcrypt');

/**
 * Hash a plain-text password.
 * @param {string} password - The plain-text password to hash.
 * @returns {Promise<string>} - The hashed password.
 */
const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        console.error('Error hashing password:', error);
        throw new Error('Hashing failed');
    }
};

/**
 * Compare a plain-text password with a hashed password.
 * @param {string} plainPassword - The plain-text password to compare.
 * @param {string} hashedPassword - The hashed password to compare against.
 * @returns {Promise<boolean>} - Whether the passwords match.
 */
const verifyPassword = async (plainPassword, hashedPassword) => {
    try {
        return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (error) {
        console.error('Error verifying password:', error);
        throw new Error('Verification failed');
    }
};

module.exports = {
    hashPassword,
    verifyPassword,
};
