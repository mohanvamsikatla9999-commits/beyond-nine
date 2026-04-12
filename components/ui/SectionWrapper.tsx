interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative max-w-7xl mx-auto px-6 ${className}`}>
      {children}
    </section>
  );
}
