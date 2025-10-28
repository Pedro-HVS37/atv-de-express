import express from "express";
import "dotenv/config";
import musicaRoute from "./src/routes/musicaRoute.js";
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/musicas", musicaRoute);

app.listen(port, ()=>{
    console.log(`Aplicativo rodando em: http://localhost:${port}`);
})