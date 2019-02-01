const fruits = ['apple', 'grapes'];

function addFruit() {
    const test = 'hello';
    fruits.push(test + 'apricot');
}

addFruit();

export default () => {
    fruits.push('orange');
    console.log('c');
};

export const getFruits = () => {
    return fruits;
}