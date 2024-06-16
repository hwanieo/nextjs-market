export default function CommonPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-[calc(100vh-62px)] items-center">
      {children}
    </div>
  );
}
