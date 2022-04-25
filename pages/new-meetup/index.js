// domeniu.com/new-meetup

import {useRouter} from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {Fragment} from "react";
import Head from "next/head";

function NewMeetup() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    // console.log(enteredMeetupData);

    // trimit requestul la noul API
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log("Date primite DUPA inserare:", data);

    // ma intorc la pagina radacina
    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Adauga o noua intalnire</title>
        <meta name="description" content="Adauga o noua intalnire" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetup;
