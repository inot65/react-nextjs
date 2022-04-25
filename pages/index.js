// domeniu.com/

import {MongoClient} from "mongodb";
import Head from "next/head";
import {Fragment} from "react";

import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Aplicatie React Meetups</title>
        <meta
          name="description"
          content="Aplicatie didactica de invatare React cu NextJS"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;

//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // stocam datele intr-o baza de date
  const client = await MongoClient.connect(
    "mongodb+srv://toni:2PeY0uYDGXs64WPe@cluster0.sulps.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  // obtin acces la colectia de "meetups"
  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 3,
  };
}

export default HomePage;
