/* eslint-disable react/jsx-no-target-blank */
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import PlayerList from './players/playersList'
import AddPlayer from './players/addPlayer'
import Details from './players/details'
import RegisterUser from './users/register'
import Login from './auth/login'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/listPlayer" element={<PlayerList />}></Route>
            <Route path="/addPlayer" element={<AddPlayer />}></Route>
            <Route path="/users" element={<RegisterUser />}></Route>
            <Route path="auth/login" element={<Login />}></Route>
            <Route path='/editPlayer/:_id' element={<AddPlayer/>}></Route>
            <Route path='/details/:_id' element={<Details/>}></Route>
            <Route path="*" element={ <h1> Error 404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router;