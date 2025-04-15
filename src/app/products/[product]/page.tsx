import ImageView from "@/components/next-cloudinary/ImageView";
import { products } from "@/StaticData/Products";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const Item = products.find((item) => item.id == parseInt(product));
  const relatedProducts=products.slice(0,5)
  
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        {Item != undefined ? (
          <div className="flex justify-evenly items-center gap-8">
            <div className="w-4/12">
              
              <ImageView
                imageSrc={Item.imagSrc}
                height={800}
                width={800}
                alt={Item.title}
                classNames="object-contain h-96 w-full bg-slate-100 hover:bg-slate-200 rounded-lg p-1"
              />
            </div>
            <div className="w-5/12">
              <p className="leading-7 px-4">{Item.details}</p>
              <div
                className="py-8 px-4 prose"
                dangerouslySetInnerHTML={{ __html: Item.moreDetails }}
              ></div>
            </div>
          </div>
        ) : null}
      <div className=" pt-20 pl-20">
        <p className="text-xl font-bold pb-10">Related Products</p>
        <div className="flex flex-wrap justify-evenly items-start gap-x-2 gap-y-20">
          {relatedProducts.map((product) => (
            // <Link href={`products/${product.id}`} key={product.id} className="w-2/12">
            <Link href={`/products/${product.id}`} key={product.id} className="w-2/12">
              <div >
                <ImageView
                  imageSrc={product.imagSrc}
                  height={800}
                  width={800}
                  alt={product.title}
                  classNames="object-contain h-64 w-full bg-slate-100 hover:bg-slate-200 rounded-lg p-1"
                />
                <div className="text- px-8 pt-4">
                  {/* <p className="text-lg font-semibold">KSH</p> */}
                  <p className="text- text-center font-semibold">
                    {product.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
