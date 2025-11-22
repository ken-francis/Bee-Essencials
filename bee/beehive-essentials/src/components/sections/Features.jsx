import SectionWrapper from '../common/SectionWrapper';

export default function Features() {
  return (
    <SectionWrapper className="bg-white py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
          Why Choose BeeHive Essentials?
        </h2>
        <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
          Everything you need for healthy bees and abundant honey — sustainably sourced and expertly crafted.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Feature 1 */}
        <div className="text-center">
          <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl">Bee</span>
          </div>
          <h3 className="text-2xl font-bold text-neutral-dark mb-3">
            Eco-Friendly Materials
          </h3>
          <p className="text-neutral-dark">
            All hives and tools made from sustainable cedar wood and food-grade stainless steel.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl">Tool</span>
          </div>
          <h3 className="text-2xl font-bold text-neutral-dark mb-3">
            Complete Starter Kits
          </h3>
          <p className="text-neutral-dark">
            Everything a beginner needs — hive, frames, suit, smoker, and guidebook included.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-center">
          <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl">Leaf</span>
          </div>
          <h3 className="text-2xl font-bold text-neutral-dark mb-3">
            Expert Support
          </h3>
          <p className="text-neutral-dark">
            Free beekeeping course + lifetime WhatsApp support from experienced Kenyan beekeepers.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}