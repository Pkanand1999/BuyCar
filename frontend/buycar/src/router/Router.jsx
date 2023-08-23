
import AuthPage from '../pages/AuthPage'
import Dashboard from '../pages/Dashboard'
import Postpage from '../pages/Postpage'
import Createpost from '../pages/Createpost'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Inventory from '../pages/Inventory'


function Router() {

  return (
    <>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
          <Route path="/post/:id" element={<PrivateRoute><Postpage/></PrivateRoute>} />
          <Route path="/create" element={<PrivateRoute><Createpost/></PrivateRoute>} />
          <Route path="/inventory" element={<PrivateRoute><Inventory/></PrivateRoute>} />
        </Routes>
    </>
  )
}

export default Router