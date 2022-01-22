const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getPosts().map((post) => {
      return db.post.create({ data: post });
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
