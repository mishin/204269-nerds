var iframe = document.createElement('iframe');
iframe.name = 'iframe';
iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.598942412363!2d30.32089461564032!3d59.938796869048495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5ba729%3A0xea9c53d4493c879f!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTkxMTg2!5e0!3m2!1sru!2sru!4v1472373222520';
iframe.style.width = '100%';
iframe.style.height = '416px';
window.onload = function() {
	document.getElementsByClassName('map')[0].appendChild(iframe);
}