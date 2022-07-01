---
marp: true
theme: gaia
author: loclv
---

<style>
  :root {
    --color-background: #000000;
    --color-foreground: #c5c5c5;
  }

  pre code {
    color: #c5c5c5;
    background-color: black;
  }

</style>

## Content

- Introduce 🌱 TypeScript
- Basic 🧱 examples
- Practical 🏃‍♀️ exercise

---

## Lời nói đầu 😎

- giới thiệu bản thân.
- đây là 1 buổi chia sẻ và bàn luân!
- lý do tại sao mình lại muốn chia sẻ?
- lý do mọi người lại đến nghe?
- khi nào có thắc mắc thêm thì phải đặt câu hỏi ngay, sợ quên lắm!
- có thời gian nghỉ mỗi 45 phút.
- khi nào cảm thấy nội dung "nhàm chán", "buồn ngủ" thì phải lên tiếng luôn!
- "chưa hiểu" thì phải bảo là "chưa hiểu"!

---

## Part 1 - Introduce 🌱 TypeScript

![height:440px](assets/jack-anstey-XVoyX7l9ocY-unsplash.jpg)

Photo by [Jack Anstey](https://unsplash.com/@jack_anstey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash.

---

## Tại sao người ta lại yêu thích 💙 TypeScript

Theo khảo sát của [stack-overflow năm 2021](https://insights.stackoverflow.com/survey/2021#overview) và [năm 2020](https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages) thì TypeScript đều nằm trong top 3 ngôn ngữ được các developer yêu thích nhất.
Vì sao lại vậy?

![height:280px](loved.png)

---

## Chiến thuật _code ít bug_ của TypeScript ở đây là gì?

---

## Định nghĩa

> TypeScript is JavaScript with syntax for types.
> TypeScript is a strongly typed programming language

Đây là 2 điều viết ngắn gọn ở  [trang chủ  TypeScript](https://www.typescriptlang.org/).

---

## Vấn đề của JavaScript

Ta nhắc lại nhược điểm cũng là ưu điểm của JavaScript, rằng JavaScript là 1 trong số những ngôn ngữ [dynamically typed language](https://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages).

---

## Ví dụ với JavaScript

Đoạn code sau sẽ không có lỗi gì, nhưng sẽ _toang_ khi chạy:

![height:400px](assets/ie-js.png)

---

## Ví dụ với TypeScript

Đoạn code sau sẽ không có lỗi gì, nhưng sẽ _toang_ khi chạy:

![ie-ts.png](assets/ie-ts.png)

---

## JavaScript vs TypeScript

| JavaScript | TypeScript |
|------------|------------|
| **code nhanh hơn 🐇**, vì code không cần quan tâm tới type | **code chậm hơn 🐢**, cần quan tâm tới type khi code |
| **dễ học 🐇**, code không cần quan tâm tới type | **học khó hơn 🐢**, cần học cách sử dụng type |
| **khó bảo trì 🤕**, khi hệ thống phức tạp, nhiều thứ không được định nghĩa type | **bảo trì dễ hơn 😎**, mọi thứ được định nghĩa type, dễ hiểu hơn, đặc biệt là định nghĩa params, response API, function... |

---

Ví dụ đoạn code JS sau:

```js
// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase();

// Calling 'message'
message();
```

---

Những câu hỏi hoang mang:

- Is message callable?
- Does it have a property called toLowerCase on it?
- If it does, is toLowerCase even callable?
- If both of these values are callable, what do they return?

Giải pháp:

> a static type system to make predictions about what code is expected before it runs.

---

## Một số lợi ích khác của TypeScript

Chính vì TypeScript hiểu object, interface, class... nên nó có thể _auto-complete_ hay gợi ý các lựa chọn cho ta.

```ts
const cat = { eat: '🐟' };

// suggestion: `cat.run`
cat.
```

---

Dễ sử dụng lib/package bên thứ 3 cung cấp. Ví dụ:

```ts
// `sftp` is a client object instance of 'ssh2-sftp-client' package
// `filePath` is a string
const type: string | boolean = await sftp.exists(filePath);
```

```ts
// node_modules/@types/ssh2-sftp-client/index.d.ts
declare class sftp {
  exists(remotePath: string): Promise<false | FileInfoType>;
}
```

---

## typescript compiler

```sh
npm install -g typescript
```

- type checking
- chuyển file .ts sang file JavaScript .js, từ đây ta có thể chạy file .js như vẫn làm với JavaScript.
  - Thế nên ta có thể dùng TypeScript trên môi trường browser or Node.js.

---

Ví dụ compile đoạn code sau từ ts sang js:

```ts
const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log("🚀 ~ file: add.ts ~ line 5 ~ add(2, 3)", add(2, 3));
```

```sh
tsc add.ts
# expected output: add.js
```

---

## Part 2 - Basic 🧱 examples

![height:430px](assets/elliot-andrews-6keOhd7idJo-unsplash.jpg)

Photo by [Elliot Andrews](https://unsplash.com/@elliot_ra8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash.

---

## Ví dụ đơn giản - add function

```ts
const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log("🚀 ~ file: add.ts ~ line 5 ~ add(2, 3)", add(2, 3));
```

---

## Run TypeScript file globally 🌠 with ts-node

```sh
node -v
# expected version is currently stable version

npm install -g typescript ts-node tslib @types/node

# verify
ts-node -v
```

---

## Prepare a simple sample

```sh
touch test.ts
```

Write a simple sample:

```ts
const teamName: string = '🦆🦆🦆';

console.log('🌊', teamName);
```

---

## Run ts file everywhere

```ts
ts-node test.ts
```

Expected output is "🌊 🦆🦆🦆".

---

## Ngoài ra có thể chạy bằng **deno** trên local 🦕

Cách cài đặt `deno` cụ thể có tại [đây](https://deno.land/).

MacOS:

```sh
brew install deno
```

Linux (ví dụ như Ubuntu):

```sh
sudo snap install deno
```

---

## Chạy bằng deno command

```sh
deno run ./test.ts
```

---

## Kiểu nguyên thủy

- string: '', "Hello, world"
- number: 0, -1, 3.14 (float), not BigInt (BigInt support has been added on [TypeScript 3.2](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint))
- boolean: two values true and false

---

Ví dụ:

```ts
let aStr: string;

aStr = 'hello';
// 😻 err: Type 'undefined' is not assignable to type 'string'
aStr = undefined;
```

---

## Array type

```ts
const aArray: number[] = [1, 2, 3]
```

Có 2 cách viết: `number[]` hoặc `Array<number>`.

Cách viết `number[]` dễ đọc và ngắn gọn hơn.

---

## `any` type

Trong TypeScript mọi thứ sẽ được check type, ngoại trừ `any`.

> Using `any` disables all further type checking.

```ts
let obj: any = { x: 0 };

// no error 😢
obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
```

---

Mọi biến được gán bởi 1 giá trị `any` đều được chấp nhận.

```ts
let obj: any = { x: 0 };

// no error 😢
const num: number = obj;
```

---

Code typescript mà để `any` thì chẳng khác nào code JavaScript!

Nên hạn chế sử dụng `any` nhất có thể.

Vậy thì khi nào chấp nhận dùng `any`?

---

Vậy thì khi nào chấp nhận dùng `any`?

- Thiết kế model chưa rõ ràng, trong khi thay đổi quá nhiều lần. Ta tạm thời dùng `any`.

Đối với phần code common có quá nhiều params/return type thì ta có thể sử dụng [generic types](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types).

---

## Hạn chế `any` bằng tools

Có 2 cách là: dùng _tsconfig_ và _eslint_.

---

### noImplicitAny - không được ngầm hiểu là any

Đây là [1 config trong file tsconfig.json](https://www.typescriptlang.org/tsconfig#noImplicitAny).

> In some cases where no type annotations are present, TypeScript will fall back to a type of any for a variable when it cannot infer the type.

---

This can cause some errors to be missed, for example:

```ts
const takeFrom3rdPosition = (str) => {
  // No error? `.subtr` -> `.substr`
  console.log(str.subtr(3));
}

// No error?
takeFrom3rdPosition(42);
```

---

Bật config `noImplicitAny` trong `tsconfig.json`:

```json
{
  "compilerOptions": {
    // ...
    "noImplicitAny": true,
  }
}
```

---

Kết quả:

```ts
const takeFrom3rdPosition = (str) => {
  // err: Parameter 'str' implicitly has an 'any' type.
  console.log(str.subtr(3));
}
```

---

### Sử dụng eslint

`.eslintrc.json`:

```json
{
  // ..
  {
    "files": "*.ts",
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "rules": {
      "@typescript-eslint/no-explicit-any": 1,
    }
  }
}
```

---

## Về việc chú thích kiểu với biến

```ts
let myName: string = "Alice";
```

> In most cases, though, this isn’t needed. Wherever possible, TypeScript tries to automatically infer the types in your code.

---

Chú thích kiểu là phần nằm bên phải biến, với cú pháp là `<2 dots mark><space><type>`.

Khi nào thì cần phải dùng chú thích kiểu - type annotations?

---

Khi mà TypeScript không tự hiểu được kiểu của biến đố, tại thời điểm khởi tạo. Ví dụ:

```ts
let myLand: string | undefined = undefined;

myLand = 'LaLa';
```

---

## Object Types

```ts
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

---

## Type Aliases

```ts
type Point = {
  x: number;
  y: number;
};

const printCoord = (pt: Point) => {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
};
```

---

Đơn giản chỉ là 1 alias - biệt danh. Ví dụ:

```ts
type UserInputSanitizedString = string;
```

---

## Interfaces

> An interface declaration is another way to name an object type:

```ts
interface Point {
  x: number;
  y: number;
}
```

---

## Differences Between Type Aliases and Interfaces

Extending an interface:

```ts
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}
```

---

Extending a type via intersections (phép giao):

```ts
type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: boolean 
}
```

---

Adding new fields to an existing interface:

```ts
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
```

A type cannot be changed after being created!

---

Tóm lại:

- interface có tính mở rộng cao hơn
  - có thể update - thêm thuộc tính
  - class có thể extends từ interface
  - có thể được sử dụng như type aliases, khi chú thích kiểu

- type aliases thì được dùng như 1 biến, có thể nhận kết quả từ các toán tử với type. Còn interface cần phải có 1 cấu trúc.

---

Khi định nghĩa models trong thực tế, hay để tái sử dụng type thì người ta thường dùng interface.

Type aliases được dùng khi muốn tái sử dụng biểu thức với type.

---

## generic types

Sinh ra để giải quyết bài toán tái sử dụng src/logic với type thay đổi theo từng trường hợp.

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}

const doSomething = <Type>(arg: Type): Type => {
  return arg;
};
```

---

## Classes

```ts
class Point {
  x: number;
  y: number;
}
 
const pt = new Point();
pt.x = 0;
pt.y = 0;
```

---

## Cách dùng từ khóa 📖 `readonly` trong class, type, interface

Trong 1 `class`, `type` hoặc `interface`, nếu 1 thuộc tính không bao giờ thay đổi thì ta có thể sử dụng `readonly`.

Nếu được gán lại bằng 1 giá trị khác thì sẽ báo lỗi `không thể gán giá trị mới cho thuộc tính này`.

>error TS2540: Cannot assign to XXX because it is a constant or a read-only property.

---

## Ví dụ trong 1 component có thuộc tính

```ts
  public readonly columnTitles = columnTitles;
  public readonly nameMaxLength = nameMaxLength;
```

---

Ví dụ về khởi tạo giá trị trong `constructor` của `class`:

```ts
class Employee {
    readonly code: number;
    name: string;

    constructor(code: number, name: string)     {
        this.code = code;
        this.name = name;
    }
}

let emp = new Employee(10, "John");
emp.code = 20; // Compiler Error
emp.name = 'Bill';
```

---

Ví dụ về thuộc tính `readonly` của `interface`:

```ts
interface IEmployee {
    readonly code: number;
    name: string;
}

let empObj: IEmployee = {
    code: 1,
    name: 'Steve';
}

empObj.code = 100; // Compiler Error: Cannot change readonly 'code'
```

---

Ví dụ về thuộc tính `readonly` của `type`:

```ts
// or `interface IEmployee`
type Employee = {
    empCode: number;
    empName: string;
}

let emp1: Readonly<Employee> = {
    empCode: 1,
    empName: 'Steve'
}

emp1.empCode = 100; // Compiler Error: Cannot change readonly 'empCode'
emp1.empName = 'Bill'; // Compiler Error: Cannot change readonly 'empName'

let emp2: Employee = {
    empCode: 1,
    empName: 'Steve'
}

emp2.empCode = 100; // OK
emp2.empName = 'Bill'; // OK
```

---

Việc dùng `readonly` chỉ nhằm mục đích tránh những nhầm lẫn về logic, như việc đáng ra nó là biến không được thay đổi nhưng lại bị gán lại chẳng hạn.

// TODO

---

## Part 3 - Practical 🏃‍♀️ exercise

![height:440px](assets/hoach-le-dinh-PeRt3uMmjYM-unsplash.jpg)

Photo by [Hoach Le Dinh](https://unsplash.com/es/@hoachld?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash.

---

## Cảm ơn vì đã lắng nghe 🌱

![height:440px](assets/jack-anstey-MiUyKAHP90s-unsplash.jpg)

Photo by [Jack Anstey](https://unsplash.com/@jack_anstey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash.
