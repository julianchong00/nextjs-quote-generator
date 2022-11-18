import Head from "next/head";

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <>
            <Head>
                <title>Quote Generator</title>
                <meta name="description" content="Quote Generator Web App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-grow h-screen">{children}</main>
        </>
    );
}
