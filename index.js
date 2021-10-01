const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ mensagem: "rota funcionando" });
});

app.listen(3000, ()=>{
    console.log('Tudo ok');
})