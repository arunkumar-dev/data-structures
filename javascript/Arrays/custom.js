class MyArray{
    constructor(){
      this.length=0;
      this.items={};
    }
    values =()=>{
      return Array(this.items);
    }
    
    get=(index)=>{
      return this.items[index];
    }
    
    push=(item)=>{
      this.items[this.length++]=item;
    }
    
    pop = ()=>{
      let item = this.items[this.length-1];
      delete this.items[this.length-1];
      this.length--;
      return item;
    }
    
    delete=(index)=>{
      const item = this.items[index];
      this.shiftItems(index);
      return item;
    }
    
    shiftItems=(index)=>{
      for(let i=index;i<this.length;i++){
        this.items[i]=this.items[i+1];
      }
      delete this.items[this.length-1];
      this.length--;
    }
    
  }
  
  let items = new MyArray();
  items.push(10);
  items.push(15);
  items.push(1);
  items.push(16);
  console.log(items.values());
  items.delete(1);
  console.log(items.values());