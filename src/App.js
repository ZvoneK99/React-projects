
import './style.css';
import siteLogo from './logo.svg';  //const siteLogo ="./logo.svg";

console.log(siteLogo);

/** 1.vjezba
 * Napraviti varijablu name, i u HTML-u ispisati sljedeću poruku
 * "Pozdrav ja se zovem NAME"
 */

/**2.vjezba
 * napraviti varijablu color "yellow"
 * ne radi se u css; radi se u function
 */
  const name = "Zvone";
  const paragraphColor = "brown";
function App() {

  return (
    
    <div>
      <p className='paragraf'>Pozdrav moje ime je: {name}</p>
      <p style={{ color: paragraphColor }}>Ovo je moj prvi react app</p>
    </div>
  );
}

export default App;