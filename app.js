var hamburger = document.querySelector(".hamburger");
				var menu = document.querySelector(".menu");

				hamburger.addEventListener("click", function () {
					menu.classList.toggle("active");
				})

				window.addEventListener('scroll', revile)

				function revile(){
					var reviles = document.querySelectorAll('.revile');

					for (var i = 0; i < reviles.length; i++){
						var windowheight = window.innerHeight
						var reviletop = reviles[i].getBoundingClientRect().top;
						var revilepoint = 150;

						if (reviletop < windowheight - revilepoint) {
							reviles[i].classList.add('active')
						}
						else{
							reviles[i].classList.remove('active')
						}
					}
				}