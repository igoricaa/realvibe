import styles from './page.module.scss';
import Hero from '@/components/Hero';
import Services from '@/components/ServicesSection/Services';
import About from '@/components/About/About';
import MaskAnimation from '@/components/MaskComponent/MaskAnimation';
import WhyUs from '@/components/WhyUs/WhyUs';
import ContactSection from '@/components/ContactSection';
import Awards from '@/components/AwardsSection/Awards';

export default function Home() {
  return (
    <main id='main' className={styles.main}>
      <Hero />
      <Services />
      <About />
      <MaskAnimation />
      <Awards />
      <WhyUs />
      <ContactSection />
    </main>
  );
}
