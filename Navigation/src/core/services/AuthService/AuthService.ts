import { User } from "../../entities";
import AuthRepository from "../../repositories/AuthRepository/AuthRepository";
import UserRepository from "../../repositories/UserRepository/UserRepository";

const AuthService = {
  register: async (user: Omit<User, "id">): Promise<User> => {
    const userExist = UserRepository.findByUsername(user.username);

    if (userExist !== null) {
      throw new Error("El usuario ya existe");
    }

    const id = UserRepository.create(user as User);

    const newUser = {
      ...user,
      id,
    } as User;

    await AuthRepository.save(newUser);

    return newUser;
  },

  login: async (username: string, password: string): Promise<User> => {
    const userExist = UserRepository.findByUsername(username);

    if (userExist === null) {
      throw new Error("El usuario no existe");
    }

    if (userExist.contrasena !== password) {
      throw new Error("Contraseña incorrecta");
    }

    await AuthRepository.save(userExist);

    return userExist;
  },
};

export default AuthService;