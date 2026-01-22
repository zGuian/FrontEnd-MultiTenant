import './FormLogin.style.css'
import { FieldsetForm } from '../Fieldset'
import { InputForm } from '../Input'
import { LabelForm } from '../Label'
import { TitleForm } from '../TitleForm'
import { ButtonForm } from '../Button'

export function FormLogin() {
  return (
    <>
      <form className='form-login'>
        <TitleForm>Realize seu Login</TitleForm>
          <FieldsetForm>
            <LabelForm htmlFor="email" >Email:</LabelForm>
            <InputForm type="text" placeholder="Digite seu email"/>
          </FieldsetForm>
          <FieldsetForm>
            <LabelForm>Senha:</LabelForm>
            <InputForm type="password" placeholder="Digite sua senha"/>
          </FieldsetForm>
          <FieldsetForm>
            <a href='#'>Esqueci a senha?</a>
          </FieldsetForm>
          <ButtonForm>Login</ButtonForm>
      </form>
    </>
  )
}