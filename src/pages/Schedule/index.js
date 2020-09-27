import React from 'react';
import '../Schedule/styles.css';

function Schedule() {
    return (
        <div className="schedule-root">
            <h1>Cronograma</h1>
            <label for="toggle-1" className="info-principal">
                07/11 (SÁBADO)
            </label>
            <input type="checkbox" id="toggle-1" />
            <div id="mostra">
                <div>
                    <div className="schedule-hora"> 19:00 - 19:40
                        <div className="schedule-tipo">Abertura EPOPET 2020
                            <div>
                                <div className="schedule-titulo">Cerimônia de abertura e boas-vindas
                                <div className="schedule-palestrantes-resp">
                                        <div>Sandra Kelly de Araújo</div>
                                        <div>Elda Silva do Nascimento Melo (Pró-reitora);</div>
                                        <div>Almir Miranda</div>
                                        <div>Eliana da Silva Dantas</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="schedule-hora"> 19h50 - 20h50
                        <div className="schedule-tipo">Palestra I
                            <div>
                                <div className="schedule-titulo">Histórico e evolução dos grupos PET's na UFRN
                                <div className="schedule-palestrantes-resp">
                                        <div> Elda Silva do Nascimento Melo (Pró-reitora)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="schedule-hora">20h55 - 22h00
                        <div className="schedule-tipo">Atividades interativas e brindes
                            <div>
                                <div className="schedule-titulo">NÃO ESPECIFICADO NO CRONOGRAMA
                                <div className="schedule-palestrantes-resp">
                                        <div> NÃO ESPECIFICADO NO CRONOGRAMA</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <label for="toggle-2" className="info-principal">
                08/11 (DOMINGO)
            </label>
            <input type="checkbox" id="toggle-2" />
            <div id="mostra-2">
                <div>
                    <div className="schedule-hora"> 15h00 - 16h30
                        <div className="schedule-tipo">Minicurso
                            <div>
                                <div className="schedule-titulo">Educação financeira
                                <div className="schedule-palestrantes-resp">
                                        <div>Renan </div>
                                        <div>Monaiza Soares</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="schedule-hora"> 15h00 - 16h30
                        <div className="schedule-tipo">Minicurso
                            <div>
                                <div className="schedule-titulo">Ferramenta LaTeX
                                <div className="schedule-palestrantes-resp">
                                        <div>Zulaianny Regina de Araújo Azevedo</div>
                                        <div>Marcílio José Dantas Santos</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="schedule-hora"> 15h00 - 16h30
                        <div className="schedule-tipo">Minicurso
                            <div>
                                <div className="schedule-titulo">Programação com Python
                                <div className="schedule-palestrantes-resp">
                                        <div>Bruno de Souza Bezerra</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="schedule-hora"> 19h00 - 20h15
                        <div className="schedule-tipo">Palestra II
                            <div>
                                <div className="schedule-titulo">Saúde mental e adoecimento estudantil
                                <div className="schedule-palestrantes-resp">
                                        <div>Kesia Cristine Melo</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="schedule-hora"> Momento cultural
                        <div className="schedule-tipo">NÃO ESPECIFICADO NO CRONOGRAMA
                            <div>
                                <div className="schedule-titulo">NÃO ESPECIFICADO NO CRONOGRAMA
                                <div className="schedule-palestrantes-resp">
                                        <div>NÃO ESPECIFICADO NO CRONOGRAMA</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <label for="toggle-3" className="info-principal">
                14/11  (SÁBADO)
            </label>
            <input type="checkbox" id="toggle-3" />
            <div id="mostra-3">
                <div>
                <div className="schedule-hora"> 14h00 - 15h30
                        <div className="schedule-tipo">Minicurso
                            <div>
                                <div className="schedule-titulo">Ferramenta LaTeX
                                <div className="schedule-palestrantes-resp">
                                        <div>Zulaianny Regina de Araújo Azevedo</div>
                                        <div>Marcílio José Dantas Santos</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="schedule-hora"> 14h00 - 15h30
                    <div className="schedule-tipo">Minicurso
                            <div>
                                <div className="schedule-titulo">Programação com Python
                                <div className="schedule-palestrantes-resp">
                                        <div>Bruno de Souza Bezerra</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="schedule-hora">16h00 - 17h30
                        <div className="schedule-tipo">Minicurso
                            <div>
                                <div className="schedule-titulo">Fotografias
                                <div className="schedule-palestrantes-resp">
                                        <div>Ricardo (PET EE)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="schedule-hora">19h30 - 20h40
                        <div className="schedule-tipo">Palestra III
                            <div>
                                <div className="schedule-titulo">Identidade Petiana
                                <div className="schedule-palestrantes-resp">
                                        <div>Profa. Simone</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="schedule-hora">21h00 - 22h00
                        <div className="schedule-tipo">Momento cultural
                            <div>
                                <div className="schedule-titulo">Momento alusivo aos 10 anos do PET CoUrSe
                                <div className="schedule-palestrantes-resp">
                                        <div>Equipe de bolsistas e não bolsistas</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <label for="toggle-4" className="info-principal">
                22/11 (DOMINGO)
            </label>
            <input type="checkbox" id="toggle-4" />
            <div id="mostra-4">
                <div>
                <div className="schedule-hora"> 19h00 - 20h15
                        <div className="schedule-tipo">Palestra IV
                            <div>
                                <div className="schedule-titulo">NÃO ESPECIFICADO NO CRONOGRAMA
                                <div className="schedule-palestrantes-resp">
                                        <div>Djalma Alves da Mota</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="schedule-hora"> 20h30 - 22h00
                    <div className="schedule-tipo">Cerimônia de encerramento e outros comunicados
                            <div>
                                <div className="schedule-titulo">Eleição: nova sede
                                <div className="schedule-palestrantes-resp">
                                        <div>Bruno de Souza Bezerra</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Schedule;