import React from 'react';
import '../estilos/creditos.css';
import leandroImg from '../img/leandro.jpg'; 
import vagnerImg from '../img/vagner.jpg';
import viniciusImg from '../img/vinicius.jpg';
import estevamImg from '../img/estevam.jpg';
import mohanadImg from '../img/mohanad.jpg';
import brunoImg from '../img/bruno.jpg';
import linkedInIcon from '../img/linkedin.png'; 
import githubIcon from '../img/github.png'; 

const teamMembers = [
  {
    name: 'Vagner Cordeiro',
    role: 'Lider do Projeto',
    photo: vagnerImg, 
    linkedin: 'https://www.linkedin.com/in/cordeirotelecom/', 
    github: 'https://github.com/cordeirotelecom' 
  },
  {
    name: 'Leandro Moreira',
    role: 'Desenvolvedor Web e Design.',
    photo: leandroImg, 
    linkedin: 'https://www.linkedin.com/in/leandro-moreira-b26a66239/', 
    github: 'https://github.com/LeandroMCSantos' 
  },
  {
    name: 'Vinicius Andrade',
    role: 'Design e Criação do chat bot.',
    photo: viniciusImg, 
    linkedin: 'https://www.linkedin.com/in/vinicius-andrade-1b381a247/', 
    github: 'https://github.com/ViniciusAndrade02' 
  },
  {
    name: 'Estevam Souza',
    role: 'Criação do chat bot.',
    photo: estevamImg, 
    linkedin: 'https://www.linkedin.com/in/estevam-souza/', 
    github: 'https://github.com/estevam5s' 
  },
  {
    name: 'Mohanad Aresha',
    role: 'Criação do chat bot para o telegram.',
    photo: mohanadImg, 
    linkedin: 'https://www.linkedin.com/in/mohanad-aresha/', 
    github: 'https://github.com/ARESHAmohanad' 
  },
  {
    name: 'Bruno Souza Silva',
    role: 'Gestor do projeto.',
    photo: brunoImg, 
    linkedin: 'https://www.linkedin.com/in/bruno-souza-silva-7b3249314/', 
    github: 'https://github.com/brunosou2' 
  },
];

const Creditos = () => {
  return (
    <div className="container">
      <div className="creditos-container">
        <section className="ltd-description">
          <h3>O que é o LTD?</h3>
          <p>
            O Laboratório de Transformação Digital (LTD) da Estácio é um espaço dedicado à inovação e ao desenvolvimento de tecnologias digitais.
            Nosso objetivo é fomentar a transformação digital através de projetos, pesquisas e capacitações que promovam a integração entre
            o conhecimento acadêmico e as demandas do mercado.
          </p>
        </section>
        <section className="team-members">
          <h3>Equipe do LTD</h3>
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="team-member-info">
                <img src={member.photo} alt={`Foto de ${member.name}`} />
                <div>
                  <h4>{member.name}</h4>
                  <p className="role"><strong>Função:</strong> {member.role}</p>
                  {}
                  {}
                  <p>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <img src={linkedInIcon} alt={`LinkedIn de ${member.name}`} />
                    </a>
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <img src={githubIcon} alt={`GitHub de ${member.name}`} />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="acknowledgements">
          <h3>Agradecimentos</h3>
          <p>
            Gostaríamos de agradecer a todos que contribuíram para a realização deste projeto, incluindo nossos mentores, patrocinadores e colegas que nos apoiaram ao longo do caminho.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Creditos;
