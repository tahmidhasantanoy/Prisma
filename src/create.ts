// import { PrismaClient } from "@prisma/client";
import client = require("./generated/client");

// Prisma Client instance
const prisma = new client.PrismaClient();

const operationalFunction = async () => {
  // Add single table data using prisma
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is title",
  //       content: "This is content",
  //       author: "Tahmid Hasan",
  //       hashTag: "#devs",
  //     },
  //   });

    // Add multiple table data using prisma
  const postMultipleData = await prisma.post.createMany({
    data: [
      {
        title: "This is title 1",
        content: "This is content 1",
        author: "Tahmid Hasan",
        hashTag: "#dev",
      },
      {
        title: "This is title 2",
        content: "This is content 2",
        author: "Tahmid Hasan",
        hashTag: "#dev",
      },
      {
        title: "This is title 3",
        content: "This is content 3",
        author: "Tahmid Hasan",
        hashTag: "#dev",
      },
    ],
  });

  console.log();
};

operationalFunction();
