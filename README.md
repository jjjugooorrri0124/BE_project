# BE_project
## How to set and execute
### Setting up the project

1. Download and install
- Node.js, MongoDB 다운로드
- cmd창에서 프로젝트를 위한 초기화
mkdir graphql-api && cd graphql-api
npm init -y
- cmd창에서 패키지 설치
npm install express express-graphql graphql
npm install mongoose

2. 바탕화면에 .js파일 4개 저장
- ./graphql/Resolvers
- ./graphql/schema
- ./models/User
- index.js

3. Server 실행
- cmd창에 명령어 입력
node index.js
* 서버가 성공적으로 연결되면 Server is running on http://localhost:5110/graphql 출력을 확인해야함

4. Open http://localhost:5110/graphql




  
