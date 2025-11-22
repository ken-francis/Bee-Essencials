import Button from '../common/Button';

export default function CTA() {
  return (
    <section className="bg-primary py-20 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Beekeeping Journey?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join 2,000+ Kenyan beekeepers who trust BeeHive Essentials for quality gear and expert support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="text-lg px-10 py-4">Shop All Products</Button>
          <Button variant="outline" className="text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-primary">
            Get Free Beginner Guide
          </Button>
        </div>
      </div>
    </section>
  );
}