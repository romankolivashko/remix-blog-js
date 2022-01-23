const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const john = await prisma.user.create({
    data: {
      username: "john",
      // Hash for password - twixrox
      passwordHash:
        "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u",
    },
  });

  await Promise.all(
    getPosts().map((post) => {
      const data = { userId: john.id, ...post };
      return prisma.post.create({ data });
    })
  );
}

seed();

function getPosts() {
  return [
    {
      title: "I had a great weekend in Seattle",
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nostrum consectetur quisquam illum doloribus, veritatis quam nobis accusamus repellat obcaecati sint cum eum recusandae fuga, iure cupiditate, molestiae est error?`,
    },
    {
      title: "We are going on a road trip",
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nostrum consectetur quisquam illum doloribus, veritatis quam nobis accusamus repellat obcaecati sint cum eum recusandae fuga, iure cupiditate, molestiae est error?`,
    },
    {
      title: "Best food around Portland",
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nostrum consectetur quisquam illum doloribus, veritatis quam nobis accusamus repellat obcaecati sint cum eum recusandae fuga, iure cupiditate, molestiae est error?`,
    },
    {
      title: "Sometimes weather stands on the way",
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nostrum consectetur quisquam illum doloribus, veritatis quam nobis accusamus repellat obcaecati sint cum eum recusandae fuga, iure cupiditate, molestiae est error?`,
    },
  ];
}
