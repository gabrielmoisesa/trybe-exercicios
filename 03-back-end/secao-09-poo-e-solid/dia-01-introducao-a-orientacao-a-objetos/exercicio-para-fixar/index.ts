class Tv {
  private brand: string;
  private size: number;
  private resolution: string;
  private connections: string[];
  private connectedTo: string[];

  constructor(
    brand: string,
    size: number,
    resolution: string,
    connections: string[]
  ) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
    this.connectedTo = [];
  }

  turnOn() {
    console.log(`
    Turning on ${this.brand} TV...
    Connected to ${this.connections[0]}!
    `);
  }
}

const LGTV = new Tv(
  'LG',
  40,
  '4k',
  ['HDMI', 'USB', 'Bluetooth', 'Wi-Fi']
)

LGTV.turnOn();