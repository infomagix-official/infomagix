## Trouble Shooting #0
### 빌드시 node 버전 의존성 관련 에러

> package.json에 노드 버전이 명시되어 있지 않음, 20버전 빌드시 에러발생
> .github/workflows/main.yml 에서의 node 버전을 20으로 수정 개발 환경의 node 버전 또한 20으로 수정해야 함.

## Trouble Shooting #1
### object identifier의 타당성 검증 실패
![alt text](/troubleshooting/trouble01.png)

> 빌드시 사용하는 환경 변수 CLOUDFLARE_ACCOUNT_ID 값을 cloudflare account id가 아닌 주소창의 object id로 해야 함.