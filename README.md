# BE_project
## How to set and execute

1. Download and install
- Node.js, MongoDB 다운로드
- cmd창에서 프로젝트를 위한 초기화 명령어 작성
* mkdir graphql-api && cd graphql-api
* npm init -y
- cmd창에서 패키지 설치
* npm install express express-graphql graphql
* npm install mongoose

2. Save .js file in your desktop
- ./graphql/Resolvers
- ./graphql/schema
- ./models/User
- index.js

3. Execute server 
- cmd창에 명령어 입력
*node index.js
**서버가 성공적으로 연결되면 Server is running on http://localhost:5110/graphql 출력을 cmd창에서 확인해야함

4. Open test server : http://localhost:5110/graphql
![image](https://github.com/user-attachments/assets/acacf5a3-01dd-45a5-8016-713bc6f2e69c)
- 서버에 Graphql 창이 나오면 테스트 스크립트를 작성하여 작동확인
<example>
query {
  getExchangeRate(src: "krw", tgt: "usd"){
    src
    tgt
    rate
    date
  }
</example>







  
