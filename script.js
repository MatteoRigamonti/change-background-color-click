const colors = ["#FFBF00", "#FF7F50", "#DE3163", "#9FE2BF", "#40E0D0", "#6495ED", "#CCCCFF"];
const colorsNumber = colors.length;
const getBgColor = document.getElementById("general-bg-color");
const getSquare = document.getElementById("square");

const changeColor = () => {
	const randomNumber = Math.round(Math.random() * colorsNumber);

	getSquare.style.width = "300vh";
	getSquare.style.height = "300vh";
	getSquare.style.backgroundColor = colors[randomNumber];
};
