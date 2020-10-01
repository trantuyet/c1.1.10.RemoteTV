class  TV{
    constructor(chan, vol, status) {
        this.chan = chan;
        this.vol = vol;
        this.status = status;
    }
    changeChan(newChan) {
        this.chan = newChan ;
    }
    changeVol(newVol) {
        this.vol = newVol ;
    }
    changeStatus() {
        if ( this.status == true ) {
            this.status = false
        } else this.status = true;
    }
}

class Remote{
    constructor(Code) {
        this.Code = Code;
    }
    changeChan(TV, newChan){
        TV.changeChan(newChan);
    }
    changeStatus(TV, newStatus) {
        TV.changeStatus(newStatus);
    }
}
let tv1 = new TV(1,30,true);
console.log(tv1);
let remote1 = new Remote(607) ;
console.log(remote1);

remote1.changeChan(tv1,30);
remote1.changeStatus(tv1);
console.log(tv1);

