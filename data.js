const icons = 
	[
		{
			name: 'cat',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},
		{
			name: 'crow',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},
		{
			name: 'dog',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},
		{
			name: 'dove',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},
		{
			name: 'dragon',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},
		{
			name: 'horse',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},
		{
			name: 'hippo',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},
		{
			name: 'fish',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas',
			color: 'orange'
		},
		{
			name: 'carrot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas',
			color: 'green'
		},
		{
			name: 'apple-alt',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas',
			color: 'green'
		},
		{
			name: 'lemon',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas',
			color: 'green'
		},
		{
			name: 'pepper-hot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas',
			color: 'green'
		},
		{
			name: 'user-astronaut',
			prefix: 'fa-',
			type: 'user',
			family: 'fas',
			color: 'blue'
		},
		{
			name: 'user-graduate',
			prefix: 'fa-',
			type: 'user',
			family: 'fas',
			color: 'blue'
		},
		{
			name: 'user-ninja',
			prefix: 'fa-',
			type: 'user',
			family: 'fas',
			color: 'blue'
		},
		{
			name: 'user-secret',
			prefix: 'fa-',
			type: 'user',
			family: 'fas',
			color: 'blue'
		}
	];	


const containerCard = document.querySelector('.containerCard');
const selectFiltri = document.getElementById('selectFiltri');

function creaCard(counter)
{

	containerCard.innerHTML += 
	`
    <div class="card">
        <div id="icon" class="icon">
            <i class="fas fa-${icons[counter].name}"></i>
        </div>
        <div class="text">
            <span>${icons[counter].name}</span>
        </div>           
    </div>	
	`
}

function rimuoviCard()
{
	containerCard.innerHTML = '';
}

// funzione ( icons[i].type == valore) 

/* for(let x = 0; x < icons.length; x++)
{
	creaCard(x);
} */

selectFiltri.addEventListener('change' , function()
{
	rimuoviCard();
	let valore = selectFiltri.value;

	for(let i = 0; i < icons.length; i++)
	{
		if(icons[i].type == valore)
		{
			console.log(icons[i].type)
			creaCard(i);
		}
/* 		let idIcon = document.getElementsByTagName('i');
		idIcon[i].style.color = icons[i].color;  */
	}
});