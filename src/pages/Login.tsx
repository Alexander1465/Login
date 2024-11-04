import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom'
import Home from './Home';

function Login() {

    const [data, setData] = React.useState({
        usuario: '', 
        constraseña: '',
        verific: 0,     
     });

      const bduser ='alexander'
      const bdpasswd ='1234'
      const navigate = useNavigate()


      const handleSubmit = (e:any) => {
        e.preventDefault()
        if (data.usuario == bduser && data.constraseña == bdpasswd) {
            setData({ ...data, verific: 1 });
            navigate('Home');
        } else {
            setData({ ...data, verific: 2 });
            navigate('Reports');
        }  
    }

    

 return (

    <Box onSubmit={handleSubmit} sx={{ padding: '20px' }} component="form">
        <TextField
            required
            fullWidth
            label="usuario"
            value={data.usuario}
            onChange={(e) => setData({ ...data, usuario: e.target.value })}
        />
        <TextField
            required
            fullWidth
            label="constraseña"
            type='password'
            value={data.constraseña}
            onChange={(e) => setData({ ...data, constraseña: e.target.value })}
            />
        <Button variant='contained' fullWidth type='submit'>Acceder</Button>
        { data.verific !== 0 && (
            data.verific === 1 ? (
                <Alert severity="success">Acceso concedido</Alert>
            ) : (
                <Alert severity="error">Usuario o contraseña incorrectos</Alert>
            )
        )
        }


    </Box>

 )
}

export default Login;
