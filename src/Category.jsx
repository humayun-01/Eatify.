import { RiGalleryView2 } from "react-icons/ri";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { GiNoodles } from "react-icons/gi";
import { CiForkAndKnife } from "react-icons/ci";
import { GiFullPizza } from "react-icons/gi";
import { SiBurgerking } from "react-icons/si";
const Category = [
  {
    id: 1,
    name: "All",
    image: <RiGalleryView2 className="w-[60px] h-[60px] text-yellow-400" />,
  },
  {
    id: 2,
    name: "breakfast",
    image: (
      <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-yellow-400" />
    ),
  },
  {
    id: 3,
    name: "soups",
    image: <LuSoup className="w-[60px] h-[60px] text-yellow-400" />,
  },
  {
    id: 4,
    name: "pasta",
    image: <GiNoodles className="w-[60px] h-[60px] text-yellow-400" />,
  },
  {
    id: 5,
    name: "hearty",
    image: <CiForkAndKnife className="w-[60px] h-[60px] text-yellow-400" />,
  },
  {
    id: 6,
    name: "pizza",
    image: <GiFullPizza className="w-[60px] h-[60px] text-yellow-400" />,
  },
  {
    id: 7,
    name: "burger",
    image: <SiBurgerking className="w-[60px] h-[60px] text-yellow-400" />,
  },
];

export default Category;
