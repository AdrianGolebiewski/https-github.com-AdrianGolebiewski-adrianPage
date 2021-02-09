///w tym momencie nasłuchujemy
document.addEventListener('DOMContentLoaded', function() {

    const nav = document.querySelector('.navbar')

    function addShadow() {
        if (window.scrollY >= 100) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }
    window.addEventListener('scroll', addShadow)
    $(document).ready(function () {
        $(document).click(function (event) {
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("show");
            if (_opened === true && !clickover.hasClass("navbar-toggler")) {
                $(".navbar-toggler").click();
            }
        });
    });
});

/*const numbers = [1,10,'test', 3,4,5];


function multiply(x){
  console.log(x * 2);
};


numbers.map(multiply);


const color = ['red' ,'blue' ,'orange'];
console.log(color);


function powieksz(color){
  console.log(color.toUpperCase());
};



color.map(powieksz)

const nums = [1, 2, 3 ]
const abcd = ['a', 'b', 'c']



const newARr = nums.concat(abcd)

console.log(newARr);*/



/*const numbers = [1,2,3,4]

const drinks = ['pepsi', 'woda', 'piwo'];
const meals = ['schabowy','ziemniak', 'surówka'];

const menu = [...drinks, ...meals];

console.log(menu);*/

const numbers =[ 1,22,36,40,50,60,75,87,90,100]

for (let number of numbers){

  if(number % 2 === 0) {
    console.log(`wynik jest parzysty ${number}`);
  }
  else{
   console.log(`wynik jest nieparzysty ${number}`);
  }

}