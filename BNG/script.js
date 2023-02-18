function _(id) {
	return document.getElementById(id);
}
// Include a file
function includeHTML() {
	let z, i, elmnt, file, xhttp;
	/*loop through a collection of all HTML elements:*/
	z = document.getElementsByTagName('*');
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute('w3-include-html');
		if (file) {
			/*make an HTTP request using the attribute value as the file name:*/
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					if (this.status == 200) {
						elmnt.innerHTML = this.responseText;
					}
					if (this.status == 404) {
						elmnt.innerHTML = 'Page not found.';
					}
					/*remove the attribute, and call this function once more:*/
					elmnt.removeAttribute('w3-include-html');
					includeHTML();
				}
			};
			xhttp.open('GET', file, true);
			xhttp.send();
			/*exit the function:*/
			return;
		}
	}

	/**
	 * Here you will be setting information according to the company
	 */

	// In NavBar section add logo image
	document.logo.src = './images/logo.jpg';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'BNGRWANDA';
	document.querySelector('#company-desc').innerHTML = `
					<strong>We are an IT multiservice company located in Kabuga Near BK KABUGA BRANCH.</b></strong>`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `<p>We are an IT multiservice company located in Kabuga Near BK KABUGA BRANCH whatstpp:0788987859
                       email:info@bng.rw,Website: www.bng.rw.</p>
					   <p>BNGRWANDA was founded in 2022 but our CEO has experience and have accomplished so much over the years, to create a word where technology has always been our goal.
					   Our Founder and CEO Nishimwe Mbaraga Emmanuel was inspired to start this company by helping business growing their online presence and increase their customers.
					   At BNG Rwanda, we encourage our community to be leading in tech industry.</p>
				`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `Our goal is to provide our customers with the best IT service at the best possible market price without compromising quality.`;

	// middle section in about us
	document.aboutimg.src = './images/motherboard.jpg';
	document.querySelector(
		'#img-caption'
	).innerHTML = `Building the Future with Tech!`;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `To be the most reliable IT services provider and to be leading in IT Computer maintenance.`;

	// In team section
	document.firstimg.src = './images/Mbaraga.jpg';
	document.querySelector('#first-name').innerHTML = 'NISHIMWE MBARAGA Emmanuel ';
	document.querySelector('#first-position').innerHTML = 'Co founder & CEO';

	// document.secondimg.src = './images/avatar.jpg';
	// document.querySelector('#second-name').innerHTML = 'Gasana William';
	// document.querySelector('#second-position').innerHTML = 'Senior Engineer';

	// document.thirdimg.src = './images/avatar.jpg';
	// document.querySelector('#third-name').innerHTML = 'Uwinama Marceline';
	// document.querySelector('#third-position').innerHTML = 'Business Analyst';
 
	document.fouthimg.src = './images/alice.jpg';
	document.querySelector('#fouth-name').innerHTML = 'IHIRWE Alice';
	document.querySelector('#fouth-position').innerHTML = 'Sales Manager';

	// In contact us section
	document.querySelector('#address').innerHTML = 'KABUGA Near Bk Kabuga Branch';
	document.querySelector('#street').innerHTML = 'KN857';
	document.querySelector('#email').innerHTML = 'info@bng.rw';
	document.querySelector('#phone').innerHTML = '+250788987859';
	
	//Footer
	document.getElementById("copyright").innerHTML="BNG.rw &copy; " + new Date().getFullYear();

	// Link to social media
	document.querySelector('#facebook').href = 'http://www.facebook.com/BNGRwanda';
	document.querySelector('#twitter').href = 'http://www.twitter.com/company_bng';
	document.querySelector('#instagram').href = 'http://www.instagram.com/bngrwanda';
	document.querySelector('#whatsapp').href = 'https://wa.me/+250788987859';
	document.querySelector('#youtube').href = 'http://www.youtube.com/channel/UC3-BYp4EpVpYdwAhAmuvvgw';
	// document.querySelector('#linkedin').href = 'http://www.linkedin.com';

}

function click_hamburger() {
	document.getElementById('hamburger_btn').click();
}

function send_email() {
	function _(id) {
		return document.getElementById(id);
	}
	var status = _('response_status');
	if (
		_('email_from').value !== '' &&
		_('email_from').value.includes('@') &&
		_('contact_message').value !== ''
	) {
		status.innerHTML = 'Sending message ...';
		var formdata = new FormData();
		formdata.append('email', _('email_from').value);
		formdata.append('message', _('contact_message').value);
		var ajax = new XMLHttpRequest();
		ajax.open('POST', 'send_email.php');
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4 && ajax.status == 200) {
				if (ajax.responseText == 'success') {
					_('email_from').value = '';
					_('contact_message').value = '';
					status.innerHTML = 'Thanks your message is sent';
					setTimeout(function () {
						status.innerHTML = '';
					}, 5000);
				} else {
					status.innerHTML = ajax.responseText;
					_('my_btn').disabled = false;
					setTimeout(function () {
						status.innerHTML = '';
					}, 5000);
				}
			}
		};
		ajax.send(formdata);
	}
}
// ------ script for gallery ---------
window.onload = ()=> {
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");
    filterItem.onclick = (selectedItem)=>{
        if(selectedItem.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
           filterImg.forEach((image)=>{
               let filterImages = image.getAttribute("data-name");
               
               if((filterImages == filterName) || filterName == "all"){
                image.classList.remove("hide");
                   image.classList.add("show");
               }else{
                image.classList.add("hide");
                image.classList.remove("show");
               }
           });
        }
    }
}
