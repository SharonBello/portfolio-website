
const createShelf = (cellSize: number = 10): Cell[][] => {
    let shelf: Cell[][] = Array.from({length: 10} => Array(10).fill(new Cell()));
    return shelf;
}

const initializeShelf = (shelf, )=> {
    shelf[9][0:6].fill('h');
    shelf[7:8][7:8].fill('c');
    shelf[7:9][9].fill('c,h');

}

const getEmptyLocation = (shelf, type) => {

}

const assignProduct = (shelf: Cell[][], productType: string, productName: string, quantity: number) => {
    [row, column] = getEmptySpace(shelf, productType);
    shelf[row][column].setProduct(product, quantity);
} 

const shelf = createShelf();
const products = [ {"productId": "bread", "quantity": 2, "cell": "0,0"},
                   {“productId": "bamba", "quantity": 6, "cell": "0,2"} ,...];

products.forEach(product: Product => assignProduct(product));

