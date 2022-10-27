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

// [1, 2, 3].forEach((e) => console.log(e));
const out = [4, 5, 6].map((e) => `${e * 10}`);

// 함수의 매개변수, 리턴값 지정 가능
export function double(num: number): number {
  return num * 2;
}

export const format = (title: string, param: string | number): string => {
  return `${title} ${param}`;
};
export const logformat = (title: string, param: string | number): void => {
  console.log(`${title} ${param}`);
};
// Promise형으로 리턴값 지정
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`data from ${url}`);

function introduce(salutation: string, ...names: string[]) {
  return `${salutation} ${names.join(" ")}`;
}

// ts는 compile 타입만 체크하고 runtime에서는 체크하지 않음

export function fullName(person: { first: string; last: string }): string {
  // ?? : null 병합 연산자(nullish 한 경우 대체값 사용)
  return `${person?.first ?? "First"} ${person?.last ?? "Last"}`;
}

// 파라미터로 들어오는 함수의 타입, 파라미터 타입, 리턴 타입 지정
// export function arrayMutate(
//   numbers: number[],
//   mutate: (v: number) => number
// ): number[] {
//   return numbers.map(mutate);
// }

type MutationFunction = (v: number) => number;
export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

// 함수를 리턴할때 타입 지정, 클로져 예시
function createAdder(num: number): (val: number) => number {
  return (val: number) => num + val;
}
export const addOne = createAdder(1);
