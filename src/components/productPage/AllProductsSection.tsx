import { products } from "@/StaticData/Products";
import ImageView from "../next-cloudinary/ImageView";
import Link from "next/link";

export default function AllProductsSection() {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap justify-evenly items-center gap-x-2 gap-y-20">
          {products.map((product) => (
            <Link href={`products/${product.id}`} key={product.id} className="w-3/12">
              <div >
                {/* <div className="w-full h-96 bg-teal-300 rounded-lg"></div> */}
                <ImageView
                  imageSrc={product.imagSrc}
                  height={800}
                  width={800}
                  alt={product.title}
                  classNames="object-contain h-96 w-full bg-slate-100 hover:bg-slate-200 rounded-lg p-1"
                />
                <div className="text- px-8">
                  {/* <p className="text-lg font-semibold">KSH</p> */}
                  <p className="text-lg text-center font-semibold">
                    {product.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
