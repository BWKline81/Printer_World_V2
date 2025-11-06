import batteryImg from "../assets/images/3dpbatteryholder.jpg";
import canHolderImg from "../assets/images/3dpcanholder.jpg";
import chessImg from "../assets/images/3dpchess.jpg";
import clampImg from "../assets/images/3dpclamp.jpg";
import dinoImg from "../assets/images/3dpdino.jpg";
import fruitHolderImg from "../assets/images/3dpfruitholder.jpg";
import glassesImg from "../assets/images/3dpglasses.jpg";
import jetImg from "../assets/images/3dpjet.jpg";
import penHolderImg from "../assets/images/3dppenholder.jpg";
import planterImg from "../assets/images/3dpplanter.jpg";
import qtipImg from "../assets/images/3dpqtip.jpg";
import treeImg from "../assets/images/3dptree.jpg";
import vaseImg from "../assets/images/3dpvase.jpg";
import wrenchImg from "../assets/images/3dpwrench.jpg";
import ddcImg from "../assets/images/3dpddc.webp";
import flexiDogImg from "../assets/images/3dpflexidog.webp";

let products = [
  {
    image: batteryImg,
    name: "Battery Holder",
    desc: "A battery holder that can store AA batteries.",
    type: "decor",
    fulldesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec nulla commodo posuere. Curabitur vel magna non nisl dignissim laoreet in nec arcu. Integer ac velit vel felis laoreet gravida vel a eros. ",
    price: 20,
  },
  {
    image: canHolderImg,
    name: "Can Holder",
    desc: "A can holder that can let you hold cans like a mug.",
    type: "other",
    fulldesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec nulla commodo posuere. Curabitur vel magna non nisl dignissim laoreet in nec arcu. Integer ac velit vel felis laoreet gravida vel a eros. ",
    price: 50,
  },
  {
    image: chessImg,
    name: "Chess Set",
    desc: "A chess set with fun pieces that can be used to play chess.",
    type: "other",
    fulldesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec nulla commodo posuere. Curabitur vel magna non nisl dignissim laoreet in nec arcu. Integer ac velit vel felis laoreet gravida vel a eros. ",
    price: 100,
  },
  {
    image: clampImg,
    name: "4",
    desc: "An adjustable clamp that can be used to clamp things.",
    type: "tools",
    fulldesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec nulla commodo posuere. Curabitur vel magna non nisl dignissim laoreet in nec arcu. Integer ac velit vel felis laoreet gravida vel a eros. ",
    price: 25,
  },
  {
    image: dinoImg,
    name: "Flexi Dino",
    desc: "A flexible dino that can be used as a decoration or a toy",
    type: "accessories",
    fulldesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec nulla commodo posuere. Curabitur vel magna non nisl dignissim laoreet in nec arcu. Integer ac velit vel felis laoreet gravida vel a eros. ",
    price: 5,
  },
  {
    image: glassesImg,
    name: "Glasses Stand",
    desc: "A stand for your eyeglasses",
    type: "other",
    fulldesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec nulla commodo posuere. Curabitur vel magna non nisl dignissim laoreet in nec arcu. Integer ac velit vel felis laoreet gravida vel a eros. ",
    price: 15,
  },
  {
    image: fruitHolderImg,
    name: "Fruit Holder",
    desc: "A holder that can be use to hold fruit at the dinner table.",
    type: "decor",
    fulldesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec nulla commodo posuere. Curabitur vel magna non nisl dignissim laoreet in nec arcu. Integer ac velit vel felis laoreet gravida vel a eros. ",
    price: 45,
  },
  {
    image: jetImg,
    name: "Jet",
    desc: "A small jet that can be used for decor or as a toy.",
    type: "accessories",
    fulldesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec nulla commodo posuere. Curabitur vel magna non nisl dignissim laoreet in nec arcu. Integer ac velit vel felis laoreet gravida vel a eros. ",
    price: 35,
  },
  {
    image: penHolderImg,
    name: "Pen Holder",
    desc: "A pen holder that looks like Darth Vader.",
    type: "decor",
    fulldesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec nulla commodo posuere. Curabitur vel magna non nisl dignissim laoreet in nec arcu. Integer ac velit vel felis laoreet gravida vel a eros. ",
    price: 55,
  },
  {
    image: planterImg,
    name: "Plant Pot",
    desc: "A fun plant pot that can be used to hold plants.",
    type: "decor",
    fulldesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec nulla commodo posuere. Curabitur vel magna non nisl dignissim laoreet in nec arcu. Integer ac velit vel felis laoreet gravida vel a eros. ",
    price: 75,
  },
  {
    image: qtipImg,
    name: "Q-Tip Corssbow",
    desc: "A fun crossbow that can be used to shoot q-tips.",
    type: "accessories",
    fulldesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec nulla commodo posuere. Curabitur vel magna non nisl dignissim laoreet in nec arcu. Integer ac velit vel felis laoreet gravida vel a eros. ",
    price: 30,
  },
  {
    image: treeImg,
    name: "Christmas Tree",
    desc: "A Christmas tree that can be used as a decoration.",
    type: "decor",
    fulldesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec nulla commodo posuere. Curabitur vel magna non nisl dignissim laoreet in nec arcu. Integer ac velit vel felis laoreet gravida vel a eros. ",
    price: 15,
  },
  {
    image: vaseImg,
    name: "Vase",
    desc: "A beutiful vase that can be used to hold flowers or other items.",
    type: "decor",
    fulldesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec nulla commodo posuere. Curabitur vel magna non nisl dignissim laoreet in nec arcu. Integer ac velit vel felis laoreet gravida vel a eros. ",
    price: 85,
  },
  {
    image: wrenchImg,
    name: "Wrench",
    desc: "A wrench that can be used to fix things.",
    type: "tools",
    fulldesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec nulla commodo posuere. Curabitur vel magna non nisl dignissim laoreet in nec arcu. Integer ac velit vel felis laoreet gravida vel a eros. ",
    price: 20,
  },
  {
    image: ddcImg,
    name: "Drill Dust Collector",
    desc: "A drill dust collector that can be used to collect drill dust.",
    type: "tools",
    fulldesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec nulla commodo posuere. Curabitur vel magna non nisl dignissim laoreet in nec arcu. Integer ac velit vel felis laoreet gravida vel a eros. ",
    price: 5,
  },
  {
    image: flexiDogImg,
    name: "Flexi Dog",
    desc: "A flexible dog that can be used as a decoration or a toy",
    type: "accesssories",
    fulldesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec nulla commodo posuere. Curabitur vel magna non nisl dignissim laoreet in nec arcu. Integer ac velit vel felis laoreet gravida vel a eros. ",
    price: 25,
  },
];

export default products;
