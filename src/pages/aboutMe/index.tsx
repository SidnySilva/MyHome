import { Certificate, Contact, Container, Cv, Me } from "./styles";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import git from "../../assets/github.png";
import whats from "../../assets/whats.png";
import gmail from "../../assets/gmail.png";
import certBR from "../../assets/certipt.png";
import certEN from "../../assets/certien.png";
import linkedin from "../../assets/linkedin.png";

export const AboutMe = () => {
  const [option, setOption] = useState("");
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <h1>{t("AboutMe.1")}!</h1>
      <div className='options'>
        <button
          onClick={() => {
            setOption("bio");
          }}>
          Bio
        </button>
        <button
          onClick={() => {
            setOption("cert");
          }}>
          {t("Certificate.1")}
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
            <h2>{t("CvDescription.1")}</h2>
            <p>{t("CvDescription.2")}</p>
            <span>{t("CvDescription.3")}</span>
            <p>{t("CvDescription.4")}</p>
          </div>
          <div className='form'>
            <h2>{t("CvDescription.5")}</h2>
            <p>
              {t("CvDescription.6")}
              <br />
              {t("CvDescription.7")}
            </p>
            <p>
              {t("CvDescription.8")}
              <br />
              {t("CvDescription.9")}
            </p>
          </div>
          <div className='quali'>
            <h2>{t("CvDescription.10")}</h2>
            <p>{t("CvDescription.11")}</p>
            <p>{t("CvDescription.12")}</p>
            <p>
              Front-end: HTML, CSS, C#, .NET, JavaScript, Typescript, React,
              Redux
            </p>
            <p>
              Back-end: Python, Flask, Node, Prisma, TypeORM, SQL, PostgreSQL,
              docker
            </p>
            <p>{t("CvDescription.13")}: Scrum, Kanban</p>
            <p>{t("CvDescription.14")} </p>
          </div>
        </Cv>
      ) : option === "cert" ? (
        <Certificate>
          {i18n.language === "en" ? (
            <img src={certEN} alt={t("Certificate.1")} />
          ) : (
            <img src={certBR} alt={t("Certificate.1")} />
          )}
        </Certificate>
      ) : (
        <Me>
          <h2>Bio</h2>
          <p>
            {t("BioDescription.1")}
            <> </>
            <a
              target='blank'
              href='https://kenzie.com.br/?trk_src=x&trk_cmp=18000265428&trk_grp=&trk_ad=&trk_kw=&utm_term=&utm_campaign=CAP-M0AC11-MAX&utm_source=adwords&utm_medium=ppc&hsa_acc=2166776305&hsa_cam=18000265428&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwxveXBhDDARIsAI0Q0x3ldv7MuZjrJy_fU5obEEBGjDxW00aNusbcnHEHqXIaskz9OYX-gscaAr7tEALw_wcB'>
              Kenzie Academy Brasil
            </a>
            {t("BioDescription.2")}
          </p>
          <Contact>
            <h2>{t("Contacts.1")}: </h2>
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
