const chars = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export function random() {
    let newString = '';
    for (let i = 0; i < 64; i++) {
        newString += chars[Math.floor(Math.random() * chars.length)];
    }

    return newString
}
