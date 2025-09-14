import React, { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { supabase, type WeddingWish } from '../lib/supabase';
import { useAnimateOnVisible } from '../hooks/useAnimateOnVisible';

const DoaUcapanSection: React.FC = () => {
    const [wishes, setWishes] = useState<WeddingWish[]>([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [loading, setLoading] = useState(true);

    const { ref, controls } = useAnimateOnVisible();

    // Fetch wishes from database
    const fetchWishes = async () => {
        try {
            const { data, error } = await supabase
                .from('wedding_wishes')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(50);

            if (error) {
                console.error('Error fetching wishes:', error);
                return;
            }

            setWishes(data || []);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    // Submit new wish
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !message.trim()) {
            setSubmitMessage('Nama dan pesan harus diisi!');
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const { data, error } = await supabase
                .from('wedding_wishes')
                .insert([
                    {
                        name: name.trim(),
                        message: message.trim()
                    }
                ])
                .select()
                .single();

            if (error) {
                throw error;
            }

            // Add new wish to the beginning of the list
            setWishes(prev => [data, ...prev]);

            // Clear form
            setName('');
            setMessage('');
            setSubmitMessage('Terima kasih! Doa dan ucapan Anda telah tersimpan.');

            // Clear success message after 3 seconds
            setTimeout(() => setSubmitMessage(''), 3000);

        } catch (error) {
            console.error('Error submitting wish:', error);
            setSubmitMessage('Terjadi kesalahan. Silakan coba lagi.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Format date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    useEffect(() => {
        fetchWishes();
    }, []);

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 70, damping: 20 } }
    };

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeUp}
            style={{
                maxWidth: '400px',
                width: '100%',
                margin: '1rem auto 0 auto',
                padding: '1rem 1.5rem',
                boxSizing: 'border-box',
                textAlign: 'center',
                position: 'relative'
            }}

        >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Header */}
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
                        Doa & Ucapan
                    </h2>
                    <div style={{
                        width: '80px',
                        height: '2px',
                        background: 'linear-gradient(90deg, #a57cc5, #d4b5e0)',
                        margin: '0.5rem auto'
                    }}></div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '40px'
                }} className="doa-ucapan-grid">
                    {/* Form Section */}
                    <motion.div
                        variants={fadeUp}
                        style={{
                            background: 'linear-gradient(135deg, rgba(165, 124, 197, 0.1), rgba(212, 181, 224, 0.1))',
                            padding: '1.5rem',
                            borderRadius: '1.5rem',
                            border: '1px solid rgba(165, 124, 197, 0.2)',
                            height: 'fit-content',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        className="doa-ucapan-form"
                    >

                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '20px' }}>
                                <div style={{
                                    textAlign: 'left',

                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    marginBottom: '0.5rem',
                                    color: '#7c5e99'
                                }}>
                                    Nama Anda
                                </div>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Masukkan nama Anda"
                                    style={{
                                        width: '100%',
                                        padding: '12px 16px',
                                        border: '2px solid #e0e0e0',
                                        borderRadius: '10px',
                                        fontSize: '1rem',
                                        transition: 'border-color 0.3s',
                                        boxSizing: 'border-box'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#8B4B7C'}
                                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <div style={{
                                    textAlign: 'left',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    marginBottom: '0.5rem',
                                    color: '#7c5e99'
                                }}>
                                    Ucapan & Doa
                                </div>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Tulis doa dan ucapan terbaik Anda untuk pasangan bahagia..."
                                    rows={4}
                                    style={{
                                        width: '100%',
                                        padding: '12px 16px',
                                        border: '2px solid #e0e0e0',
                                        borderRadius: '10px',
                                        fontSize: '1rem',
                                        transition: 'border-color 0.3s',
                                        resize: 'vertical',
                                        minHeight: '120px',
                                        boxSizing: 'border-box',
                                        fontFamily: 'inherit'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#8B4B7C'}
                                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={{
                                    width: '100%',
                                    padding: '14px',
                                    background: isSubmitting ? '#ccc' : 'linear-gradient(135deg, #8B4B7C 0%, #A57CC5 100%)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '10px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.3s',
                                    transform: 'translateY(0)',
                                    boxShadow: '0 4px 12px rgba(139, 75, 124, 0.3)'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isSubmitting) {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(139, 75, 124, 0.4)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isSubmitting) {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 75, 124, 0.3)';
                                    }
                                }}
                            >
                                {isSubmitting ? 'Mengirim...' : 'Kirim Doa & Ucapan'}
                            </button>

                            {submitMessage && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{
                                        marginTop: '15px',
                                        padding: '10px',
                                        borderRadius: '8px',
                                        textAlign: 'center',
                                        fontSize: '0.9rem',
                                        background: submitMessage.includes('Terima kasih') ? '#d4edda' : '#f8d7da',
                                        color: submitMessage.includes('Terima kasih') ? '#155724' : '#721c24',
                                        border: `1px solid ${submitMessage.includes('Terima kasih') ? '#c3e6cb' : '#f5c6cb'}`
                                    }}
                                >
                                    {submitMessage}
                                </motion.p>
                            )}
                        </form>
                    </motion.div>


                    {/* Wishes Display Section */}
                    <motion.div
                        variants={fadeUp}
                        style={{
                            background: 'linear-gradient(135deg, rgba(165, 124, 197, 0.1), rgba(212, 181, 224, 0.1))',
                            padding: '1.5rem',
                            borderRadius: '1.5rem',
                            border: '1px solid rgba(165, 124, 197, 0.2)',
                            maxHeight: '600px',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                        className="doa-ucapan-display"
                    >

                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            color: '#7c5e99',
                            marginBottom: '30px',
                            textAlign: 'center'
                        }}>
                            Doa & Ucapan dari Teman
                        </h3>

                        {loading ? (
                            <div style={{ textAlign: 'center', color: '#666' }}>
                                Memuat doa dan ucapan...
                            </div>
                        ) : (
                            <div style={{
                                maxHeight: '450px',
                                overflowY: 'auto',
                                paddingRight: '10px'
                            }}>
                                {wishes.length === 0 ? (
                                    <div style={{
                                        textAlign: 'center',
                                        color: '#666',
                                        fontStyle: 'italic',
                                        padding: '40px 0'
                                    }}>
                                        Belum ada doa dan ucapan. Jadilah yang pertama!
                                    </div>
                                ) : (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        {wishes.map((wish, index) => (
                                            <motion.div
                                                key={wish.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                style={{
                                                    background: 'rgba(139, 75, 124, 0.15)',
                                                    borderRadius: '15px',
                                                    padding: '12px 16px',
                                                    color: '#555',
                                                    position: 'relative',
                                                    boxShadow: '0 4px 20px rgba(139, 75, 124, 0.1)',
                                                    border: '1px solid rgba(139, 75, 124, 0.2)',
                                                    backdropFilter: 'blur(10px)'
                                                }}
                                            >
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'flex-start',
                                                    marginBottom: '8px'
                                                }}>
                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '6px'
                                                    }}>

                                                        <h4 style={{
                                                            fontSize: '0.85rem',
                                                            fontWeight: '600',
                                                            color: '#8B4B7C',
                                                            margin: '0'
                                                        }}>
                                                            {wish.name}
                                                        </h4>
                                                    </div>
                                                    <span style={{
                                                        fontSize: '0.65rem',
                                                        color: 'rgba(139, 75, 124, 0.7)',
                                                        fontStyle: 'italic',
                                                        whiteSpace: 'nowrap'
                                                    }}>
                                                        {formatDate(wish.created_at)}
                                                    </span>
                                                </div>
                                                <p style={{
                                                    textAlign: "left",
                                                    margin: '0',
                                                    color: '#666',
                                                    lineHeight: '1.5',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '400'
                                                }}>
                                                    {wish.message}
                                                </p>

                                                {/* Decorative elements */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '-3px',
                                                    right: '15px',
                                                    width: '12px',
                                                    height: '12px',
                                                    background: 'rgba(139, 75, 124, 0.1)',
                                                    borderRadius: '50%'
                                                }}></div>
                                                
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .doa-ucapan-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          section h2 {
            font-size: 2rem !important;
          }
          
          .doa-ucapan-form,
          .doa-ucapan-display {
            padding: 1.25rem !important;
          }
        }
        
        @media (max-width: 480px) {
          section h2 {
            font-size: 1.8rem !important;
          }
          
          .doa-ucapan-form,
          .doa-ucapan-display {
            padding: 1rem !important;
          }
        }
      `}</style>
        </motion.section>
    );
};

export default DoaUcapanSection;
