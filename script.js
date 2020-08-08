// COLOR PICKER
let isColorPickerSelected = false

// PALETTE LOCKING
let isColorsLocked = false

// COLORS
let isSelectedColor1 = false;
let isSelectedColor2 = false;
let isSelectedColor3 = false;
let isSelectedColor4 = false;
let isSelectedColor5 = false;


// CARD ONE
let isSelectedCard1Background = false;
let isSelectedCard1Circle1 = false;
let isSelectedCard1Circle2 = false;
let isSelectedCard1Circle3 = false;
let isSelectedCard1Text = false;
let isSelectedCard1Button = false;
let isSelectedCard1ButtonText = false;

// CARD TWO
let isSelectedCard2Background = false;
let isSelectedCard2Circle1 = false;
let isSelectedCard2Circle2 = false;
let isSelectedCard2Circle3 = false;
let isSelectedCard2Text = false;
let isSelectedCard2Button = false;
let isSelectedCard2ButtonText = false;

// CARD THREE
let isSelectedCard3Background = false;
let isSelectedCard3Circle1 = false;
let isSelectedCard3Circle2 = false;
let isSelectedCard3Circle3 = false;
let isSelectedCard3Text = false;
let isSelectedCard3Button = false;
let isSelectedCard3ButtonText = false;

// CARD FOUR
let isSelectedCard4Background = false;
let isSelectedCard4Circle1 = false;
let isSelectedCard4Circle2 = false;
let isSelectedCard4Circle3 = false;
let isSelectedCard4Text = false;
let isSelectedCard4Button = false;
let isSelectedCard4ButtonText = false;

const selectionIndicator = document.querySelector('.indicator')
const moveTool = document.querySelector('.move-tool')
const colorPicker = document.querySelector('.color-picker')
const tracker = document.querySelector('.tracker');
const htmlEl = document.querySelector('html');

// HSL OUTPUTS
const outputHueValue = document.querySelector(".output .hueValue");
const outputSaturationValue = document.querySelector(".output .saturationValue");
const outputBrightnessValue = document.querySelector(".output .brightnessValue");

// HSL RANGE INPUTS
const inputHue = document.querySelector("#hue");
const inputSaturation = document.querySelector("#saturation");
const inputBrightness = document.querySelector("#brightness");
// console.log(outputHueValue, outputSaturationValue, outputBrightnessValue)
// console.log(inputHue.value, inputSaturation.value, inputBrightness.value)

// PALETTE
// const lockIcon = document.querySelector(".palette__container img");

const colorOne = document.querySelector(".color.color1");
const colorTwo = document.querySelector(".color.color2");
const colorThree = document.querySelector(".color.color3");
const colorFour = document.querySelector(".color.color4");
const colorFive = document.querySelector(".color.color5");
const colorOneHexCode = colorOne.nextElementSibling;
const colorTwoHexCode = colorTwo.nextElementSibling;
const colorThreeHexCode = colorThree.nextElementSibling;
const colorFourHexCode = colorFour.nextElementSibling;
const colorFiveHexCode = colorFive.nextElementSibling;
// console.log(colorOneHexCode)


// CARD ONE
const cardOneBackground = document.querySelector(".card1.card .background");
const cardOneCircleOne = document.querySelector(".card1.card .circle1");
const cardOneCircleTwo = document.querySelector(".card1.card .circle2");
const cardOneCircleThree = document.querySelector(".card1.card .circle3");
const cardOneText = document.querySelector(".card1.card .text");
const cardOneButton = document.querySelector(".card1.card .button");
const cardOneButtonText = document.querySelector(".card1.card p");


// CARD TWO
const cardTwoBackground = document.querySelector(".card2.card .background");
const cardTwoCircleOne = document.querySelector(".card2.card .circle1");
const cardTwoCircleTwo = document.querySelector(".card2.card .circle2");
const cardTwoCircleThree = document.querySelector(".card2.card .circle3");
const cardTwoText = document.querySelector(".card2.card .text");
const cardTwoButton = document.querySelector(".card2.card .button");
const cardTwoButtonText = document.querySelector(".card2.card p");

// CARD THREE
const cardThreeBackground = document.querySelector(".card3.card .background");
const cardThreeCircleOne = document.querySelector(".card3.card .circle1");
const cardThreeCircleTwo = document.querySelector(".card3.card .circle2");
const cardThreeCircleThree = document.querySelector(".card3.card .circle3");
const cardThreeText = document.querySelector(".card3.card .text");
const cardThreeButton = document.querySelector(".card3.card .button");
const cardThreeButtonText = document.querySelector(".card3.card p");


// CARD FOUR
const cardFourBackground = document.querySelector(".card4.card .background");
const cardFourCircleOne = document.querySelector(".card4.card .circle1");
const cardFourCircleTwo = document.querySelector(".card4.card .circle2");
const cardFourCircleThree = document.querySelector(".card4.card .circle3");
const cardFourText = document.querySelector(".card4.card .text");
const cardFourButton = document.querySelector(".card4.card .button");
const cardFourButtonText = document.querySelector(".card4.card p");


// GHOST ELEMENT
const overlay = document.querySelector(".ghost-element");
overlay.addEventListener("click", deselectAllCardElements);

// function deselectAllCardElementsByKeypressing(e) {
    // e = e||window.event
//    let ctrlDown = e.ctrlKey||e.metaKey 
//  if (ctrlDown && e.keyCode==68) {
//     deselectAllCardElements()

//  } 
// }
function deselectAllCardElements(){
    // CARD ONE
    unSelectCardOneBackground();
    unSelectCardOneCircleOne();
    unSelectCardOneCircleTwo();
    unSelectCardOneCircleThree();
    unSelectCardOneText();
    unSelectCardOneButton();
    unSelectCardOneButtonText();
    
    // CARD TWO
    unSelectCardTwoBackground();
    unSelectCardTwoCircleOne();
    unSelectCardTwoCircleTwo();
    unSelectCardTwoCircleThree();
    unSelectCardTwoText();
    unSelectCardTwoButton();
    unSelectCardTwoButtonText();

    // CARD THREE
    unSelectCardThreeBackground();
    unSelectCardThreeCircleOne();
    unSelectCardThreeCircleTwo();
    unSelectCardThreeCircleThree();
    unSelectCardThreeText();
    unSelectCardThreeButton();
    unSelectCardThreeButtonText();

    // CARD FOUR
    unSelectCardFourBackground();
    unSelectCardFourCircleOne();
    unSelectCardFourCircleTwo();
    unSelectCardFourCircleThree();
    unSelectCardFourText();
    unSelectCardFourButton();
    unSelectCardFourButtonText();
}


// RESET ICON
const resetIcon = document.querySelector("img.reset-icon");
resetIcon.addEventListener("click", resetPalette);

function resetPalette() {
    colorOne.style.backgroundColor = "#505050";
    colorTwo.style.backgroundColor = "#B5B5B5";
    colorThree.style.backgroundColor = "#666666";
    colorFour.style.backgroundColor = "#000000";
    colorFive.style.backgroundColor = "#ffffff";
    colorOneHexCode.innerHTML = "#505050";
    colorTwoHexCode.innerHTML = "#B5B5B5";
    colorThreeHexCode.innerHTML = "#666666";
    colorFourHexCode.innerHTML = "#000000";
    colorFiveHexCode.innerHTML = "#ffffff";
}

// ADD TO THE STORAGE ICON
const addToFolderIcon = document.querySelector("img.add-to-folder-icon");
const modalOverlay = document.querySelector(".modal-overlay");
const modalContainer = document.querySelector(".add-palette-dialog-box");
const closeIcon = document.querySelector(".add-palette-dialog-box .close-icon");
const modalColors = document.querySelector(".add-palette-dialog-box .modal-colors");

const addPaletteForm = document.querySelector("#add-palette");
// console.log(addPaletteForm)
// const addToStorageBtn = document.querySelector("input.add-to-storage");
const palettesListContainerCloseIcon = document.querySelector('.palettesList-container__close-icon');
const palettesListContainerClearStorage = document.querySelector('.palettesList-container button.clear-btn');
const palettesListContainer = document.querySelector('.palettesList-container');
const palettesList = document.querySelector('.palettesList');
const deleteIcon = document.querySelector('.palettesList .delete-list');
const paletteLists = document.querySelectorAll('.palettesList li');
let palettes = JSON.parse(localStorage.getItem('palettes')) || [];

const folderIcon = document.querySelector('.folder-icon');

folderIcon.addEventListener("click", openStorage);
palettesListContainerCloseIcon.addEventListener("click", closeStorage);

function openStorage(){
    // palettesListContainer.style.left = "0%"
    palettesListContainer.style.transform = "translate(0px, -50%)"
}
function closeStorage(){
    // palettesListContainer.style.left = "-15%"
    palettesListContainer.style.transform = "translate(-230px, -50%)"
    // console.log("clicked")
}


addToFolderIcon.addEventListener("click", openModal);
modalOverlay.addEventListener("click", closeModal);
closeIcon.addEventListener("click", closeModal);
// addToStorageBtn.addEventListener("click", addPaletteToStorage);
addPaletteForm.addEventListener('submit', addPaletteToStorage);
// paletteLists.forEach(paletteList => {
//     paletteList.addEventListener('click', applyPalette)
// })

function applyPalette(element) {

    let stColor1 = element.querySelector('.color.color1').style.backgroundColor
    let stColor2 = element.querySelector('.color.color2').style.backgroundColor
    let stColor3 = element.querySelector('.color.color3').style.backgroundColor
    let stColor4 = element.querySelector('.color.color4').style.backgroundColor
    let stColor5 = element.querySelector('.color.color5').style.backgroundColor

// console.log(typeof stColor1)

    colorOne.style.backgroundColor = stColor1
    colorTwo.style.backgroundColor = stColor2
    colorThree.style.backgroundColor = stColor3
    colorFour.style.backgroundColor = stColor4
    colorFive.style.backgroundColor = stColor5;
    colorOneHexCode.innerHTML = rgbToHex(stColor1);
    colorTwoHexCode.innerHTML = rgbToHex(stColor2);
    colorThreeHexCode.innerHTML = rgbToHex(stColor3);
    colorFourHexCode.innerHTML = rgbToHex(stColor4);
    colorFiveHexCode.innerHTML = rgbToHex(stColor5);
}


function openModal() {
    modalContainer.style.display = "flex"
    modalOverlay.style.display = "block"
    modalOverlay.style.transform = "translate(-50%, -50%) scale(1)"
    modalOverlay.style.opacity = 0.1
    setTimeout(() => {
        modalContainer.style.transform = "translate(-50%, -50%) scale(1)"
        modalContainer.style.opacity = 1

    }, 50)
    
    let code1 = colorOneHexCode.innerHTML
    let code2 = colorTwoHexCode.innerHTML
    let code3 = colorThreeHexCode.innerHTML
    let code4 = colorFourHexCode.innerHTML
    let code5 = colorFiveHexCode.innerHTML
    // console.log(code1)
    modalColors.innerHTML = `
        <div class="modal-colors">
            <div class="color color1" style="background-color: ${code1}"></div>
            <div class="color color2" style="background-color: ${code2}"></div>
            <div class="color color3" style="background-color: ${code3}"></div>
            <div class="color color4" style="background-color: ${code4}"></div>
            <div class="color color5" style="background-color: ${code5}"></div>
        </div>
    `
 
    
}
function closeModal() {
    // console.log("clicked")
    modalContainer.style.transform = "translate(-50%, -50%) scale(0)"
    modalContainer.style.opacity = 0
    setTimeout(() => {
        modalContainer.style.display = "none"
        modalOverlay.style.display = "none"
        modalOverlay.style.transform = "translate(-50%, -50%) scale(0)"
        modalOverlay.style.opacity = 0

    }, 50)
    
   
 
    
}


function addPaletteToStorage(e) {

    e.preventDefault();

    const paletteName = (this.querySelector('[name=paletteName]')).value;
    let code1 = colorOneHexCode.innerHTML
    let code2 = colorTwoHexCode.innerHTML
    let code3 = colorThreeHexCode.innerHTML
    let code4 = colorFourHexCode.innerHTML
    let code5 = colorFiveHexCode.innerHTML
    // console.log(paletteName)
    const palette = {
        id:  Date.now().toString(36) + Math.random().toString(36).substr(2),
        paletteName,
        color1: code1,
        color2: code2,
        color3: code3,
        color4: code4,
        color5: code5,
    }
    palettes.push(palette);
    localStorage.setItem('palettes', JSON.stringify(palettes));
    createList(palettes, palettesList);
    // console.log(palettes.toString());
    // console.log(JSON.stringify(palettes));

    this.reset();
}

