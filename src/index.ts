import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface UpdateUserInterface {
  email: string;
  password: string;
  username: string,
}


//! To delete the user by it's  Id
async function deleteUser(id:any){
  try {
        const users = await prisma.user.delete(id);
        console.log('Deleted User:', users);
      } catch (error) {
        console.error('Error deleting users:', error);
      } finally {
        await prisma.$disconnect();  
      }
}
deleteUser(1);


//! to get the user details from the database
async function findAllUsers() {
  try {
    const users = await prisma.user.findMany();
    console.log('All Users:', users);
  } catch (error) {
    console.error('Error retrieving users:', error);
  } finally {
    await prisma.$disconnect();  
  }
}
findAllUsers();


//!  -----------  To update the user data with the id
async function UpdateUser(
  {username, email, password }: UpdateUserInterface
) {
  const res = await prisma.user.update({
    where: { id:1 },
    data: {
      username,
      email,
      password,
    },
  });
  console.log(res);
}

UpdateUser({
    username:'Ashish Singh',
    email:'theashish752@gmail.com',
    password:'Ashish752'
});

//! ------------ To insert the data into the userTable
async function insertUser(username: string, email: string, password: string) {
  const res = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });
  console.log(res);
}

insertUser("Pushpa", "Pushpa@gmail.com ", "Pushpa");
