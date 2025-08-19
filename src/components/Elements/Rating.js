
export const Rating = ({ rating }) => {
  let ratingArray = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true;
  }
  return (
    <>
      {ratingArray.map((filled, i) => (
        <i key={i} className={`text-lg bi bi-star-fill ${filled ? 'text-yellow-500' : 'text-gray-300'} mr-1`} />
      ))}

    </>
  )
}
