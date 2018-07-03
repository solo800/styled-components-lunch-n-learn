const bg = 'background-color: pink;';
const flex = (direction = 'row') => {
    return `
        display: flex;
        flex-direction: ${direction};
    `;
};

export {bg, flex};