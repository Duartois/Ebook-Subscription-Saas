import logoSvg from '@/app/assets/logo.svg';
import Image from 'next/image';

export default function Logo() {
  return <Image src={logoSvg} alt="Logotipo" />;
}
