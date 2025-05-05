/**
 * Displays the selected options from both dropdowns
 */
function showSelection() {
    // Get dropdown elements
    const selectItem = document.getElementById("selectedItem");
    const selectFruit = document.getElementById("selectedFruit");
    const result = document.getElementById("result");
  
    // Get selected values and texts
    const itemValue = selectItem.value;
    const fruitValue = selectFruit.value;
    const itemText = selectItem.options[selectItem.selectedIndex]?.text;
    const fruitText = selectFruit.options[selectFruit.selectedIndex]?.text;
  
    // Check if both selections are made
    if (itemValue && fruitValue) {
      result.textContent = `You selected ${itemText} and ${fruitText}.`;
    } else {
      result.textContent = "Please select all the options first.";
    }
  }
  