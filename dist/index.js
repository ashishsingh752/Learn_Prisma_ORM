"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//  -----------  To update the user data with the id
function UpdateUser(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { email, password }) {
        const res = yield prisma.user.update({
            where: { id: 1 },
            data: {
                email,
                password,
            },
        });
        console.log(res);
    });
}
UpdateUser('ashish', {
    email: 'theashish752@gmail.com',
    password: 'AshishSingh752'
});
// ------------ To insert the data into the userTable
// async function insertUser(username: string, email: string, password: string) {
//   const res = await prisma.user.create({
//     data: {
//       username,
//       email,
//       password,
//     },
//   });
//   console.log(res);
// }
// insertUser("ashish", "ashishsingh.nitr@gmail.com ", "AshishSingh");
