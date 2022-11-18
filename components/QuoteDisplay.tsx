import { QuoteData } from "./types/types";

export default function QuoteDisplay(props: QuoteData) {
    if (!props.content) {
        return (
            <div className="flex flex-col justify-center items-center w-96 h-44 font-serif font-medium rounded-md shadow-lg bg-slate-800 text-md">
                Loading...
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center w-96 h-44 rounded-md shadow-lg bg-slate-800">
            <p className="py-2 px-4 max-w-prose font-serif text-base font-medium text-center">
                "{props.content}"
            </p>
            <p className="flex items-center font-sans text-sm text-center">
                - {props.author}
            </p>
        </div>
    );
}
