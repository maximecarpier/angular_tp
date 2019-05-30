export class Pokemon {

    public nom: string;
    public id: number;
    public img: string;
    public types: string[] = [];
    public description: string[]
    public poids: number
    public taille: number
    public story: string

    constructor(id: number, nom: string, img: string) {
        this.nom = nom;
        this.id = id;
        this.img = img;
    }

    toString(){
        return this.nom
    }
}
