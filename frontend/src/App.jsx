import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home';
import MainLayout from './Layouts/MainLayout';
import Errorboundary from './Componenets/Errorboundary';
import Login from './Pages/Login';
import Product from './Pages/Product'
import Register from './Pages/Register'
import Protected from './Componenets/Protected';
import ThemeProvider from './Context/ThemeProvider';
import Authcontextprovider from './Context/Authcontext';


const router = createBrowserRouter ([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Errorboundary />,
    children: [
      {index: true, element: <Home/>},
      {path: "products", element: <Protected>  <Product /> </Protected> }
    ]
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'register',
    element: <Register />
  }
  
])
function App() {
  
  return <Authcontextprovider>
            <ThemeProvider>
              <RouterProvider router={router} />
            </ThemeProvider>
        </Authcontextprovider>
}

export default App
