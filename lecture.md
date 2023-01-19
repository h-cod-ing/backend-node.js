# .env 란?

DB 연결정보 api키 aws키등 외부로 공유되면 안되는 정보들을 다른 파일로 분리 되어야 할 정보들을 저장하는 환경 변수 파일

# 설치하기

이 포스트는 node.js가 이미 설치되어있다는 가정하에 시작하겠습니다

npm패키지 매니저를 이용하여 .env를 사용하게 해주는 **dotenv** 라이브러리를 설치합니다.

```
$ npm i dotenv
```

# .env 파일 만들기

.env 파일을 생성한 후 파일안에 환경변수를 **key=value**형식으로 생성합니다.

```
db_host=localhost
db_user=root
db_password=1234
```

위 방법으로 .env파일을 생성할수 있습니다

<br>