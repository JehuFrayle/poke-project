export interface ColorWithRange {
    range: number[],
    color: string
}
// Color palettes for stats bar
export const yellowPalette = [
    { range: [150, 255], color: "#ffef87" },
    { range: [120, 150], color: "#ffd797" },
    { range: [100, 120], color: "#ffae6a" },
    { range: [80, 100], color: "#ff8243" },
    { range: [50, 80], color: "#e26a2c" },
    { range: [0, 50], color: "#c65314" },
];

export const bluePalette = [
    { range: [150, 255], color: "#88deb0" },
    { range: [120, 150], color: "#4eadaf" },
    { range: [100, 120], color: "#377a98" },
    { range: [80, 100], color: "#244a80" },
    { range: [50, 80], color: "#152069" },
    { range: [0, 50], color: "#140951" },
];

export const whitePalette = [
    { range: [150, 255], color: "#d6cfcb" },
    { range: [120, 150], color: "#ccb7ae" },
    { range: [100, 120], color: "#A6808c" },
    { range: [80, 100], color: "#706677" },
    { range: [50, 80], color: "#565264" },
    { range: [0, 50], color: "#3e3c45" },
];

export const grayPalette = [
    { range: [150, 255], color: "#c2d1d0" },
    { range: [120, 150], color: "#95aeaf" },
    { range: [100, 120], color: "#6d898e" },
    { range: [80, 100], color: "#2e3f4c" },
    { range: [50, 80], color: "#16202b" },
    { range: [0, 50], color: "#04060a" },
];

export const brownPalette = [
    { range: [150, 255], color: "#faa761" },
    { range: [120, 150], color: "#d68050" },
    { range: [100, 120], color: "#8e3f31" },
    { range: [80, 100], color: "#6a2723" },
    { range: [50, 80], color: "#461618" },
    { range: [0, 50], color: "#220a0d" },
];

export const purplePalette = [
    { range: [150, 255], color: "#e0aaff" },
    { range: [120, 150], color: "#9d4edd" },
    { range: [100, 120], color: "#7b2cbf" },
    { range: [80, 100], color: "#5a189a" },
    { range: [50, 80], color: "#3c096c" },
    { range: [0, 50], color: "#10002b" },
];

export const blackPalette = [
    { range: [150, 255], color: "#c6caeb" },
    { range: [120, 150], color: "#9aa0c8" },
    { range: [100, 120], color: "#737ba5" },
    { range: [80, 100], color: "#515a82" },
    { range: [50, 80], color: "#353d60" },
    { range: [0, 50], color: "#0a0e1a" },
];

export const redPalette = [
    { range: [150, 255], color: "#ff7676" },
    { range: [120, 150], color: "#ff4040" },
    { range: [100, 120], color: "#ff0000" },
    { range: [80, 100], color: "#e00000" },
    { range: [50, 80], color: "#c20000" },
    { range: [0, 50], color: "#5c0000" },
];

export const pinkPalette = [
    { range: [150, 255], color: "#f8bbe6" },
    { range: [120, 150], color: "#f19fc8" },
    { range: [100, 120], color: "#ee73c4" },
    { range: [80, 100], color: "#f553ae" },
    { range: [50, 80], color: "#f10b97" },
    { range: [0, 50], color: "#96005b" },
];

export const greenPalette = [
    { range: [150, 255], color: "#ecf39e" },
    { range: [120, 150], color: "#90a955" },
    { range: [100, 120], color: "#4f772d" },
    { range: [80, 100], color: "#31572c" },
    { range: [50, 80], color: "#132a13" },
    { range: [0, 50], color: "#051e05" },
];

export function getPaletteByColor(color: string) {
    switch (color.toLowerCase()) {
        case 'black':
            return blackPalette;
        case 'brown':
            return brownPalette;
        case 'blue':
            return bluePalette;
        case 'yellow':
            return yellowPalette;
        case 'white':
            return whitePalette;
        case 'red':
            return redPalette;
        case 'purple':
            return purplePalette;
        case 'pink':
            return pinkPalette;
        case 'green':
            return greenPalette;
        case 'gray':
            return grayPalette;
        default:
            return greenPalette; // Devuelve null si el color no coincide con ninguna paleta existente
    }
}
