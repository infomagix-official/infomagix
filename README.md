# Infomagix 회사 홈페이지 React 리뉴얼 명세서

## 1. 프로젝트 개요

- **프로젝트명:** Infomagix 회사 홈페이지 리뉴얼 (React 기반)
- **기존 사이트:** http://infomagix.com/main/index.html
- **목적**
  - 기존 PHP 기반 정적 페이지를 React 기반 SPA로 재구축
  - 유지보수성 및 확장성 향상
  - 기존 사이트의 느낌은 유지하되 **저작권 문제가 없도록 UI 재구성**
  - ~~빌드 후 생성되는 정적 파일을 회사 서버(Nginx/Apache)에서 호스팅~~
  - main 브랜치로의 병합 시 Cloudflare page로 자동 빌드 및 배포(호스팅)
- **특징**
  - 로그인, 회원가입 등 비즈니스 로직 없음
  - **순수 정보 제공용 정적 홈페이지**
  - 빌드 후 결과물만 서버에 업로드하면 운영 가능

---

## 2. 개발 및 배포 환경

### 한글, 영문 도입

- 전역 상태 플래그 도입 후 해당 플레그에 따라 다른 이미지를 불러오도록 구현 예정
- default flag값은 korean으로 함

### 한글 홈페이지 개발 전 필수 변경 사항

- assets 내부 ko, en 디렉토리 분리
- 내부 이미지 경로에 ko 추가
- 헤더에 영문, 한글 토글 탭 추가
- 토글시 전역 상태 변경, 변경 후 useEffect 훅을 통한 리렌더링 도입(토글된 상태를 추적하여 변경 시 렌더링 시도)

### Frontend

- **React 18+**
- **Vite**
- **React Router v6**
- **스타일 방식**
  - Emotion, styled-components, 또는 SCSS/CSS
- **반응형 여부**
  - 1차 버전: PC 최적화
  - 필요 시 모바일 대응 추가

### Build Output

- `npm run build` 시 `/dist` 폴더 생성
- 서버는 `/dist` 내용만 그대로 업로드

### Serverless(Cloudflare page)

- Github Actions를 통한 Cloudflare로의 자동 빌드 및 배포

### ~~Server 요구사항~~

- ~~정적 파일 서빙 가능한 서버(Nginx/Apache)~~
- ~~React Router 적용 시 모든 라우트를 index.html로 fallback~~

---

## 3. 정보 구조 및 라우팅

### 상단 공통 메뉴(GNB)

- COMPANY
- BUSINESS INTRODUCTION
- PRODUCT
- CONTACT
- COMMUNITY

### 라우트 설계

```md
/                      → 메인 페이지
/company               → 회사 소개
/business              → 비즈니스 소개
/product               → 제품 메인
/product/:productId    → 개별 제품 상세 페이지
/contact               → 연락처
/community             → 커뮤니티
```

---

## 4. 공통 레이아웃 구성

### Header
- 로고 + 네비게이션 메뉴
- 상단 고정

### HeroGallery
- 모든 서브 페이지에서 사용되는 타일형 이미지 영역
- **사용자가 제공하는 원본 이미지를 그대로 사용**

### PageTitleBar
- 좌측 파란 라인 + 페이지 명

### Footer
- 회사 로고
- 설립일, 대표자, 주소, 사업자등록번호
- 이메일 / 연락처
- Copyright

---

## 5. 페이지 상세 명세

### 5.1 메인 페이지 (/)

구성 요소:

1. Header
2. 메인 이미지 슬라이더  
   - 5초 자동 슬라이드  
   - 좌/우 버튼 및 인디케이터 제공  
   - 이미지/텍스트는 기존 홈페이지 이미지 그대로 사용
3. 제품 바로가기 11개  
   - 카드 클릭 시 `/product/:productId`로 이동
4. Customer Service 안내  
   - 전화번호, 운영시간  
   - Quote / Contact 버튼 모두 `/contact`로 이동
5. Footer

---

### 5.2 Company (/company)

- Header + HeroGallery + PageTitleBar
- **탭 3개**
  - Company Overview
  - Company History
  - Direction
- 각 탭은 **큰 단일 이미지 1장**으로 구성  
- Footer

---

### 5.3 Business Introduction (/business)

- Header + HeroGallery + PageTitleBar
- **탭 3개**
  - Key technology
  - Technical staff
  - Sales Records
- 각 탭은 **단일 이미지 1장**  
  - assets > business > (keytechnology.png, salesrecords.png, technicalstaff.png)
- Footer

---

### 5.4 Product (/product, /product/:productId)

- Header + HeroGallery + PageTitleBar
- 제품 버튼들
  - 
