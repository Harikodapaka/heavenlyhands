import { HeroImageRight } from '@/components/HeroContent/HeroImageRight';
import { ServiceDetail } from '@/components/ServiceDetail/ServiceDetail';
import { BOOKING_JANEAPP_URL } from '@/utils/constants';

const description = [
  'Pregnancy Massage is designed to support expectant mothers with safe positioning, gentle techniques, and focused relief for common aches and pains.',
  'Sessions help ease lower back discomfort, reduce swelling, and promote relaxation during each stage of pregnancy.',
];

export default function PregnancyMassagePage() {
  return (
    <>
      <HeroImageRight
        backgroundImage="/pregnancy-massage.jpg"
        title="Pregnancy Massage"
        description="Nurturing, safe, and restorative care for every trimester."
        cta={{ label: 'Book Appointment', href: BOOKING_JANEAPP_URL }}
      />
      <ServiceDetail
        title="Gentle Support"
        description={description}
        image={{ src: '/pregnancy-massage.jpg', alt: 'Pregnancy massage session' }}
      />
    </>
  );
}
