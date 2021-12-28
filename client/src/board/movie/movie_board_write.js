import NavbarSub from "../../component/NavbarSub";
import { useHistory } from "react-router";
import Board_Write from '../Board_Write'
import { useEffect } from "react";
import axios from "axios";

function Movie_board_write(params) {
    let history = useHistory();
    useEffect(()=>{
        axios.get('/api/login').then((res)=>{
            if(res.data==true){            
            }
            else{
                history.push('/login');
            }
        })
    },[])
    return(
        <div className="movie_board_write">
            <div className="wrap">
                <NavbarSub hover={'community'} page={'movie-board'} ></NavbarSub>
                <Board_Write type='movie'></Board_Write>
            </div>
        </div>
    )
}
export default Movie_board_write;