import { useEffect, useState } from "react";
import QuoteDisplay from "./QuoteDisplay";
import { QuoteData } from "./types/types";

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
    <div className="flex flex-col justify-center items-center w-screen">
      <div className="py-3">
        <button
          className="border-solid rounded-md bg-slate-500 hover:bg-slate-700 p-2"
          onClick={callQuoteAPI}
        >
          Click Me
        </button>
      </div>
      <QuoteDisplay {...quote} />
    </div>
  );
}
