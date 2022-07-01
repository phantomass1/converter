export class Data{
  static async getData() {
    const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    const data = response.json()
    return data;
  }
}
