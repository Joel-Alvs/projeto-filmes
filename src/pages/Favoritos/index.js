import { useEffect, useState} from 'react';
import { Link} from 'react-router-dom';
import './favoritos.css'
import { toast } from 'react-toastify'
function Favoritos() {
    const [ filmes, setFilmes] = useState([])

    useEffect(()=> {
        const minhaLista = localStorage.getItem("@streamtv")
        setFilmes(JSON.parse(minhaLista) ||  [])

    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter( (item) => {
            return ( item.id !== id )
        })
        setFilmes(filtroFilmes);
        localStorage.setItem("@streamtv", JSON.stringify(filtroFilmes));
        toast.success("Filme removido com sucesso!");

    }

    return (
        <div className="meus-filmes">
            <h1>Filmes Favoritos</h1>

            {filmes.length === 0 && <p>Você ainda nao possui nenhum filme salvo</p>}

            <ul>
                {filmes.map((item) => {
                    return(
                        <li key={item.id}>

                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filmes/${item.id}`}>Ver detalhes</Link>
                                <button onClick={ () => excluirFilme(item.id) }>Remover</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;