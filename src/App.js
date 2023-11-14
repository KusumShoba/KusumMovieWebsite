import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Context from './Context';
import Home from './Home';
//import index from './index.css';
import Movie from './Movie';
import SingleMovie from './SingleMovie';
//import SingleMovie from './SingleMovie';
//import Header from './components/Header';
//import PageFooter from './components/Footer';
import "./App.css" ;

const App = () => {
return (
<Router>
{/*<Header></Header>*/}
<Routes>
<Route exact path='/' element={<Home />}></Route>
{/*<Route exact path='/about' element={<AboutUs />}></Route>
<Route exact path='/contact' element={<ContactUs />}></Route>
<Route exact path='/products' element={<Products />}></Route>

<Route exact path='/cart' element={<Cart />}> </Route>
<Route exact path='/checkout' element={<Checkout/>}></Route>
<Route exact path='/thankyou' element={<ThankYou/>}></Route> */}
<Route exact path='/movie/:id' element={<SingleMovie />}></Route>
</Routes>
{/*<PageFooter/>*/}
</Router>
 ); 
};
export default App;

 