import SectionWrapper from '../common/SectionWrapper';

export default function About() {
  return (
    <SectionWrapper className="bg-neutral-light py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            From Passion to Purpose
          </h2>
          <p className="text-lg text-neutral-dark mb-6 leading-relaxed">
            Founded in Kenya in 2022, BeeHive Essentials was born from a simple truth: 
            healthy bees mean healthy food and a healthy planet.
          </p>
          <p className="text-lg text-neutral-dark mb-6 leading-relaxed">
            We partner with local carpenters and beekeepers to create high-quality, 
            affordable equipment that helps both new and experienced beekeepers succeed 
            — while protecting our precious pollinators.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-10">
            <div>
              <h3 className="text-4xl font-bold text-primary">2,000+</h3>
              <p className="text-neutral-dark">Happy Beekeepers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-accent">50,000+</h3>
              <p className="text-neutral-dark">Trees Planted</p>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1598977747694-5a88f2d3b87f?w=800&h=1000&fit=crop"
            alt="Kenyan beekeeper smiling with hive in natural setting"
            className="w-full rounded-2xl shadow-2xl object-cover h-96 lg:h-full"
            loading="lazy"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}