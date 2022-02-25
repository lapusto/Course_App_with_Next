import { GetStaticProps } from "next";
import {  useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number;
}

 function Home({}: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);


  return (
    <>
 <Htag tag="h1">fff</Htag>
 <Button arrow='right' appearance="primary">More...</Button>
 <Button appearance="ghost">...</Button>
 <P size='l'>Больщой</P>
 <P>Средний</P>
 <P size='s'>маленький</P>
 <Tag size="s" color="red">sm</Tag>
 <Tag size="m" color="green">большой</Tag>
 <Tag size="s" color="primary">smal</Tag>
 <Rating isEditable rating={rating} setRaiting={setRating} />
      </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

