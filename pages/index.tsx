import QuotePage from "../components/QuotePage";

export default function Index() {
    return (
        <div className="w-screen h-screen">
            <QuotePage />

            <div className="flex justify-center">
                <footer className="text-xs text-center text-slate-500">
                    <p>Julian Chong 2022</p>
                </footer>
            </div>
        </div>
    );
}
