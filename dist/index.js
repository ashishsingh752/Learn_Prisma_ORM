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
// ! To delete the user by it's  Id
// async function deleteUser(id:any){
//   try {
//         const users = await prisma.user.delete(id);
//         console.log('Deleted User:', users);
//       } catch (error) {
//         console.error('Error deleting users:', error);
//       } finally {
//         await prisma.$disconnect();  
//       }
// }
// deleteUser(1);
//! to get the user details from the database
// async function findAllUsers() {
//   try {
//     const users = await prisma.user.findMany();
//     console.log('All Users:', users);
//   } catch (error) {
//     console.error('Error retrieving users:', error);
//   } finally {
//     await prisma.$disconnect();  
//   }
// }
// findAllUsers();
//!  -----------  To update the user data with the id
// async function UpdateUser(
//   {username, email, password }: UpdateUserInterface
// ) {
//   const res = await prisma.user.update({
//     where: { id:1 },
//     data: {
//       username,
//       email,
//       password,
//     },
//   });
//   console.log(res);
// }
// UpdateUser({
//     username:'Ashish Singh',
//     email:'theashish752@gmail.com',
//     password:'Ashish752'
// });
//! ------------ To insert the data into the userTable
function insertUser(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                username,
                email,
                password,
            },
        });
        console.log(res);
    });
}
insertUser("Pushpa", "Pushpa@gmail.com ", "Pushpa");
