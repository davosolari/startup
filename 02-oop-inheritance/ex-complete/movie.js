import {EventEmitter} from "./event_emiter.js";
import {Actor} from "./actor.js";
import { Logger } from "./logger.js";


export class Movie extends EventEmitter{

    constructor (title, year, duration){
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = [];
    }
    play(){
        this.emit("play", "emitting play");
        //console.log("Playing " + this.title);
    }
    pause(){
        this.emit("pause", "emitting pause");
        //console.log("Pausing " + this.title);
    }
    resume(){
        this.emit("resume", "emitting resume");
        //console.log("Resuming " + this.title);
    }
    
    addCast(param){
        if (param instanceof (Actor)){
            this.cast.push(param);
        }
        else{
            for(let i=0; i<param.length; i++){
                this.cast.push(param[i]);
            }
        }
    }
}



Object.assign(Movie.prototype, Social);

const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];
terminator.addCast(arnold);
terminator.addCast(actors);

const logger = new Logger();

terminator.on("play", logger.log);
terminator.play();

terminator.off("play");
terminator.play();
console.log("end");
terminator.share("David");







