import { User } from "../../entities";
import AuthRepository from "../../repositories/AuthRepository/AuthRepository";
import UserRepository from "../../repositories/UserRepository/UserRepository";


const AuthService = {

    register: async (user: User): Promise<User> => {
        const userExist = UserRepository.findByUsername(user.username);
        
        if(userExist) {
            console.error(`Usuario con username: $(user.username), ya existe `);
            throw new Error('El usuario ya existe');
        }

        UserRepository.create(user);
        if(userExist){
            console.error(`Usuario con username: $(user.username), ya existe `);
            throw new Error ('EL usuario ya existe') 
        }
        const id = UserRepository.create(user);
        const newUser =  {...user, id};

        await AuthRepository.save(user);

        return newUser;
    }
}
export default AuthService;
