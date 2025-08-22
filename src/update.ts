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

  console.log(updateMultipleData);
};

updateFunction();