function createList(palettes = [], palettesList) {

    if(palettes.length === 0){
       return palettesList.innerHTML = `
            <p>No palettes here</p>
        `
    } else {
        palettesList.innerHTML = palettes.map((palette, i) => {       
        return `
            <li data-id="${palette.id}">
                <h4>${palette.paletteName}-${i}</h4>
                <div class="storage-colors" onclick="applyPalette(this);">
                <div class="color color1" style="background-color: ${palette.color1}"></div>
                <div class="color color2" style="background-color: ${palette.color2}"></div>
                <div class="color color3" style="background-color: ${palette.color3}"></div>
                <div class="color color4" style="background-color: ${palette.color4}"></div>
                <div class="color color5" style="background-color: ${palette.color5}"></div>
            </div>
            <img src="./delete-icon.svg" alt="trash icon" class="delete-list" onclick="deletePalette(this);">
            </li>
        
        `
    }).join('');

}
}
createList(palettes, palettesList)


function deletePalette(e) {
    // console.log(e)
    var paletteId = e.parentNode.getAttribute("data-id");
    // console.log(paletteId)

    let tempPalettes = JSON.parse(localStorage.getItem('palettes')).filter(palette => palette.id !== paletteId)
    // console.log(tempPalettes)

    palettes = [...tempPalettes];
    localStorage.setItem('palettes', JSON.stringify(palettes));
    createList(palettes, palettesList);
}


palettesListContainerClearStorage.addEventListener('click', clearStorage)
function clearStorage() {
    palettes.splice(0);
    localStorage.setItem('palettes', JSON.stringify(palettes));
    createList(palettes, palettesList);
}

inputHue.addEventListener("input", changeColor);
inputSaturation.addEventListener("input", changeColor);
inputBrightness.addEventListener("input", changeColor);

//COLOR ONE
colorOne.addEventListener("click", checkIsSelectedColor1); 

function checkIsSelectedColor1() {
    if (isSelectedColor1) {
        unSelectColorOne();
    } else if (!isSelectedColor1) {
        selectColorOne();
    }
}
function selectColorOne() {
    isSelectedColor1 = true
        // colorOne.style.border = '3px solid hsl(238, 100%, 68%)';
        colorOne.style.border = '3px solid rgb(255, 181, 84)';
        
        let inputColorOneHexCode = colorOneHexCode.textContent;
        let hslColor = hexToHsl(inputColorOneHexCode)
    
        let hValue = hslColor.h
    
        inputHue.value = hValue
        inputSaturation.value = hslColor.s
        inputBrightness.value = hslColor.l
    
        inputSaturation.style.background = `linear-gradient(90deg, white, hsl(${hValue}, 100%, 50%))`;
    
        outputHueValue.textContent = hslColor.h
        outputSaturationValue.textContent = hslColor.s
        outputBrightnessValue.textContent = hslColor.l
}
function unSelectColorOne() {
        isSelectedColor1 = false
        colorOne.style.border = 'none'; 
}

//COLOR TWO
colorTwo.addEventListener("click", checkIsSelectedColor2); 

function checkIsSelectedColor2() {
    if (isSelectedColor2) {
        unSelectColorTwo();
    } else if (!isSelectedColor2) {
        selectColorTwo();
    }
}
function selectColorTwo() {
    isSelectedColor2 = true
        // colorTwo.style.border = '3px solid hsl(238, 100%, 68%)';
        colorTwo.style.border = '3px solid rgb(255, 181, 84)';

        let inputColorTwoHexCode = colorTwoHexCode.textContent;
        let hslColor = hexToHsl(inputColorTwoHexCode)
    
        let hValue = hslColor.h
    
        inputHue.value = hValue
        inputSaturation.value = hslColor.s
        inputBrightness.value = hslColor.l
    
        inputSaturation.style.background = `linear-gradient(90deg, white, hsl(${hValue}, 100%, 50%))`;

        outputHueValue.textContent = hslColor.h
        outputSaturationValue.textContent = hslColor.s
        outputBrightnessValue.textContent = hslColor.l
}
function unSelectColorTwo() {
        isSelectedColor2 = false
        colorTwo.style.border = 'none'; 
}

//COLOR THREE
colorThree.addEventListener("click", checkIsSelectedColor3); 

function checkIsSelectedColor3() {
    if (isSelectedColor3) {
        unSelectColorThree();
    } else if (!isSelectedColor3) {
        selectColorThree();
    }
}
function selectColorThree() {
    isSelectedColor3 = true
        // colorThree.style.border = '3px solid hsl(238, 100%, 68%)';
        colorThree.style.border = '3px solid rgb(255, 181, 84)';

        let inputColorThreeHexCode = colorThreeHexCode.textContent;
        let hslColor = hexToHsl(inputColorThreeHexCode)
    
        let hValue = hslColor.h
    
        inputHue.value = hValue
        inputSaturation.value = hslColor.s
        inputBrightness.value = hslColor.l
    
        inputSaturation.style.background = `linear-gradient(90deg, white, hsl(${hValue}, 100%, 50%))`;

        outputHueValue.textContent = hslColor.h
        outputSaturationValue.textContent = hslColor.s
        outputBrightnessValue.textContent = hslColor.l
}
function unSelectColorThree() {
        isSelectedColor3 = false
        colorThree.style.border = 'none'; 
}

//COLOR FOUR
colorFour.addEventListener("click", checkIsSelectedColor4); 

function checkIsSelectedColor4() {
    if (isSelectedColor4) {
        unSelectColorFour();
    } else if (!isSelectedColor4) {
        selectColorFour();
    }
}
function selectColorFour() {
    isSelectedColor4 = true
        // colorFour.style.border = '3px solid hsl(238, 100%, 68%)';
        colorFour.style.border = '3px solid rgb(255, 181, 84)';

        let inputColorFourHexCode = colorFourHexCode.textContent;
        let hslColor = hexToHsl(inputColorFourHexCode)

        let hValue = hslColor.h
    
        inputHue.value = hValue
        inputSaturation.value = hslColor.s
        inputBrightness.value = hslColor.l
    
        inputSaturation.style.background = `linear-gradient(90deg, white, hsl(${hValue}, 100%, 50%))`;

        outputHueValue.textContent = hslColor.h
        outputSaturationValue.textContent = hslColor.s
        outputBrightnessValue.textContent = hslColor.l
}
function unSelectColorFour() {
        isSelectedColor4 = false
        colorFour.style.border = 'none'; 
}

//COLOR FIVE
colorFive.addEventListener("click", checkIsSelectedColor5); 

function checkIsSelectedColor5() {
    if (isSelectedColor5) {
        unSelectColorFive();
    } else if (!isSelectedColor5) {
        selectColorFive();
    }
}
function selectColorFive() {
    isSelectedColor5 = true
        // colorFive.style.border = '3px solid hsl(238, 100%, 68%)';
        colorFive.style.border = '3px solid rgb(255, 181, 84)';

        let inputColorFiveHexCode = colorFiveHexCode.textContent;
        let hslColor = hexToHsl(inputColorFiveHexCode)
    
        let hValue = hslColor.h
    
        inputHue.value = hValue
        inputSaturation.value = hslColor.s
        inputBrightness.value = hslColor.l
    
        inputSaturation.style.background = `linear-gradient(90deg, white, hsl(${hValue}, 100%, 50%))`;
    
        outputHueValue.textContent = hslColor.h
        outputSaturationValue.textContent = hslColor.s
        outputBrightnessValue.textContent = hslColor.l
}
function unSelectColorFive() {
        isSelectedColor5 = false
        colorFive.style.border = 'none'; 
}



// CHANGE COLOR
function changeColor() {
    let hueValue = parseInt(inputHue.value);
    let saturationValue = parseInt(inputSaturation.value);
    let brightnessValue = parseInt(inputBrightness.value);
    let hslColor = `hsl(${hueValue}, ${saturationValue}%, ${brightnessValue}%)`;
    // body.style.backgroundColor = hslColor;
    let hexColor = hslToHex(hueValue,saturationValue,brightnessValue)

    inputSaturation.style.background = `linear-gradient(90deg, white, hsl(${hueValue}, 100%, 50%))`;
    // if(hueValue > 0 && hueValue < 45) {
    //     inputSaturation.style.background = `linear-gradient(90deg, white, red)`;
    // }
    // if(hueValue >= 45 && hueValue < 90) {
    //     inputSaturation.style.background = `linear-gradient(90deg, white, orange)`;
    // }
    // if(hueValue >= 90 && hueValue < 135) {
    //     inputSaturation.style.background = `linear-gradient(90deg, white, yellow)`;
    // }
    // if(hueValue >= 135 && hueValue < 180) {
    //     inputSaturation.style.background = `linear-gradient(90deg, white, rgb(0, 255, 0))`;
    // }
    // if(hueValue >= 180 && hueValue < 225) {
    //     inputSaturation.style.background = `linear-gradient(90deg, white, cyan)`;
    // }
    // if(hueValue >= 225 && hueValue < 270) {
    //     inputSaturation.style.background = `linear-gradient(90deg, white, blue)`;
    // }
    // if(hueValue >= 270 && hueValue < 300) {
    //     inputSaturation.style.background = `linear-gradient(90deg, white, rgb(255, 0, 255))`;
    // }
    // if(hueValue >= 300 && hueValue < 360) {
    //     inputSaturation.style.background = `linear-gradient(90deg, white, red)`;
    // }

    
    // console.log(hexColor)
    // console.log(changedColor);
    outputHueValue.textContent = hueValue;
    outputSaturationValue.textContent = saturationValue;
    outputBrightnessValue.textContent = brightnessValue;
    // console.log(inputHue.value, inputSaturation.value, inputBrightness.value)

      // colorOne.style.backgroundColor = hslColor;
    if (isSelectedColor1) {
        colorOne.style.backgroundColor = hslColor;
        colorOne.nextElementSibling.innerHTML = hexColor.toUpperCase()
    } 
    if (isSelectedColor2) {
        colorTwo.style.backgroundColor = hslColor;
        colorTwo.nextElementSibling.innerHTML = hexColor.toUpperCase()
    } 
    if (isSelectedColor3) {
        colorThree.style.backgroundColor = hslColor;
        colorThree.nextElementSibling.innerHTML = hexColor.toUpperCase()
    } 
    if (isSelectedColor4) {
        colorFour.style.backgroundColor = hslColor;
        colorFour.nextElementSibling.innerHTML = hexColor.toUpperCase()
    } 
    if (isSelectedColor5) {
        colorFive.style.backgroundColor = hslColor;
        colorFive.nextElementSibling.innerHTML = hexColor.toUpperCase()
    } 


  
  
}

// APPLY GIVEN HSL INPUT VALUES
// HUE
outputHueValue.addEventListener("input", applyInputHueValue);

function applyInputHueValue(e) {
    let inputHueValue = outputHueValue.textContent;
    
    let rangeHueValue = inputHue.value;
    rangeHueValue = inputHueValue;
    inputHue.value = rangeHueValue;
    changeColor() 
        
}

// SATURATION
outputSaturationValue.addEventListener("input", applyInputSaturationValue);

function applyInputSaturationValue() {
    let inputSaturationValue = outputSaturationValue.textContent;

    let rangeSaturationValue = inputSaturation.value;
    rangeSaturationValue = inputSaturationValue;
    inputSaturation.value = rangeSaturationValue;
    changeColor() 
    
}

// BRIGHTNESS
outputBrightnessValue.addEventListener("input", applyInputBrightnessValue);

function applyInputBrightnessValue() {
    let inputBrightnessValue = outputBrightnessValue.textContent;

    let rangeBrightnessValue = inputBrightness.value;
    rangeBrightnessValue = inputBrightnessValue;
    inputBrightness.value = rangeBrightnessValue
    changeColor() 
    
}

