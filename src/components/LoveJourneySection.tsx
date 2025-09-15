import React, { useEffect, useRef } from 'react';



const LoveJourneySection: React.FC = () => {

  const journeySteps = [
    {
      img: '/asset/2022.jpeg',
      title: 'Pertama Bertemu',
      desc: 'Kota Bandung menjadi saksi bisu pertemuan pertama kami yang begitu berkesan. Detik itu, kami tahu bahwa ini adalah awal dari sebuah cerita cinta yang indah.',
      icon: '💌',
      year: '2022',
    },
    {
      img: '/asset/2023.jpeg',
      title: 'Momen Bersama',
      desc: 'Langkah pertama Hajid menuju rumah Fauji penuh dengan harapan dan kebahagiaan. Senyuman hangat dan sambutan penuh cinta dari keluarga menjadi bukti bahwa cinta kami mendapat restu dari orang-orang terkasih.',
      icon: '💑',
      year: '2023',
    },
    {
      img: '/asset/2024.jpeg',
      title: 'Tumbuh Bersama',
      desc: 'Tahun ini menjadi momentum istimewa ketika Hajid kembali berkunjung, kali ini ditemani keluarga besarnya. Sebuah langkah besar yang penuh makna menuju komitmen yang lebih dalam.',
      icon: '🌱',
      year: '2024',
    },
    {
      img: '/asset/2025.jpeg',
      title: 'Menuju Masa Depan',
      desc: 'Di tahun yang penuh berkah ini, Hajid dengan segenap ketulusan hati dan niat suci untuk beribadah bersama, dengan doa restu dari kedua keluarga dan ridho Allah SWT,  kami siap melangkah bersama menuju babak baru.',
      icon: '💍',
      year: '2025',
    }
  ];

  return (
    <section >
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
          <div className=" " style={{
            position: 'relative'
          }}>
            <h2 style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '3rem',
              fontWeight: 'bold',
              margin: 0,
              color: '#a57cc5',
              textShadow: '0 2px 4px rgba(165, 124, 197, 0.3)'
            }}>
              Perjalanan Cinta Kami
            </h2>
            <div style={{
              width: '80px',
              height: '2px',
              background: 'linear-gradient(90deg, #a57cc5, #d4b5e0)',
              margin: '0.5rem auto'
            }}></div>
          </div>


          {/* Journey Cards */}
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className="journey-card"
            >
              {/* Badge tahun seperti awan */}
              <div style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                background: '#fff',
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                padding: '10px 18px',
                border: '1px solid rgba(165, 124, 197, 0.15)',
              }}>
                <span style={{
                  color: '#a57cc5',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  fontFamily: 'sans-serif',
                  letterSpacing: '0.5px',
                }}>{step.year}</span>
              </div>

              {/* Image Container */}
              <div className="journey-img-container">
                <img
                  src={step.img}
                  alt={step.title}
                  className="journey-img"
                />
              </div>

              {/* Text Content */}
              <div className="journey-text-container">
                <h3 className="journey-title-text">
                  <b>{step.title}</b>
                </h3>
                <p className="journey-desc">{step.desc}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
      {/* 
      <div className="journey-motor">
        <img
          src="/asset/motor.png"
          alt="Motor"
          className="journey-motor-img"
        />
      </div> */}

    </section>
  );
};

export default LoveJourneySection;
