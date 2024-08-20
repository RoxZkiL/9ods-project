
import TeamMember from './TeamMember';

const equipo = [
  { 
    nombre: 'Paula Llanten', 
    rol: 'Desarrollador Backend', 
    iniciales: 'PL',
    github: 'https://github.com/Paulallntn', 
    linkedin: 'https://www.linkedin.com/in/paula-llanten/',
    download: '/downloads/paula-cv.zip'
  },
  { 
    nombre: 'Jesus Matute', 
    rol: 'Desarrollador FullStack', 
    iniciales: 'JM',
    github: 'https://github.com/roxzkil', 
    linkedin: 'https://www.linkedin.com/in/jesusmatute/',
    download: '/downloads/jesus-cv.zip'
  },
  { 
    nombre: 'Felipe Vera', 
    rol: 'Desarrollador Frontend', 
    iniciales: 'FV',
    github: 'https://github.com/felipe-vera', 
    linkedin: 'https://www.linkedin.com/in/felipe-vera-cardenas-188a17310/',
    download: '/downloads/felipe-cv.zip'
  },
  { 
    nombre: 'Paulina Lipian', 
    rol: 'Desarrollador Frontend', 
    iniciales: 'PL',
    github: 'https://github.com/sewyclub', 
    linkedin: 'https://www.linkedin.com/in/paulina-lipian-a55617318/',
    download: '/downloads/paulina-cv.zip'
  },
];

const MeetTheTeam = () => {
  return (
    <section style={{ textAlign: 'center', padding: '20px' }}>
      <h2 style={{ color: 'rgb(71, 177, 127)' }}>Equipo de Trabajo</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {equipo.map((miembro) => (
          <TeamMember
            key={miembro.nombre}
            nombre={miembro.nombre}
            rol={miembro.rol}
            iniciales={miembro.iniciales}
            github={miembro.github}
            linkedin={miembro.linkedin}
            download={miembro.download}
          />
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;