// CHANGE COLOR BY APPLYING GIVEN HEX CODE
// COLOR ONE
colorOneHexCode.addEventListener("input", applyInputColorOneHexCode);
function applyInputColorOneHexCode() {
    let inputColorOneHexCode = colorOneHexCode.textContent;
    colorOne.style.backgroundColor = inputColorOneHexCode;


    let hslColor = hexToHsl(inputColorOneHexCode)
    // console.log(hslColor)

    inputHue.value = hslColor.h
    inputSaturation.value = hslColor.s
    inputBrightness.value = hslColor.l

    inputSaturation.style.background = `linear-gradient(90deg, white, hsl(${hslColor.h}, 100%, 50%))`;

    outputHueValue.textContent = hslColor.h
    outputSaturationValue.textContent = hslColor.s
    outputBrightnessValue.textContent = hslColor.l

    
}
// COLOR TWO
colorTwoHexCode.addEventListener("input", applyInputColorTwoHexCode);
function applyInputColorTwoHexCode() {
    let inputColorTwoHexCode = colorTwoHexCode.textContent;
    colorTwo.style.backgroundColor = inputColorTwoHexCode;

    let hslColor = hexToHsl(inputColorTwoHexCode)
    // console.log(hslColor)

    inputHue.value = hslColor.h
    inputSaturation.value = hslColor.s
    inputBrightness.value = hslColor.l
    
    inputSaturation.style.background = `linear-gradient(90deg, white, hsl(${hslColor.h}, 100%, 50%))`;

    outputHueValue.textContent = hslColor.h
    outputSaturationValue.textContent = hslColor.s
    outputBrightnessValue.textContent = hslColor.l
    
}
// COLOR THREE
colorThreeHexCode.addEventListener("input", applyInputColorThreeHexCode);
function applyInputColorThreeHexCode() {
    let inputColorThreeHexCode = colorThreeHexCode.textContent;
    colorThree.style.backgroundColor = inputColorThreeHexCode;

    let hslColor = hexToHsl(inputColorThreeHexCode)
    // console.log(hslColor)

    inputHue.value = hslColor.h
    inputSaturation.value = hslColor.s
    inputBrightness.value = hslColor.l

    inputSaturation.style.background = `linear-gradient(90deg, white, hsl(${hslColor.h}, 100%, 50%))`;

    outputHueValue.textContent = hslColor.h
    outputSaturationValue.textContent = hslColor.s
    outputBrightnessValue.textContent = hslColor.l
    
}
// COLOR FOUR
colorFourHexCode.addEventListener("input", applyInputColorFourHexCode);
function applyInputColorFourHexCode() {
    let inputColorFourHexCode = colorFourHexCode.textContent;
    colorFour.style.backgroundColor = inputColorFourHexCode;

    let hslColor = hexToHsl(inputColorFourHexCode)
   

    inputHue.value = hslColor.h
    inputSaturation.value = hslColor.s
    inputBrightness.value = hslColor.l

    inputSaturation.style.background = `linear-gradient(90deg, white, hsl(${hslColor.h}, 100%, 50%))`;    

    outputHueValue.textContent = hslColor.h
    outputSaturationValue.textContent = hslColor.s
    outputBrightnessValue.textContent = hslColor.l
    
}
// COLOR FIVE
colorFiveHexCode.addEventListener("input", applyInputColorFiveHexCode);
function applyInputColorFiveHexCode() {
    let inputColorFiveHexCode = colorFiveHexCode.textContent;
    colorFive.style.backgroundColor = inputColorFiveHexCode;

    let hslColor = hexToHsl(inputColorFiveHexCode)

    inputHue.value = hslColor.h
    inputSaturation.value = hslColor.s
    inputBrightness.value = hslColor.l

    inputSaturation.style.background = `linear-gradient(90deg, white, hsl(${hslColor.h}, 100%, 50%))`;

    outputHueValue.textContent = hslColor.h
    outputSaturationValue.textContent = hslColor.s
    outputBrightnessValue.textContent = hslColor.l
    
}


// ----------------------------------------------------------------------------
// CARD ONE
// ----------------------------------------------------------------------------

// CARD ONE
// BACKGROUND
cardOneBackground.addEventListener("click", checkIsSelectedCard1Background); 

function checkIsSelectedCard1Background() {
    if (isSelectedCard1Background) {
        unSelectCardOneBackground();
    } else if (!isSelectedCard1Background) {
        selectCardOneBackground();
    }
}
function selectCardOneBackground() {
    isSelectedCard1Background = true
        cardOneBackground.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 

             colorOne.addEventListener("click", changeCardOneBackgroundToColorOne); 
            colorTwo.addEventListener("click", changeCardOneBackgroundToColorTwo); 
            colorThree.addEventListener("click", changeCardOneBackgroundToColorThree); 
            colorFour.addEventListener("click", changeCardOneBackgroundToColorFour); 
            colorFive.addEventListener("click", changeCardOneBackgroundToColorFive);
        // colorPicker.addEventListener('click', selectColorPicker)

        // console.log(isColorPickerSelected)
        
    }


function unSelectCardOneBackground() {
    isSelectedCard1Background = false
    cardOneBackground.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardOneBackgroundToColorOne); 
    colorTwo.removeEventListener("click", changeCardOneBackgroundToColorTwo); 
    colorThree.removeEventListener("click", changeCardOneBackgroundToColorThree); 
    colorFour.removeEventListener("click", changeCardOneBackgroundToColorFour); 
    colorFive.removeEventListener("click", changeCardOneBackgroundToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardOneBackgroundToColorOne() {
    if(isColorPickerSelected){
        let colorOneBgC = colorOneHexCode.textContent;
        cardOneBackground.style.backgroundColor = colorOneBgC;

    }
}
function changeCardOneBackgroundToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardOneBackground.style.backgroundColor = colorTwoBgC;
    }
}
function changeCardOneBackgroundToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardOneBackground.style.backgroundColor = colorThreeBgC;
    }
}
function changeCardOneBackgroundToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardOneBackground.style.backgroundColor = colorFourBgC;
    }

}
function changeCardOneBackgroundToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardOneBackground.style.backgroundColor = colorFiveBgC;
    }
}

// CARD ONE
// CIRCLE ONE
cardOneCircleOne.addEventListener("click", checkIsSelectedCard1CircleOne); 

function checkIsSelectedCard1CircleOne() {
    if (isSelectedCard1Circle1) {
        unSelectCardOneCircleOne();
    } else if (!isSelectedCard1Circle1) {
        selectCardOneCircleOne();
    }
}
function selectCardOneCircleOne() {
    isSelectedCard1Circle1 = true
        cardOneCircleOne.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 

        colorOne.addEventListener("click", changeCardOneCircleOneToColorOne); 
        colorTwo.addEventListener("click", changeCardOneCircleOneToColorTwo); 
        colorThree.addEventListener("click", changeCardOneCircleOneToColorThree); 
        colorFour.addEventListener("click", changeCardOneCircleOneToColorFour); 
        colorFive.addEventListener("click", changeCardOneCircleOneToColorFive); 
               
        // colorPicker.addEventListener('click', selectColorPicker)
}

function unSelectCardOneCircleOne() {
    isSelectedCard1Circle1 = false
    cardOneCircleOne.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  

    colorOne.removeEventListener("click", changeCardOneCircleOneToColorOne); 
    colorTwo.removeEventListener("click", changeCardOneCircleOneToColorTwo); 
    colorThree.removeEventListener("click", changeCardOneCircleOneToColorThree); 
    colorFour.removeEventListener("click", changeCardOneCircleOneToColorFour); 
    colorFive.removeEventListener("click", changeCardOneCircleOneToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardOneCircleOneToColorOne() {
        if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardOneCircleOne.style.backgroundColor = colorOneBgC;
        }
}
function changeCardOneCircleOneToColorTwo() {
        if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardOneCircleOne.style.backgroundColor = colorTwoBgC;
        }
}
function changeCardOneCircleOneToColorThree() {
        if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardOneCircleOne.style.backgroundColor = colorThreeBgC;
        }
}
function changeCardOneCircleOneToColorFour() {
        if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardOneCircleOne.style.backgroundColor = colorFourBgC;
        }
}
function changeCardOneCircleOneToColorFive() {
        if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardOneCircleOne.style.backgroundColor = colorFiveBgC;
        }
}

// CARD ONE
// CIRCLE TWO
cardOneCircleTwo.addEventListener("click", checkIsSelectedCard1CircleTwo); 

function checkIsSelectedCard1CircleTwo() {
    if (isSelectedCard1Circle2) {
        unSelectCardOneCircleTwo();
    } else if (!isSelectedCard1Circle2) {
        selectCardOneCircleTwo();
    }
}
function selectCardOneCircleTwo() {
    isSelectedCard1Circle2 = true
        cardOneCircleTwo.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 

        colorOne.addEventListener("click", changeCardOneCircleTwoToColorOne);
        colorTwo.addEventListener("click", changeCardOneCircleTwoToColorTwo); 
        colorThree.addEventListener("click", changeCardOneCircleTwoToColorThree); 
        colorFour.addEventListener("click", changeCardOneCircleTwoToColorFour); 
        colorFive.addEventListener("click", changeCardOneCircleTwoToColorFive);  
        
        // colorPicker.addEventListener('click', selectColorPicker)
        
}
function unSelectCardOneCircleTwo() {
    isSelectedCard1Circle2 = false
    cardOneCircleTwo.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  

    colorOne.removeEventListener("click", changeCardOneCircleTwoToColorOne);
    colorTwo.removeEventListener("click", changeCardOneCircleTwoToColorTwo); 
    colorThree.removeEventListener("click", changeCardOneCircleTwoToColorThree); 
    colorFour.removeEventListener("click", changeCardOneCircleTwoToColorFour); 
    colorFive.removeEventListener("click", changeCardOneCircleTwoToColorFive); 
    
    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardOneCircleTwoToColorOne() {
        if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardOneCircleTwo.style.backgroundColor = colorOneBgC;
        }
    
}
function changeCardOneCircleTwoToColorTwo() {
        if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardOneCircleTwo.style.backgroundColor = colorTwoBgC;
        }
    
}
function changeCardOneCircleTwoToColorThree() {
        if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardOneCircleTwo.style.backgroundColor = colorThreeBgC;
        }
    
}
function changeCardOneCircleTwoToColorFour() {
        if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardOneCircleTwo.style.backgroundColor = colorFourBgC;
        }
    
}
function changeCardOneCircleTwoToColorFive() {
        if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardOneCircleTwo.style.backgroundColor = colorFiveBgC;
        }
    
}

// CARD ONE
// CIRCLE THREE
cardOneCircleThree.addEventListener("click", checkIsSelectedCard1CircleThree); 

function checkIsSelectedCard1CircleThree() {
    if (isSelectedCard1Circle3) {
        unSelectCardOneCircleThree();
    } else if (!isSelectedCard1Circle3) {
        selectCardOneCircleThree();
    }
}
function selectCardOneCircleThree() {
    isSelectedCard1Circle3 = true
        cardOneCircleThree.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 

        colorOne.addEventListener("click", changeCardOneCircleThreeToColorOne); 
        colorTwo.addEventListener("click", changeCardOneCircleThreeToColorTwo); 
        colorThree.addEventListener("click", changeCardOneCircleThreeToColorThree); 
        colorFour.addEventListener("click", changeCardOneCircleThreeToColorFour); 
        colorFive.addEventListener("click", changeCardOneCircleThreeToColorFive);    
        

        // colorPicker.addEventListener('click', selectColorPicker)

}
function unSelectCardOneCircleThree() {
    isSelectedCard1Circle3 = false
    cardOneCircleThree.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  

    colorOne.removeEventListener("click", changeCardOneCircleThreeToColorOne); 
    colorTwo.removeEventListener("click", changeCardOneCircleThreeToColorTwo); 
    colorThree.removeEventListener("click", changeCardOneCircleThreeToColorThree); 
    colorFour.removeEventListener("click", changeCardOneCircleThreeToColorFour); 
    colorFive.removeEventListener("click", changeCardOneCircleThreeToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)

}

function changeCardOneCircleThreeToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardOneCircleThree.style.backgroundColor = colorOneBgC;
    }
}
function changeCardOneCircleThreeToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardOneCircleThree.style.backgroundColor = colorTwoBgC;
    }
}
function changeCardOneCircleThreeToColorThree() {
        if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardOneCircleThree.style.backgroundColor = colorThreeBgC;
    }
}
function changeCardOneCircleThreeToColorFour() {
        if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardOneCircleThree.style.backgroundColor = colorFourBgC;
    }
}
function changeCardOneCircleThreeToColorFive() {
        if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardOneCircleThree.style.backgroundColor = colorFiveBgC;
    }
}

// CARD ONE
// TEXT
cardOneText.addEventListener("click", checkIsSelectedCard1Text); 

function checkIsSelectedCard1Text() {
    if (isSelectedCard1Text) {
        unSelectCardOneText();
    } else if (!isSelectedCard1Text) {
        selectCardOneText();
    }
}
function selectCardOneText() {
    isSelectedCard1Text = true
        cardOneText.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 

        colorOne.addEventListener("click", changeCardOneTextToColorOne); 
        colorTwo.addEventListener("click", changeCardOneTextToColorTwo); 
        colorThree.addEventListener("click", changeCardOneTextToColorThree); 
        colorFour.addEventListener("click", changeCardOneTextToColorFour); 
        colorFive.addEventListener("click", changeCardOneTextToColorFive); 

        // colorPicker.addEventListener('click', selectColorPicker)
           
}
function unSelectCardOneText() {
    isSelectedCard1Text = false
    cardOneText.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  

    colorOne.removeEventListener("click", changeCardOneTextToColorOne); 
    colorTwo.removeEventListener("click", changeCardOneTextToColorTwo); 
    colorThree.removeEventListener("click", changeCardOneTextToColorThree); 
    colorFour.removeEventListener("click", changeCardOneTextToColorFour); 
    colorFive.removeEventListener("click", changeCardOneTextToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardOneTextToColorOne() {
        if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardOneText.style.color = colorOneBgC;
        }
}
function changeCardOneTextToColorTwo() {
        if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardOneText.style.color = colorTwoBgC;
        }
}
function changeCardOneTextToColorThree() {
        if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardOneText.style.color = colorThreeBgC;
        }
}
function changeCardOneTextToColorFour() {
        if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardOneText.style.color = colorFourBgC;
        }
}
function changeCardOneTextToColorFive() {
        if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardOneText.style.color = colorFiveBgC;
        }
}
// CARD ONE
// BUTTON
cardOneButton.addEventListener("click", checkIsSelectedCard1Button); 

