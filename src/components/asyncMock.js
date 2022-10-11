const products = [
  {
    id: "1",
    name: "Potus",
    price: 800,
    category: "Plantas",
    img: "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1664990759/feey-gTMnUAkPvlQ-unsplash_1_kg9ehh.jpg",
    stock: 10,
    description: "Planta de interior",
  },
  {
    id: "2",
    name: "Monstera",
    price: 1200,
    category: "Plantas",
    img: "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1664990869/feey-bwsTJMnhcwE-unsplash_2_ee9pwm.jpg",
    stock: 8,
    description: "Planta de interior",
  },
  {
    id: "3",
    name: "Gomero",
    price: 1300,
    category: "Plantas",
    img: "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1664990934/feey-OtO7x_yL9qM-unsplash_1_xsoo3a.jpg",
    stock: 12,
    description: "Descripcion",
  },
  {
    id: "4",
    name: "Gomero v.",
    price: 1300,
    category: "Plantas",
    img: "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1665512571/feey-leLyXEKXjMY-unsplash_1_o9mmzr.jpg",
    stock: 5,
    description: "Descripcion",
  },
  {
    id: "5",
    name: "Calathea",
    price: 1250,
    category: "Plantas",
    img: "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1665512758/feey-rGdSwVibhiQ-unsplash_1_fvctwb.jpg",
    stock: 5,
    description: "Descripcion",
  },
  {
    id: "6",
    name: "Sansi",
    price: 1250,
    category: "Plantas",
    img: "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1665513476/feey-k3jEtUmKhJo-unsplash_1_rxceel.jpg",
    stock: 8,
    description: "Descripcion",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};
