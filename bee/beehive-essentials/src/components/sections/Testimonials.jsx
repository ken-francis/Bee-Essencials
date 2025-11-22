import SectionWrapper from '../common/SectionWrapper';

export default function Testimonials() {
  return (
    <SectionWrapper className="bg-white py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
          What Beekeepers Say
        </h2>
        <p className="text-xl text-neutral-dark">
          Real stories from our growing community
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {/* Testimonial 1 */}
        <div className="bg-neutral-light/50 rounded-2xl p-8 shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gray-amber-200 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
              J.K
            </div>
            <div className="ml-4">
              <h4 className="font-bold text-neutral-dark">Jane Kamau</h4>
              <p className="text-sm text-gray-600">Nairobi, Kenya</p>
            </div>
          </div>
          <p className="text-neutral-dark italic">
            "My first hive from BeeHive Essentials gave me 25kg of honey in the first season! 
            The quality is amazing and the support team answers my questions within hours."
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-primary/5 rounded-2xl p-8 shadow-lg border border-primary/20">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-accent">
              M.O
            </div>
            <div className="ml-4">
              <h4 className="font-bold text-neutral-dark">Michael Otieno</h4>
              <p className="text-sm text-gray-600">Kisumu County</p>
            </div>
          </div>
          <p className="text-neutral-dark italic">
            "Best bee suit I've ever owned. Cool, durable, and the veil doesn't fog up. 
            Worth every shilling!"
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-neutral-light/50 rounded-2xl p-8 shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-2xl font-bold text-secondary">
              A.W
            </div>
            <div className="ml-4">
              <h4 className="font-bold text-neutral-dark">Amina Wanjiku</h4>
              <p className="text-sm text-gray-600">Machakos</p>
            </div>
          </div>
          <p className="text-neutral-dark italic">
            "As a beginner, I was nervous. Their starter kit + free course made everything so easy. 
            Now I have 6 thriving hives!"
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}