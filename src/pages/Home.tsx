
import { useSelector } from 'react-redux'
// Importamos lo que necesitamos para el tipo del selector()
import { RootState} from '../store/index'
//Importamos las acciones que están en el fichero authSlice.ts
import { authActions } from '../store/authSlice';
import { Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
function Home(){
 //Almacenamos en la variable userData lo que obtenemos del store usando el hook useSelector
 const userData = useSelector((state: RootState) => state.authenticator)
 //Comprobamos por la consola qué obtenemos del store
 console.log(userData)
 const dispatch = useDispatch()
  const navigate = useNavigate()

 const handleClick = () => {
  dispatch(authActions.logout())
  navigate('/')
};

return(
  <>
    <Typography sx={{textAlign:"center"}}>Home de Ale, soy el usuario {userData.nombreUsuario} y tengo el rol de {userData.Rol}</Typography>
    <Button type="button" onClick={handleClick} fullWidth>Salir</Button>
  </>
);
}
export default Home;