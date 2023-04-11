const express = require("express");

const router = express.Router();

router.get("/:id", (req, res) => {
  //특정유저를 조회할 수 있게 만들어진 코드.(:id를 넣지 않으면 특정하지 않음.)
  res.send("유저 조회");
});

router.post("/", (req, res) => {
  res.send("신규 유저 생성");
});

router.put("/:id", (req, res) => {
  res.send("유저 정보 수정");
});

router.delete("/:id", (req, res) => {
  res.send("유저 삭제");
});

module.exports = router; // export같은 개녕.
