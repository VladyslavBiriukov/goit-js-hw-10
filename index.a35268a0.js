!function(){var t=document.querySelector("#search-box");document.querySelector(".country-list"),document.querySelector(".country-info");t.addEventListener("input",(function(t){t.preventDefault();var e,n=t.currentTarget.value.trim();console.log(n),(e=n,void fetch("".concat("https://restcountries.com/v3.1/name/").concat(e)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))).then(console.log)}))}();
//# sourceMappingURL=index.a35268a0.js.map