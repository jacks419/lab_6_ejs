import express from "express";
import path from "node:path"
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
import.meta.dirname = path.dirname(__filename);


const app = express();
const port = 3000;

app.use(express.static(path.join(import.meta.dirname, "public")));

// Write your code here:

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

app.get("/", (req, res) => {
  const user = {
    username: "Jacqueline"
  };
  res.render("home", user);
});

app.get("/about", (req, res) => 
  res.render("about"));

app.get("/contact", (req, res) => 
  res.render("contact"));

app.listen(port, () => 
  console.log(`Server running on port ${port}`));
