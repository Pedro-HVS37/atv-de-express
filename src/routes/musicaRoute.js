import MusicaModel from "../models/MusicaModel.js";
import express from "express";
import MusicaController from "../controllers/musicaController.js";
const router = express.Router();

router.get("/", MusicaController.listar);
router.post("/", MusicaController.criar);
router.get("/:id", MusicaController.BuscarPorId);



export default router;