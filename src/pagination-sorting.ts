import client = require("./generated/client");

const prisma = new client.PrismaClient();

const paginationSortingFunction = async () => {
  // offset pagination  || cons:  performance issue with large data sets
  const offsetPaginatedData = await prisma.post.findMany({
    skip: 3,
    take: 1,
  });

  // cursor pagination || cons: can't go to the previous page
  const cursorPaginatedData = await prisma.post.findMany({
    skip: 3,
    take: 3,
    cursor: {
      id: 22,
    },
  });
  //   console.log(offsetPaginatedData);
  console.log(cursorPaginatedData);
};

paginationSortingFunction();
