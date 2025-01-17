import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Highlights from "./components/hightlights";

const App = () => {
    return (
        <main className="bg-black">
            <Navbar />
            <Hero />
            <Highlights />
        </main>
    );
};

export default App;
