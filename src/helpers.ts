import { RGBColor } from "./types";

// Convert a hex string to a byte array
export function hexToBytes(hex: string) {
    const bytes = [];
    for (let c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}

// Convert a byte array to a hex string
export function bytesToHex(bytes: number[]) {
    const hex = [];
    for (let i = 0; i < bytes.length; i++) {
        const current = bytes[i] < 0 ? bytes[i] + 256 : bytes[i];
        hex.push((current >>> 4).toString(16));
        hex.push((current & 0xF).toString(16));
    }
    return hex.join("");
}

export function clamp(value: number, minValue: number, maxValue: number) {
    const scale = value/256 // As ratio of max Byte value
    const diff = maxValue - minValue
    return scale * diff + minValue
}

export function choose(value: number, minValue: number, maxValue: number) {
    const diff = maxValue - minValue
    return value % diff + minValue
}

// Clamp but return value according to normal distribution around middle of range rather than uniformly
export function clampNormal(value: number, minValue: number, maxValue: number) {
    const diff = maxValue - minValue
    return value % diff + minValue
}

export function clampColor(colorSeeds: RGBColor, minColor: RGBColor, maxColor: RGBColor): RGBColor {
    const ret = []
    for(let i = 0; i < 3; i ++) {
        ret.push(clamp(colorSeeds[i], minColor[i], maxColor[i]))
    }
    return ret as RGBColor
}

/**
 * From: https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
 * Returns a hash code from a string
 * @param  {String} str The string to hash.
 * @return {Number}    A 32bit integer
 * @see http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 */
export function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}