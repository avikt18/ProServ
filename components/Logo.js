import Link from "next/link";
import Image from "next/image";
import LogoSvg from '../public/Logo.svg'
import { useRouter } from "next/router";

export default function Logo() {
    const router = useRouter()
    return (
          <Image src={LogoSvg} alt='logo' className='cursor-pointer' onClick={() => router.push('/')}/>
    )
};
