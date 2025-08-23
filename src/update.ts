// import { PrismaClient } from "@prisma/client";
import client = require("./generated/client");

// Prisma Client instance
const prisma = new client.PrismaClient();

const updateFunction = async () => {
  //   const updateData = await prisma.post.update({
  //     where: { id: 9 },
  //     data: {
  //       title: "Updated Title",
  //       content: "Updated Content",
  //       author: "Updated Author",
  //       hashTag: "#updated",
  //     },
  //   });

  const updateMultipleData = await prisma.post.updateMany({
    where: { id: { in: [1, 2, 3] } },
    data: {
      title: "Updated Title",
      content: "Updated Content",
      author: "Updated Author",
      hashTag: "#updated",
    },
  });

  // update or insert data
  const updateOrInsert = await prisma.post.upsert({
    where: {
      // title: "This is title",
      id: 19,
    },
    create: {
      title: "Newly created title",
      content: "Newly created content",
      author: "Newly created author",
      hashTag: "#newlyCreated",
    },
    update: {
      title: "Updated title",
      content: "Updated content",
      author: "Updated author",
      hashTag: "#update",
    },
  });

  console.log(updateMultipleData);
};

updateFunction();
