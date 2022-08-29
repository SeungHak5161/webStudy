# Redux

: 상태관리 라이브러리

## 필요성

: React는 상태의 단방향으로만 전달할 수 있음. 따라서 구조가 복잡해질수록 상태 전달, 관리가 어려워짐(특히 SPA). 이 때문에 사용.

## 원칙

- ### Single source of truth

  : 하나의 앱에는 하나의 스토어만 사용한다.

- ### State is read-only

  : 상태를 변화시키는 방법은 오직 액션을 일으키는 것 뿐이다.

- ### Changes are made with pure functions
  : 변화를 일으키는 리듀서 함수는 순수한 함수여야 한다.<br/>
  (오직 파라미터로 받은 이전 상태와 액션 객체 함수에만 의존하며, 함수 외부의 어떤 상태도 변경하지 않으며 새로운 상태 객체를 만들어서 반환)

## Action

: type 필드를 가지는 객체, type 필드는 액션을 설명하는 이름을 가짐('domain/eventName' 형식), 다른 부가적인 정보 필드를 가질 수 있음(payload).<br/>
(Action 객체를 생성하는 Action Creator 함수 사용)

## Reducer

: 현재 상태와 액션 객체를 받아와 새로운 상태를 반환하는 함수.

- 현상태를 변경하는 것은 불가능하고, 현재의 상태를 복사하고 복사한 값을 변경함으로써 불변한 업데이트를 해야 함.

## Store

: 현재의 앱 상태를 가지고 있음. getState 메서드로 현재 상태 조회 가능.

## Dispatch

: 상태를 촉발시키는 행위 <br/>
상태를 업데이트하는 유일한 방법은 store.dispatch()를 통해 액션 객체를 거쳐 업데이트 하는 것.

## Selector

: store의 상태에서 특정한 부분을 추출하는 함수

## 상태변화 흐름도

https://ko.redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif

## 예시 코드 해설

1.  App.js에서 <Counter/> 출력
2.  Counter.js의 각 기능은 CounterSlice.js에서 가져옴
3.  CounterSlice.js에는 Reducer가 선언되어 있음<br/>
4.  (slice는 redux reducer 로직과 action의 집합)
5.  app/store.js에서 store를 생성하는데, 이때 3번의 Reducer를 사용함.
