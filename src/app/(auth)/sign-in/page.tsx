import styles from './page.module.css'
import { FormLogin } from "@/components/UI/FormLogin";
import { WelcomeSide } from "@/components/UI/WelcomeSide";

export default function Login() {
  return (
    <>
      <div className={styles.containerLoginPage}>
        <WelcomeSide />
        <div className='login-side'>
          <FormLogin></FormLogin>
        </div>
      </div>
    </>
  )
}