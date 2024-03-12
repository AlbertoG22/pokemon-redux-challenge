import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { PokemonDetailsPage } from '../pages/PokemonDetailsPage';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/details/:name' element={ <PokemonDetailsPage /> } />

            <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
    </>
  );
};
