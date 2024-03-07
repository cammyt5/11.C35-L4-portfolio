// function $$ (selector, context = document) {
//     return Array.from(context.querySelectorAll(selector));
// }

//create theme selector
document.body.insertAdjacentHTML("afterbegin", `
	<label class="color-scheme"> 
        Theme:
        <select>
            <option value="light dark">Automatic</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
		</select>
	</label>`
);

function setColorScheme(colorScheme) {
    document.documentElement.style.setProperty("color-scheme", colorScheme);
}

const select = document.querySelector('select')
select.addEventListener("input", function (event) {
    const val = event.target.value
    setColorScheme(val);
    localStorage.colorScheme = val;
});

if ("colorScheme" in localStorage) {
    const cs = localStorage.colorScheme
    setColorScheme(cs);
    select.value = cs;
}