import { UneteIntroSection } from '@components/unete/UneteIntroSection'
import { Ayuda } from '@components/unete/AyudaSection'
import { Register } from '@components/unete/RegistrateSection'

export default function Unete() {
    return (
        <>
            <UneteIntroSection></UneteIntroSection>
            <Ayuda></Ayuda>
            <Register></Register>
        </>
    )
}
