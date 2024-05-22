import MainLogo from '@components/home/mainLogo/MainLogo'
import IntroSection from '@components/home/homeSections/IntroSection'
import LaElaSection from '@components/home/homeSections/LaElaSection'
import NewsSection from '@components/home/homeSections/NewsSection'
import JoinSection from '@components/home/homeSections/JoinSection'
import DelrevesSection from '@components/home/homeSections/DelrevesSection'

export default function Home() {
  return (
    <>
      <MainLogo></MainLogo>
      <IntroSection></IntroSection>
      <LaElaSection></LaElaSection>
      <NewsSection></NewsSection>
      <JoinSection></JoinSection>
      <DelrevesSection></DelrevesSection>
    </>
  );
}
