TinyTurtle.apply(window, [undefined, 400, 400]);

function square(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
}

function triangle(y){
right(120);
forward(y);
left(55);
forward(y);
}

function rectangle(z){
left(20);
forward(z);
left(90);
forward(30);
left(90);
forward(z);
left(90);
forward(30);
}

function abstractcube(c){
forward(c);
right(90);
forward(c);
right(90);
forward(c);
right(90);
forward(c);
right(90);
forward(c);
right(30);
forward(30);
right(70);
forward(50);
right(90);
forward(20);
}

function rhombus(r){
left(150);
forward(r);
right(60);
forward(r);
right(120);
forward(r);
right(60);
forward(r);
}
// Type your function call below
rectangle(10);
rectangle(20);
rectangle(30);
rectangle(45);
rectangle(65);
rectangle(70);
rectangle(75);
rectangle(80);
rectangle(85);
rectangle(90);
rectangle(95);
rectangle(100);
triangle(15);
left(5);
forward(150);
rhombus(20);

