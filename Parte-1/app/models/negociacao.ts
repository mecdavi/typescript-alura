export class Negociacao {
    private _data;
    private _quantidade;
    private _valor;

    constructor(data,quantidade,valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

        console.log(parseFloat(this._quantidade) * parseFloat(this._valor))
    }
    get data(){
        return this._data
    }
    get quantidade(){
        return this._quantidade
    }
    get valor(){
        return this._valor
    }
    get volume(){
        return this._valor * this._quantidade
    }
}