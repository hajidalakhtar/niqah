import React from 'react';

interface GiftSectionProps {
  copyToClipboard: (text: string) => void;
  handleMouseEnter: (buttonId: string) => void;
  handleMouseLeave: (buttonId: string) => void;
  getButtonStyle: (buttonId: string, baseStyle: React.CSSProperties) => React.CSSProperties;
}

const GiftSection: React.FC<GiftSectionProps> = ({ copyToClipboard, handleMouseEnter, handleMouseLeave, getButtonStyle }) => (
  <section className="gift-section animate__animated animate__fadeIn " style={{
    maxWidth: '400px',
    width: '100%',
    margin: '1rem auto 0 auto',
    padding: '1rem 1.5rem',
    boxSizing: 'border-box',
    textAlign: 'center',
    position: 'relative'
  }}>
    {/* Gift Title */}
    <div className="gift-title animate__animated animate__bounceIn " style={{
      marginBottom: '2rem',
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
        Hadiah
      </h2>
      <div style={{
        width: '80px',
        height: '2px',
        background: 'linear-gradient(90deg, #a57cc5, #d4b5e0)',
        margin: '0.5rem auto'
      }}></div>
    </div>

    {/* Gift Message */}
    <div className="gift-message" style={{
      marginBottom: '2rem',
      padding: '1.2rem',
      border: '1px dashed #a57cc5',
      borderRadius: '1rem',
      background: 'rgba(165, 124, 197, 0.05)'
    }}>
      <p style={{
        margin: 0,
        fontSize: '1rem',
        color: '#a57cc5',
        fontStyle: 'italic',
        lineHeight: 1.5
      }}>
        Doa restu Anda merupakan karunia yang sangat berarti bagi kami.<br />
        Dan jika memberi adalah ungkapan tanda kasih Anda, kami dengan senang hati menerimanya.
      </p>
    </div>

    {/* Bank Account */}
    <div className="bank-account animate__animated animate__slideInLeft " style={{
      marginBottom: '1.5rem',
      padding: '1.5rem',
      background: 'linear-gradient(135deg, rgba(165, 124, 197, 0.1), rgba(212, 181, 224, 0.1))',
      borderRadius: '1.5rem',
      border: '1px solid rgba(165, 124, 197, 0.2)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative corner */}
      <div style={{
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        width: '40px',
        height: '40px',
        background: 'linear-gradient(135deg, #a57cc5, #d4b5e0)',
        borderRadius: '50%',
        opacity: 0.7
      }}></div>

      <h3 style={{
        fontFamily: "'Dancing Script', cursive",
        fontSize: '2rem',
        fontWeight: 'bold',
        margin: '0 0 1rem 0',
        color: '#a57cc5'
      }}>
        🏦 Transfer Bank
      </h3>

      <div style={{
        fontSize: '1.1rem',
        fontWeight: 600,
        marginBottom: '0.5rem',
        color: '#7c5e99'
      }}>
        Bank Mandiri
      </div>
      <div style={{
        fontSize: '1.3rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        color: '#a57cc5',
        background: 'rgba(165, 124, 197, 0.1)',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        display: 'inline-block'
      }}>
        1730007638019
      </div>
      <div style={{
        fontSize: '1rem',
        color: '#7c5e99',
        marginBottom: '1rem'
      }}>
        a.n. Siti Faujiyah Nur Syahid
      </div>

      <button
        onClick={() => copyToClipboard('1730007638019')}
        onMouseEnter={() => handleMouseEnter('bankButton')}
        onMouseLeave={() => handleMouseLeave('bankButton')}
        style={getButtonStyle('bankButton', {
          display: 'inline-block',
          padding: '0.5rem 1rem',
          background: 'linear-gradient(135deg, #a57cc5, #d4b5e0)',
          color: 'white',
          border: 'none',
          borderRadius: '1rem',
          fontSize: '0.9rem',
          fontWeight: 500,
          cursor: 'pointer'
        })}
      >
        📋 Salin Nomor Rekening
      </button>
    </div>

    {/* E-Wallet Account */}
    <div className="ewallet-account animate__animated animate__slideInRight " style={{
      marginBottom: '1.5rem',
      padding: '1.5rem',
      background: 'linear-gradient(135deg, rgba(165, 124, 197, 0.1), rgba(212, 181, 224, 0.1))',
      borderRadius: '1.5rem',
      border: '1px solid rgba(165, 124, 197, 0.2)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative corner */}
      <div style={{
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        width: '40px',
        height: '40px',
        background: 'linear-gradient(135deg, #a57cc5, #d4b5e0)',
        borderRadius: '50%',
        opacity: 0.7
      }}></div>

      <h3 style={{
        fontFamily: "'Dancing Script', cursive",
        fontSize: '2rem',
        fontWeight: 'bold',
        margin: '0 0 1rem 0',
        color: '#a57cc5'
      }}>
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/external-ewallet-shopping-mall-xnimrodx-lineal-color-xnimrodx.png"
          alt="E-wallet icon"
        /> E-Wallet
      </h3>

      <div style={{
        fontSize: '1.1rem',
        fontWeight: 600,
        marginBottom: '0.5rem',
        color: '#7c5e99'
      }}>
        Gopay, Dana, OVO
      </div>
      <div style={{
        fontSize: '1.3rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        color: '#a57cc5',
        background: 'rgba(165, 124, 197, 0.1)',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        display: 'inline-block'
      }}>
        085155433613
      </div>
      <div style={{
        fontSize: '1rem',
        color: '#7c5e99',
        marginBottom: '1rem'
      }}>
        a.n. Muhammad Hajid Al Akhtar
      </div>

      <button
        onClick={() => copyToClipboard('085155433613')}
        onMouseEnter={() => handleMouseEnter('ewalletButton')}
        onMouseLeave={() => handleMouseLeave('ewalletButton')}
        style={getButtonStyle('ewalletButton', {
          display: 'inline-block',
          padding: '0.5rem 1rem',
          background: 'linear-gradient(135deg, #a57cc5, #d4b5e0)',
          color: 'white',
          border: 'none',
          borderRadius: '1rem',
          fontSize: '0.9rem',
          fontWeight: 500,
          cursor: 'pointer'
        })}
      >
        📋 Salin Nomor Rekening
      </button>
    </div>



    {/* Kirim Kado */}
    <div className="gift-delivery animate__animated animate__slideInRight " style={{
      marginBottom: '1.5rem',
      padding: '1.5rem',
      background: 'linear-gradient(135deg, rgba(165, 124, 197, 0.1), rgba(212, 181, 224, 0.1))',
      borderRadius: '1.5rem',
      border: '1px solid rgba(165, 124, 197, 0.2)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative corner */}
      <div style={{
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        width: '40px',
        height: '40px',
        background: 'linear-gradient(135deg, #a57cc5, #d4b5e0)',
        borderRadius: '50%',
        opacity: 0.7
      }}></div>

      <h3 style={{
        fontFamily: "'Dancing Script', cursive",
        fontSize: '2rem',
        fontWeight: 'bold',
        margin: '0 0 1rem 0',
        color: '#a57cc5'
      }}>
        🎁 Kirim Kado
      </h3>

      <div style={{
        fontSize: '1.1rem',
        fontWeight: 600,
        marginBottom: '1rem',
        color: '#7c5e99'
      }}>
        Alamat Rumah
      </div>

      <div style={{
        fontSize: '1rem',
        lineHeight: 1.6,
        marginBottom: '1rem',
        color: '#a57cc5',
        background: 'rgba(165, 124, 197, 0.1)',
        padding: '1rem',
        borderRadius: '0.8rem',
        textAlign: 'center'
      }}>

        Dusun. Binawarga RT 13 RW 04, Desa Kalijati Timur, Kalijati, Subang (Kontrakan Teh Ine)
      </div>

      <button
        onClick={() => copyToClipboard('Dusun. Binawarga RT 13 RW 04, Desa Kalijati Timur, Kalijati, Subang (Kontrakan Teh Ine)')}
        onMouseEnter={() => handleMouseEnter('addressButton')}
        onMouseLeave={() => handleMouseLeave('addressButton')}
        style={getButtonStyle('addressButton', {
          display: 'inline-block',
          padding: '0.5rem 1rem',
          background: 'linear-gradient(135deg, #a57cc5, #d4b5e0)',
          color: 'white',
          border: 'none',
          borderRadius: '1rem',
          fontSize: '0.9rem',
          fontWeight: 500,
          cursor: 'pointer'
        })}
      >
        📋 Salin Alamat
      </button>
    </div>
  </section>
);

export default GiftSection;
