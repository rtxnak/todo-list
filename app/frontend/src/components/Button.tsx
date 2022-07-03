interface ButtonProps {
  children: any
  onClick?: () => void
}

export default function Button(props: ButtonProps) {
  return (
    <div className="flex p-2">
      <button
        onClick={props.onClick}
        className={`
          bg-gradient-to-r from-gray-400 to-gray-700
         text-white  px-4 py-2 rounded-md
          `}>
        {props.children}
      </button>
    </div>
  )
}