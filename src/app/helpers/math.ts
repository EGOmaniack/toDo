export const randomInteger = (min: number, max: number): number => {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
};

export const genId = () => new Date().getTime();