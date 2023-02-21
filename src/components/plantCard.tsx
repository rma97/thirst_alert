import { type Plant } from "@prisma/client";

const PlantCard: React.FC<{ plant: Plant }> = ({ plant }) => {
  return <div>{plant.name}</div>;
};

export default PlantCard;
