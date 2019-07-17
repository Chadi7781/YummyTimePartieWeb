export class Responsable {

private _id:String;
private _nom:String;
  private _numero_telephone:String;
  private _nom_resto:string
private _adress:string;
private _email:String;
private _password:String;
private _confirmPassword:string

  constructor(id: String, nom: String, numero_telephone: String, nom_resto: string, adress: string, email: String, password: String, confirmPassword: string) {
    this._id = id;
    this._nom = nom;
    this._numero_telephone = numero_telephone;
    this._nom_resto = nom_resto;
    this._adress = adress;
    this._email = email;
    this._password = password;
    this._confirmPassword = confirmPassword;
  }

  get id(): String {
    return this._id;
  }

  set id(value: String) {
    this._id = value;
  }

  get nom(): String {
    return this._nom;
  }

  set nom(value: String) {
    this._nom = value;
  }

  get numero_telephone(): String {
    return this._numero_telephone;
  }

  set numero_telephone(value: String) {
    this._numero_telephone = value;
  }

  get nom_resto(): string {
    return this._nom_resto;
  }

  set nom_resto(value: string) {
    this._nom_resto = value;
  }

  get adress(): string {
    return this._adress;
  }

  set adress(value: string) {
    this._adress = value;
  }

  get email(): String {
    return this._email;
  }

  set email(value: String) {
    this._email = value;
  }

  get password(): String {
    return this._password;
  }

  set password(value: String) {
    this._password = value;
  }

  get confirmPassword(): string {
    return this._confirmPassword;
  }

  set confirmPassword(value: string) {
    this._confirmPassword = value;
  }
}
