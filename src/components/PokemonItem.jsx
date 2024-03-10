
export const PokemonItem = ({ pokemon, onClick }) => {
  return (
    <>
      <div
        className="pokemon-card shadow-sm"
        style={{ cursor: "pointer" }}
        onClick={() => onClick(pokemon.url)}
        onDoubleClick={() => console.log('double click')}
      >
        <p className="p-2 text-center">{pokemon.name}</p>
      </div>
    </>
  );
};
