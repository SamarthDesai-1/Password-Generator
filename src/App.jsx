import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { passwordGeneratorActions } from './Store/passwordGeneratorSlice';
import Container from './Container';

function App() {

  const STRONG = useSelector((store) => store.password);
  const dispatch = useDispatch();

  const handleReduxActions = async () => {
    dispatch(passwordGeneratorActions.generate());
  }


  return (
    <>
      <Container>
        <h3 className='app-heading'>Password Generator</h3>
        <div className="container">
          <div className="password-container">

            <span id='password'>{STRONG}</span>

            <div className="btn-container">
              <button className='btn btn-warning btn-standard' onClick={handleReduxActions}>Generate</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default App;

