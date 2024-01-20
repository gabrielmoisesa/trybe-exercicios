class Data {
  constructor(
    private _day: number,
    private _month: number,
    private _year: number,
  ) {
    this._day = _day;
    this._month = _month;
    this._year = _year;
    this.validateDate();
  }

  validateDate(): void {
    if (this._day < 1 || this._day > 31) this._day = 1;
    if (this._month < 1 || this._month > 12) this._month = 1;
    if (this._year < 0) this._year = 1900;
  }

  getMonthName(): string {
    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return months[this._month - 1];
  }

  isLeapYear(): boolean {
    if (this._year % 4 === 0) return true;
    return false;
  }

  compare(date: Data) {
    if (this._year > date._year) return 1;
    if (this._year < date._year) return -1;
    if (this._month > date._month) return 1;
    if (this._month < date._month) return -1;
    if (this._day > date._day) return 1;
    if (this._day < date._day) return -1;
    return 0;
  }

  format(format: string): string {
    const day = this._day.toString().padStart(2, '0');
    const month = this._month.toString().padStart(2, '0');
    const year = this._year.toString().padStart(4, '0');
    return format
      .replace('DD', day)
      .replace('MM', month)
      .replace('YYYY', year);
  }
}

const date = new Data(8, 8, -2021);
console.log(date);
console.log(date.compare(new Data(8, 8, 2021)));
console.log(date.format('YYYY/MM/DD'));