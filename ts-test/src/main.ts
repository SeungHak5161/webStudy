import "./style.css";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

let myNum: number = 97;
let myString: string = "baek";

// 타입도 변수로 만들 수 있음
type myType = number | string;
let numOrString: myType = 97;
// 배열에 쓸 수 있는 튜플타입, 순서대로 들어와야됨
type Member = [string, number];
let hak: Member = ["Baek", 26];
// 오브젝트 타입
type unit = {
  name: string;
  mineral: number;
};
let zealot: unit = { name: "zealot", mineral: 100 };
// 모든 string type의 속성의 type은 string
type foo = {
  [key: string]: string;
};

// 정규표현식 타입지정 그냥 RegExp 하면 됨
let myRegex: RegExp = /[a-z]/i;

// 배열의 데이터 타입 선언
const myName: string[] = ["baek"];
// 제네릭 형식으로 지정도 가능함
const myPet: Array<string> = ["meow", "bark"];

// 객체의 경우 요소 하나하나의 타입 지정
const myPerson: { first: string; last: string } = {
  first: "Baek",
  last: "SeungHak",
};

// Record Type : Record<Key,Type>
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};
ids[30] = "c";

[1, 2, 3].forEach((e) => console.log(e));
const out = [4, 5, 6].map((e) => `${e * 10}`);

// 함수의 매개변수, 리턴값 지정 가능
function double(num: number): number {
  return num * 2;
}
