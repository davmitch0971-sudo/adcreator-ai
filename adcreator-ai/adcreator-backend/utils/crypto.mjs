import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuid } from "uuid";
export const hashPassword = (pw) => bcrypt.hashSync(pw, 10);
export const checkPassword = (pw, hash) => bcrypt.compareSync(pw, hash);
export const createToken = (user) => jwt.sign({ id: user.id, email: user.email }, "SECRET_KEY", { expiresIn: "7d" });
export const generateApiKey = () => uuid().replace(/-/g, "");
