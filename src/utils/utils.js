export const getBoardData = async () => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    // const data = await response.json();
    // return data;

    return itemData
};

const itemData = [
    {
        id: 1,
        title: 'First item',
        description: 'This is the first item',
        status: 'todo',
    },
    {
        id: 2,
        title: 'Second item',
        description: 'This is the second item',
        status: 'todo',
    }
];