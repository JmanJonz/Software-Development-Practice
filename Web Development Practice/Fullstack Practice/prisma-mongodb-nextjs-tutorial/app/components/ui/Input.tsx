interface inputProps {
  name: string
  type: string
  placeholder?: string
  value?: string
}

const Input = ({name, type, placeholder, value}: inputProps) => {
  return (
    <>
    <input type={type} className="w-full p-2 border border-gray-200 "
    name={name}
    value={value}
    placeholder={placeholder} />
    </>
  )
}

export default Input