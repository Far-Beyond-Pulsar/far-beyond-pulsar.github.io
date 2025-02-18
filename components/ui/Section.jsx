const Section = ({ children, className = "", dark = false }) => (
  <section className={`py-16 ${dark ? 'bg-neutral-950/50' : ''} ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

export default Section;