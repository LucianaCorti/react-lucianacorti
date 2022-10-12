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
    description: "Planta de interior/exterior",
  },
  {
    id: "3",
    name: "Gomero",
    price: 1300,
    category: "Plantas",
    img: "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1664990934/feey-OtO7x_yL9qM-unsplash_1_xsoo3a.jpg",
    stock: 12,
    description: "Planta de interior/exterior",
  },
  {
    id: "4",
    name: "Gomero v.",
    price: 1300,
    category: "Plantas",
    img: "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1665512571/feey-leLyXEKXjMY-unsplash_1_o9mmzr.jpg",
    stock: 5,
    description: "Planta de interior/exterior",
  },
  {
    id: "5",
    name: "Calathea",
    price: 1250,
    category: "Plantas",
    img: "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1665512758/feey-rGdSwVibhiQ-unsplash_1_fvctwb.jpg",
    stock: 5,
    description: "Planta de interior/exterior",
  },
  {
    id: "6",
    name: "Sansi",
    price: 1250,
    category: "Plantas",
    img: "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1665513476/feey-k3jEtUmKhJo-unsplash_1_rxceel.jpg",
    stock: 8,
    description: "Planta de interior/exterior",
  },
  {
    id: "7",
    name: "Ramo de girasoles",
    price: 1100,
    category: "ramos",
    img: "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1665602302/sandy-iqinZIuXVag-unsplash_1_ms8hdf.jpg",
    stock: 15,
    description: "Ramo de flores",
  },
  {
    id: "8",
    name: "Ramo de rosas",
    price: 1250,
    category: "ramos",
    img: "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1665602305/jessie-daniella-aiNU4cA4UzQ-unsplash_1_ujxmge.jpg",
    stock: 2,
    description: "Ramo de flores",
  },
  {
    id: "9",
    name: "Ramo de tulipanes",
    price: 900,
    category: "ramos",
    img: "https://res.cloudinary.com/dvhvt4yk0/image/upload/v1665602756/slava-6-12MRO2ru0-unsplash_1_faw2c7.jpg",
    stock: 8,
    description: "Ramo de flores",
  }
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
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};
