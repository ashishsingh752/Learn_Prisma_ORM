import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface UpdateUserInterface {
  email: string;
  password: string;
}

//!  -----------  To update the user data with the id
// async function UpdateUser(
//   username: string,
//   { email, password }: UpdateUserInterface
// ) {
//   const res = await prisma.user.update({
//     where: { id:1 },
//     data: {
//       email,
//       password,
//     },
//   });
//   console.log(res);
// }

// UpdateUser('ashish',{
//     email:'theashish752@gmail.com',
//     password:'AshishSingh752'
// });

//! ------------ To insert the data into the userTable
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
