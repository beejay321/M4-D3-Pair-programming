import "bootstrap/dist/css/bootstrap.min.css";
import MyBadge from "./components/myBadge";
import WarningSign from "./components/warningSign";
import BooksList from "./components/bookList";
import BOOKS from "./data/fantasy.json";
import FilterBookList from "./components/filterBookList";

function App() {
  return (
    <div>
      <WarningSign content="Its React BE CAREFUL!!!" />
      <MyBadge text="Fantasy Books" color="yellow" />
      <FilterBookList />
    </div>
  );
}

export default App;
