export class persona{
    //Le pongo el signo ? para indicar que no es necesario ya que el id se genera solo
    id?: number;
    name: String;
    surname: String;
    img: String;

    constructor(name: String, surname: String, img: String) {
        this.name = name;
        this.surname = surname;
        this.img = img;
    }
}