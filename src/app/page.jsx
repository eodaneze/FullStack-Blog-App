import Link from "next/link";
import styles from "./homepage.module.css";

export default function Home() {
  return <div>
     <Link href='/'>
       <h1>Welcome to  my website</h1>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos temporibus aut mollitia inventore molestias facere nam eligendi facilis animi consequuntur earum voluptas totam veritatis ea odit quibusdam fugiat, ducimus doloribus.</p>
     </Link>
  </div>;
}
