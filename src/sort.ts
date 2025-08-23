import client = require("./generated/client");

const prisma = new client.PrismaClient();

const sortFunction = async () => {
  const sortedData = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      title: "Updated title",
    },
  });
  console.log(sortedData);
};

sortFunction();
