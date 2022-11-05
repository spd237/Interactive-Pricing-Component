"use strict";

const slider = document.getElementById("price-inp");
const price = document.querySelector(".price");
const toggle = document.getElementById("toggle-el");
const pageViews = document.querySelector(".pageviews");

const pageViewsValues = ["10K", "50K", "100K", "250K", "500K"];
const pricesMonthly = [6.0, 10.0, 16.0, 25.0, 40.0];
const pricesYearly = [4.5, 7.5, 12.0, 18.75, 30.0];
let yearlyBilling = false;

function updatePageViews() {
  pageViews.innerHTML = `${pageViewsValues[slider.value]} PAGEVIEWS`;
}

function updatePrice() {
  if (yearlyBilling) {
    price.innerHTML = `$${(pricesMonthly[slider.value] * 0.75).toFixed(2)}`;
  } else {
    price.innerHTML = `$${pricesMonthly[slider.value].toFixed(2)}`;
  }
}

slider.addEventListener("input", function () {
  updatePrice();
  updatePageViews();
});

toggle.onclick = function () {
  if (!yearlyBilling) {
    yearlyBilling = true;
  } else {
    yearlyBilling = false;
  }
  updatePrice();
};
