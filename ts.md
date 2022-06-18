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

## Part 1 - Introduce 🌱 TypeScript

![part-1](assets/jack-anstey-XVoyX7l9ocY-unsplash.jpg)

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

## Ví dụ - add function

```ts
const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log("🚀 ~ file: add.ts ~ line 5 ~ add(2, 3)", add(2, 3));

```

---

## 

---

## Cảm ơn vì đã lắng nghe 🌱
