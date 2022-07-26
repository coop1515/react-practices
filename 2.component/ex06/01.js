import fs from 'fs';

// fs.readFile('./json/data.json','utf-8', (err, data) => console.log(data));

const data = fs.readFileSync('./json/data.json','utf-8');
// console.log(typeof(JSON.parse(data)));

const o = JSON.parse(fs.readFileSync('./json/data.json','utf-8'));
// console.log(o.no);

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json','utf-8'))
}

const updateOrderProducts = state.order.products;
updateOrderProducts.push({
    no: "p002-003",
    name: "블루양말",
    price: 1000,
    amount: 1
});
console.log(state.order.products, updateOrderProducts, state.order.products === updateOrderProducts);

console.log('===================================================');
