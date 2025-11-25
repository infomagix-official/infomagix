# 자동 배포 순서

## 1. 리모트 레파지토리 클론
```bash
git clone https://github.com/infomagix-official/infomagix
```
> main 브랜치로의 병합 또는 푸시에 한해서 자동 빌드, 배포 발생

## 2. Wrangler CLI 설치(1회만)
```bash
npm install -g wrangler
```

## Cloudflare 계정으로 로그인하기
```bash
wrangler login
```

## 빌드 명령 실행
```bash
npm run build
```

## 배포하기
```bash
npx wrangler pages deploy dist
```
출처: https://ko.vite.dev/guide/static-deploy