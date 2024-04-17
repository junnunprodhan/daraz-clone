// ---------->> Data Interface  <<------------ \\

interface InputUser {
  name: string;
  username: string;
  password: string;
  email: string;
  address: {
    city: string;
    zip: string;
    state: string;
    division: string;
  };
  phone: string;
}

interface User {
  name: string;
  _id: string;
}

interface ShopInput {
  name: string;
  password: string;
  email: string;
  emailConfirmed: boolean;
  phone: string;
  phoneConfirmed: boolean;
  zipCode: number;
  city: string;
}

interface InputProduct {
  brand: string;
  color: string[];
  images: string[];
  thumbnail: string;
  discountPrice: number;
  price: number;
  rating: number;
  size: string[];
  stock: number;
  title: string;
  warranty: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Product extends InputProduct {
  _id: string;
  sku: string;
  shop: string;
}

interface CartProduct extends Product {
  quantity: number;
  totalPrice: number;
}
