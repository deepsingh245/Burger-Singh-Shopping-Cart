import { DivCard, DivContainer, DivContainerImg, DivInfo } from "./styleCard";

export default function Card({
  addToCart,
  FilteredItems,
  SnackResearched,
}) {
  return (
    <>
      <DivContainer>
        {FilteredItems.map((snack) => (
          <DivCard key={snack.id}>
            <DivContainerImg>
              <img src={snack.img} alt="" />
            </DivContainerImg>
            <DivInfo>
              <h3>{snack.name}</h3>
              <span>{snack.category}</span>
              <p>Rs. {snack.price}</p>
              <button onClick={() => addToCart(snack)}>
                Addd to Cart
              </button>
            </DivInfo>
          </DivCard>
        ))}
      </DivContainer>
    </>
  );
}
