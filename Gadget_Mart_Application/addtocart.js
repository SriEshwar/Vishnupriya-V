const product = [
    {
        id: 0,
        image: 'image/gg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 9999,
    }, 
    {
        id: 1,
        image: 'image/hh-2.jpg',
        title: 'Air Pods Pro',
        price: 1600,
    },
    {
        id: 2,
        image: 'image/ee-3.jpg',
        title: '250D DSLR Camera',
        price: 9990,
    },
    {
        id: 3,
        image: 'image/aa-1.jpg',
        title: 'Head Phones',
        price: 199,
    },
    {
        id: 4,
        image: 'image/smartwatch.jpeg',
        title: 'Smart Watch',
        price: 2899,
    },
    {
        id: 5,
        image: 'image/bluetoothspeaker.jpeg',
        title: 'Bluetooth Speaker',
        price: 599,
    },
    {
        id: 6,
        image: 'image/wireless-chargers.jpg',
        title: 'Wireless Charger',
        price: 333,
    },
    {
        id: 7,
        image: 'image/gamingmouse.jpg',
        title: 'Gaming Mouse',
        price: 4499,
    },
    {
        id: 8,
        image: 'image/smarttv.webp',
        title: 'Smart TV',
        price: 1399,
    },
    {
        id: 9,
        image: 'image/harddrive.jpg',
        title: 'External Hard Drive',
        price: 179,
    },
    {
        id: 10,
        image: 'image/fitnesstracker.jpg',
        title: 'Fitness Tracker',
        price: 499,
    },
    {
        id: 11,
        image: 'image/cofeemaker.webp',
        title: 'Coffee Maker',
        price: 2899,
    },
    {
        id: 12,
        image: 'image/blender.jpeg',
        title: 'Portable Blender',
        price: 399,
    },
    {
        id: 13,
        image: 'image/laptop.jpg',
        title: 'Laptop',
        price: 25999,
    }
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rs. ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Rs. "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rs. "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Rs. ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}