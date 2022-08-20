import { Contact, Container, Cv, Me } from "./styles";
import whats from "../../assets/whats.png";
import linkedin from "../../assets/linkedin.png";
import gmail from "../../assets/gmail.png";
import git from "../../assets/github.png";
import { useState } from "react";

export const AboutMe = () => {
  const [option, setOption] = useState("");
  return (
    <Container>
      <h1>Sobre mim!</h1>
      <div className='options'>
        <button
          onClick={() => {
            setOption("bio");
          }}>
          Bio
        </button>
        <button
          onClick={() => {
            setOption("exp");
          }}>
          CV
        </button>
      </div>
      {option === "exp" ? (
        <Cv>
          <div className='exp'>
            <h2>Experiência</h2>
            <p>Kenzie Academy Brasil - Faciltador jr</p>
            <span>02 DE 2022 - 08 DE 2022</span>
            <p>
              Acompanhamento de alunos no processo de aprendizagem de
              tecnologias de Desenvolvimento Front-end: HTML, CSS, Javascript e
              React; Liderança de equipes de monitores a fim de direcioná-los a
              dar o melhor auxílio para os devs em formação. Back-end auxiliava
              na criação de APIs utilizando NodeJS e Prisma.
            </p>
          </div>
          <div className='form'>
            <h2>Formação</h2>
            <p>
              Kenzie Academy Brasil - Desenvolvimento Web Fullstack
              <span>07 DE 2021 - 07 DE 2022, REMOTO</span>
            </p>
            <p>
              Senac - Desenvolvimento de jogos digitais
              <span>09 DE 2019 - 09 DE 2021, LOCAL</span>
            </p>
          </div>
          <div className='quali'>
            <h2>Síntese das qualificações</h2>
            <p>
              Minha relação com a tecnologia começou em 2019 e desde de lá venho
              buscando aprender e evoluir cada vez mais nessa área porque é o
              que realmente gosto de fazer. Meu objetivo é trabalhar como
              full-stack developer e crescer cada vez mais na área.
            </p>
            <p>Tenho conhecimentos em:</p>
            <p>
              Front-end: HTML, CSS, C#, .NET, JavaScript, Typescript, React,
              Redux
            </p>
            <p>
              Back-end: Python, Flask, Node, Prisma, TypeORM, SQL, PostgreSQL,
              docker
            </p>
            <p>Metodologias ágeis: Scrum, Kanban</p>
            <p>Idiomas:Português nativo e Inglês avançado </p>
          </div>
        </Cv>
      ) : (
        <Me>
          <h2>Bio</h2>
          <p>
            Sou uma pessoa muito alto astral, gosto de deixar as coisas sempre
            animadas e confortáveis para todos ao meu redor, também gosto de
            aprender sempre mais, então quando me mostram ferramentas,
            frameworks, novas linguagens ou novos conteúdos eu sempre dou a
            devida atenção pois todo conhecimento sempre sera bem vindo. Desde
            de pequeno gosto muito de tecnologia e sempre fui fascinado por esse
            mundo, a principio eu queria trabalhar com robótica, ate que entrei
            na área de programação e acabei gostando muito mais de mexer com os
            software. Meu primeiro contato foi com programação de jogos digitais
            em 2019, mas me aprofundei na área em 2021 quando entrei na
            <> </>
            <a
              target='blank'
              href='https://kenzie.com.br/?trk_src=x&trk_cmp=18000265428&trk_grp=&trk_ad=&trk_kw=&utm_term=&utm_campaign=CAP-M0AC11-MAX&utm_source=adwords&utm_medium=ppc&hsa_acc=2166776305&hsa_cam=18000265428&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwxveXBhDDARIsAI0Q0x3ldv7MuZjrJy_fU5obEEBGjDxW00aNusbcnHEHqXIaskz9OYX-gscaAr7tEALw_wcB'>
              Kenzie Academy Brasil
            </a>
            . Hoje sou um desenvolvedor web Full-stack e pretendo continuar
            crescendo e aprimorando meus conhecimentos.
          </p>
          <Contact>
            <h2>Contatos: </h2>
            <div>
              <img className='git' src={git} alt='Github Logo' />
              <a target='blank' href='https://github.com/SidnySilva'>
                Github
              </a>
            </div>
            <div>
              <img src={whats} alt='Whatsapp Logo' />
              <span>+55 (11)95135-7307</span>
            </div>
            <div>
              <img className='linkedin' src={linkedin} alt='LinkedIn Logo' />
              <a
                target='blank'
                href='https://www.linkedin.com/in/sidny-silva-a62829155/'>
                Sidny Silva
              </a>
            </div>
            <div>
              <img src={gmail} alt='Gmail Logo' />
              <span>sidny.galaxy@gmail.com</span>
            </div>
          </Contact>
        </Me>
      )}
    </Container>
  );
};
