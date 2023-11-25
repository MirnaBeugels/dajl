import Link from "next/link"

export const metadata = {
    title: 'Denk aan jou',
    description: 'Stuur een denk aan jou lichtje',
}

export default function Page() {
  return <>
  
    <h1>Welkom bij het denk aan jou lampje</h1>
    <Link href="./patient/home">Patient home</Link> | <Link href="./verwant/lichtje-sturen">Verwant home</Link>

  </>
}
