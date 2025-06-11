import express from 'express';
const app = express();





const PORT = process.env.PORT || 3000;
app.get('/products', (req, res) => {
    res.send('Hello, World!');
});
//create a simple server
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT http://localhost:${PORT}`);
});