import ElaIntroSection from '@components/laela/ElaIntroSection'
import OriginSection from '@components/laela/OriginSection'
import Symptoms from '@components/laela/Symptoms'
import TherapySection from '@components/laela/TherapySection'
import TreatmentSection from '@components/laela/TreatmentSection'

export default function Laela() {
    return (
      <>
        <ElaIntroSection></ElaIntroSection>
        <Symptoms></Symptoms>
        <TreatmentSection></TreatmentSection>
        <OriginSection></OriginSection>
        <TherapySection></TherapySection>
      </>
    );
  }