import { musicas } from "../data/banco.js";

export default class MusicaModel{
    
    static listar(){
        return musicas;
    }
    static BuscarPorId(id){
        return musicas.find(m => m.id === Number(id));
    }
    static BuscarPorTitulo(titulo){
        return musicas.filter(m => m.titulo.toLowerCase().includes(titulo.toLowerCase()));
    }
    static BuscarPorArtista(artista){
        return musicas.filter(m => m.artista.toLowerCase().includes(artista.toLowerCase()));
    }
    static BuscarPorAno(ano){
        return musicas.find(m => m.ano === Number(ano));
    }
    static BuscarPorGenero(genero){
        return musicas.filter(m => m.genero.toLowerCase().includes(genero.toLowerCase()));
    }
    static BuscarPorDuracao(duracao){
        return musicas.filter(m => m.duracao.toLowerCase().includes(duracao.toLowerCase()));
    }
    static criar(musica){
        musicas.push(musica)
        return musica;
    }
    static atualizar(id, dados){
        const index = musicas.findIndex(m=> m.id === Number(id));
        if(index === -1){
            return null;
        }
        musicas[index] = {...musicas[index], ...dados};
        return musicas[index];
    }
    static deletar(id){
        const index = musicas.findIndex(m => m.id === Number(id));
        if(index === -1){
            return false;
        }
        musicas.splice(index, 1);
        return true;
    }
}