import MusicaModel from "../models/MusicaModel.js";

export default class MusicaController{
    static listar(req, res) {
        try {
            const musicas = MusicaModel.listar();
            if (!musicas) {
                res.status(400).json({ msg: "Erro ao listar musicas" });
                return;
            }
            res.status(200).json(musicas);
        } catch (error) {
            res.status(500).json({ msg: "Erro interno", erro: error.message });
        }
    }
    static criar(req, res) {
        try {
            const { titulo, artista, ano, genero, duracao } = req.body;
            if (!titulo || !artista || !ano || !genero || !duracao) {
                res.status(400).json({ msg: "Todos os campos devem ser preenchidos." });
                return;
            }
            if (!MusicaModel.BuscarPorArtista(artista)) {
                res.status(400).json({ msg: "Artista invalido" });
                return;
            }
            if (!MusicaModel.BuscarPorTitulo(titulo)) {
                res.status(400).json({ msg: "Titulo invalido" });
                return;
            }
            if (Number(ano) <= 1900 || Number(ano) > new Date().getFullYear()) {
                res.status(400).json({ msg: "Ano invalido" });
                return;
            }
            const novaMusica = {
                id: MusicaModel.listar().length + 1,
                titulo: titulo,
                artista: artista,
                genero: genero,
                ano: ano,
                duracao: duracao
            };
            MusicaModel.criar(novaMusica);
            res.status(201).json({ msg: "Musica criada com sucesso", musica: novaMusica });
        } catch (error) {
            res.status(500).json({ msg: "Erro ao criar musica", erro: error.message });
        }
    }
    static BuscarPorId(req, res) {
        try {
            const id = req.params.id;
            const musica = MusicaModel.BuscarPorId(id);
            if (!musica) {
                res.status(404).json({ msg: "Musica não encontrada" });
                return;
            }
            res.status(200).json(musica);
        } catch (error) {
            res.status(500).json({ msg: "Erro ao buscar musica", erro: error.message });
        }
    }
    


}