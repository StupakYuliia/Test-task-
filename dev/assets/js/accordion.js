function accordionInstall() {
	const accordionButton = document.querySelectorAll('.accordion-item__button')

	accordionButton.forEach(item=>{
		item.addEventListener('click', function(event){
			const thisAccordionFlush = event.target.closest('[data-type="flush"]');

			thisAccordionFlush ? installAccordionFlush() : installAlwaysOpen()

			function installAlwaysOpen() {
				const thisAccordionItem = event.target.closest('.accordion-item');
				thisAccordionItem.classList.toggle('active')
			}

			function installAccordionFlush() {
				const thisAccordionItem = item.closest('.accordion-item');
				const thisAccordionAllItem = thisAccordionFlush.querySelectorAll('.accordion-item')

				if(thisAccordionItem.classList.contains('active')){
					thisAccordionItem.classList.remove('active')
					return
				}

				thisAccordionAllItem.forEach(item =>{
					item.classList.remove('active')
				})

				thisAccordionItem.classList.add('active')
			}
		})
	})
}
