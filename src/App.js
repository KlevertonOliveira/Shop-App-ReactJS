import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import {useGlobalContext} from './context';

function App() {

  const {isLoading, hasErrorOcurred} = useGlobalContext();

  if(isLoading){
    return <main>
      <h1 className='text-center'>LOADING...</h1>
    </main>
  }else if(hasErrorOcurred){
    return <main>
      <h1 className='text-center'>An Error Has Ocurred...</h1>
    </main>
  }

  return (
    <>
      <Navbar />
      <CartContainer/>
    </>
  );
}

export default App;
