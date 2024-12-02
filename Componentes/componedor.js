export const createElement = (tag, options = {}) => {
    const element = document.createElement(tag);
    for (const [key, value] of Object.entries(options)) {
        element[key] = value;
    }
    return element;
};