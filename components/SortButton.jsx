function SortButton ( {onClick, itemsLength, text, isActive} ) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm cursor-pointer ${
            isActive
              ? 'bg-blue-700 text-gray-200 hover:bg-blue-800 hover:scale-105 hover:-translate-y-0.5'
              : 'text-gray-300 bg-gray-950 hover:bg-gray-900 hover:scale-105 hover:-translate-y-0.5'
          }`}
          >
        {text} ({itemsLength})
      </button>
    </div>
  )
}

export default SortButton
