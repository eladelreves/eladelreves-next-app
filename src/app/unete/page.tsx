'use client'
import { useState } from 'react';
import { UneteIntroSection } from '@components/unete/UneteIntroSection'
import { Ayuda } from '@components/unete/AyudaSection'
import { Register } from '@components/unete/RegistrateSection'

export default function Unete(){
    const [hovered, setHovered] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    return(
        <>
            <UneteIntroSection></UneteIntroSection>
            <Ayuda></Ayuda>
            <Register></Register>
        </>
    )
}
