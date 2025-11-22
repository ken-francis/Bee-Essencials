import SectionWrapper from '../common/SectionWrapper';
import Card from '../common/Card';

export default function NewProducts() {
  return (
    <SectionWrapper className="bg-neutral-light py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
          New Arrivals
        </h2>
        <p className="text-xl text-neutral-dark">
          Fresh gear for your buzzing season
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card
          title="Langstroth Hive Kit"
          price="KSh 24,999"
          image="https://images.unsplash.com/photo-1587049334527-0b2bc4c10c3f?w=600&h=800&fit=crop"
          alt="Wooden Langstroth beehive with frames"
        />
        <Card
          title="Ventilated Bee Suit"
          price="KSh 8,500"
          image="https://images.pexels.com/photos/5668770/pexels-photo-5668770.jpeg?w=600&h=800&fit=crop"
          alt="Professional beekeeper suit with veil"
        />
        <Card
          title="Honey Extractor (4-Frame)"
          price="KSh 38,000"
          image="https://images.unsplash.com/photo-1622030236174-729d81b433ede?w=600&h=800&fit=crop"
          alt="Stainless steel honey extractor"
        />
        <Card
          title="Smoker with Fuel"
          price="KSh 3,200"
          image="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?w=600&h=800&fit=crop"
          alt="Classic beekeeping smoker"
        />
      </div>
    </SectionWrapper>
  );
}