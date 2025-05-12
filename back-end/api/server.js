import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3000;

app.use(cors());
// app.use(express.json());

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

// Serve os arquivos estáticos do front-end
app.use(express.static(path.join(__dirname, "../front-end/dist")));

// Rota catch-all para aplicações SPA (ex: React, Vue, Angular)
app.get("*", async (req, res) => {
  res.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
