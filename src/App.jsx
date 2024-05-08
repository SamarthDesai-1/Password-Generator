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
            {STRONG === "" ? <h1>Create Strong Password</h1> : <span id='password'>{STRONG}</span>}

            <div className="btn-container">
              <button className='btn btn-success btn-standard' onClick={handleReduxActions}>Generate</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default App;

