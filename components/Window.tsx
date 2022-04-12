type WindowProps = {
  image?: string
  children?: React.ReactNode
}

const Window = ({ image, children }:WindowProps) => {
  return (
    <div className="border border-slate-300 rounded-md overflow-hidden">
      <div
        aria-hidden
        className="flex items-center bg-slate-100 border-b border-slate-300 p-2"
      >
        {[...Array(3)].map((e, i) => (
          <div
            key={i}
            aria-hidden
            // eslint-disable-next-line max-len
            className={`${i === 0 ? 'bg-red-500 mr-1' : i=== 1 ? 'bg-amber-500 mr-1' : 'bg-green-500'} h-[.625rem] w-[.625rem] rounded-full`} />
        ))}
      </div>
      <div
        // eslint-disable-next-line max-len
        className={`${!image ? 'overflow-y-auto' : 'overflow-hidden'} aspect-video bg-slate-50`}
      >
        {image ? (
          <img src={image} alt="" className="object-cover" />
        ) : (
          <>{children}</>
        )}
      </div>
    </div>
  )
}

export default Window