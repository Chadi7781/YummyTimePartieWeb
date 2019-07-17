export class User {

  private _firstName: String
  private _lastName: String
  private _tel: String;
  private _email: String
  private _password: String
  private _confirmPassword :String


  constructor(_firstName: String, lastName: String, tel: String, email: String, password: String,confirmPassword) {
    this._firstName = _firstName;
    this._lastName = lastName;
    this._tel = tel;
    this._email = email;
    this._password = password;
    this._confirmPassword = confirmPassword;

  }


  get confirmPassword(): String {
    return this._confirmPassword;
  }

  set confirmPassword(value: String) {
    this._confirmPassword = value;
  }


  get firstName(): String {
    return this._firstName;
  }

  set firstName(value: String) {
    this._firstName = value;
  }

  get lastName(): String {
    return this._lastName;
  }

  set lastName(value: String) {
    this._lastName = value;
  }

  get tel(): String {
    return this._tel;
  }

  set tel(value: String) {
    this._tel = value;
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
}