function checkIsSelectedCard1Button() {
    if (isSelectedCard1Button) {
        unSelectCardOneButton();
    } else if (!isSelectedCard1Button) {
        selectCardOneButton();
    }
}
function selectCardOneButton() {
    isSelectedCard1Button = true
    cardOneButton.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 

        colorOne.addEventListener("click", changeCardOneButtonToColorOne); 
        colorTwo.addEventListener("click", changeCardOneButtonToColorTwo); 
        colorThree.addEventListener("click", changeCardOneButtonToColorThree); 
        colorFour.addEventListener("click", changeCardOneButtonToColorFour); 
        colorFive.addEventListener("click", changeCardOneButtonToColorFive);
        
        // colorPicker.addEventListener('click', selectColorPicker)
        
}
function unSelectCardOneButton() {
    isSelectedCard1Button = false
    cardOneButton.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardOneButtonToColorOne); 
    colorTwo.removeEventListener("click", changeCardOneButtonToColorTwo); 
    colorThree.removeEventListener("click", changeCardOneButtonToColorThree); 
    colorFour.removeEventListener("click", changeCardOneButtonToColorFour); 
    colorFive.removeEventListener("click", changeCardOneButtonToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardOneButtonToColorOne() {
        if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardOneButton.style.backgroundColor = colorOneBgC;
        }
}
function changeCardOneButtonToColorTwo() {
        if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardOneButton.style.backgroundColor = colorTwoBgC;
        }
}
function changeCardOneButtonToColorThree() {
        if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardOneButton.style.backgroundColor = colorThreeBgC;
        }
}
function changeCardOneButtonToColorFour() {
        if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardOneButton.style.backgroundColor = colorFourBgC;
        }
}
function changeCardOneButtonToColorFive() {
        if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardOneButton.style.backgroundColor = colorFiveBgC;
        }
}
// CARD ONE
// BUTTON TEXT
cardOneButtonText.addEventListener("click", checkIsSelectedCard1ButtonText); 

function checkIsSelectedCard1ButtonText() {
    if (isSelectedCard1ButtonText) {
        unSelectCardOneButtonText();
    } else if (!isSelectedCard1ButtonText) {
        selectCardOneButtonText();
    }
}
function selectCardOneButtonText() {
    isSelectedCard1ButtonText = true
    cardOneButtonText.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardOneButtonTextToColorOne); 
        colorTwo.addEventListener("click", changeCardOneButtonTextToColorTwo); 
        colorThree.addEventListener("click", changeCardOneButtonTextToColorThree); 
        colorFour.addEventListener("click", changeCardOneButtonTextToColorFour); 
        colorFive.addEventListener("click", changeCardOneButtonTextToColorFive);    

        // colorPicker.addEventListener('click', selectColorPicker)
        
}
function unSelectCardOneButtonText() {
    isSelectedCard1ButtonText = false
    cardOneButtonText.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardOneButtonTextToColorOne); 
    colorTwo.removeEventListener("click", changeCardOneButtonTextToColorTwo); 
    colorThree.removeEventListener("click", changeCardOneButtonTextToColorThree); 
    colorFour.removeEventListener("click", changeCardOneButtonTextToColorFour); 
    colorFive.removeEventListener("click", changeCardOneButtonTextToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardOneButtonTextToColorOne() {
        if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardOneButtonText.style.color = colorOneBgC;
        }
}
function changeCardOneButtonTextToColorTwo() {
        if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardOneButtonText.style.color = colorTwoBgC;
        }
}
function changeCardOneButtonTextToColorThree() {
        if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardOneButtonText.style.color = colorThreeBgC;
        }
}
function changeCardOneButtonTextToColorFour() {
        if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardOneButtonText.style.color = colorFourBgC;
        }
}
function changeCardOneButtonTextToColorFive() {
        if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardOneButtonText.style.color = colorFiveBgC;
        }
}


// ----------------------------------------------------------------------------
// CARD TWO
// ----------------------------------------------------------------------------

// CARD TWO
// BACKGROUND
cardTwoBackground.addEventListener("click", checkIsSelectedCard2Background); 

function checkIsSelectedCard2Background() {
    if (isSelectedCard2Background) {
        unSelectCardTwoBackground();
    } else if (!isSelectedCard2Background) {
        selectCardTwoBackground();
    }
}
function selectCardTwoBackground() {
    isSelectedCard2Background = true
        cardTwoBackground.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardTwoBackgroundToColorOne); 
        colorTwo.addEventListener("click", changeCardTwoBackgroundToColorTwo); 
        colorThree.addEventListener("click", changeCardTwoBackgroundToColorThree); 
        colorFour.addEventListener("click", changeCardTwoBackgroundToColorFour); 
        colorFive.addEventListener("click", changeCardTwoBackgroundToColorFive); 
        
        
        // colorPicker.addEventListener('click', selectColorPicker)
        
}
function unSelectCardTwoBackground() {
    isSelectedCard2Background = false
    cardTwoBackground.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardTwoBackgroundToColorOne); 
    colorTwo.removeEventListener("click", changeCardTwoBackgroundToColorTwo); 
    colorThree.removeEventListener("click", changeCardTwoBackgroundToColorThree); 
    colorFour.removeEventListener("click", changeCardTwoBackgroundToColorFour); 
    colorFive.removeEventListener("click", changeCardTwoBackgroundToColorFive); 

    
    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardTwoBackgroundToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardTwoBackground.style.backgroundColor = colorOneBgC;
    }
}
function changeCardTwoBackgroundToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardTwoBackground.style.backgroundColor = colorTwoBgC;
    }
}
function changeCardTwoBackgroundToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardTwoBackground.style.backgroundColor = colorThreeBgC;
    }
}
function changeCardTwoBackgroundToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardTwoBackground.style.backgroundColor = colorFourBgC;
    }
}
function changeCardTwoBackgroundToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardTwoBackground.style.backgroundColor = colorFiveBgC;
    }
}


// CARD TWO
// CIRCLE ONE
cardTwoCircleOne.addEventListener("click", checkIsSelectedCard2CircleOne); 

function checkIsSelectedCard2CircleOne() {
    if (isSelectedCard2Circle1) {
        unSelectCardTwoCircleOne();
    } else if (!isSelectedCard2Circle1) {
        selectCardTwoCircleOne();
    }
}
function selectCardTwoCircleOne() {
    isSelectedCard2Circle1 = true
        cardTwoCircleOne.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardTwoCircleOneToColorOne); 
        colorTwo.addEventListener("click", changeCardTwoCircleOneToColorTwo); 
        colorThree.addEventListener("click", changeCardTwoCircleOneToColorThree); 
        colorFour.addEventListener("click", changeCardTwoCircleOneToColorFour); 
        colorFive.addEventListener("click", changeCardTwoCircleOneToColorFive); 
        
        // colorPicker.addEventListener('click', selectColorPicker)
}
function unSelectCardTwoCircleOne() {
    isSelectedCard2Circle1 = false
    cardTwoCircleOne.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardTwoCircleOneToColorOne); 
    colorTwo.removeEventListener("click", changeCardTwoCircleOneToColorTwo); 
    colorThree.removeEventListener("click", changeCardTwoCircleOneToColorThree); 
    colorFour.removeEventListener("click", changeCardTwoCircleOneToColorFour); 
    colorFive.removeEventListener("click", changeCardTwoCircleOneToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardTwoCircleOneToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardTwoCircleOne.style.backgroundColor = colorOneBgC;
    }
}
function changeCardTwoCircleOneToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardTwoCircleOne.style.backgroundColor = colorTwoBgC;
    }
}
function changeCardTwoCircleOneToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardTwoCircleOne.style.backgroundColor = colorThreeBgC;
    }
}
function changeCardTwoCircleOneToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardTwoCircleOne.style.backgroundColor = colorFourBgC;
    }
}
function changeCardTwoCircleOneToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardTwoCircleOne.style.backgroundColor = colorFiveBgC;
    }
}

// CARD TWO
// CIRCLE TWO
cardTwoCircleTwo.addEventListener("click", checkIsSelectedCard2CircleTwo); 

function checkIsSelectedCard2CircleTwo() {
    if (isSelectedCard2Circle2) {
        unSelectCardTwoCircleTwo();
    } else if (!isSelectedCard2Circle2) {
        selectCardTwoCircleTwo();
    }
}
function selectCardTwoCircleTwo() {
    isSelectedCard2Circle2 = true
        cardTwoCircleTwo.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardTwoCircleTwoToColorOne);
        colorTwo.addEventListener("click", changeCardTwoCircleTwoToColorTwo); 
        colorThree.addEventListener("click", changeCardTwoCircleTwoToColorThree); 
        colorFour.addEventListener("click", changeCardTwoCircleTwoToColorFour); 
        colorFive.addEventListener("click", changeCardTwoCircleTwoToColorFive); 
     
        // colorPicker.addEventListener('click', selectColorPicker)
        
}
function unSelectCardTwoCircleTwo() {
    isSelectedCard2Circle2 = false
    cardTwoCircleTwo.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardTwoCircleTwoToColorOne);
    colorTwo.removeEventListener("click", changeCardTwoCircleTwoToColorTwo); 
    colorThree.removeEventListener("click", changeCardTwoCircleTwoToColorThree); 
    colorFour.removeEventListener("click", changeCardTwoCircleTwoToColorFour); 
    colorFive.removeEventListener("click", changeCardTwoCircleTwoToColorFive);  

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardTwoCircleTwoToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardTwoCircleTwo.style.backgroundColor = colorOneBgC;
    }
}
function changeCardTwoCircleTwoToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardTwoCircleTwo.style.backgroundColor = colorTwoBgC;
    }
}
function changeCardTwoCircleTwoToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardTwoCircleTwo.style.backgroundColor = colorThreeBgC;
    }
}
function changeCardTwoCircleTwoToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardTwoCircleTwo.style.backgroundColor = colorFourBgC;
    }
}
function changeCardTwoCircleTwoToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardTwoCircleTwo.style.backgroundColor = colorFiveBgC;
    }
}

// CARD TWO
// CIRCLE THREE
cardTwoCircleThree.addEventListener("click", checkIsSelectedCard2CircleThree); 

function checkIsSelectedCard2CircleThree() {
    if (isSelectedCard2Circle3) {
        unSelectCardTwoCircleThree();
    } else if (!isSelectedCard2Circle3) {
        selectCardTwoCircleThree();
    }
}
function selectCardTwoCircleThree() {
    isSelectedCard2Circle3 = true
        cardTwoCircleThree.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardTwoCircleThreeToColorOne); 
        colorTwo.addEventListener("click", changeCardTwoCircleThreeToColorTwo); 
        colorThree.addEventListener("click", changeCardTwoCircleThreeToColorThree); 
        colorFour.addEventListener("click", changeCardTwoCircleThreeToColorFour); 
        colorFive.addEventListener("click", changeCardTwoCircleThreeToColorFive); 
        
        // colorPicker.addEventListener('click', selectColorPicker)
}
function unSelectCardTwoCircleThree() {
    isSelectedCard2Circle3 = false
    cardTwoCircleThree.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardTwoCircleThreeToColorOne); 
    colorTwo.removeEventListener("click", changeCardTwoCircleThreeToColorTwo); 
    colorThree.removeEventListener("click", changeCardTwoCircleThreeToColorThree); 
    colorFour.removeEventListener("click", changeCardTwoCircleThreeToColorFour); 
    colorFive.removeEventListener("click", changeCardTwoCircleThreeToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardTwoCircleThreeToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardTwoCircleThree.style.backgroundColor = colorOneBgC;
    }
}
function changeCardTwoCircleThreeToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardTwoCircleThree.style.backgroundColor = colorTwoBgC;
    }
}
function changeCardTwoCircleThreeToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardTwoCircleThree.style.backgroundColor = colorThreeBgC;
    }
}
function changeCardTwoCircleThreeToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardTwoCircleThree.style.backgroundColor = colorFourBgC;
    }
}
function changeCardTwoCircleThreeToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardTwoCircleThree.style.backgroundColor = colorFiveBgC;
    }
}

