type StackItem = {
  name: string
  icon: string
}

type Props = {
  items: readonly StackItem[]
}

export function StackGrid({ items }: Props) {
  return (
    <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
      {items.map((item) => (
        <li
          key={item.name}
          className="stack-tile flex flex-col items-center gap-3 border border-line px-4 py-6"
        >
          <img
            src={item.icon}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            loading="lazy"
          />
          <span className="text-sm font-semibold text-ink">{item.name}</span>
        </li>
      ))}
    </ul>
  )
}
