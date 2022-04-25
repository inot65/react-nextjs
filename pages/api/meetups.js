import {MongoClient} from "mongodb";

// ruta API : /api/meetups

async function handler(req, res) {
  if (req.method === "GET") {
    const data = req.body;

    // stocam datele intr-o baza de date
    const client = await MongoClient.connect(
      "mongodb+srv://toni:2PeY0uYDGXs64WPe@cluster0.sulps.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    // obtin acces la colectia de "meetups"
    const meetupCollection = db.collection("meetups");

    // obtin toata colectia

    const result = await meetupCollection.insertOne(data);

    console.log("Rezultatul interogarii este continut in result:", result);

    // inchid conexiunea
    client.close();

    // trimit inapoi un raspuns cu "res"
    res.status(201).json({message: "Am obtinut lista de intalniri!"});
  }
}

export default handler;