// CARD TWO
// TEXT
cardTwoText.addEventListener("click", checkIsSelectedCard2Text); 

function checkIsSelectedCard2Text() {
    if (isSelectedCard2Text) {
        unSelectCardTwoText();
    } else if (!isSelectedCard2Text) {
        selectCardTwoText();
    }
}
function selectCardTwoText() {
    isSelectedCard2Text = true
        cardTwoText.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardTwoTextToColorOne); 
        colorTwo.addEventListener("click", changeCardTwoTextToColorTwo); 
        colorThree.addEventListener("click", changeCardTwoTextToColorThree); 
        colorFour.addEventListener("click", changeCardTwoTextToColorFour); 
        colorFive.addEventListener("click", changeCardTwoTextToColorFive); 
        
        // colorPicker.addEventListener('click', selectColorPicker)
}
function unSelectCardTwoText() {
    isSelectedCard2Text = false
    cardTwoText.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardTwoTextToColorOne); 
    colorTwo.removeEventListener("click", changeCardTwoTextToColorTwo); 
    colorThree.removeEventListener("click", changeCardTwoTextToColorThree); 
    colorFour.removeEventListener("click", changeCardTwoTextToColorFour); 
    colorFive.removeEventListener("click", changeCardTwoTextToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardTwoTextToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardTwoText.style.color = colorOneBgC;
    }
}
function changeCardTwoTextToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardTwoText.style.color = colorTwoBgC;
    }
}
function changeCardTwoTextToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardTwoText.style.color = colorThreeBgC;
    }
}
function changeCardTwoTextToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardTwoText.style.color = colorFourBgC;
    }
}
function changeCardTwoTextToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardTwoText.style.color = colorFiveBgC;
    }
}

// CARD TWO
// BUTTON
cardTwoButton.addEventListener("click", checkIsSelectedCard2Button); 

function checkIsSelectedCard2Button() {
    if (isSelectedCard2Button) {
        unSelectCardTwoButton();
    } else if (!isSelectedCard2Button) {
        selectCardTwoButton();
    }
}
function selectCardTwoButton() {
    isSelectedCard2Button = true
    cardTwoButton.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardTwoButtonToColorOne); 
        colorTwo.addEventListener("click", changeCardTwoButtonToColorTwo); 
        colorThree.addEventListener("click", changeCardTwoButtonToColorThree); 
        colorFour.addEventListener("click", changeCardTwoButtonToColorFour); 
        colorFive.addEventListener("click", changeCardTwoButtonToColorFive); 
        
        // colorPicker.addEventListener('click', selectColorPicker)
        
}
function unSelectCardTwoButton() {
    isSelectedCard2Button = false
    cardTwoButton.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardTwoButtonToColorOne); 
    colorTwo.removeEventListener("click", changeCardTwoButtonToColorTwo); 
    colorThree.removeEventListener("click", changeCardTwoButtonToColorThree); 
    colorFour.removeEventListener("click", changeCardTwoButtonToColorFour); 
    colorFive.removeEventListener("click", changeCardTwoButtonToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardTwoButtonToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardTwoButton.style.backgroundColor = colorOneBgC;
    }
}
function changeCardTwoButtonToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardTwoButton.style.backgroundColor = colorTwoBgC;
    }
}
function changeCardTwoButtonToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardTwoButton.style.backgroundColor = colorThreeBgC;
    }
}
function changeCardTwoButtonToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardTwoButton.style.backgroundColor = colorFourBgC;
    }
}
function changeCardTwoButtonToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardTwoButton.style.backgroundColor = colorFiveBgC;
    }
}


// CARD TWO
// BUTTON TEXT
cardTwoButtonText.addEventListener("click", checkIsSelectedCard2ButtonText); 

function checkIsSelectedCard2ButtonText() {
    if (isSelectedCard2ButtonText) {
        unSelectCardTwoButtonText();
    } else if (!isSelectedCard2ButtonText) {
        selectCardTwoButtonText();
    }
}
function selectCardTwoButtonText() {
    isSelectedCard2ButtonText = true
    cardTwoButtonText.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardTwoButtonTextToColorOne); 
        colorTwo.addEventListener("click", changeCardTwoButtonTextToColorTwo); 
        colorThree.addEventListener("click", changeCardTwoButtonTextToColorThree); 
        colorFour.addEventListener("click", changeCardTwoButtonTextToColorFour); 
        colorFive.addEventListener("click", changeCardTwoButtonTextToColorFive); 

        // colorPicker.addEventListener('click', selectColorPicker)
        
        
}
function unSelectCardTwoButtonText() {
    isSelectedCard2ButtonText = false
    cardTwoButtonText.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardTwoButtonTextToColorOne); 
    colorTwo.removeEventListener("click", changeCardTwoButtonTextToColorTwo); 
    colorThree.removeEventListener("click", changeCardTwoButtonTextToColorThree); 
    colorFour.removeEventListener("click", changeCardTwoButtonTextToColorFour); 
    colorFive.removeEventListener("click", changeCardTwoButtonTextToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardTwoButtonTextToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardTwoButtonText.style.color = colorOneBgC;
    }
}
function changeCardTwoButtonTextToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardTwoButtonText.style.color = colorTwoBgC;
    }
}
function changeCardTwoButtonTextToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardTwoButtonText.style.color = colorThreeBgC;
    }
}
function changeCardTwoButtonTextToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardTwoButtonText.style.color = colorFourBgC;
    }
}
function changeCardTwoButtonTextToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardTwoButtonText.style.color = colorFiveBgC;
    }
}


// ----------------------------------------------------------------------------
// CARD THREE
// ----------------------------------------------------------------------------

// CARD THREE
// BACKGROUND
cardThreeBackground.addEventListener("click", checkIsSelectedCard3Background); 

function checkIsSelectedCard3Background() {
    if (isSelectedCard3Background) {
        unSelectCardThreeBackground();
    } else if (!isSelectedCard3Background) {
        selectCardThreeBackground();
    }
}
function selectCardThreeBackground() {
    isSelectedCard3Background = true
        cardThreeBackground.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardThreeBackgroundToColorOne); 
        colorTwo.addEventListener("click", changeCardThreeBackgroundToColorTwo); 
        colorThree.addEventListener("click", changeCardThreeBackgroundToColorThree); 
        colorFour.addEventListener("click", changeCardThreeBackgroundToColorFour); 
        colorFive.addEventListener("click", changeCardThreeBackgroundToColorFive); 
        
        
        // colorPicker.addEventListener('click', selectColorPicker)
}
function unSelectCardThreeBackground() {
    isSelectedCard3Background = false
    cardThreeBackground.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardThreeBackgroundToColorOne); 
    colorTwo.removeEventListener("click", changeCardThreeBackgroundToColorTwo); 
    colorThree.removeEventListener("click", changeCardThreeBackgroundToColorThree); 
    colorFour.removeEventListener("click", changeCardThreeBackgroundToColorFour); 
    colorFive.removeEventListener("click", changeCardThreeBackgroundToColorFive); 

    
    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardThreeBackgroundToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardThreeBackground.style.backgroundColor = colorOneBgC;
    }
}
function changeCardThreeBackgroundToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardThreeBackground.style.backgroundColor = colorTwoBgC;
    }
}
function changeCardThreeBackgroundToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardThreeBackground.style.backgroundColor = colorThreeBgC;
    }
}
function changeCardThreeBackgroundToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardThreeBackground.style.backgroundColor = colorFourBgC;
    }
}
function changeCardThreeBackgroundToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardThreeBackground.style.backgroundColor = colorFiveBgC;
    }
}


// CARD THREE
// CIRCLE ONE
cardThreeCircleOne.addEventListener("click", checkIsSelectedCard3CircleOne); 

function checkIsSelectedCard3CircleOne() {
    if (isSelectedCard3Circle1) {
        unSelectCardThreeCircleOne();
    } else if (!isSelectedCard3Circle1) {
        selectCardThreeCircleOne();
    }
}
function selectCardThreeCircleOne() {
    isSelectedCard3Circle1 = true
        cardThreeCircleOne.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardThreeCircleOneToColorOne); 
        colorTwo.addEventListener("click", changeCardThreeCircleOneToColorTwo); 
        colorThree.addEventListener("click", changeCardThreeCircleOneToColorThree); 
        colorFour.addEventListener("click", changeCardThreeCircleOneToColorFour); 
        colorFive.addEventListener("click", changeCardThreeCircleOneToColorFive); 
        
        // colorPicker.addEventListener('click', selectColorPicker)
}
function unSelectCardThreeCircleOne() {
    isSelectedCard3Circle1 = false
    cardThreeCircleOne.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardThreeCircleOneToColorOne); 
    colorTwo.removeEventListener("click", changeCardThreeCircleOneToColorTwo); 
    colorThree.removeEventListener("click", changeCardThreeCircleOneToColorThree); 
    colorFour.removeEventListener("click", changeCardThreeCircleOneToColorFour); 
    colorFive.removeEventListener("click", changeCardThreeCircleOneToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardThreeCircleOneToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardThreeCircleOne.style.backgroundColor = colorOneBgC;
    }
}
function changeCardThreeCircleOneToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardThreeCircleOne.style.backgroundColor = colorTwoBgC;
    }
}
function changeCardThreeCircleOneToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardThreeCircleOne.style.backgroundColor = colorThreeBgC;
    }
}
function changeCardThreeCircleOneToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardThreeCircleOne.style.backgroundColor = colorFourBgC;
    }
}
function changeCardThreeCircleOneToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardThreeCircleOne.style.backgroundColor = colorFiveBgC;
    }
}

// CARD THREE
// CIRCLE TWO
cardThreeCircleTwo.addEventListener("click", checkIsSelectedCard3CircleTwo); 

function checkIsSelectedCard3CircleTwo() {
    if (isSelectedCard3Circle2) {
        unSelectCardThreeCircleTwo();
    } else if (!isSelectedCard3Circle2) {
        selectCardThreeCircleTwo();
    }
}
function selectCardThreeCircleTwo() {
    isSelectedCard3Circle2 = true
        cardThreeCircleTwo.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardThreeCircleTwoToColorOne);
        colorTwo.addEventListener("click", changeCardThreeCircleTwoToColorTwo); 
        colorThree.addEventListener("click", changeCardThreeCircleTwoToColorThree); 
        colorFour.addEventListener("click", changeCardThreeCircleTwoToColorFour); 
        colorFive.addEventListener("click", changeCardThreeCircleTwoToColorFive); 
     
        
    // colorPicker.addEventListener('click', selectColorPicker)
        
}
function unSelectCardThreeCircleTwo() {
    isSelectedCard3Circle2 = false
    cardThreeCircleTwo.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardThreeCircleTwoToColorOne);
    colorTwo.removeEventListener("click", changeCardThreeCircleTwoToColorTwo); 
    colorThree.removeEventListener("click", changeCardThreeCircleTwoToColorThree); 
    colorFour.removeEventListener("click", changeCardThreeCircleTwoToColorFour); 
    colorFive.removeEventListener("click", changeCardThreeCircleTwoToColorFive);  

    
    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardThreeCircleTwoToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardThreeCircleTwo.style.backgroundColor = colorOneBgC;
    }
}
function changeCardThreeCircleTwoToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardThreeCircleTwo.style.backgroundColor = colorTwoBgC;
    }
}
function changeCardThreeCircleTwoToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardThreeCircleTwo.style.backgroundColor = colorThreeBgC;
    }
}
function changeCardThreeCircleTwoToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardThreeCircleTwo.style.backgroundColor = colorFourBgC;
    }
}
function changeCardThreeCircleTwoToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardThreeCircleTwo.style.backgroundColor = colorFiveBgC;
    }
}

// CARD THREE
// CIRCLE THREE
cardThreeCircleThree.addEventListener("click", checkIsSelectedCard3CircleThree); 

