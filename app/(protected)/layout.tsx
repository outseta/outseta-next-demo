export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Not protected yet!
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {children}
    </main>
  );
}
