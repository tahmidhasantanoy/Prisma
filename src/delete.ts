import client = require("./generated/client");

const prisma = new client.PrismaClient();

const deleteFunction = async () => {
  const deleteSpecificData = await prisma.post.delete({
    where: { id: 9 },
  });
};

deleteFunction();
