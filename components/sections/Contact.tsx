'use client';
import { motion } from 'framer-motion';
import { ImSpinner10 } from 'react-icons/im';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
export default function Contact() {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!form.current) {
      return;
    }
    emailjs
      .sendForm('service_0pnyscd', 'template_xvzlcmo', form.current, {
        publicKey: 'RnaVle-d-j0TeE7iG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setLoading(false);
          Swal.fire({
            title: 'Thank You!',
            text: 'Thanks for contacting me. Sir please wait for some time I will reply you!',
            icon: 'success',
          });
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          setLoading(false);
          console.log('FAILED...', error.text);
        }
      );
  };
  return (
    <section
      id='contact'
      className='py-20 bg-white dark:bg-gray-900 transition-colors duration-300'
    >
      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
            Get In Touch
          </h2>
          <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            I&apos;m always open to discussing new opportunities and interesting
            projects
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
              Let&apos;s Connect
            </h3>
            <div className='space-y-4'>
              <div className='flex items-center space-x-4'>
                <Mail className='w-5 h-5 text-blue-600' />
                <span className='text-gray-600 dark:text-gray-300'>
                  mdhamim5088@gmail.com
                </span>
              </div>
              <div className='flex items-center space-x-4'>
                <Phone className='w-5 h-5 text-blue-600' />
                <span className='text-gray-600 dark:text-gray-300'>
                  +(880) 19263-13093
                </span>
              </div>
              <div className='flex items-center space-x-4'>
                <MapPin className='w-5 h-5 text-blue-600' />
                <span className='text-gray-600 dark:text-gray-300'>
                  179/1, Zaha Lane Box, Boro Mogbazar, Dhaka, Bangladesh
                </span>
              </div>
            </div>

            <div className='mt-8'>
              <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                Follow Me
              </h4>
              <div className='flex space-x-4'>
                <a
                  href='https://github.com/HamimBhai742'
                  className='p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors'
                >
                  <Github className='w-5 h-5 text-gray-600 dark:text-gray-300' />
                </a>
                <a
                  href='https://www.linkedin.com/in/md-hamim42'
                  className='p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors'
                >
                  <Linkedin className='w-5 h-5 text-gray-600 dark:text-gray-300' />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className='space-y-6' ref={form} onSubmit={sendEmail}>
              <div>
                <input
                  required
                  name='from_name'
                  type='text'
                  placeholder='Your Name'
                  className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                />
              </div>
              <div>
                <input
                  required
                  name='from_email'
                  type='email'
                  placeholder='Your Email'
                  className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
                />
              </div>
              <div>
                <textarea
                  required
                  name='message'
                  placeholder='Your Message'
                  className='w-full h-64 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none'
                ></textarea>
              </div>
              <button
                type='submit'
                disabled={loading}
                className='w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300'
              >
                {loading ? (
                  <span className='flex items-center gap-2 justify-center'>
                    {' '}
                    <ImSpinner10 className='animate-spin' /> Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
