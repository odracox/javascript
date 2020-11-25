function classCalc() {

    this.operation = ''
    this.oVisorSmall = document.querySelector('#l1');
    this.oVisorMain = document.querySelector('#l2');
    
    this.get = function() {
        return eval(this.oVisorMain.innerHTML);
    }

    this.set = function(value) {
        this.oVisorMain.innerHTML = String(value)
    }


    this.sqrt = function() {

        v = eval(this.oVisorMain.innerHTML)
        this.oVisorMain.innerHTML = String(Math.sqrt(v))

    }

    this.store = function () { 

        this.oVisorSmall.innerHTML=this.oVisorMain.innerHTML
        this.clearMainDisplay() 
                
    }
    
    
    this.clearMainDisplay = function () {
        this.oVisorMain.innerHTML='0';
    }

    this.clearSmallDisplay = function () {
        this.oVisorSmall.innerHTML='0';
        this.operation = ''
    }

    
    this.store = function(strSymbol) {

        this.oVisorSmall.innerHTML = this.oVisorMain.innerHTML
        this.operation = strSymbol
        this.clearMainDisplay() 
                
    }




    this.doOperation = function (strSymbol='') {

        if (strSymbol != '') this.operation = strSymbol 

        console.log('strSymbol:', strSymbol)
        console.log('this.operation:', this.operation)

        v1 = eval(this.oVisorSmall.innerHTML)
        v2 = eval(this.oVisorMain.innerHTML)

        switch (this.operation) {
            case '+':
                this.oVisorMain.innerHTML = String(v1+v2)
                this.clearSmallDisplay()
                break;
            case '-':
                this.oVisorMain.innerHTML = String(v1-v2)
                this.clearSmallDisplay()
                break;
            case 'x':
                this.oVisorMain.innerHTML = String(v1*v2)
                this.clearSmallDisplay()
                break;
            case '÷':
                this.oVisorMain.innerHTML = String(v1/v2)
                this.clearSmallDisplay()
                break;
            case 'x^y':
                this.oVisorMain.innerHTML = String(Math.pow(v1, v2));
                this.clearSmallDisplay()
                break;
            
            
                default:
                break;
        }        

        

    }


}

c = new classCalc()






function add2display(strNum) {

    if (c.get() == 0) {

        c.oVisorMain.innerHTML=strNum

    } else {

        c.oVisorMain.innerHTML+=strNum

    }
    
    
}








function eventHandler(e) {

    strSymbol = e.path[0].innerHTML

    // If digit
    if (!isNaN(strSymbol)) {
        
        add2display(strSymbol)    
                
    } else {

        switch (strSymbol) {
            case '=':
                c.doOperation()
                break;
            case '√':
                c.sqrt()
                break;
            case 'e':
                c.set(Math.exp(1))
                break;
            case 'π':
                c.set(Math.PI)
                break;
            case 'Clear':
                c.clearMainDisplay()
                c.clearSmallDisplay()
                break;
            default:
                c.store(strSymbol)
                break;
        }


        
    }

}


function setEvents() {

    objNodeList = document.querySelectorAll('button')
    
    for(btn of objNodeList) {
    
        btn.addEventListener('click', e => eventHandler(e))
    
    }

}