function checkIsSelectedCard3CircleThree() {
    if (isSelectedCard3Circle3) {
        unSelectCardThreeCircleThree();
    } else if (!isSelectedCard3Circle3) {
        selectCardThreeCircleThree();
    }
}
function selectCardThreeCircleThree() {
    isSelectedCard3Circle3 = true
        cardThreeCircleThree.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardThreeCircleThreeToColorOne); 
        colorTwo.addEventListener("click", changeCardThreeCircleThreeToColorTwo); 
        colorThree.addEventListener("click", changeCardThreeCircleThreeToColorThree); 
        colorFour.addEventListener("click", changeCardThreeCircleThreeToColorFour); 
        colorFive.addEventListener("click", changeCardThreeCircleThreeToColorFive); 
        
        // colorPicker.addEventListener('click', selectColorPicker)
}
function unSelectCardThreeCircleThree() {
    isSelectedCard3Circle3 = false
    cardThreeCircleThree.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardThreeCircleThreeToColorOne); 
    colorTwo.removeEventListener("click", changeCardThreeCircleThreeToColorTwo); 
    colorThree.removeEventListener("click", changeCardThreeCircleThreeToColorThree); 
    colorFour.removeEventListener("click", changeCardThreeCircleThreeToColorFour); 
    colorFive.removeEventListener("click", changeCardThreeCircleThreeToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardThreeCircleThreeToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardThreeCircleThree.style.backgroundColor = colorOneBgC;
    }
}
function changeCardThreeCircleThreeToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardThreeCircleThree.style.backgroundColor = colorTwoBgC;
    }
}
function changeCardThreeCircleThreeToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardThreeCircleThree.style.backgroundColor = colorThreeBgC;
    }
}
function changeCardThreeCircleThreeToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardThreeCircleThree.style.backgroundColor = colorFourBgC;
    }
}
function changeCardThreeCircleThreeToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardThreeCircleThree.style.backgroundColor = colorFiveBgC;
    }
}

// CARD THREE
// TEXT
cardThreeText.addEventListener("click", checkIsSelectedCard3Text); 

function checkIsSelectedCard3Text() {
    if (isSelectedCard3Text) {
        unSelectCardThreeText();
    } else if (!isSelectedCard3Text) {
        selectCardThreeText();
    }
}
function selectCardThreeText() {
    isSelectedCard3Text = true
        cardThreeText.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardThreeTextToColorOne); 
        colorTwo.addEventListener("click", changeCardThreeTextToColorTwo); 
        colorThree.addEventListener("click", changeCardThreeTextToColorThree); 
        colorFour.addEventListener("click", changeCardThreeTextToColorFour); 
        colorFive.addEventListener("click", changeCardThreeTextToColorFive); 
        
        // colorPicker.addEventListener('click', selectColorPicker)
}
function unSelectCardThreeText() {
    isSelectedCard3Text = false
    cardThreeText.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardThreeTextToColorOne); 
    colorTwo.removeEventListener("click", changeCardThreeTextToColorTwo); 
    colorThree.removeEventListener("click", changeCardThreeTextToColorThree); 
    colorFour.removeEventListener("click", changeCardThreeTextToColorFour); 
    colorFive.removeEventListener("click", changeCardThreeTextToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardThreeTextToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardThreeText.style.color = colorOneBgC;
    }
}
function changeCardThreeTextToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardThreeText.style.color = colorTwoBgC;
    }
}
function changeCardThreeTextToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardThreeText.style.color = colorThreeBgC;
    }
}
function changeCardThreeTextToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardThreeText.style.color = colorFourBgC;
    }
}
function changeCardThreeTextToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardThreeText.style.color = colorFiveBgC;
    }
}

// CARD THREE
// BUTTON
cardThreeButton.addEventListener("click", checkIsSelectedCard3Button); 

function checkIsSelectedCard3Button() {
    if (isSelectedCard3Button) {
        unSelectCardThreeButton();
    } else if (!isSelectedCard3Button) {
        selectCardThreeButton();
    }
}
function selectCardThreeButton() {
    isSelectedCard3Button = true
    cardThreeButton.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardThreeButtonToColorOne); 
        colorTwo.addEventListener("click", changeCardThreeButtonToColorTwo); 
        colorThree.addEventListener("click", changeCardThreeButtonToColorThree); 
        colorFour.addEventListener("click", changeCardThreeButtonToColorFour); 
        colorFive.addEventListener("click", changeCardThreeButtonToColorFive); 
        
        // colorPicker.addEventListener('click', selectColorPicker)
}
function unSelectCardThreeButton() {
    isSelectedCard3Button = false
    cardThreeButton.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardThreeButtonToColorOne); 
    colorTwo.removeEventListener("click", changeCardThreeButtonToColorTwo); 
    colorThree.removeEventListener("click", changeCardThreeButtonToColorThree); 
    colorFour.removeEventListener("click", changeCardThreeButtonToColorFour); 
    colorFive.removeEventListener("click", changeCardThreeButtonToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardThreeButtonToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardThreeButton.style.backgroundColor = colorOneBgC;
    }
}
function changeCardThreeButtonToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardThreeButton.style.backgroundColor = colorTwoBgC;
    }
}
function changeCardThreeButtonToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardThreeButton.style.backgroundColor = colorThreeBgC;
    }
}
function changeCardThreeButtonToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardThreeButton.style.backgroundColor = colorFourBgC;
    }
}
function changeCardThreeButtonToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardThreeButton.style.backgroundColor = colorFiveBgC;
    }
}



// CARD THREE
// BUTTON TEXT
cardThreeButtonText.addEventListener("click", checkIsSelectedCard3ButtonText); 

function checkIsSelectedCard3ButtonText() {
    if (isSelectedCard3ButtonText) {
        unSelectCardThreeButtonText();
    } else if (!isSelectedCard3ButtonText) {
        selectCardThreeButtonText();
    }
}
function selectCardThreeButtonText() {
    isSelectedCard3ButtonText = true
    cardThreeButtonText.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardThreeButtonTextToColorOne); 
        colorTwo.addEventListener("click", changeCardThreeButtonTextToColorTwo); 
        colorThree.addEventListener("click", changeCardThreeButtonTextToColorThree); 
        colorFour.addEventListener("click", changeCardThreeButtonTextToColorFour); 
        colorFive.addEventListener("click", changeCardThreeButtonTextToColorFive); 
        
        // colorPicker.addEventListener('click', selectColorPicker)
}
function unSelectCardThreeButtonText() {
    isSelectedCard3ButtonText = false
    cardThreeButtonText.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardThreeButtonTextToColorOne); 
    colorTwo.removeEventListener("click", changeCardThreeButtonTextToColorTwo); 
    colorThree.removeEventListener("click", changeCardThreeButtonTextToColorThree); 
    colorFour.removeEventListener("click", changeCardThreeButtonTextToColorFour); 
    colorFive.removeEventListener("click", changeCardThreeButtonTextToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardThreeButtonTextToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardThreeButtonText.style.color = colorOneBgC;
    }
}
function changeCardThreeButtonTextToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardThreeButtonText.style.color = colorTwoBgC;
    }
}
function changeCardThreeButtonTextToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardThreeButtonText.style.color = colorThreeBgC;
    }
}
function changeCardThreeButtonTextToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardThreeButtonText.style.color = colorFourBgC;
    }
}
function changeCardThreeButtonTextToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardThreeButtonText.style.color = colorFiveBgC;
    }
}


// ----------------------------------------------------------------------------
// CARD FOUR
// ----------------------------------------------------------------------------

// CARD FOUR
// BACKGROUND
cardFourBackground.addEventListener("click", checkIsSelectedCard4Background); 

function checkIsSelectedCard4Background() {
    if (isSelectedCard4Background) {
        unSelectCardFourBackground();
    } else if (!isSelectedCard4Background) {
        selectCardFourBackground();
    }
}
function selectCardFourBackground() {
    isSelectedCard4Background = true
        cardFourBackground.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardFourBackgroundToColorOne); 
        colorTwo.addEventListener("click", changeCardFourBackgroundToColorTwo); 
        colorThree.addEventListener("click", changeCardFourBackgroundToColorThree); 
        colorFour.addEventListener("click", changeCardFourBackgroundToColorFour); 
        colorFive.addEventListener("click", changeCardFourBackgroundToColorFive); 
        
        // colorPicker.addEventListener('click', selectColorPicker)
}
function unSelectCardFourBackground() {
    isSelectedCard4Background = false
    cardFourBackground.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardFourBackgroundToColorOne); 
    colorTwo.removeEventListener("click", changeCardFourBackgroundToColorTwo); 
    colorThree.removeEventListener("click", changeCardFourBackgroundToColorThree); 
    colorFour.removeEventListener("click", changeCardFourBackgroundToColorFour); 
    colorFive.removeEventListener("click", changeCardFourBackgroundToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardFourBackgroundToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardFourBackground.style.backgroundColor = colorOneBgC;
    }
}
function changeCardFourBackgroundToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardFourBackground.style.backgroundColor = colorTwoBgC;
    }
}
function changeCardFourBackgroundToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardFourBackground.style.backgroundColor = colorThreeBgC;
    }
}
function changeCardFourBackgroundToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardFourBackground.style.backgroundColor = colorFourBgC;
    }
}
function changeCardFourBackgroundToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardFourBackground.style.backgroundColor = colorFiveBgC;
    }
}


// CARD FOUR
// CIRCLE ONE
cardFourCircleOne.addEventListener("click", checkIsSelectedCard4CircleOne); 

function checkIsSelectedCard4CircleOne() {
    if (isSelectedCard4Circle1) {
        unSelectCardFourCircleOne();
    } else if (!isSelectedCard4Circle1) {
        selectCardFourCircleOne();
    }
}
function selectCardFourCircleOne() {
    isSelectedCard4Circle1 = true
        cardFourCircleOne.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardFourCircleOneToColorOne); 
        colorTwo.addEventListener("click", changeCardFourCircleOneToColorTwo); 
        colorThree.addEventListener("click", changeCardFourCircleOneToColorThree); 
        colorFour.addEventListener("click", changeCardFourCircleOneToColorFour); 
        colorFive.addEventListener("click", changeCardFourCircleOneToColorFive); 
        
        // colorPicker.addEventListener('click', selectColorPicker)
}
function unSelectCardFourCircleOne() {
    isSelectedCard4Circle1 = false
    cardFourCircleOne.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardFourCircleOneToColorOne); 
    colorTwo.removeEventListener("click", changeCardFourCircleOneToColorTwo); 
    colorThree.removeEventListener("click", changeCardFourCircleOneToColorThree); 
    colorFour.removeEventListener("click", changeCardFourCircleOneToColorFour); 
    colorFive.removeEventListener("click", changeCardFourCircleOneToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardFourCircleOneToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardFourCircleOne.style.backgroundColor = colorOneBgC;
    }
}
function changeCardFourCircleOneToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardFourCircleOne.style.backgroundColor = colorTwoBgC;
    }
}
function changeCardFourCircleOneToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardFourCircleOne.style.backgroundColor = colorThreeBgC;
    }
}
function changeCardFourCircleOneToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardFourCircleOne.style.backgroundColor = colorFourBgC;
    }
}
function changeCardFourCircleOneToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardFourCircleOne.style.backgroundColor = colorFiveBgC;
    }
}

// CARD FOUR
// CIRCLE TWO
cardFourCircleTwo.addEventListener("click", checkIsSelectedCard4CircleTwo); 

function checkIsSelectedCard4CircleTwo() {
    if (isSelectedCard4Circle2) {
        unSelectCardFourCircleTwo();
    } else if (!isSelectedCard4Circle2) {
        selectCardFourCircleTwo();
    }
}
function selectCardFourCircleTwo() {
    isSelectedCard4Circle2 = true
        cardFourCircleTwo.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardFourCircleTwoToColorOne);
        colorTwo.addEventListener("click", changeCardFourCircleTwoToColorTwo); 
        colorThree.addEventListener("click", changeCardFourCircleTwoToColorThree); 
        colorFour.addEventListener("click", changeCardFourCircleTwoToColorFour); 
        colorFive.addEventListener("click", changeCardFourCircleTwoToColorFive); 
     
        // colorPicker.addEventListener('click', selectColorPicker)
}
function unSelectCardFourCircleTwo() {
    isSelectedCard4Circle2 = false
    cardFourCircleTwo.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardFourCircleTwoToColorOne);
    colorTwo.removeEventListener("click", changeCardFourCircleTwoToColorTwo); 
    colorThree.removeEventListener("click", changeCardFourCircleTwoToColorThree); 
    colorFour.removeEventListener("click", changeCardFourCircleTwoToColorFour); 
    colorFive.removeEventListener("click", changeCardFourCircleTwoToColorFive);  
    
    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardFourCircleTwoToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardFourCircleTwo.style.backgroundColor = colorOneBgC;
    }
}
function changeCardFourCircleTwoToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardFourCircleTwo.style.backgroundColor = colorTwoBgC;
    }
}
function changeCardFourCircleTwoToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardFourCircleTwo.style.backgroundColor = colorThreeBgC;
    }
}
function changeCardFourCircleTwoToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardFourCircleTwo.style.backgroundColor = colorFourBgC;
    }
}
function changeCardFourCircleTwoToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardFourCircleTwo.style.backgroundColor = colorFiveBgC;
    }
}

// CARD FOUR
// CIRCLE THREE
cardFourCircleThree.addEventListener("click", checkIsSelectedCard4CircleThree); 

