const { User } = require('../db')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt')
const { ApiError } = require('../Errors')
const User_dto = require('../DTO/user_dto')
const tokenService = require('../service/TokenService')

class UserService {
    async signUp(email, name, surname, password){
        try{
            if(await User.findOne({where: { email }})) throw new Error('Пользователь уже зарегистрирован');

            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({email, name, password: hashPassword, surname})

            const userDTO = new User_dto(user);
            const tokens = tokenService.generateTokens({...userDTO});

            await tokenService.saveToken(userDTO.id, tokens.refreshToken);
            return{
                ...tokens,
                user: userDTO,
            }
        }
        catch (e) {
            throw new Error(e);
        }
    }

    async signIn(email, password) {
        try {

            const user = await User.findOne({where: {email}});
            if (!user) throw ApiError.badRequest('Неверная почта или пароль');

            const isEqual = await bcrypt.compare(password, user.password);
            if(!isEqual) throw ApiError.badRequest('Неверная почта или пароль');

            const userDTO = new User_dto(user);
            const tokens = tokenService.generateTokens({...userDTO});

            await tokenService.saveToken(userDTO.id, tokens.refreshToken);
            return {
                ...tokens,
                user: userDTO
            }
        }
        catch (e) {
            throw new Error(e)
        }
    }

    async refresh(refreshToken) {
        const localUserData = tokenService.validateRefreshToken(refreshToken);
        if(!localUserData) throw ApiError.unauthorized();

        const tokens = tokenService.generateTokens({
            email: localUserData.email,
            name: localUserData.name,
            surname: localUserData.surname,
            id: localUserData.id,
        });
        await tokenService.refreshToken(localUserData.id, tokens.refreshToken);
        const userDTO = new User_dto(localUserData);
        return{
            ...tokens,
            user: userDTO
        }
    }
}

module.exports = new UserService();