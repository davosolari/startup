export class EventEmitter{

    constructor(){
        this.listeners = [];
    }

    on(event, callback){
        if(this.listeners[event]){
            this.listeners[event].push(callback);
        }
        else{
            this.listeners[event] = [callback];
        }
    }

    emit(event, args){
        let eventListeners = this.listeners[event];
        if(eventListeners){
            eventListeners.forEach(eventName => eventName(args));
       }
    }

    off(event, callback){
        let eventListeners = this.listeners[event];
        if(this.listeners[event]){
            let index = eventListeners.indexOf(callback)
            if (index >= 0){
                eventListeners.splice(indx, 1);
            }
        }
    }
}