function checkIsSelectedCard4CircleThree() {
    if (isSelectedCard4Circle3) {
        unSelectCardFourCircleThree();
    } else if (!isSelectedCard4Circle3) {
        selectCardFourCircleThree();
    }
}
function selectCardFourCircleThree() {
    isSelectedCard4Circle3 = true
        cardFourCircleThree.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardFourCircleThreeToColorOne); 
        colorTwo.addEventListener("click", changeCardFourCircleThreeToColorTwo); 
        colorThree.addEventListener("click", changeCardFourCircleThreeToColorThree); 
        colorFour.addEventListener("click", changeCardFourCircleThreeToColorFour); 
        colorFive.addEventListener("click", changeCardFourCircleThreeToColorFive); 
        
        // colorPicker.addEventListener('click', selectColorPicker)
}
function unSelectCardFourCircleThree() {
    isSelectedCard4Circle3 = false
    cardFourCircleThree.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardFourCircleThreeToColorOne); 
    colorTwo.removeEventListener("click", changeCardFourCircleThreeToColorTwo); 
    colorThree.removeEventListener("click", changeCardFourCircleThreeToColorThree); 
    colorFour.removeEventListener("click", changeCardFourCircleThreeToColorFour); 
    colorFive.removeEventListener("click", changeCardFourCircleThreeToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardFourCircleThreeToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardFourCircleThree.style.backgroundColor = colorOneBgC;
    }
}
function changeCardFourCircleThreeToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardFourCircleThree.style.backgroundColor = colorTwoBgC;
    }
}
function changeCardFourCircleThreeToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardFourCircleThree.style.backgroundColor = colorThreeBgC;
    }
}
function changeCardFourCircleThreeToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardFourCircleThree.style.backgroundColor = colorFourBgC;
    }
}
function changeCardFourCircleThreeToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardFourCircleThree.style.backgroundColor = colorFiveBgC;
    }
}

// CARD FOUR
// TEXT
cardFourText.addEventListener("click", checkIsSelectedCard4Text); 

function checkIsSelectedCard4Text() {
    if (isSelectedCard4Text) {
        unSelectCardFourText();
    } else if (!isSelectedCard4Text) {
        selectCardFourText();
    }
}
function selectCardFourText() {
    isSelectedCard4Text = true
        cardFourText.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardFourTextToColorOne); 
        colorTwo.addEventListener("click", changeCardFourTextToColorTwo); 
        colorThree.addEventListener("click", changeCardFourTextToColorThree); 
        colorFour.addEventListener("click", changeCardFourTextToColorFour); 
        colorFive.addEventListener("click", changeCardFourTextToColorFive); 
        
        // colorPicker.addEventListener('click', selectColorPicker)
}
function unSelectCardFourText() {
    isSelectedCard4Text = false
    cardFourText.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardFourTextToColorOne); 
    colorTwo.removeEventListener("click", changeCardFourTextToColorTwo); 
    colorThree.removeEventListener("click", changeCardFourTextToColorThree); 
    colorFour.removeEventListener("click", changeCardFourTextToColorFour); 
    colorFive.removeEventListener("click", changeCardFourTextToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardFourTextToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardFourText.style.color = colorOneBgC;
    }
}
function changeCardFourTextToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardFourText.style.color = colorTwoBgC;
    }
}
function changeCardFourTextToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardFourText.style.color = colorThreeBgC;
    }
}
function changeCardFourTextToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardFourText.style.color = colorFourBgC;
    }
}
function changeCardFourTextToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardFourText.style.color = colorFiveBgC;
    }
}

// CARD FOUR
// BUTTON
cardFourButton.addEventListener("click", checkIsSelectedCard4Button); 

function checkIsSelectedCard4Button() {
    if (isSelectedCard4Button) {
        unSelectCardFourButton();
    } else if (!isSelectedCard4Button) {
        selectCardFourButton();
    }
}
function selectCardFourButton() {
    isSelectedCard4Button = true
    cardFourButton.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardFourButtonToColorOne); 
        colorTwo.addEventListener("click", changeCardFourButtonToColorTwo); 
        colorThree.addEventListener("click", changeCardFourButtonToColorThree); 
        colorFour.addEventListener("click", changeCardFourButtonToColorFour); 
        colorFive.addEventListener("click", changeCardFourButtonToColorFive); 
        
        // colorPicker.addEventListener('click', selectColorPicker)
}
function unSelectCardFourButton() {
    isSelectedCard4Button = false
    cardFourButton.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardFourButtonToColorOne); 
    colorTwo.removeEventListener("click", changeCardFourButtonToColorTwo); 
    colorThree.removeEventListener("click", changeCardFourButtonToColorThree); 
    colorFour.removeEventListener("click", changeCardFourButtonToColorFour); 
    colorFive.removeEventListener("click", changeCardFourButtonToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardFourButtonToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardFourButton.style.backgroundColor = colorOneBgC;
    }
}
function changeCardFourButtonToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardFourButton.style.backgroundColor = colorTwoBgC;
    }
}
function changeCardFourButtonToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardFourButton.style.backgroundColor = colorThreeBgC;
    }
}
function changeCardFourButtonToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardFourButton.style.backgroundColor = colorFourBgC;
    }
}
function changeCardFourButtonToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardFourButton.style.backgroundColor = colorFiveBgC;
    }
}



// CARD FOUR
// BUTTON TEXT
cardFourButtonText.addEventListener("click", checkIsSelectedCard4ButtonText); 

function checkIsSelectedCard4ButtonText() {
    if (isSelectedCard4ButtonText) {
        unSelectCardFourButtonText();
    } else if (!isSelectedCard4ButtonText) {
        selectCardFourButtonText();
    }
}
function selectCardFourButtonText() {
    isSelectedCard4ButtonText = true
    cardFourButtonText.style.border = '3px solid hsl(238, 100%, 68%)';
        // colorOne.removeEventListener("click", checkIsSelectedColor1); 
        colorOne.addEventListener("click", changeCardFourButtonTextToColorOne); 
        colorTwo.addEventListener("click", changeCardFourButtonTextToColorTwo); 
        colorThree.addEventListener("click", changeCardFourButtonTextToColorThree); 
        colorFour.addEventListener("click", changeCardFourButtonTextToColorFour); 
        colorFive.addEventListener("click", changeCardFourButtonTextToColorFive); 
        
        // colorPicker.addEventListener('click', selectColorPicker)
}
function unSelectCardFourButtonText() {
    isSelectedCard4ButtonText = false
    cardFourButtonText.style.border = 'none';
    // colorOne.addEventListener("click", checkIsSelectedColor1);  
    colorOne.removeEventListener("click", changeCardFourButtonTextToColorOne); 
    colorTwo.removeEventListener("click", changeCardFourButtonTextToColorTwo); 
    colorThree.removeEventListener("click", changeCardFourButtonTextToColorThree); 
    colorFour.removeEventListener("click", changeCardFourButtonTextToColorFour); 
    colorFive.removeEventListener("click", changeCardFourButtonTextToColorFive); 

    // colorPicker.removeEventListener('click', selectColorPicker)
}

function changeCardFourButtonTextToColorOne() {
    if(isColorPickerSelected){
    let colorOneBgC = colorOneHexCode.textContent;
    cardFourButtonText.style.color = colorOneBgC;
    }
}
function changeCardFourButtonTextToColorTwo() {
    if(isColorPickerSelected){
    let colorTwoBgC = colorTwoHexCode.textContent;
    cardFourButtonText.style.color = colorTwoBgC;
    }
}
function changeCardFourButtonTextToColorThree() {
    if(isColorPickerSelected){
    let colorThreeBgC = colorThreeHexCode.textContent;
    cardFourButtonText.style.color = colorThreeBgC;
    }
}
function changeCardFourButtonTextToColorFour() {
    if(isColorPickerSelected){
    let colorFourBgC = colorFourHexCode.textContent;
    cardFourButtonText.style.color = colorFourBgC;
    }
}
function changeCardFourButtonTextToColorFive() {
    if(isColorPickerSelected){
    let colorFiveBgC = colorFiveHexCode.textContent;
    cardFourButtonText.style.color = colorFiveBgC;
    }
}

// HANDLE MOVE AND COLOR PICKER SELECTION 
colorPicker.addEventListener("click", checkIsColorPickerSelected); 

function checkIsColorPickerSelected() {
    
        // colorPicker.removeEventListener('click', selectColorPicker)
        // console.log('checked')
        if(isSelectedCard1Background || isSelectedCard2Background || isSelectedCard3Background || isSelectedCard4Background || isSelectedCard1Circle1 || isSelectedCard2Circle1 || isSelectedCard3Circle1 || isSelectedCard4Circle1 || isSelectedCard1Circle2 || isSelectedCard2Circle2 || isSelectedCard3Circle2 || isSelectedCard4Circle2 || isSelectedCard1Circle3 || isSelectedCard2Circle3 || isSelectedCard3Circle3 || isSelectedCard4Circle3 || isSelectedCard1Text || isSelectedCard2Text || isSelectedCard3Text || isSelectedCard4Text || isSelectedCard1Button || isSelectedCard2Button || isSelectedCard3Button || isSelectedCard4Button || isSelectedCard1ButtonText || isSelectedCard2ButtonText || isSelectedCard3ButtonText || isSelectedCard4ButtonText)
        {
            selectColorPicker()
            // console.log('executed selectColorPicker()')
            
        }
        else if(!isSelectedCard1Background && !isSelectedCard2Background && !isSelectedCard3Background && !isSelectedCard4Background && !isSelectedCard1Circle1 && !isSelectedCard2Circle1 && !isSelectedCard3Circle1 && !isSelectedCard4Circle1 && !isSelectedCard1Circle2 && !isSelectedCard2Circle2 && !isSelectedCard3Circle2 && !isSelectedCard4Circle2 && !isSelectedCard1Circle3 && !isSelectedCard2Circle3 && !isSelectedCard3Circle3 && !isSelectedCard4Circle3 && !isSelectedCard1Text && !isSelectedCard2Text && !isSelectedCard3Text && !isSelectedCard4Text && !isSelectedCard1Button && !isSelectedCard2Button && !isSelectedCard3Button && !isSelectedCard4Button  && !isSelectedCard1ButtonText && !isSelectedCard2ButtonText && !isSelectedCard3ButtonText && !isSelectedCard4ButtonText) {
            selectMoveTool()
        }
}


window.addEventListener("keydown", checkKeyCode);
function checkKeyCode(event) {
    // console.log("key event fired")
    let x = event.charCode || event.keyCode;
    if (isSelectedCard1Background || isSelectedCard2Background || isSelectedCard3Background || isSelectedCard4Background || isSelectedCard1Circle1 || isSelectedCard2Circle1 || isSelectedCard3Circle1 || isSelectedCard4Circle1 || isSelectedCard1Circle2 || isSelectedCard2Circle2 || isSelectedCard3Circle2 || isSelectedCard4Circle2 || isSelectedCard1Circle3 || isSelectedCard2Circle3 || isSelectedCard3Circle3 || isSelectedCard4Circle3 || isSelectedCard1Text || isSelectedCard2Text || isSelectedCard3Text || isSelectedCard4Text || isSelectedCard1Button || isSelectedCard2Button || isSelectedCard3Button || isSelectedCard4Button || isSelectedCard1ButtonText || isSelectedCard2ButtonText || isSelectedCard3ButtonText || isSelectedCard4ButtonText) {
        if (x == 73) {
            selectColorPicker()
        }
        else if (x == 86) {
            selectMoveTool()
        }
        else if (x == 68) {
            selectMoveTool()
            deselectAllCardElements()
        }

    } else if(!isSelectedCard1Background && !isSelectedCard2Background && !isSelectedCard3Background && !isSelectedCard4Background && !isSelectedCard1Circle1 && !isSelectedCard2Circle1 && !isSelectedCard3Circle1 && !isSelectedCard4Circle1 && !isSelectedCard1Circle2 && !isSelectedCard2Circle2 && !isSelectedCard3Circle2 && !isSelectedCard4Circle2 && !isSelectedCard1Circle3 && !isSelectedCard2Circle3 && !isSelectedCard3Circle3 && !isSelectedCard4Circle3 && !isSelectedCard1Text && !isSelectedCard2Text && !isSelectedCard3Text && !isSelectedCard4Text && !isSelectedCard1Button && !isSelectedCard2Button && !isSelectedCard3Button && !isSelectedCard4Button  && !isSelectedCard1ButtonText && !isSelectedCard2ButtonText && !isSelectedCard3ButtonText && !isSelectedCard4ButtonText) {
            selectMoveTool()
                
    }
}





