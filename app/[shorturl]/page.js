import { redirect, notFound } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const { shorturl } = await params;

  const client = await clientPromise;
  const db = client.db("bitlinks");
  const urlsCollection = db.collection("url");

  const urlDocument = await urlsCollection.findOne({ shorturl });
  if (urlDocument) {
    // Display "Redirecting you..." message briefly before redirecting
    return (
      <div>
        Redirecting you...
        {setTimeout(() => redirect(urlDocument.url), 1000)}
      </div>
    );
  } else {
    // Show the Next.js default 404 page if the short URL is not found
    notFound();
  }

  return null;
}
