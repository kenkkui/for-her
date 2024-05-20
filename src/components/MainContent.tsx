interface MainContentProps {
  src?: string;
  alt?: string;
  children: React.ReactNode;
}

export default function MainContent({ src, alt, children }: MainContentProps) {
  return (
    <div className="main-content">
      {children}
      <img src={src} alt={alt} />
    </div>
  );
}
