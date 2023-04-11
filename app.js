const express = require("express"); // import를 대체한다.

const userRouter = require("./routes/user"); //user라우터를 연결시킴.
const tweetRouter = require("./routes/tweet"); //tweet라우터를 연결시킴.

const app = express(); //express를 실행하여 앱 객체를 생성.

const port = 3010; // react서버와 겹치지 않게 서버가 실행될 포트 번호를 3010으로 설정

app.use("/user", userRouter);
app.use("/tweet", tweetRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port} 🚀🚀🚀`);
}); //listen() 함수를 사용하여 서버를 시작하고, 포트 번호가 log에 출력
