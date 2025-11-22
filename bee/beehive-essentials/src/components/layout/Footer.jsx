export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">BeeHive Essentials</h3>
        <p className="mb-6">Sustainable Beekeeping Supplies • Made in Kenya</p>
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="hover:text-accent">Products</a>
          <a href="#" className="hover:text-accent">About</a>
          <a href="#" className="hover:text-accent">Contact</a>
          <a href="#" className="hover:text-accent">Free Guide</a>
        </div>
        <p className="text-sm">&copy; 2025 BeeHive Essentials. All rights reserved.</p>
      </div>
    </footer>
  );
}