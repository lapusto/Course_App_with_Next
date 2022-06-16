import { firstLevelMenuItem } from "../interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import ProductsIcon from "./icons/products.svg";
import BooksIcon from "./icons/books.svg";
import { TopLevelCategory } from "../interfaces/page.interface";

export const firstLevelMenu: firstLevelMenuItem[] = [
    {
      route: "courses",
      name: "Курсы",
      icon: <CoursesIcon />,
      id: TopLevelCategory.Courses,
    },
    {
      route: "services",
      name: "Сервисы",
      icon: <ServicesIcon />,
      id: TopLevelCategory.Services,
    },
    {
      route: "books",
      name: "Книги",
      icon: <BooksIcon />,
      id: TopLevelCategory.Books,
    },
    {
      route: "products",
      name: "Товары",
      icon: <ProductsIcon />,
      id: TopLevelCategory.Products,
    }
  ];

  export const priceRub = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").concat(" ₽");
  
export const titleCounter = (number: number, titles: [string, string, string]) : string => {
  const cases = [2, 0, 1, 1, 1, 2]
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 
        : cases[(number % 10 < 5) ? number % 10 : 5]]
}