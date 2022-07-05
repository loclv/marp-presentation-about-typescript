# Exercise

Chú ý các bạn được phép search và dùng mọi loại tools khi làm bài.

1. Hãy loại bỏ `any` trong đoạn code sau, bằng cách sử dụng generic type:

    ```ts
    export const cloneData = (obj: any): any => {
      return JSON.parse(JSON.stringify(obj));
    };
    ```

2. Hãy định nghĩa kiểu cho object sau:

    ```js
    const worker = {
      name: 'JJ',
      age: 44
    }
    ```

3. `never` định nghĩa kiểu trả về 1 function không bao giờ kết thúc, có đúng không?

4. Đoạn code sau có lỗi không? Vì sao?

    ```ts
    type TLocation = { x: number } & { y: number };

    const myLocation: TLocation = { x: 0, y: 0, z: 0 };
    ```

5. Hãy định nghĩa kiểu cho object sau:

    ```js
    const duck = {
      isFly: false,
      color: 'white'
      children: [
        {
          isFly: false,
          color: 'yellow'
        },
        {
          isFly: false,
          color: 'yellow',
          children: [
            {
              isFly: false,
              color: 'white'
            },
          ]
        },
      ]
    }
    ```

6. Theo bạn, mục đích của việc sử dụng generic type là gì?

7. Cho đoạn code sau, `myLocation` có kiểu được định nghĩa là `TLocation & Size`. Tại sao với mọi giá trị bất kỳ được gán vào `myLocation` thì đều có lỗi?

    ```ts
    type Size = 'small' | 'medium' | 'large' | 'big';

    type TLocation = { x: number } & { y: number };

    const myLocation: TLocation & Size = { x: 0, y: 0 };
    ```

8. Trong 1 `class`, `type` hoặc `interface`, nếu 1 thuộc tính được đánh dấu là `readonly` thì điều đó có nghĩa gì?

9. Viết 1 function in ra màn hình giá trị của 1 param. Trong đó param được phép là number hoặc string. Hãy định nghĩa kiểu của param truyền vào đó. Không cần định nghĩa kiểu trả về của function (trong trường hợp này kiểu trả về là void).
