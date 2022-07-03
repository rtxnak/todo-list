interface InputProps {
  value: any
  onWriting?: boolean
  onChange?: (valor: any) => void
}

export default function Input(props: InputProps) {
  return (
    <div className="flex p-2 w-full">
      <input
        type='text'
        value={props.value}
        onChange={e => props.onChange?.(e.target.value)}
        className={`
          border border-purple-500 rounded-lg
          focus: outline-none bg-gray-200 w-full
          ${props.onWriting ? '' : 'focus:bg-white'}
          `}
      />
    </div>
  )
}