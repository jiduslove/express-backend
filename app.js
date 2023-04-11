const express = require("express"); // import를 대체한다.

const userRouter = require("./routes/user"); //user라우터를 연결시킴.
const tweetRouter = require("./routes/tweet"); //tweet라우터를 연결시킴.

// 가져 온 express를 함수로 사용하기 위해서 app에 변수로 담았다.
const app = express(); //express를 불러오기 위해 작성.

const port = 3010; // react서버와 겹치지 않게 3010번 사용

app.use("/user", userRouter);
app.use("/tweet", tweetRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port} 🚀🚀🚀`);
}); // 서버 시작하는 기능, 포트랑 화살표 함수
