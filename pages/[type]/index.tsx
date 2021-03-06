import { GetStaticPaths, GetStaticProps } from "next";
import axios from 'axios';
import { MenuItem } from "../../interfaces/menu.interface";
import { withLayout } from "../../layout/Layout";
import { firstLevelMenu } from "../../helpers/helpers";


interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number;
}

 function Type(): JSX.Element {
 


  return (
    <>
 Type
      </>
  );
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async() => {
  
    return {
      paths: firstLevelMenu.map( m=> '/' + m.route),
      fallback: true
    };
  };

export const getStaticProps: GetStaticProps<TypeProps> = async () => {
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

