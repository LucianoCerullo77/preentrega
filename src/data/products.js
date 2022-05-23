export const products = [
    {
      id: 1,
      title: "Keyboard Redragon K552 Kumara Rainbow Switch Red",
      stock: 3,
      price: 4.819,
      image: "/images/Teclado-Gamer-Redragon-K552-Kumara-RGB-Rainbow-Red_41191_1.jpeg",
      category_id: 1,
    },
    {
      id: 2,
      title: "Mouse Gamer Logitech G Pro Hero Gaming",
      stock: 2,
      price: 3.729,
      image: "/images/gpro hero.jpeg",
      category_id: 2,
    },
    {
      id: 3,
      title: "MousePad Redragon P030 Flick Medium",
      stock: 10,
      price: 1.259,
      image: "/images/flick mediano.jpeg",
      category_id: 3,
    },
    {
      id: 4,
      title: "PC MX7 Amd Ryzen 5 3600-16Gb-GTX1660Ti",
      stock: 1,
      price: 163.349,
      image: "/images/ryzen51660.jpeg",
      category_id: 4,
    },
    {
      id: 5,
      title: "Keyboard Redragon K530 Draconic Rgb Wireless",
      stock: 3,
      price: 7.339,
      image: "/images/redragon k530 draconic.jpeg",
      category_id: 1,
    },
    {
      id: 6,
      title: "Mouse Gamer Logitech G Pro X Superlight White",
      stock: 2,
      price: 14.699,
      image: "/images/gproX blanco.jpeg",
      category_id: 2,
    },
    {
      id: 7,
      title: "MousePad Redragon P029 Flick Small",
      stock: 10,
      price: 849,
      image: "/images/redragon small.jpeg",
      category_id: 3,
    },
    {
      id: 8,
      title: "PC MX9 Amd Ryzen 7 4750G-32Gb-RTX3060Ti",
      stock: 1,
      price: 267.088,
      image: "/images/ryzen73060.jpeg",
      category_id: 4,
    },
    {
      id: 9,
      title: "Keyboard Redragon K585 Diti Rgb Switch Brown",
      stock: 3,
      price: 25000,
      image: "/images/teclado-gamer-rgb-redragon_42232_1.jpeg",
      category_id: 1,
    },
    {
      id: 10,
      title: "Mouse Gamer Logitech G Pro X Superlight Black",
      stock: 2,
      price: 14.759,
      image: "/images/gproX negro.jpeg",
      category_id: 2,
    },
    {
      id: 11,
      title: "MousePad Redragon P032 Flick Extra Large",
      stock: 10,
      price: 3.099,
      image: "/images/redragon flick.jpeg",
      category_id: 3,
    },
    {
      id: 12,
      title: "PC MX555 Intel Core i3 10100-8Gb-RTX3050",
      stock: 1,
      price: 159.439,
      image: "/images/i33050.jpeg",
      category_id: 4,
    },
    {
      id: 13,
      title: "Keyboard Redragon K552W Kumara Rainbow Switch Red",
      stock: 1,
      price: 4.849,
      image: "/images/teclado-redragon-white-rainbow_41192_5.jpeg",
      category_id: 1,
    },
  ];

  export const getData = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 3000)
  })