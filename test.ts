let obj: any = { x: 0 };

obj.foo();
obj();
obj.bar = 100;
obj = 'hello';

const num: number = obj;
const str: string = obj;

let myLand: string | undefined = undefined;

myLand = 'LaLa';

type Point = {
  x: number;
  y: number;
};

const printCoord = (pt: Point) => {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
};

type UserInputSanitizedString = string;

interface IWindow {
  title: string;
}

interface IWindow {
  color: string;
}

const inputWindow: IWindow = {
  title: '👨‍🎨 alert!',
  color: '🌈',
};

function identity<Type>(arg: Type): Type {
  return arg;
}

const doSomething = <Type>(arg: Type): Type => {
  return arg;
};

const printId = (id: number | string) => {
  console.log('Your ID is: ' + id);
};

type Size = 'small' | 'medium' | 'large' | 'big';

type TLocation = { x: number } & { y: number };

const myLocation: TLocation = { x: 0, y: 0 };
