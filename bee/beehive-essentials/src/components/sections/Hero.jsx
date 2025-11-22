import Button from '../common/Button';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-green-50">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-neutral-dark mb-6">
          Sustainable Beekeeping<br />Made Simple
        </h1>
        <p className="text-xl text-neutral-dark mb-8 max-w-2xl mx-auto">
          Premium hives, tools, and education for healthy bees and happy beekeepers.
        </p>
        <div className="space-x-4">
          <Button>Shop Supplies</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  );
}