import QuotePage from "../components/QuotePage";

export default function Index() {
  return (
    <div className="h-screen w-screen">
      <QuotePage />

      <div className="flex justify-center">
        <footer className="text-center text-xs text-slate-500">
          <p>Julian Chong 2022</p>
        </footer>
      </div>
    </div>
  );
}
