//  /(シ)_/  ¯\_(ツ)_/¯  /(ツ)_/¯

interface CardsProps {
  description: string;
  card_number: number;
  box_sides: string;
}

const Cards: React.FC<CardsProps> = ({ description, card_number, box_sides }) => {
  

  return (
    <div className={`desc-card-${card_number} ${box_sides}-s-desc-cards w-40 h-36 md:w-60 md:h-56 min-[1280px]:w-96 min-[1280px]:h-80 text-xs md:text-lg bg-transparent border border-white text-outline shadow-2xl rounded-3xl text-wrap font-bold text-center flex justify-center items-center p-5 overflow-hidden`}>
      {description}
    </div>
  );
};

export default Cards;

//  /(シ)_/  ¯\_(ツ)_/¯  /(ツ)_/¯