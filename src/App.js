import { useEffect, useState } from 'react'
import quotes from './quotes.json'
const App = () => {
  const [currentQuote, setCurrentQuote] = useState(["", "", "#3498db"]);

  const genRandomQuote = () => {
  if (quotes.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex].q;
  const author = quotes[randomIndex].a;

  const randomColor = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
  
  return [quote, author, randomColor]; 
};

  useEffect(() => {
setCurrentQuote(genRandomQuote())
  },[])

  useEffect(() => {
  document.body.style.backgroundColor = currentQuote[2];
}, [currentQuote]);
  return (
    <div
  id="quote-box"
  style={{ color: currentQuote[2] }}
>
  <p id="text">
    <i className="fa-solid fa-quote-left"></i> {currentQuote[0]} <i className="fa-solid fa-quote-right"></i>
  </p>
  <p id="author">{currentQuote[1]}</p>
  <div className="quote-actions">
    <a
      href="https://twitter.com/intent/tweet"
      id="tweet-quote"
      target="_blank"
      rel="noreferrer"
      className="tweet-quote"
      style={{ backgroundColor: currentQuote[2] }}
    >
      <i className="fa-brands fa-x-twitter"></i>
    </a>
    <button
      className="new-quote"
      id="new-quote"
      onClick={() => setCurrentQuote(genRandomQuote())}
      style={{ backgroundColor: currentQuote[2] }}
    >
      New Quote
    </button>
  </div>

  <span className="name">Abdulkadir A.</span>
</div>

  )
}

export default App