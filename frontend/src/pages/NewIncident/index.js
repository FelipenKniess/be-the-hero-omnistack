import React, {useState} from 'react';
import './styles.css';
import ImgLogo from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

export default function NewIncident(){
    const [titulo, setTitulo]           = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue]             = useState('');

    const ongId   = localStorage.getItem('ongId');
    const history = useHistory();

    async function handlerNewIncident(e){
        e.preventDefault();

        const data = {
            titulo,
            description,
            value,   
        }
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization:ongId,
                }
            });
            alert('Novo caso cadastrado');
            history.push('/profile');
        } catch (err) {
            alert('Erro no cadastro, tente novamente');
        }
    }
     
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={ImgLogo} alt="Be the Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handlerNewIncident}>
                    <input 
                        placeholder="Título do caso"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value = {description}
                        onChange = {e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Valor em reais"
                        value = {value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}