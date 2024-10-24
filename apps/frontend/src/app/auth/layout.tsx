export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div className="max-w-3xl mx-auto">
        {children}
    </div>
    );
  }