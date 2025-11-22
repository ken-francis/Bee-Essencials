import Button from '../common/Button';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">BeeHive Essentials</h1>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#" className="text-neutral-dark hover:text-primary">Home</a>
          <a href="#" className="text-neutral-dark hover:text-primary">Products</a>
          <a href="#" className="text-neutral-dark hover:text-primary">About</a>
          <Button>Shop Now</Button>
        </div>
        <button className="md:hidden">☰</button>
      </div>
    </nav>
  );
}