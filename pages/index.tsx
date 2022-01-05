import { Button } from "../components/Button/Button";
import { Htag } from "../components/Htag/Htag";


export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Heyyyyyy</Htag>
      <Button appearence="primary">Primary</Button>
      <Button appearence="ghost">Ghost</Button>
    </>
  );
}
