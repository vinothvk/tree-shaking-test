const fruits = ['apple'];

fruits.push('apricot');

export default () => {
    fruits.push('orange');
};

export const getFruits = () => {
    return fruits;
}