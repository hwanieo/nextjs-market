import { fetchAllProducts } from "@/app/lib/market/data";
import Image from "next/image";

export type Product = {
  id: string;
  title: string;
  content: string;
  image: string;
  address: string;
  price: number;
  views: number;
  createdDt: Date;
  updatedDt: Date;
  userId: string;
};

export default async function Home() {
  const products: Product[] = await fetchAllProducts();

  console.log(products);
  return (
    <main>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h4>{product.title}</h4>
            <Image
              src={product.image}
              width={200}
              height={300}
              alt={product.title}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
