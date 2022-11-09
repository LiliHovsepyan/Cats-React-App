import {Routes, Route} from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/home";
import CategoryPage from "./pages/category";
import DetailPage from "./pages/DetailPage";

const App = () => {
    return (<div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/category/:name' element={<CategoryPage/>}/>
            <Route path='/cat/:id' element={<DetailPage/>}/>
        </Routes>
        <Footer/>
    </div>);
};

export default App;
