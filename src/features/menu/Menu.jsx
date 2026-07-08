import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../utils/apiRestaurant";

function Menu() {
  const menu = useLoaderData();

  console.log(menu);

  return (
    <div>
      <ul>
        {menu.map((pizza) => (
          <li key={pizza.id}>
            <img src={pizza.imageUrl} alt="" />
            <p>{pizza.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const data = await getMenu();

  return data;
}

export default Menu;
