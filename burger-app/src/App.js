import "./App.css";
import CreateBurger from "./CreateBurger";
import { BurgerCompomentEnum, BurgerComponentEnum } from "./Resources";

function App() {
  return (
    <div className="App">
      <CreateBurger
        burgerStack={[
          BurgerCompomentEnum.LETTUCE,
          BurgerCompomentEnum.TOMATOES,
          BurgerCompomentEnum.CHEESE,
          BurgerCompomentEnum.LETTUCE,
          BurgerCompomentEnum.TOMATOES,
          BurgerCompomentEnum.TOMATOES,
        ]}
      />
    </div>
  );
}

export default App;
