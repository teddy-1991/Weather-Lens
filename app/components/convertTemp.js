export const convertTemperature = (temp, unit) => {
    return unit === "F" ? (temp * 9) / 5 + 32 : temp;
};