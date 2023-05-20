import Header from "./components/Header";
import Display from "./components/Display";

function App() {
  return (
    <div className="h-screen bg-black text-white grid place-items-center">
      <div className="p-8 w-1/4 font-mono">
        <Header />
        <Display />
      </div>
    </div>
  );
}

export default App;
