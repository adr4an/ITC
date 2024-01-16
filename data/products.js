export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    } 
  });

  return matchingProduct;
}

export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "ukay/ukay1.jpg",
    name: "Ukay-ukay 1",
    rating: {
      stars: 3.5,
      count: 1
    },
    priceCents: 3999,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "ukay/ukay2.jpg",
    name: "Ukay-ukay 2",
    rating: {
      stars: 3.5,
      count: 2
    },
    priceCents: 3999,
    keywords: [
      "sports",
      "basketballs"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "ukay/ukay3.jpg",
    name: "Ukay-ukay 3",
    rating: {
      stars: 3.5,
      count: 1
    },
    priceCents: 3999,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "ukay/ukay4.jpg",
    name: "Ukay-ukay 4",
    rating: {
      stars: 3.5,
      count: 3
    },
    priceCents: 3999,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "ukay/ukay5.jpg",
    name: "Ukay-ukay 5",
    rating: {
      stars: 3.5,
      count: 2
    },
    priceCents: 3999,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "ukay/ukay6.jpg",
    name: "Ukay-ukay 6",
    rating: {
      stars: 3.5,
      count: 1
    },
    priceCents: 3999,
    keywords: [
      "kitchen",
      "cookware"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "ukay/ukay7.jpg",
    name: "Ukay-ukay 7",
    rating: {
      stars: 4,
      count: 1
    },
    priceCents: 4999,
    keywords: [
      "hoodies",
      "sweaters",
      "apparel"
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "ukay/ukay8.jpg",
    name: "Ukay-ukay 8",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 4999,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "ukay/ukay9.jpg",
    name: "Ukay-ukay 9",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 4999,
    keywords: [
      "bathroom",
      "cleaning"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "ukay/ukay10.jpg",
    name: "Ukay-ukay 10",
    rating: {
      stars: 4,
      count: 2
    },
    priceCents: 4999,
    keywords: [
      "shoes",
      "running shoes",
      "footwear"
    ]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "ukay/pp5.jpg",
    name: "Ukay-ukay 11",
    rating: {
      stars: 4,
      count: 2
    },
    priceCents: 4999,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "ukay/pp2.jpg",
    name: "Ukay-ukay 12",
    rating: {
      stars: 4.5,
      count: 2
    },
    priceCents: 4999,
    keywords: [
      "accessories",
      "shades"
    ]
  }
];