# Fake Store

![screen01](https://user-images.githubusercontent.com/93629526/204417770-cf4defe3-41d3-4521-b6c6-6ed666fdbf81.jpg)

---

### 🌱 1. 설치, 환경설정 및 실행 방법

- .env 파일 생성

```
VITE_API_URL=http://makeup-api.herokuapp.com/api/v1/products.json
VITE_USER_API_URL=https://fakestoreapi.com/
```

- 설치 및 실행

```
npm install
npm run dev
```

---

### ✨ 2. 구현 사항

- [x] 카테고리 또는 브랜드에 따른 상품 데이터 정렬  
       → React Query로 서버 상태 관리
- [x] 상품 목록 이미지 Lazy Loading  
       → Intersection Observer로 이미지 최적화
- [x] 상품 색상 및 수량 선택하고 장바구니에 추가
- [x] 장바구니에서 상품 삭제, 원하는 상품만 선택 후 주문  
       → Redux Toolkit, Redux Persist로 클라이언트 데이터 상태 관리
- [x] 회원가입 유효성 검증  
       → Reac Hook Form 사용
- [x] 마이페이지에서 주문내역 확인, 엑셀 파일 다운로드  
       → ID: **kevinryan**, Password: **kev02937@** Test User로 로그인
      ![screen02](https://user-images.githubusercontent.com/93629526/204417867-2a1d638d-df25-4091-b121-9241be01117d.jpg)
      ![screen03](https://user-images.githubusercontent.com/93629526/204417872-7a44fdbe-7afb-439a-804d-179044664bfc.jpg)

---

### 💚 3. 사용한 프레임워크 및 라이브러리

React, Typescript, Redux Toolkit, Redux Persist, React Query,
React Hook Form, React daum postcode, React slick

---

### ✏️ 4. API 명세

![screen04](https://user-images.githubusercontent.com/93629526/205013683-de502605-c9d6-4d16-ad84-92b71647cff4.jpg)
