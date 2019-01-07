export default class FotoService {

    constructor(resource){
        this._resource = resource('fotos{/id}');
    }
    listaFotos(){

        return this._resource
            .query()
            .then(res => res.json(), err => {
                console.log(err);
                throw new Error('Erro ao exibir fotos, tente novamente mais tarde.')
            });

    }
    cadastraFoto(foto){

        if(foto.id){
            return this._resource
                .update({ id: foto.id}, foto);
        }else{
            return this._resource
                .save(foto);
        }

    }
    apagaFoto(id){
        return this._resource
            .delete({ id : id });
    }

    buscaFoto(id){
        return this._resource
            .get({ id })
            .then(res => res.json());

    }


}