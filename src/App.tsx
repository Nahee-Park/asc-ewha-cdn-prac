import { useState } from "react";
// import reactLogo from './assets/react.svg'
import cuteRabbit from "./assets/cute_rabbit.gif";
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <>
      {isSubmitted ? (
        <>
          <h1>🚀 킹갓제너럴 ACC EWHA Member {name} 🚀</h1>
          <div>
            <img src={cuteRabbit} alt="cute rabbit" />
          </div>
        </>
      ) : (
        <main>
          <h1>이름을 입력해주세요</h1>
          <form className="name-form">
            <input onChange={handleChange} className="name-input" />
            <button onClick={() => setIsSubmitted(true)}>입력</button>
          </form>
        </main>
      )}
    </>
  );
}

export default App;
