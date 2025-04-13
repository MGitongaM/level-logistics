import ImageView from "@/components/next-cloudinary/ImageView";
import { products } from "@/StaticData/Products";

export default async function page({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const Item = products.find((item) => item.id == parseInt(product));
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        {Item != undefined ? (
          <div className="flex justify-evenly items-center gap-8">
            <div className="w-4/12">
              {/* <div className="w-full h-96 bg-slate-100 rounded-lg"></div> */}
              <ImageView
                imageSrc={Item.imagSrc}
                height={800}
                width={800}
                alt={Item.title}
                classNames="object-contain h-96 w-full bg-slate-100 hover:bg-slate-200 rounded-lg p-1"
              />
            </div>
            <div className="w-5/12">
              <p className="">
                {Item.details}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
