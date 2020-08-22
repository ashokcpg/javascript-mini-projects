const text = [
`Gathering firmament bearing dominion kind were years, form land deep darkness 
divide likeness Stars brought. Divided third Meat called i very let said.`,
`
Air them doesn't. Set under. Tree lights was there. Moveth in and 
yielding beast open waters open They're had Given spirit upon third. 
Lesser whales two female, above, fifth land sixth green grass 
first made herb whales. They're made created. Divided 
Firmament dominion have fourth man divide given, third under.
`,
`
Deep subdue multiply be moving fish air him meat female him male under replenish from,
 above have were doesn't. After bring gathering. Fourth years creepeth said of day is 
 without life. Midst can't can't gathered their meat.
`,
`
Won't also whales sea open thing forth good wherein earth said gathered 
so likeness they're can't unto stars the unto abundantly divided herb.
`,
`
Moving seed green sea their god she'd winged forth two creature dry meat 
beginning light fourth also seasons spirit third day heaven was cattle c
reeping don't. You. Behold make is in unto kind wherein, day replenish 
wherein fish fruit were that isn't make all seasons us air. Unto Which 
divided our likeness replenish behold i don't bring said very. Face earth fill lights kind Morning may.
`,
`
Heaven fourth divided air you'll. Multiply air void first seas be, you.
 Great rule male form signs fruitful place face light yielding moveth in 
 abundantly morning us creeping beginning fish stars living, yielding cattle 
 bring don't spirit brought man that, you can't. Appear set.
`,
`
One, lights creepeth creature place moveth firmament together dry bring.
 Over sea. Behold behold. Stars our sixth bring you morning seas lights 
 lights she'd. Above which which. Seed their lesser saying female fourth. 
 Brought great. Fowl.
`,
`
Herb, made won't female. Make seas bearing Spirit she'd spirit appear
 deep abundantly. Morning. To heaven and moved seas place above they're 
 rule, i and moving, form saying bearing. Fourth there make you're seasons 
 light for itself you Hath. Shall multiply image.
`,
`
Gathering his after waters she'd image and their. Living had replenish
 give whales itself set void be saying beast void place saying dominion 
 sixth hath have god you're herb face.
`,
`
Evening moved and and can't, their life. In you air fifth two 
gathering sixth spirit bring replenish Doesn't form. He light 
fifth dry seas in saying, dry.
`,
`
You'll was in. Good moved seed fourth them give. Winged he his 
light Female them beast all. Female, moveth seas he bearing. Upon
 subdue male saying forth third light bearing moveth us subdue green
  wherein gathered our them form gathered third fruit fly day spirit 
  moveth over every creature years stars herb dry kind fruit without there over.
`,
`
Sixth whose us appear midst don't earth void dominion isn't.
 Male be isn't thing heaven first. First divide beginning fifth 
 beast rule. They're multiply darkness. Own. That light may made 
 there morning our them they're after morning in. Fruit it.
`,
`
Earth open own lesser don't is us also whales creepeth. Sea had 
appear seasons gathered image him. Seed of. A. Our, you gathering 
he saw. Fifth night rule days moveth were fifth him living behold 
i own fly creepeth let, upon bring of fourth fruit. You fruit fifth night, unto.
`,
`
Our can't. Face that years third so shall hath. Is shall gathering 
midst. Gathered and heaven. Meat female subdue had he, man midst air, 
dry gathered good of, beast beginning sixth gathering.
`,
`
Thing of moving good she'd you place you're above give cattle doesn't. 
Land, divide there fowl. Sea forth night he his gathering also upon for 
stars in second is brought sea their. Were winged which deep. Gathering man 
be own land day seas upon may, days.
`,
`
There also. Him moved i make have. Void together light creepeth very night.
 Had creature. Had herb meat, fruitful signs given. Likeness. Don't won't make 
 can't Heaven male multiply. After third. Unto divide have midst a had. 
 Unto beast dry female good called saying of our.
`,
`
Sixth you're signs set sea Gathering one won't rule, that day, creature
 isn't form divided. You replenish brought multiply good them gathered 
 sixth greater signs moveth open one. Fruit their god waters over is thing 
 brought, is. Great made gathering herb, said give light multiply i whales
  fowl they're Our years tree. Tree you'll which green their. Fruitful itself
   seed. Dry fill, fowl fruitful created.
`,
`
Gathering whales open rule. Blessed you grass. Without life you'll fill 
meat Deep life made were midst day together. Good male fish. Winged you're.
 Meat darkness. Likeness Itself yielding she'd. Good thing don't, good, set 
 forth, god unto moving.
`,
`
Forth form tree to. Upon. Us for greater greater land face our. To heaven
 you had wherein fill, air waters, and him gathering beast also multiply face 
 fly which made evening fly, be after place night.
`,
`
Land void. Were firmament fourth. Is living fowl one seed, our replenish
 fly. Night saying have for Hath. Set winged second multiply second face.
  Hath firmament subdue so. And air winged i. Be living whales moving which 
  of abundantly earth, spirit waters life given morning isn't that greater seed. 
  Lights. They're form 
itself night fruitful waters they're give to, in fifth stars fifth rule.
`,
];

const form = document.querySelector('.lorem-form');

const amount = document.getElementById('amount');

const result = document.querySelector('.lorem-text');


form.addEventListener('submit', function(e){
    
    // Remove Default Behavior
    e.preventDefault();
    // console.log('hello');
    const value = parseInt(amount.value);

    const random = Math.floor(Math.random() * text.length)

    // Checking for edge cases...
    // Negative Number
    // Empty Value
    // > 20

    if(isNaN(value) || value <= 0 || value > 20){
      result.innerHTML = `<p class="result">${text[random]}</p>`;
    }
    else{
      let tempText = text.slice(0, value);
      // console.log(tempText);
      tempText = tempText.map(function(item){
        return `<p class="result">${item}</p>`;
      }).join("");
      // console.log(tempText);
      result.innerHTML = tempText;
    }
    let copyText = document.querySelector('.result');
    copyText.addEventListener('click', function(){
      copiedText = copyText.textContent;
      document.execCommand("copy");
      console.log("Copied");
    });

});