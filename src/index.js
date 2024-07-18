import { app, PORT } from "./app.js";
import "./dao/db/connect.db.js";

//route
// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });

app.listen(PORT, () => {
  console.log(`Server listen in port: ${PORT}`);
});
