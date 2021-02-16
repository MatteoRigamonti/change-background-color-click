const colors = ["#FFBF00", "#FF7F50", "#DE3163", "#9FE2BF", "#40E0D0", "#6495ED", "#CCCCFF"];
const getBgColor = document.getElementById("general-bg-color");

const changeColor = () => {
	const randomNumber = Math.round(Math.random() * colors.length);

	getBgColor.style.backgroundColor = colors[randomNumber];
};
