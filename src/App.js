
import { useState } from 'react';
import './App.css';

function App() {
  const [sentence, setSentence] = useState('');
  const [grammar, setGrammar] = useState("Hello ");
  const [typing, setTyping] = useState(false);
  const [tags, setTags] = useState([]);
  const fetchGrammer = async () => {
    await fetch('http://127.0.0.1:5000/detect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "sentence": sentence })
    }).then((response) => response.json())
      .then((data) => {
        console.log(data)
        setGrammar(JSON.stringify(data))
        setTags(data.tags)
        console.log(tags)
      })
  }
  const timer = () => setTimeout(setTyping(false), 5000);
  return (
    <div className="App">
      <h1>Crazy Typer</h1>
      <div className="base">
        <textarea className='textarea'
          onChange={(e) => {
            setSentence(e.target.value)
          }}
        />
        <button
          className='grammarbtn'
          onClick={fetchGrammer}>
          Find Grammar
        </button>
        <div className='pred-area'>
          {tags.length > 0 && <div className='predicted-noun'>
            {tags.map((e) => {
              return (
                <div className='tags'>
                  {e.map((e) => {
                    if (e === 'NN') {
                      return <span className='tag'>Noun</span>
                    }
                    else if (e === 'VB') {
                      return <span className='tag'>Verb</span>
                    }
                    else if (e === 'VBP') {
                      return <span className='tag'>Verb Present</span>
                    }
                    else if (e === 'JJ') {
                      return <span className='tag'>Adjective</span>
                    }
                    else if (e === 'RB') {
                      return <span className='tag'>Adverb</span>
                    }
                    else if (e === 'PRP') {
                      return <span className='tag'>Pronoun</span>
                    }
                    else if (e === 'PRP$') {
                      return <span className='tag'>Pronoun</span>
                    }
                    else if (e === 'IN') {
                      return <span className='tag'>Preposition</span>
                    }
                    else if (e === 'CC') {
                      return <span className='tag'>Conjunction</span>
                    }
                    else if (e === 'DT') {
                      return <span className='tag'>Determiner</span>
                    }
                    else if (e === 'TO') {
                      return <span className='tag'>To</span>
                    }
                    else if (e === 'MD') {
                      return <span className='tag'>Modal</span>
                    }
                    else if (e === 'EX') {
                      return <span className='tag'>Existential</span>
                    }
                    else if (e === 'CD') {
                      return <span className='tag'>Cardinal</span>
                    }
                    else if (e === 'FW') {
                      return <span className='tag'>Foreign</span>
                    }
                    else if (e === 'LS') {
                      return <span className='tag'>List</span>
                    }
                    else if (e === 'UH') {
                      return <span className='tag'>Interjection</span>

                    }
                    else if (e === 'POS') {
                      return <span className='tag'>Possessive</span>
                    }
                    else if (e === 'WP') {
                      return <span className='tag'>Wh-pronoun</span>
                    }
                    else if (e === 'WP$') {
                      return <span className='tag'>Possessive</span>
                    }
                    else if (e === 'WRB') {
                      return <span className='tag'>Wh-pronoun</span>
                    }
                    else if (e === 'NNP') {
                      return <span className='tag'>Noun</span>
                    }
                    else { return (<div className='word'>{e}</div>) }
                  })}
                </div>
              )
            })}
            {/* <div className='tags'> hello</div> */}

          </div>
          }

          {/* <div className='predicted-tags'>
            <div className='tags'>Bad</div>
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default App;
