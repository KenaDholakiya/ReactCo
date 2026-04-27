import "./App.css";

let name="Kena";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello! {name}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing 
          elit. Dolor magnam repellendus expedita eos dolores 
          eveniet neque quaerat? Eligendi, laborum ea qui iste 
          temporibus est voluptas quidem et hic quaerat omnis 
          voluptates porro dicta officia.</p>
      </div>
    </>
  );
}

export default App;
