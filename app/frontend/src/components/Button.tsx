interface ButtonProps {
  children: any
  onClick?: () => void
}

export default function Button(props: ButtonProps) {
  return (
    <div
      className="flex pl-1 first:py-1 md:p-2"
      data-testid="button"
    >
      <button
        onClick={props.onClick}
        className={`
          bg-gradient-to-r from-gray-400 to-gray-700
         text-white px-2 py-2 md:px-4 md:py-3 my-1 md:my-0  rounded-md 
          `}>
        {props.children}
      </button>
    </div>
  )
}