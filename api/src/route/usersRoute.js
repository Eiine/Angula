import express from "express";
<<<<<<< HEAD
import { passworReset } from "../controller/passwordReset.js";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUser,
} from "../controller/usersController.js";
import { validationGeneral } from "../validator/validationGeneral.js";
import { rulesUser } from "../validator/validationUser.js";
import { rulesUserupdate } from "../validator/validationUpdateUser.js";
=======
import { createUser,getUsers,updateUser, deleteUser,getUser } from "../controller/usersController.js";
import { validationGeneral } from "../validator/validationGeneral.js";
import { rulesUser } from "../validator/validationUser.js";
import {rulesUserupdate} from "../validator/validationUpdateUser.js"
>>>>>>> 327078374f4899d58c8dfbefee3b4b88897c2c48

const app = express();

//Crear un usuario y su token
app.post("/", rulesUser, validationGeneral, createUser);

//get allUser
app.get("/", getUsers);
//get usuario
<<<<<<< HEAD
app.get("/:id", rulesUserupdate, validationGeneral, getUser);
//Delete usuario
app.patch("/:id", rulesUserupdate, validationGeneral, updateUser);
//Update usuario
app.delete("/:id", rulesUserupdate, validationGeneral, deleteUser);
export default app;

//recuperacion de contraseña
app.post("/passworReset", passworReset);

=======
app.get("/:id",rulesUserupdate,validationGeneral, getUser );
//Delete usuario
app.patch("/:id",rulesUserupdate,validationGeneral,updateUser);
//Update usuario
app.delete("/:id",rulesUserupdate,validationGeneral, deleteUser);
export default app;

>>>>>>> 327078374f4899d58c8dfbefee3b4b88897c2c48
//No importa que antos principios o reglas te digan que tiene un hombre, si pasa una mujer linda el hombre volteará.
//Atte.: Miguel Guerrero.
