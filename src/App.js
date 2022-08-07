import './App.css';
import sisebuto from './img/rey_sisebuto.png'
import leogivildo from './img/rey_leogivildo.png'
import atanagildo from './img/rey_atanagildo.png'

function App() {
  let reyes = ['Sisebuto', 'Leogivildo', 'Atanagildo']

  return (
    <div className="App">
      <div class="container text-center mt-5">
        <div class="row">



          <div class="col-sm">
            <div className='fondo rounded pb-1 pt-2'>
              <img alt='Rey Sisebuto' src={sisebuto} />
              <p className='pt-3'>{reyes[0]}</p>
            </div>
          </div>

          <div class="col-sm">
            <div className='fondo rounded pb-1 pt-2'>
              <img alt='Rey Leogivildo' src={leogivildo} />
              <p className='pt-3'>{reyes[1]}</p>
            </div>

          </div>
          <div class="col-sm">
            <div className='fondo rounded pb-1 pt-2'>
              <img alt='Rey Atanagildo' src={atanagildo} />
              <p className='pt-3'>{reyes[2]}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
