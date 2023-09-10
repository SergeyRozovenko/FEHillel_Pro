import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContainer from "./components/MainContainer/MainContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="flex">
        <Sidebar />
        <MainContainer>
          <h1>This is React APP</h1>
          <p>
            How are you?
          </p>
        </MainContainer>
      </section>
    </div>
  );
}

export default App;