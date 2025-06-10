import express from 'express';



const app = express();
const PORT = process.env.PORT || 3000;







//create a simple server
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT http://localhost:${PORT}`);
});