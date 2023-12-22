// export class AuthService {
//   constructor() {
//     this.userRepository = void 0;
//     this.jwtService = void 0;
//     this.userRepository = typeorm.getRepository(User);
//     this.jwtService = new jwt.JwtService();
//   }

//   async validateUser(username, password) {
//     const user = await this.userRepository.findOne({
//       where: {
//         username,
//       },
//     });

//     if (user && user.password === password) {
//       const { password, ...result } = user;
//       return result;
//     }

//     return null;
//   }

//   async login(user) {
//     const payload = {
//       username: user.username,
//       sub: user.id,
//     };
//     return {
//       access_token: this.jwtService.sign(payload),
//     };
//   }
// }
