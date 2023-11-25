import Link from "next/link"

export default function Denkaanjou({ children }) {
    return (
        <html lang="en">
        <body>
        <section>
            <nav>Hier komt de <Link href="/">uitlog</Link> functie</nav>
            {children}
        </section>
        </body>
        </html>
    )
}