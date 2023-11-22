import Link from "next/link";
import NavigationBro from "./blocks/broken404/NavigationBro";
import FooterBro from "./blocks/broken404/FooterBro";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="main">
        <NavigationBro/>
        <div>
            <Image 
          src={'/assets/404/errore-404.jpg'}
          width={900}
          height={600}
          alt={'404 error'}
          className="error404"
        />
        </div>
        <FooterBro/>
    </div>
  )
}
