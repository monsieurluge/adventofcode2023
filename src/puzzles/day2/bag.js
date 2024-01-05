export function Bag({ blue, green, red } = { blue: 0, green: 0, red: 0 }) {
    const containAtLeast = (reveal) => {
        return blue >= reveal.blue
            && red >= reveal.red
            && green >= reveal.green
    }

    return {
        containAtLeast,
    }
}
