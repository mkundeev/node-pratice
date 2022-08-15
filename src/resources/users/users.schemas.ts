import * as Joi from "joi";

export interface CreateUserDto {
  username: string;
  email: string;
  password: string;
}

export const createUserSchema = Joi.object<CreateUserDto>({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const updateUserSchema = Joi.object<Partial<CreateUserDto>>({
  username: Joi.string().optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().optional(),
});
