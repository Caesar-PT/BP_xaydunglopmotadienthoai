class Mobile {
    constructor(name, bettery, brand) {
        this.name = name;
        this.bettery = bettery;
        this.brand = brand;
        this.msg = "";
        this.draft = [];
        this.inbox = [];
        this.outbox = [];
    }
    writeMsg(_msg) {
        this.msg = _msg;
    }
    saveDraff(_draff) {
        this.draft.push(this.msg)
    }
    senMsg(mobile) {
        mobile.receiverMsg(this.msg);
        this.outbox.push(this.msg);
    }
    receiverMsg(_msg){
        this.inbox.push(_msg);
    }
    deCrease(bettery){
        return this.bettery - 1;

    }
    inCrease(bettery){
        return this.bettery + 1;
    }
}