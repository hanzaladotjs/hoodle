const NeubrutalismButton = ({props}:any) => {
  return (
    <button
      onClick={props}
      className={'group/button rounded-lg bg-[#222222] md:mt-0 mt-2 text-black  '}
    >
      <span
        className={
          'block -translate-x-1 md:hidden font-mono -translate-y-1 rounded-lg border-2 border-[#222222] bg-blue-200 px-6 md:mt-0  py-2 text-md font-bold tracking-tight transition-all group-hover/button:-translate-y-2 group-active/button:translate-x-0 group-active/button:translate-y-0'
        }
      >
        Menu
      </span>
    </button>
  )
}

export default NeubrutalismButton