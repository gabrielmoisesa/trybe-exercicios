import { ConsoleLogger } from "./ConsoleLogger";
import { ConsoleLogger2 } from "./ConsoleLogger2";
import { ExampleDatabase } from "./ExampleDatabase";

const logger1 = new ConsoleLogger("The first logger!");
const logger2 = new ConsoleLogger2("The second logeer!");

const ex1 = new ExampleDatabase(logger1);
const ex2 = new ExampleDatabase(logger2);
const ex3 = new ExampleDatabase();

ex1.save("test key", "test value");
ex2.save("what", "the hell");
ex3.save("money", "1000");
