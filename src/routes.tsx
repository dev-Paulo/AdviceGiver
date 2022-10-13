
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { AdviceHome } from "./pages/advice-home";


export function AppRoutes() {
    return (     
        <Router>
            <Routes >                    
                <Route path="/" element={<AdviceHome />}/>                
                <Route path="*" element={<h1 className="h1">NOT FOUND PAGE</h1>}/>                 
            </Routes>
        </Router>        
    )
}