// 3p imports
import express from "express";
import {check, validationResult} from "express-validator";
const server = express();

// custom imports
  import runOnImport from "./otherModules/autoRunWhenImportedOrNo.js";
  import { notCalledOnExport } from "./otherModules/autoRunWhenImportedOrNo.js";


server.use(express.json());
server.get('/hello', check('person').notEmpty().escape(), (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return res.send(`Hello, ${req.query.person}!`);
  }

  res.send({ errors: result.array() });
});

notCalledOnExport();
server.listen(3000)
console.log("Server Restarted")
