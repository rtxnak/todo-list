import Title from "./Title"

interface LayoutProps {
  title: string;
  children: any
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={`
      flex flex-col overflow-auto max-h-screen
      text-xs md:text-base w-screen
      bg-white text-gray-800
    `}
      data-testid="layout">
      <Title>{props.title}</Title>
      <div className="m-1 md:p-6">
        {props.children}
      </div>
    </div>
  )
}