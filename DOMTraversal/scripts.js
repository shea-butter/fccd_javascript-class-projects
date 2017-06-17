const elements = {
	par: document.querySelector(`.paragraph`),
	ul: document.querySelector(`.userList`),
};

const capitalText = {
	mouseOff() {
		elements.par.addEventListener(`mouseout`, ()=> {
			this.toLower();
		});
	},

	mouseOn() {
		elements.par.addEventListener(`mouseover`, ()=> {
			this.toUpper();
		});
	},

	toLower() {
		elements.par.textContent = elements.par.textContent.toLowerCase();
	},

	toUpper() {
		elements.par.textContent = elements.par.textContent.toUpperCase();
	},
};

const modifyList = {
	downClick() {
		elements.ul.addEventListener(`click`, (e)=> {
			const li = e.target.parentNode;
			const nextLi = li.nextElementSibling;

			const lastItem = elements.ul.lastElementChild;

			if (e.target.tagName === `BUTTON`
			&& (e.target.className === `down`)
			&& !(li === lastItem)) {
				this.insertAfter(li, nextLi);
			}

			this.hideLastDown();
			this.hideFirstUp();
		});
	},

	hideFirstUp() {
		const firstItem = elements.ul.firstElementChild;
		const afterFirst = firstItem.nextElementSibling;

		const firstUp = firstItem.querySelector(`.up`);
		const nextUp = afterFirst.querySelector(`.up`);

		// firstUp.style.visibility = `hidden`;
		// nextUp.style.visibility = `visible`;
		firstUp.style.display = `none`;
		nextUp.style.display = ``; // return to original display style
	},

	hideLastDown() {
		const lastItem = elements.ul.lastElementChild;
		const beforeLast = lastItem.previousElementSibling;

		const lastDown = lastItem.querySelector(`.down`);
		const prevDown = beforeLast.querySelector(`.down`);

		// firstUp.style.visibility = `hidden`;
		// nextUp.style.visibility = `visible`;
		lastDown.style.display = `none`;
		prevDown.style.display = ``; // return to original display style
	},

	initialHide() {
		this.hideFirstUp();
		this.hideLastDown();
	},

	insertAfter(el, referenceNode) {
		referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
	},

	upClick() {
		elements.ul.addEventListener(`click`, (e)=> {
			const li = e.target.parentNode;
			const prevLi = li.previousElementSibling;
			const ul = li.parentNode;

			const firstItem = elements.ul.firstElementChild;

			if (e.target.tagName === `BUTTON`
			&& (e.target.className === `up`)
			&& !(li === firstItem)) {
				ul.insertBefore(li, prevLi);
			}

			this.hideFirstUp();
		});
	},

};

window.onload = modifyList.initialHide();
capitalText.mouseOn();
capitalText.mouseOff();
modifyList.upClick();
modifyList.downClick();
