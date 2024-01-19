class Tv {
  private brand: string;
  private size: number;
  private resolution: string;
  private connections: string[];
  private _connectedTo: string;

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
    this._connectedTo = '';
  }

  get connectedTo() {
    return this._connectedTo;
  }

  set connectedTo(value: string) {
    if (this.connections.includes(value)) {
      this._connectedTo = value;
    } else {
      console.log('Sorry, connection unavailable!')
    }
  }

  turnOn() {
    console.log(`Turning on ${this.brand} TV...`);
  }
}

const LGTV = new Tv(
  'LG',
  40,
  '4k',
  ['HDMI', 'USB', 'Bluetooth', 'Wi-Fi']
)

LGTV.turnOn();