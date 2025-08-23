// import { PrismaClient } from "@prisma/client";
import client = require("./generated/client");

// Prisma Client instance
const prisma = new client.PrismaClient();

const operationalFunction = async () => {
  // Get all data from the post table
  const getAllFromDB = await prisma.post.findMany();

  // Get specific data from the post table
  //   const getSpecificFromDB = await prisma.post.findFirst({
  //     where: { id: 2 },
  //   });

  // const getSpecificFromDBOrError = await prisma.post.findFirstOrThrow({
  //   where: { id: 11 },
  // });

  const findUnique = await prisma.post.findUnique({
    where: { id: 19 },
    select: {
      id: true,
      title: true,
      author: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  console.log(findUnique);
  // console.log({ getSpecificFromDBOrError });
};

operationalFunction();
