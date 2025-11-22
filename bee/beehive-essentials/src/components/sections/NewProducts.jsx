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
          image="//media.istockphoto.com/id/1127043292/photo/new-cypress-8-frame-langstroth-beehive-kit.jpg?s=612x612&w=is&k=20&c=Apz3hiTaF-L0rVDeXqnjai-wQlktnOqvHUEhwUDXBSA="
          alt="Wooden Langstroth beehive with frames"
        />
        <Card
          title="Ventilated Bee Suit"
          price="KSh 8,500"
          image="//images.unsplash.com/photo-1576765608250-c466ee3327af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8MTkyMCoxMDgwJTIwVmVudGlsYXRlZCUyMEJlZSUyMFN1aXR8ZW58MHx8MHx8fDA%3D"
          alt="Professional beekeeper suit with veil"
        />
        <Card
          title="Honey Extractor (4-Frame)"
          price="KSh 38,000"
          image="//media.istockphoto.com/id/1297163128/photo/the-extractor-full-of-honeycombs-before-starting.jpg?s=1024x1024&w=is&k=20&c=UGqxNbsVJhFe5ThQrDHvJEGml_vcb-pefqIgsjyXlRU="
          alt="Stainless steel honey extractor"
        />
        <Card
          title="Smoker with Fuel"
          price="KSh 3,200"
          image="//media.istockphoto.com/id/506762929/photo/bee-smoker-on-a-wood-pile.jpg?s=612x612&w=is&k=20&c=-l3iGuhycxVg0tzH3WQFoY_zgW_u03N3tGTdFNW4Ye8="
          alt="Classic beekeeping smoker"
        />
      </div>
    </SectionWrapper>
  );
}