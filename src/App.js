import React,{useEffect} from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import {FiSettings} from 'react-icons/fi'
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Footer } from "./components"

import './App.css'
import { useStateContext } from "./components/contexts/ContextProvider";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Side } from "@syncfusion/ej2/svg-base";
import Ecommerce from "./pages/Ecommerce";
import Orders from "./pages/Orders";
import Employees from "./pages/Employees";
import Customer from "./pages/Customer";
import Kanban from "./pages/Kanban";
import Editor from "./pages/Editor";
import Calender from "./pages/Calender";
import ColorPicker from "./pages/ColorPicker";
import Line from "./pages/Charts/Line";
import Area from "./pages/Charts/Area";
import Bar from "./pages/Charts/Bar";
import Pie from "./pages/Charts/Pie";
import Financial from "./pages/Charts/Financial";
import ColorMapping from "./pages/Charts/ColorMapping";
import Pyramid from "./pages/Charts/Pyramid";
import Stacked from "./components/charts/Stacked";
import ThemeSettings from "./components/ThemeSettings";

const App=()=>{
    const {activeMenu,themeSettings,setThemeSettings,currentColor,currentMode}=useStateContext();
   
    return(

        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
            <div className="flex relative ">
                <div className="fixed right-4 bottom-4" style={{zIndex:'1000'}}>
                    <TooltipComponent content="Settings" position="Top">
                        <button type="button" className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                        onClick={()=>setThemeSettings(true)}
                        style={{background:'blue',borderRadius:'50%'}}
                        >
                            <FiSettings/>
                        </button>

                    </TooltipComponent>
                </div>
                {activeMenu ?(
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg 
                    bg-white">
                        <Sidebar/>
                    </div>
                ):(
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar/> 
                    </div>
                )}
                <div className={`dark:bg-main-bg  min-h-screen w-full ${activeMenu  ? 'md:ml-72':'flex-2'}` }>
                <div className="fixed md:static bg-main-bg bg-dark navbar w-full">
                <Navbar/>
                </div>
             
                
                <div>
                  {themeSettings && <ThemeSettings/>}
                    <Routes>
                        {/*Dashoard*/}
                        <Route   exact path="/" element=''/>
                        <Route   exact path="/ecommerce" element={<Ecommerce/>}/>

                        {/*Pages*/}
                        <Route   path="/orders" element={<Orders/>}/>
                        <Route   path="/employees" element={<Employees/>}/>
                        <Route   path="/customers" element={<Customer/>}/>

                        {/*Apps*/}
                        <Route   path="/kanban" element={<Kanban/>}/>
                        <Route   path="/editor" element={<Editor/>}/>
                        <Route   path="/Calender" element={<Kanban/>}/>
                        <Route   path="/color-picker" element={<ColorPicker/>}/>
                        <Route path="/calendar" element={<Calender/>}/>
                       

                        {/*Charts*/}
                        <Route   path="/line" element={<Line/>}/>
                        <Route   path="/area" element={<Area/>}/>
                        <Route   path="/bar" element={<Bar/>}/>
                        <Route   path="/pie" element={<Pie/>}/>
                        <Route   path="/financial" element={<Financial/>}/>
                        <Route   path="/color-mapping" element={<ColorMapping/>}/>
                        <Route   path="/pyramid" element={<Pyramid/>}/>
                        <Route   path="/stacked" element={<Stacked/>}/>
                    </Routes>
                </div>
                </div>
            </div>
            </BrowserRouter>
        </div>
    )
}
export default App