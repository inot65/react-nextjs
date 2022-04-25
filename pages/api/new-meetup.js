import {MongoClient} from "mongodb";

// ruta API : /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // stocam datele intr-o baza de date
    const client = await MongoClient.connect(
      "mongodb+srv://toni:2PeY0uYDGXs64WPe@cluster0.sulps.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    // obtin acces la colectia de "meetups"
    const meetupCollection = db.collection("meetups");

    // adaug un meetup in colectie

    const result = await meetupCollection.insertOne(data);

    console.log("Rezultatul adaugarii este continut in result:", result);

    // inchid conexiunea
    client.close();

    // trimit inapoi un raspuns cu "res"
    res.status(201).json({message: "Meetup inserted!"});
  }
}

export default handler;
