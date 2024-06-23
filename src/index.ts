import express, {Request, Response, NextFunction} from 'express'
import routerone from './routerone';
import routerTwo from './routerTwo';
export const app = express();
const PORT = process.env.PORT || 3000;




app.use('/hi', routerone)
app.use('/hello',routerTwo)


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
