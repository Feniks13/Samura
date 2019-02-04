let parts = Array.from(document.querySelectorAll('[data-type="number"]')).sort((a, b) => +a.dataset.order > +b.dataset.order),
    data = [
      /^\+\d$/,
      /^\d{3}$/,
      [/^\d{3}\-\d\d\-\d\d$/, v => /^(\d{3})\-$/.test(v) ? RegExp.$1 : v.replace(/-/g, '').replace(/((?:^\d\d\d(?!-)|\d\d(?!$)))/g, "$1-")]
    ];

parts.forEach(e => e.addEventListener('input', check));
              
function check(){
  let id = +this.dataset.order;
  
  let regexp = Array.isArray(data[id]) ? data[id][0] : data[id],
      formatter = Array.isArray(data[id]) && data[id][1] ? data[id][1] : null;
  
  if(this.value.trim() === '')
    if(parts[id - 1])
      parts[--id].focus();
  
  if(formatter !== null){
    this.value = formatter(this.value);
  }
  
  if(regexp.test(this.value)){
    if(parts[id + 1])
      parts[++id].focus();
  }
}