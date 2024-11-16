import { redirect, notFound } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const { shorturl } = await params;

  const client = await clientPromise;
  const db = client.db("bitlinks");
  const urlsCollection = db.collection("url");

  const urlDocument = await urlsCollection.findOne({ shorturl });

  if (urlDocument) {
    redirect(urlDocument.url);
  } else {
    notFound();
  }
}
