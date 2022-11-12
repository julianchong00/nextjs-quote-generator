import { useEffect, useState } from "react";
import QuoteDisplay from "./QuoteDisplay";
import { QuoteData } from "./types/types";
import { FaDiceFive } from "react-icons/fa";

export default function QuotePage() {
  const [quote, setQuote] = useState({} as QuoteData);

  const callQuoteAPI = async () => {
    fetch("https://api.quotable.io/random?maxLength=170")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const quoteData: QuoteData = data;
        setQuote(quoteData);
      });
  };

  useEffect(() => {
    callQuoteAPI();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[95vh] gap-2">
      <QuoteDisplay {...quote} />
      <button
        className="border-solid rounded-full bg-slate-500 hover:bg-slate-700 p-3 -mt-5 scale-125"
        onClick={callQuoteAPI}
      >
        <FaDiceFive />
      </button>
    </div>
  );
}
