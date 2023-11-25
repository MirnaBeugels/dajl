import Link from "next/link"

export default function Patient({ children }) {
    return (
        <>
        <section>
            {children}
        </section>
        <section>
            <Link href="./instellingen">Instellingen</Link> | <Link href="./home">Home</Link> | <Link href="./lichtjes">Lichtjes</Link>
        </section>
        </>
    )
}