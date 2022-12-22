function App() {
  const name = "James";
  const x = true;
  return (
    <div className="container">
      <h1>Hello from React</h1>
      <h2>Hello {name}</h2>
      <h2>{x ? "Yes" : "No"}</h2>
    </div>
  );
}

export default App;
