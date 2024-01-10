export default function com_List({beverage}) {
  console.log("beverage: ", beverage);
  return (
    <div>
      <ul className='bg-cyan-600 cursor-pointer w-40 text-xl text-white p-4 mb-1 text-left'>{beverage}</ul>
    </div>
  )
}