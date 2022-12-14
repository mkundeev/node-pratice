import { validate } from "../../shared/middlewares/validate";
import { Router } from "express";
import { createUserSchema, updateUserSchema } from "./users.schemas";
import { serializeSingleUserResponse } from "./users.serializers";
import { usersService } from "./users.service";

const router = Router();

router.get("/", (req, res, next) => {

  const users = usersService.getUsers();
  res.status(200).send(users.map(user=>serializeSingleUserResponse(user)));
});

router.post("/", validate(createUserSchema), (req, res, next) => {
  // 1. validate req body +
  // 2. create unique id for new user +
  // 3. save user +
  // 4. serialize user +
  // 5. send successful response +
  const user = usersService.createUser(req.body);
  res.status(201).send(serializeSingleUserResponse(user));
});

router.put("/:id", validate(updateUserSchema), (req, res, next) => {
  // 1. validate req body +
  // 2. create unique id for new user +
  // 3. save user +
  // 4. serialize user +
  // 5. send successful response +
  const user = usersService.updateUser(req.body, req.params.id);
  res.status(201).send(serializeSingleUserResponse(user));
});

router.get("/:id", (req, res, next) => {
  // 1. find user by id +
  // 2. if user not found - throw 404 error +
  // 3. if exists - serialize +
  // 4. send successful response +
  const user = usersService.getUserById(req.params.id);
  res.status(200).send(serializeSingleUserResponse(user));
});

router.delete("/:id", (req, res, next) => {
  // 1. find user by id +
  // 2. if user not found - throw 404 error +
  // 3. if exists - serialize +
  // 4. send successful response +
  const user = usersService.deletUserById(req.params.id);
  res.status(200).send(serializeSingleUserResponse(user));
});



export const usersRouter = router;
