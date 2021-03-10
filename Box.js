class Box {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(color) {
        var pos = this.body.position;
        rectMode(CENTER);
        stroke(255);
        strokeWeight(3);
        fill(color);
        rect(pos.x, pos.y, this.width, this.height);
    }
}