export interface InputSearchInterface {
  readonly type?: string | "search"
  id: string
  name: string
  className?: string
  defaultValue?: string
  value?: string
  title?: string
  style?: {}
  placeholder?: string
  required?: boolean
  disabled?: boolean
  onChange?: any
  onClick?: any
  onFocus?: any
  onBlur?: any
  error?: boolean
}
