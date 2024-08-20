/* eslint-disable react/prop-types */

import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import "./Style.css"
const TeamMember = ({ nombre, rol, iniciales, github, linkedin, download }) => {
  return (
    <div style={{ margin: '10px', textAlign: 'center', marginBottom:"70px" }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '10px',
        }}
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: '#ccc',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: '#333333',
            marginRight: '20px',
          }}
        >
          {iniciales}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <a href={github} style={{ textDecoration: 'none', marginBottom: '10px' }}>
            <FaGithub className="icono" size={25} style={{ borderRadius: '50%', color: "#333333", padding: '1px', border: '1px solid #000' }} />
          </a>
          <a href={linkedin} style={{ textDecoration: 'none', marginBottom: '10px' }}>
            <FaLinkedin className="icono" size={25} style={{ borderRadius: '50%', color: "#333333", padding: '1px', border: '1px solid #000' }} />
          </a>
          <a href={download} style={{ textDecoration: 'none' }}>
            <FaFileDownload className="icono" size={25} style={{ borderRadius: '50%', color: "#333333", padding: '1px', border: '1px solid #000' }} />
          </a>
        </div>
      </div>

      <div>
        <h3>{nombre}</h3>
        <p>{rol}</p>
      </div>
    </div >
  );
};


export default TeamMember;
