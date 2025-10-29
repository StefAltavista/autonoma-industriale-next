import Link from "next/link";
import { redirect } from "next/navigation";

export default function NotFoundCatchAll() {
  return (
    <>
      <h2 style={{ color: "red" }}>Mix Not found</h2>
      <Link href={"/mix-series"}>Back to list</Link>
    </>
  );
}
