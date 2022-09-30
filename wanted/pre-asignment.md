### 1. CSR(Client-side Rendering)이란 무엇이며, 그것의 장단점에 대하여 설명해주세요.

#### 1) CSR의 정의

- 웹페이지의 렌더링 작업을 Client side에서 진행하는 것.
- 서버로부터 HTML, JS를 다운로드 받아서 JS가 동작하며 랜더링 된다.
- SPA(Single Page Application)가 이에 해당한다.

#### 2) CSR의 장점

- 최초 로딩 이후에는 클라이언트 측에서 데이터만 변경하여 구현하기 때문에 렌더링 속도가 빠르다.
- 페이지 전체를 새로 구성하지 않고, 필요한 부분만 재구성할 수 있다.
- 매번 서버에 요청하지 않으므로 서버측의 부하가 적다.

#### 3) CSR의 단점

- SEO(Search Engine Optimization)에 불리하다.(index.html에 기본적인 뼈대만 구현되어 있기 때문에 검색 엔진 봇들이 크롤링 할 내용이 없다.)
- JS를 다운로드 받고 렌더링하는 작업을 마쳐야 콘텐츠가 보이기 때문에 초기 로딩속도가 느리다.

### 2. SPA(Single Page Application)로 구성된 웹 앱에서 SSR(Server-side Rendering)이 필요한 이유에 대하여 설명해주세요.

SEO를 위해서가 가장 클 것입니다. 일반 사용자를 고객으로 하는 서비스가 검색엔진에 노출되지 않는 것은 아주 중요한 요인일 것입니다.
SSR의 경우 이미 렌더링 된 html이 서버로부터 넘겨지기 때문에 SEO가 쉽습니다.

### 3. Next.js 프로젝트를 세팅한 뒤 yarn start 스크립트를 실행했을 때 실행되는 코드를 nextjs github 레포지토리에서 찾은 뒤, 해당 파일에 대한 간단한 설명을 첨부해주세요.

(yarn start 스크립트 실행이 조건이기 때문에 빌드과정은 이미 진행된 것으로 전제합니다.)

pages/\_app.js가 실행됩니다.

```
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp


```

- 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트 입니다.
- 공통 레이아웃, 스타일 지정이 가능합니다.
- 공통 상태 설정이 가능합니다.(Redux 등 상태 관리 라이브러리 사용 시 관련있음)
- Props로는 Component와 pageProps를 가집니다.
  - Component는 서버에 요청한 페이지 컴포넌트입니다.
  - pageProps는 get~~props를 통해 받아온 초기 props가 됩니다.
