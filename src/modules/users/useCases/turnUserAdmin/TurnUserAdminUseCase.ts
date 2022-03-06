import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userAdminAlreadyExists = this.usersRepository.findById(user_id);

    if (!userAdminAlreadyExists) {
      throw new Error("User not found!");
    }

    return this.usersRepository.turnAdmin(userAdminAlreadyExists);
  }
}

export { TurnUserAdminUseCase };