- 버튼 클릭 시 URL 파라미터 변경  
  예: `/product/mds`
- 각 탭은 **단일 이미지 1장**
  - NVDS
    - 이미지 경로: assets > product > nvds.png
  - Pedal Robot
    - 이미지 경로: assets > product > pedalrobot.png
  - GPS speed sensor VSD
    - 이미지 경로: assets > product > gpsspeedsensorvsd.png
  - GPS+VMS Test system
    - 이미지 경로: assets > product > gpsvmstestsystem.png
  - APS(Drive) controller VMS3400
    - 이미지 경로: assets > product > aps(drive)controllervms3400.png
  - VMS Coastdown testing
    - 이미지 경로: assets > product > vmscoastdowntesting.png
  - VMS Vehicle DAQ
    - 이미지 경로 : assets > product > vmsvehicledaq.png
  - Vehicle Drive Test System
    - 이미지 경로: assets > product > vehicledrivetestsystem.png
  - VLOG Data logger
    - 이미지 경로: assets > product > vlogdatalogger.png
  - VCD CAN display
    - 이미지 경로: assets > product > vcdcandisplay.png
  - B2-DAQ AD Board
    - 이미지 경로: assets > product > b2daqadboard.png
  - Active software
    - 이미지 경로: assets > product > activesoftware.png
  - Activeeye software
    - 이미지 경로: assets > product > chanbercontroldaq.png
  - Test bench
    - 이미지 경로: assets > product > testbench.png
  

- Footer

---

### 5.5 Contact (/contact)

- Header + HeroGallery + PageTitleBar
- **단일 이미지 1개**  
  이미지 경로: assets > contact > contact.png
- Footer

---

### 5.6 Community (/community)

- Header + HeroGallery + PageTitleBar
  이미지 경로: assets > community > community.png
- Footer

---

## 6. 동작 명세

- 메인 슬라이더
  - 5초 간격 자동 재생
  - 수동 이동 지원
- 탭 전환
  - 내부 상태 기반 렌더링
- 제품 이미지 클릭
  - `/product/:productId` 이동
- 이메일 링크
  - mailto 형식 적용 가능

---

## 7. 디자인 가이드

- PC 기준 1200px 중앙 정렬 레이아웃
- 기존 사이트 파란색 계열 참고하되 변화된 톤 적용
- 폰트: 맑은 고딕(피드백 사항)
- 이미지
  - **제공된 원본 이미지를 형식 변환 없이 그대로 사용**

---

## 8. 산출물 구조

```md
/src
  /components
    Header.jsx
    Footer.jsx
    HeroGallery.jsx
    PageTitleBar.jsx
    Slider.jsx
    Tabs.jsx
  /pages
    Main.jsx
    Company.jsx
    Business.jsx
    Product.jsx
    ProductDetail.jsx
    Contact.jsx
    Community.jsx
/assets
(원본 이미지 그대로)
/routes
Router.jsx

package.json
vite.config.js
```

### 최종 배포물

- `/dist`  
- 서버에 `/dist` 폴더 그대로 업로드


## 10. (추가)product shortcut의 라우팅 주소

- Costdown Test System
  이동 주소: /product/vms-coastdown-testing
- Performance Test System
  이동 주소: /product/gps-vms-test-system
- GPS + CAN Speed Sensor
  이동 주소: /product/gps-speed-sensor-vsd
- RPS driver controller VMS3400
  이동 주소: /product/aps-drive-controller-vms3400
- A/D BOARD
  이동 주소: /product/b2-daq-ad-board
- Pedal Robot
  이동 주소: /product/pedal-robot
- VLOG Data Logger
  이동 주소: /product/vlog-data-logger
- VCD5 OBD Display, Perf. test
  이동 주소: /product/vcd-can-display
- VMS Measurement system
  이동 주소: /product/vms-vehicle-daq
- Test Bench
  이동 주소: /product/test-bench
- Software
  이동 주소: /product/active-software

## 0. ~~자동 배포 순서~~(Main 브랜치 병합 시 자동 통합 및 배포 발생함)

### 1. 리모트 레파지토리 클론
```bash
git clone https://github.com/infomagix-official/infomagix
```
> main 브랜치로의 병합 또는 푸시에 한해서 자동 빌드, 배포 발생

### 2. Wrangler CLI 설치(1회만)
```bash
npm install -g wrangler
```

### 3. Cloudflare 계정으로 로그인하기
```bash
wrangler login
```

### 4.빌드 명령 실행
```bash
npm run build
```

## 배포하기
```bash
npx wrangler pages deploy dist
```
출처: https://ko.vite.dev/guide/static-deploy