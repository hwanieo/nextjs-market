export default function Auth({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[calc(100vh-62px)]  items-center justify-center">
      {children}
    </div>
  );
}
