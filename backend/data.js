import bcrypt from "bcrypt";

const data = {
  users: [
    {
      name: "Francois",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: "1",
      name: "Nike Slim Shirt",
      slug: "nike-slim-shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "high quality product",
    },
    {
      //_id: "2",
      name: "Adidas Fit Shirt",
      slug: "adidas-fit-shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 100,
      brand: "Adidas",
      rating: 5.0,
      numReviews: 10,
      countInStock: 0,
      description: "high quality product",
    },
    {
      //_id: "3",
      name: "Nike Slim Pants",
      slug: "nike-slim-pants",
      category: "Pants",
      image: "/images/p3.jpg",
      price: 25,
      brand: "Nike",
      rating: 3,
      numReviews: 10,
      countInStock: 20,
      description: "high quality product",
    },
    {
      //_id: "4",
      name: "Adidas Fit Pants",
      slug: "adidas-fit-pants",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 65,
      brand: "Adidas",
      rating: 2.5,
      numReviews: 10,
      countInStock: 20,
      description: "high quality product",
    },
  ],
};

export default data;
