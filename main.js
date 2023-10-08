let hasResult = false;
const screen = document.getElementById("screen");

const add = (value) => {
  if (hasResult) {
    screen.value = "";
    hasResult = false;
  }
  screen.value += value;
};

const calculate = () => {
  const valueScreen = screen.value;

  const lastChar = valueScreen.charAt(valueScreen.length - 1);
  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/"
  ) {
    screen.value = valueScreen.substring(0, valueScreen.length - 1);
  }

  try {
    const result = eval(screen.value);
    screen.value = parseFloat(result);
    hasResult = true;
  } catch (error) {
    screen.value = "Error";
  }
};

const changeSign = () => {
  const currentValue = screen.value;

  if (currentValue.charAt(0) === "-") {
    screen.value = currentValue.substring(1);
  } else {
    screen.value = "-" + currentValue;
  }
};

const addDecimal = () => (screen.value += ".");

const calculatePercentage = () => {
  const currentValue = parseFloat(screen.value);

  if (!isNaN(currentValue)) {
    const percentage = currentValue / 100;
    screen.value = percentage.toString();
  }
};

const clearEntry = () => {
  const currentValue = screen.value;

  if (currentValue.length > 0) {
    screen.value = currentValue.slice(0, -1);
  }
};

const clearAll = () => (screen.value = "");
