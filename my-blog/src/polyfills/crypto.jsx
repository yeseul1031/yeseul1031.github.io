import crypto from 'crypto-browserify';
if (typeof globalThis.crypto !== 'object') {
    globalThis.crypto = crypto;
}
if (typeof globalThis.crypto.getRandomValues !== 'function') {
    globalThis.crypto.getRandomValues = (array) => {
        const bytes = crypto.randomBytes(array.length);
        array.set(bytes);
        return array;
    };
}
