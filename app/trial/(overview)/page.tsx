import Table from "@app/ui/Table";
import { fetchTrials } from "./actions";

const Page = async() => {
  const data = await fetchTrials();
  console.log(data);
  return (
    <Table data={data} cols={['Название соревнования', "Начало", "Окончание", "Судья"]}/>
  )
}

export default Page;