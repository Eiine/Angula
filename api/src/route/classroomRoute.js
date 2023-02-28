import express from "express";
import classSchema from "../models/classSchema.js";
<<<<<<< HEAD
import {
  createClassRoom,
  getClassRoom,
  getallClassRoom,
  deleteClassRoom,
  updateClassRoom,
  addUser,
  deleteUser,
} from "../controller/classroom.js";
import { hasAccess } from "../middleware/hasaccess.js";
import { rulesClass } from "../validator/validatorClassrom.js";
import { validationGeneral } from "../validator/validationGeneral.js";
import { rulesUserInv } from "../validator/validateUserInv.js";

const app = express();

import uploadFiles from "../controller/fileUploader.js";
import fileDownload from "../controller/fileDownloader.js";

// Create new classroom
app.post("/create", hasAccess, rulesClass, validationGeneral, createClassRoom);
=======
import { createClassRoom, getClassRoom, getallClassRoom, deleteClassRoom, updateClassRoom } from "../controller/classroom.js";
import {hasAccess} from "../middleware/hasaccess.js"
import {rulesClass} from"../validator/validatorClassrom.js"
import {validationGeneral} from"../validator/validationGeneral.js"
const app = express();


// Create new classroom
app.post("/create",hasAccess,rulesClass,validationGeneral, createClassRoom);
>>>>>>> 327078374f4899d58c8dfbefee3b4b88897c2c48

// Get all user classrooms
app.get("/classroom/:id", getClassRoom);

// Get all classrooms
<<<<<<< HEAD
app.get("/all", hasAccess, getallClassRoom);

//invitacion de alumnos
app.post("/addUser/:id", rulesUserInv, validationGeneral, addUser);
app.delete("/deleteUser/:id", rulesUserInv, validationGeneral, deleteUser);
// Update an user classroom
app.patch("/update/:id", updateClassRoom);

// Upload and download files
app.post("/upload", uploadFiles);
app.get("/download/:name", fileDownload);
=======
app.get("/all",hasAccess ,getallClassRoom);

// Update an user classroom
app.patch("/update/:id", updateClassRoom);
>>>>>>> 327078374f4899d58c8dfbefee3b4b88897c2c48

export default app;
