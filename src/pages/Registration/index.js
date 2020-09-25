import React from 'react';
import '../Registration/styles.css';

function Registration() {
    return (

        <div className="registration">
            <div className="registration-format">
                <h1>Participe do XVIII EPOPET</h1>
                <p>As inscrições são feitas através do Sistema Integrado de Gestão de Atividades Acadêmicas (SIGAA)da Universidade Federal do Rio Grande do Norte.</p>
                <p className="paragrafo-2">Clique no botão abaixo e veja como se inscrever no evento.</p>
                <div>
                    <a href="https://sigeventos.ufrn.br/sigeventos/login.xhtml"> <button value="teste" type='submit'>Inscreva-se Agora!</button></a>
                    
                </div>
            </div>
        </div>

    )
}
export default Registration;