export default function Title(props) {
  return (
    <div
      className="flex flex-col justify-center"
      data-testid="title"
    >
      <h1 className="px-5 md:py-2 text-2xl border-b-2 border-purple-800">
        {props.children}
      </h1>
    </div>
  )
}