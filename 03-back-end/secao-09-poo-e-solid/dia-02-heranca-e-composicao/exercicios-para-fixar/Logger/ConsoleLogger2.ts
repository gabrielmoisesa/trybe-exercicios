export class ConsoleLogger2 {
  constructor(private message: string) {
    this.log(message);
  }

  log(message: string): void {
    console.log(`
    =============Logger2===============
    ${message}
    ===================================
    `);
  }
}

new ConsoleLogger2("test2");
