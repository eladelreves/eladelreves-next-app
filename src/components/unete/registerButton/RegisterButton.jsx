import Link from 'next/link'
import './registerButton.css'

export default function RegisterButton() {
    return (
        <>
            <Link href='/register' id='registerButton'>
                <p>Registrate</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                </svg>
            </Link>

        </>
    )
}