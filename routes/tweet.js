const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("전체 트윗 조회");
});

router.get("/:id", (req, res) => {
  // /:id 라는 동적라우팅 경로만 만들어놓았음 그래서 뒤에 /숫자를 작성하지 않으면 적용이 안됨.
  console.log(req.params); // 파아미터의 역할
  res.send("특정 트윗 조회");
});

router.post("/", (req, res) => {
  res.send("신규 트윗 생성");
});

router.put("/:id", (req, res) => {
  res.send("특정 트윗 게시물 수정");
});

router.delete("/:id", (req, res) => {
  res.send("특정 트윗 게시물 삭제");
});

module.exports = router;
