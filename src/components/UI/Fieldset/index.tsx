import './Fieldset.style.css'

export function FieldsetForm({children}: { children: React.ReactNode }) {
  return (
    <fieldset className="fieldset-form">
      {children}
    </fieldset>
  )
}