moveTool.addEventListener('click', selectMoveTool)
// moveTool.addEventListener('keypress', selectMoveTool)
// window.addEventListener("keydown", keyCodeForV);
// function keyCodeForV(event) {
//     console.log("v event fired")
//     let x = event.charCode || event.keyCode;
//   if (x == 86){
//         // alert ("You pressed the V/v key!");
//         selectMoveTool()
//         // console.log("move selected")
//     }
//   }

// colorPicker.addEventListener('click', selectColorPicker)
function selectMoveTool() {
    // console.log("move tool selected")
    isColorPickerSelected = false;
    // console.log("isColorPickerSelected: ",isColorPickerSelected)

    selectionIndicator.classList.remove('moveDown');
    selectionIndicator.classList.add('moveUp');

    htmlEl.style.cursor = "default"
    document.addEventListener('mousemove', e => {
        tracker.setAttribute("style", "top: 0px; left: 0px; opacity: 0")
      })

      // DESELECTION
      overlay.addEventListener("click", deselectAllCardElements);


    // lockIcon.style.opacity = ".3"
    // lockIcon.title = "The palette is unlocked"

    isColorsLocked = false

        
    colorOne.addEventListener("click", checkIsSelectedColor1); 
    colorTwo.addEventListener("click", checkIsSelectedColor2); 
    colorThree.addEventListener("click", checkIsSelectedColor3); 
    colorFour.addEventListener("click", checkIsSelectedColor4); 
    colorFive.addEventListener("click", checkIsSelectedColor5);

    colorOneHexCode.contentEditable = true
    colorTwoHexCode.contentEditable = true
    colorThreeHexCode.contentEditable = true
    colorFourHexCode.contentEditable = true
    colorFiveHexCode.contentEditable = true

    // lockIcon.addEventListener('click', checkIsColorsLocked)
    // checkIsColorsLocked()

    // function checkIsColorsLocked() {
        if (isColorsLocked) {
            lockColors();
        } else if (!isColorsLocked) {
            unLockColors();
        }
    // }

   // CARD ONE
   cardOneBackground.addEventListener("click", checkIsSelectedCard1Background); 
   cardOneCircleOne.addEventListener("click", checkIsSelectedCard1CircleOne);
   cardOneCircleTwo.addEventListener("click", checkIsSelectedCard1CircleTwo); 
   cardOneCircleThree.addEventListener("click", checkIsSelectedCard1CircleThree); 
   cardOneText.addEventListener("click", checkIsSelectedCard1Text); 
   cardOneButton.addEventListener("click", checkIsSelectedCard1Button); 
   cardOneButtonText.addEventListener("click", checkIsSelectedCard1ButtonText); 

   // CARD TWO
   cardTwoBackground.addEventListener("click", checkIsSelectedCard2Background); 
   cardTwoCircleOne.addEventListener("click", checkIsSelectedCard2CircleOne);
   cardTwoCircleTwo.addEventListener("click", checkIsSelectedCard2CircleTwo); 
   cardTwoCircleThree.addEventListener("click", checkIsSelectedCard2CircleThree); 
   cardTwoText.addEventListener("click", checkIsSelectedCard2Text); 
   cardTwoButton.addEventListener("click", checkIsSelectedCard2Button); 
   cardTwoButtonText.addEventListener("click", checkIsSelectedCard2ButtonText); 

   // CARD THREE
   cardThreeBackground.addEventListener("click", checkIsSelectedCard3Background); 
   cardThreeCircleOne.addEventListener("click", checkIsSelectedCard3CircleOne);
   cardThreeCircleTwo.addEventListener("click", checkIsSelectedCard3CircleTwo); 
   cardThreeCircleThree.addEventListener("click", checkIsSelectedCard3CircleThree); 
   cardThreeText.addEventListener("click", checkIsSelectedCard3Text); 
   cardThreeButton.addEventListener("click", checkIsSelectedCard3Button); 
   cardThreeButtonText.addEventListener("click", checkIsSelectedCard3ButtonText); 

   // CARD FOUR
   cardFourBackground.addEventListener("click", checkIsSelectedCard4Background); 
   cardFourCircleOne.addEventListener("click", checkIsSelectedCard4CircleOne);
   cardFourCircleTwo.addEventListener("click", checkIsSelectedCard4CircleTwo); 
   cardFourCircleThree.addEventListener("click", checkIsSelectedCard4CircleThree); 
   cardFourText.addEventListener("click", checkIsSelectedCard4Text); 
   cardFourButton.addEventListener("click", checkIsSelectedCard4Button); 
   cardFourButtonText.addEventListener("click", checkIsSelectedCard4ButtonText); 
}
function selectColorPicker() {
    // console.log("picker tool selected")
    // console.log("clicked picker icon")
    isColorPickerSelected = true;
    // console.log("isColorPickerSelected: ",isColorPickerSelected)

    // console.log(isColorPickerSelected)
    selectionIndicator.classList.remove('moveUp');
    selectionIndicator.classList.add('moveDown');

    htmlEl.style.cursor = "none"
    document.addEventListener('mousemove', e => {
        tracker.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px; opacity: 1")
      })
 
      // DESELECTION
      overlay.removeEventListener("click", deselectAllCardElements);


      //     lockIcon.style.opacity = "1"
      //    lockIcon.title = "The palette is locked"
      
      isColorsLocked = true;


   colorOne.removeEventListener("click", checkIsSelectedColor1); 
   colorTwo.removeEventListener("click", checkIsSelectedColor2); 
   colorThree.removeEventListener("click", checkIsSelectedColor3); 
   colorFour.removeEventListener("click", checkIsSelectedColor4); 
   colorFive.removeEventListener("click", checkIsSelectedColor5); 

   unSelectColorOne()
   unSelectColorTwo()
   unSelectColorThree()
   unSelectColorFour()
   unSelectColorFive()


   colorOneHexCode.contentEditable = false
   colorTwoHexCode.contentEditable = false
   colorThreeHexCode.contentEditable = false
   colorFourHexCode.contentEditable = false
   colorFiveHexCode.contentEditable = false

//    lockIcon.removeEventListener('click', checkIsColorsLocked)
// checkIsColorsLocked()

// function checkIsColorsLocked() {
    if (isColorsLocked) {
        lockColors();
    } else if (!isColorsLocked) {
        unLockColors();
    }
// }

 // CARD ONE
 cardOneBackground.removeEventListener("click", checkIsSelectedCard1Background); 
 cardOneCircleOne.removeEventListener("click", checkIsSelectedCard1CircleOne);
 cardOneCircleTwo.removeEventListener("click", checkIsSelectedCard1CircleTwo); 
 cardOneCircleThree.removeEventListener("click", checkIsSelectedCard1CircleThree); 
 cardOneText.removeEventListener("click", checkIsSelectedCard1Text); 
 cardOneButton.removeEventListener("click", checkIsSelectedCard1Button); 
 cardOneButtonText.removeEventListener("click", checkIsSelectedCard1ButtonText); 

 // CARD TWO
 cardTwoBackground.removeEventListener("click", checkIsSelectedCard2Background); 
 cardTwoCircleOne.removeEventListener("click", checkIsSelectedCard2CircleOne);
 cardTwoCircleTwo.removeEventListener("click", checkIsSelectedCard2CircleTwo); 
 cardTwoCircleThree.removeEventListener("click", checkIsSelectedCard2CircleThree); 
 cardTwoText.removeEventListener("click", checkIsSelectedCard2Text); 
 cardTwoButton.removeEventListener("click", checkIsSelectedCard2Button); 
 cardTwoButtonText.removeEventListener("click", checkIsSelectedCard2ButtonText); 

   // CARD THREE
   cardThreeBackground.removeEventListener("click", checkIsSelectedCard3Background); 
   cardThreeCircleOne.removeEventListener("click", checkIsSelectedCard3CircleOne);
   cardThreeCircleTwo.removeEventListener("click", checkIsSelectedCard3CircleTwo); 
   cardThreeCircleThree.removeEventListener("click", checkIsSelectedCard3CircleThree); 
   cardThreeText.removeEventListener("click", checkIsSelectedCard3Text); 
   cardThreeButton.removeEventListener("click", checkIsSelectedCard3Button); 
   cardThreeButtonText.removeEventListener("click", checkIsSelectedCard3ButtonText); 

   // CARD FOUR
   cardFourBackground.removeEventListener("click", checkIsSelectedCard4Background); 
   cardFourCircleOne.removeEventListener("click", checkIsSelectedCard4CircleOne);
   cardFourCircleTwo.removeEventListener("click", checkIsSelectedCard4CircleTwo); 
   cardFourCircleThree.removeEventListener("click", checkIsSelectedCard4CircleThree); 
   cardFourText.removeEventListener("click", checkIsSelectedCard4Text); 
   cardFourButton.removeEventListener("click", checkIsSelectedCard4Button); 
   cardFourButtonText.removeEventListener("click", checkIsSelectedCard4ButtonText); 

}


// PALETTE LOCKING


// lockIcon.addEventListener('click', checkIsColorsLocked)


// function checkIsColorsLocked() {
//     if (isColorsLocked) {
//         unLockColors();
//     } else if (!isColorsLocked) {
//         lockColors();
//     }
// }


function lockColors() {
//    lockIcon.style.opacity = "1"
//    lockIcon.title = "The palette is locked"

   isColorsLocked = true;
   colorOne.removeEventListener("click", checkIsSelectedColor1); 
   colorTwo.removeEventListener("click", checkIsSelectedColor2); 
   colorThree.removeEventListener("click", checkIsSelectedColor3); 
   colorFour.removeEventListener("click", checkIsSelectedColor4); 
   colorFive.removeEventListener("click", checkIsSelectedColor5); 


   unSelectColorOne()
   unSelectColorTwo()
   unSelectColorThree()
   unSelectColorFour()
   unSelectColorFive()

//    colorOneHexCode.removeEventListener("input", applyInputColorOneHexCode);
//    colorTwoHexCode.removeEventListener("input", applyInputColorTwoHexCode);
//    colorThreeHexCode.removeEventListener("input", applyInputColorThreeHexCode);
//    colorFourHexCode.removeEventListener("input", applyInputColorFourHexCode);
//    colorFiveHexCode.removeEventListener("input", applyInputColorFiveHexCode);

   colorOneHexCode.contentEditable = false
   colorTwoHexCode.contentEditable = false
   colorThreeHexCode.contentEditable = false
   colorFourHexCode.contentEditable = false
   colorFiveHexCode.contentEditable = false

}
function unLockColors() {

    // selectMoveTool()
    
    // lockIcon.style.opacity = ".3"
    // lockIcon.title = "The palette is unlocked"
    
    isColorsLocked = false

        
    colorOne.addEventListener("click", checkIsSelectedColor1); 
    colorTwo.addEventListener("click", checkIsSelectedColor2); 
    colorThree.addEventListener("click", checkIsSelectedColor3); 
    colorFour.addEventListener("click", checkIsSelectedColor4); 
    colorFive.addEventListener("click", checkIsSelectedColor5);


    // colorOneHexCode.addEventListener("input", applyInputColorOneHexCode);
    // colorTwoHexCode.addEventListener("input", applyInputColorTwoHexCode);
    // colorThreeHexCode.addEventListener("input", applyInputColorThreeHexCode);
    // colorFourHexCode.addEventListener("input", applyInputColorFourHexCode);
    // colorFiveHexCode.addEventListener("input", applyInputColorFiveHexCode);


    colorOneHexCode.contentEditable = true
    colorTwoHexCode.contentEditable = true
    colorThreeHexCode.contentEditable = true
    colorFourHexCode.contentEditable = true
    colorFiveHexCode.contentEditable = true
}




// COLOR CONVERTINGS
// Big thanks to https://css-tricks.com/converting-color-spaces-in-javascript/ for converting formulas below
// Changed returned value of hexToHsl() function from a string to an object of some infos about values
// Converted h, s, and l values to integer by using parseInt() 

// HSL TO HEX
function hslToHex(h,s,l) {
    s /= 100;
    l /= 100;
  
    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c/2,
        r = 0,
        g = 0,
        b = 0;
  
    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    // Having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);
  
    // Prepend 0s, if necessary
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }


  // HEX TO HSL
  function hexToHsl(H) {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (H.length == 4) {
      r = "0x" + H[1] + H[1];
      g = "0x" + H[2] + H[2];
      b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
      r = "0x" + H[1] + H[2];
      g = "0x" + H[3] + H[4];
      b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
  
    if (delta == 0)
      h = 0;
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      h = (b - r) / delta + 2;
    else
      h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
  
    if (h < 0)
      h += 360;
  
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    return {hslCode:"hsl(" + parseInt(h) + "," + parseInt(s) + "%," + parseInt(l) + "%)", h:parseInt(h), s:parseInt(s), l:parseInt(l)};
  }

  // RGB TO HEX
  function rgbToHex(rgb) {
    // Choose correct separator
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb.substr(4).split(")")[0].split(sep);
  
    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }