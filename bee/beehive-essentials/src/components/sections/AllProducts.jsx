import SectionWrapper from '../common/SectionWrapper';
import Card from '../common/Card';

export default function AllProducts() {
  const products = [
    { title: "Top Bar Hive", price: "KSh 18,500", img: "https://i.pinimg.com/736x/49/42/32/494232101002751b7e3d1efd38842087.jpg" },
    { title: "Bee Suit + Gloves", price: "KSh 9,999", img: "https://i.pinimg.com/736x/0b/7f/d5/0b7fd5f778bd94da207ecf667750972b.jpg" },
    { title: "8-Frame Extractor", price: "KSh 65,000", img: "https://i.pinimg.com/1200x/b7/22/ad/b722ad429d3720503dfd49e1d1edae63.jpg" },
    { title: "Queen Excluder", price: "KSh 1,800", img: "https://i.pinimg.com/1200x/0c/82/48/0c82484a64c2c622b439d1fe099f105f.jpg" },
    { title: "Bee Brush", price: "KSh 650", img: "https://i.pinimg.com/1200x/a8/b4/0c/a8b40c14876a16e74a82887f97a6eb2a.jpg" },
    { title: "Frame Grip", price: "KSh 950", img: "https://i.pinimg.com/1200x/3d/be/16/3dbe16cfe4fe2a8b01956c8ff6158aa8.jpg" },
    { title: "Honey Gate Valve", price: "KSh 2,200", img: "https://i.pinimg.com/1200x/c4/b7/16/c4b7161743a748a43d91bb5c011608ba.jpg" },
    { title: "Uncapping Knife", price: "KSh 3,500", img: "https://i.pinimg.com/736x/89/bd/d6/89bdd6ec37912d509e54c32f8e1f32a5.jpg" },
  ];

  return (
    <SectionWrapper className="bg-neutral-light py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
          All Products
        </h2>
        <p className="text-xl text-neutral-dark">
          Everything your apiary needs — from hive to harvest
        </p>
      </div>

      <div className="overflow-x-auto -mx-6 px-6">
        <div className="flex gap-6 py-4">
          {products.map((product, i) => (
            <div key={i} className="min-w-[260px] flex-shrink-0">
              <Card
                title={product.title}
                price={product.price}
                image={product.img}
                alt={product.title}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}