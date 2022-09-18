const slider = document.querySelector(".slider__input");
const output = document.querySelector(".slider__percent");
output.innerHTML = slider.value + '%';

slider.oninput = function() {
  output.innerHTML = this.value  + '%';
}


const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__list');
const body = document.querySelector('body');
const links = document.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
  [burger, nav].forEach((e) => {
    e.classList.toggle('is-active');
  }) 
  body.classList.toggle('lock');
});

links.forEach((e) => {
    e.addEventListener('click', () => {
        [burger, nav].forEach((e) => {
          e.classList.remove('is-active');
        }) 
        body.classList.remove('lock');
      });
})

$(".select").each(function () {
  const _this = $(this),
    selectOption = _this.find("option"),
    selectOptionLength = selectOption.length,
    selectedOption = selectOption.filter(":selected"),
    duration = 450; 

  _this.hide();
  _this.wrap('<div class="select"></div>');
  $("<div>", {
    class: "new-select",
    text: _this.children("option:disabled").text(),
  }).insertAfter(_this);

  const selectHead = _this.next(".new-select");
  $("<div>", {
    class: "new-select__list",
    id: "myEl",
  }).insertAfter(selectHead);

  const selectList = selectHead.next(".new-select__list");
  for (let i = 1; i < selectOptionLength; i++) {
    $("<div>", {
      class: "new-select__item",
      html: $("<span>", {
        text: selectOption.eq(i).text(),
      }),
    })
      .attr("data-value", selectOption.eq(i).val())
      .appendTo(selectList);
  }

  const selectItem = selectList.find(".new-select__item");
  selectList.slideUp(0);
  selectHead.on("click", function () {
    if (!$(this).hasClass("on")) {
      $(this).addClass("on");
      selectList.slideDown(duration);

      selectItem.on("click", function () {
        let chooseItem = $(this).data("value");

        $("select").val(chooseItem).attr("selected", "selected");
        selectHead.text($(this).find("span").text());

        selectList.slideUp(duration);
        selectHead.removeClass("on");
      });
    } else {
      $(this).removeClass("on");
      selectList.slideUp(duration);
    }
  });
});

new SimpleBar(document.getElementById("myEl"), {
  autoHide: false,
});
