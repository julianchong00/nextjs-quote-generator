import { QuoteData } from "./types/types";

export default function QuoteDisplay(props: QuoteData) {
  if (!props.content) {
    return (
      <div className="h-44 w-96 bg-slate-800 rounded-md shadow-lg flex flex-col justify-center items-center font-serif font-medium text-md">
        Loading...
      </div>
    );
  }

  return (
    <div className="h-44 w-96 bg-slate-800 rounded-md shadow-lg flex flex-col justify-center items-center">
      <p className="text-center px-4 py-2 max-w-prose font-serif font-medium text-base">
        "{props.content}"
      </p>
      <p className="flex items-center text-center font-sans text-sm">
        - {props.author}
      </p>
    </div>
  );
}
