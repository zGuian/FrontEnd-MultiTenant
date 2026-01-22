import './Label.style.css'

export function LabelForm({children, htmlFor}) {
  return <label className='labelP' htmlFor={htmlFor}>{children}</label>
}