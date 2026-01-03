import { HeroImageRight } from '@/components/HeroContent/HeroImageRight';
import { ServiceDetail } from '@/components/ServiceDetail/ServiceDetail';
import { BOOKING_JANEAPP_URL } from '@/app/utils/constants';

const description = [
  'Massage Therapy involves the manipulation of muscle, connective tissue, and joints of the body. Through massage, one can enhance function, aid in the healing process, and promote relaxation and well-being. Regular massage can help improve circulation by bringing oxygen and other nutrients to body tissues. It has also been proven to reduce pain, increase flexibility and mobility, and help clear lactic acid from our bodies, which reduces pain and stiffness in muscles and joints.',
  'At HeavenlyHands, our therapists will create a treatment plan specific to each patient based on their individual needs in order to achieve balance. These treatments may include techniques such as Swedish Massage, Deep Tissue Massage, Trigger Point Therapy, Stretch Therapy Sport Massage, Pregnancy Massage, and Relaxation/Stress Management Treatments.',
  'Our therapists are trained and experienced in treating a large variety of illness, injuries, and discomforts. Should you wish to get more information about your individual health, and how a therapeutic massage may benefit you, please do not hesitate to contact us.',
];

export default function MassageTherapyPage() {
  return (
    <>
      <HeroImageRight
        backgroundImage="/massage-therapy.png"
        title="Registered Massage Therapy"
        description="Personalized care to relieve pain, improve mobility, and restore balance."
        cta={{ label: 'Book Appointment', href: BOOKING_JANEAPP_URL }}
      />
      <ServiceDetail
        title="What to Expect"
        description={description}
        image={{ src: '/massage-therapy.png', alt: 'Registered massage therapy session' }}
      />
    </>
  );
}
