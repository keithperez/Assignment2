// found the quadcopter code in the source code of the website
function StickFigure(context, x, y, distance, speed) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.x_speed = 0;
    this.y_speed = 0;

    this.distance = distance;
    
    this.ball_radius = 10;

    this.rotation_1 = 0;
    this.distance_1 = distance * 2;
    this.rotation_speed_1 = speed * 0.75;

    this.rotation_2 = 0;
    this.distance_2 = distance * 1.5;
    this.rotation_speed_2 = -speed;

    this.rotation_3 = 0;
    this.distance_3 = distance;
    this.rotation_speed_3 = speed * 1.25;

}

StickFigure.prototype.update = function() {

    this.x += this.x_speed;
    this.y += this.y_speed;

    if (this.x + this.ball_radius > 640) {
        this.x_speed = -this.x_speed;
    }
    if (this.x < this.ball_radius) {
        this.x_speed = -this.x_speed;
    }

    if (this.y + this.ball_radius > 480) {
        this.y_speed = -this.y_speed;
    }
    if (this.y < this.ball_radius) {
        this.y_speed = -this.y_speed;
    }

    this.rotation_1 += this.rotation_speed_1;
    if (this.rotation_1 > 180) {
        this.rotation_1 -= 180
    }
    this.rotation_2 += this.rotation_speed_2;
    if (this.rotation_2 < -180) {
        this.rotation_2 += 180
    }
    this.rotation_3 += this.rotation_speed_3;
    if (this.rotation_3 > 180) {
        this.rotation_3 -= 180
    }
}

StickFigure.prototype.draw = function() {
    this.context.save();
    this.draw_inital_ball();
    this.drawline(this.x, this.y, this.distance_1, this.rotation_1);
    this.draw_second_ball();
    this.drawline(this.x + (this.distance_1*Math.cos(this.rotation_1)), this.y + (this.distance_1*Math.sin(this.rotation_1)), this.distance_2, this.rotation_2);
    this.draw_third_ball();
    this.drawline(this.x + (this.distance_1 * Math.cos(this.rotation_1)) + (this.distance_2 * Math.cos(this.rotation_2)), this.y + (this.distance_1 * Math.sin(this.rotation_1)) + (this.distance_2 * Math.sin(this.rotation_2)), this.distance_3, this.rotation_3);
    this.draw_fourth_ball();
    this.context.restore();
}

StickFigure.prototype.drawline = function(x, y, distance, rotation) {
    this.context.save();
    this.context.beginPath();
    this.context.translate(x, y);
    this.context.moveTo(0,0);
    this.context.lineTo(distance * Math.cos(rotation), distance * Math.sin(rotation));
    this.context.closePath();
    this.context.strokeStyle = "#000";
    this.context.stroke();
    this.context.restore();
}

StickFigure.prototype.draw_inital_ball = function() {
    this.context.save();
    this.context.beginPath();
    this.context.translate(this.x, this.y);
    this.context.arc(0, 0, this.ball_radius, 0, 2 * Math.PI, false);
    this.context.fillStyle = "black";
    this.context.fill();
    this.context.lineWidth = 1;
    this.context.strokeStyle = "grey";
    this.context.stroke();
    this.context.restore();
}

StickFigure.prototype.draw_second_ball = function() {
    this.context.save();
    this.context.beginPath();
    x_dist = this.x + (this.distance_1 * Math.cos(this.rotation_1));
    y_dist = this.y + (this.distance_1 * Math.sin(this.rotation_1));
    this.context.translate(x_dist, y_dist);
    this.context.arc(0, 0, this.ball_radius, 0, 2 * Math.PI, false);
    this.context.fillStyle = "red";
    this.context.fill();
    this.context.lineWidth = 1;
    this.context.strokeStyle = "grey";
    this.context.stroke();
    this.context.restore();
}

StickFigure.prototype.draw_third_ball = function() {
    this.context.save();
    this.context.beginPath();
    x_dist = this.x + (this.distance_1 * Math.cos(this.rotation_1)) + (this.distance_2 * Math.cos(this.rotation_2));
    y_dist = this.y + (this.distance_1 * Math.sin(this.rotation_1)) + (this.distance_2 * Math.sin(this.rotation_2));
    this.context.translate(x_dist, y_dist);
    this.context.arc(0, 0, this.ball_radius, 0, 2 * Math.PI, false);
    this.context.fillStyle = "green";
    this.context.fill();
    this.context.lineWidth = 1;
    this.context.strokeStyle = "grey";
    this.context.stroke();
    this.context.restore();
}

StickFigure.prototype.draw_fourth_ball = function() {
    this.context.save();
    this.context.beginPath();
    x_dist = this.x + (this.distance_1 * Math.cos(this.rotation_1)) + (this.distance_2 * Math.cos(this.rotation_2)) + (this.distance_3 * Math.cos(this.rotation_3));
    y_dist = this.y + (this.distance_1 * Math.sin(this.rotation_1)) + (this.distance_2 * Math.sin(this.rotation_2)) + (this.distance_3 * Math.sin(this.rotation_3));
    this.context.translate(x_dist, y_dist);
    this.context.arc(0, 0, this.ball_radius, 0, 2 * Math.PI, false);
    this.context.fillStyle = "blue";
    this.context.fill();
    this.context.lineWidth = 1;
    this.context.strokeStyle = "grey";
    this.context.stroke();
    this.context.restore();
}