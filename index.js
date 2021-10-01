const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ mensagem: "Consulta de todos os registro" });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `consulta somente do id: ${id}` });
});

app.post("/", (req, res) => {
  const body = req.body;
  res.json(body);
});

app.put("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `atualizar somente o id: ${id}` });
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ mensage: `deletar somente o id: ${id}` });
});

app.listen(3000, () => {
  console.log("Tudo ok");
});
