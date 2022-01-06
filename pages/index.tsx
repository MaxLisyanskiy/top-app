import React, { useState } from "react";
import { Button, Htag, P } from "../components";
import { Rating } from "../components/Rating/Rating";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(3)

  return (
    <>
      <Htag tag="h1">Heyyyyyy</Htag>
      <Button appearence="primary" arrow="right">Primary</Button>
      <Button appearence="ghost" arrow="down">Ghost</Button>
      <P size="s">Max</P>
      <P>Max</P>
      <P size="l">Max</P>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}
