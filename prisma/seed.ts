import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const newProducts = await prisma.product.createMany({
    data: [
      {
        name: "Red Dress",
        color: "red",
        category: "clothes",
        SubCategory: "dresses",
        price: 199,
        size: "s",
        image: "/red-dress.jpg",
      },
      {
        name: "Beige Hoodie",
        color: "beige",
        category: "clothes",
        subCategory: "tops",
        price: 299,
        size: "m",
        image: "/beige-hoodie.jpg",
      },
      {
        name: "Black Heels",
        color: "black",
        category: "shoes",
        subCategory: "heels",
        price: 599,
        shoeSize: "SIZE_39",
        image: "/black-heels.jpg",
      },
      {
        name: "Black T-shirt",
        color: "black",
        category: "clothes",
        subCategory: "tops",
        price: 199,
        size: "s",
        image: "/black-t-shirt.jpg",
      },
      {
        name: "Blue Sneakers",
        color: "blue",
        category: "shoes",
        subCategory: "flats",
        price: 899,
        shoeSize: "SIZE_44",
        image: "/blue-sneakers.jpg",
      },
      {
        name: "Gray Dress",
        color: "gray",
        category: "clothes",
        subCategory: "dresses",
        price: 399,
        size: "m",
        image: "/gray-dress.jpg",
      },
      {
        name: "Gray Suit",
        color: "gray",
        category: "clothes",
        subCategory: "pants",
        price: 799,
        size: "xl",
        image: "/gray-suit.jpg",
      },
      {
        name: "Pink Pants",
        color: "pink",
        category: "clothes",
        subCategory: "pants",
        price: 299,
        size: "xs",
        image: "/pink-pants.jpg",
      },
      {
        name: "White t-shirt with print",
        color: "white",
        category: "clothes",
        subCategory: "tops",
        price: 99,
        size: "m",
        image: "/white-blue-t-shirt.jpg",
      },
      {
        name: "White Dress",
        color: "white",
        category: "clothes",
        subCategory: "dresses",
        price: 499,
        size: "l",
        image: "/white-dress.jpg",
      },
      {
        name: "White poncho",
        color: "white",
        category: "clothes",
        subCategory: "tops",
        price: 349,
        size: "l",
        image: "/white-poncho.jpg",
      },
      {
        name: "White sneakers",
        color: "white",
        category: "shoes",
        subCategory: "flats",
        price: 699,
        shoeSize: "SIZE_39",
        image: "/white-sneakers.jpg",
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
