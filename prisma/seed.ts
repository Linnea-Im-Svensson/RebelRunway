import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const newProducts = await prisma.product.createMany({
    data: [
      {
        name: "test",
        color: "red",
        category: "clothes",
        subCategory: "dresses",
        price: 199,
        size: "s",
        image: "/red-dress.jpg",
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
