import Button from '../common/Button';
import heroImage from '../../../public/images.jsx';

export default function Hero() {
  return (
    <section className="h-screen">
      <div className="relative h-full">
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="text-center text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
              Sustainable Beekeeping
              <br />
              Made Simple
            </h1>
            <p className="text-lg md:text-xl mt-4 mb-8 text-white/90">
              Premium hives, tools, and education for healthy bees and happy beekeepers.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Button>Shop Supplies</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}