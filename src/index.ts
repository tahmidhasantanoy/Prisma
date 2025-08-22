// import { PrismaClient } from "@prisma/client";
import client = require("./generated/client");

// Prisma Client instance
const prisma = new client.PrismaClient();

const operationalFunction = async () => {

// Add table data using prisma
//   const result = await prisma.post.create({
//     data: {
//       title: "This is title",
//       content: "This is content",
//       author: "Tahmid Hasan",
//       hashTag: "#devs",
//     },
//   });


const getAllFromDB = await prisma.post.findMany()

  console.log(getAllFromDB);
};

operationalFunction();
