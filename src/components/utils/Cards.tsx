interface CardsProps {
  description: string;
  card_number: number;
  box_sides: string;
}

const Cards: React.FC<CardsProps> = ({ description, card_number, box_sides }) => {
  

  return (
    <div className={`desc-card-${card_number} ${box_sides}-s-desc-cards w-60 h-56 min-[1280px]:w-96 min-[1280px]:h-80 bg-blue-500 text-white shadow-2xl opacity-80 rounded-3xl text-wrap font-bold text-center flex justify-center items-center p-5`}>
      {description}
    </div>
  );
};

export default Cards;

//   v_val: number;
//   h_val: number;
//   h_side: string;
//   v_side: string;
// , h_val, v_val, h_side, v_side
// absolute ${v_side}-${h_val} ${h_side}-${h_val}
// h_side={'left'} v_side={'top'} h_val={0} v_val={0}
