import crypto from 'crypto-browserify';

if (typeof globalThis.crypto !== 'object') {
  (globalThis as any).crypto = crypto;
}
if (typeof globalThis.crypto.getRandomValues !== 'function') {
  (globalThis.crypto as any).getRandomValues = (array: Uint8Array) => {
    const bytes = crypto.randomBytes(array.length);
    array.set(bytes);
    return array;
  };
}

