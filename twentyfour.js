class area{
    circle(r){
      let area=3.14*r*r;
        return area;
    }
    square(s){
      let area=s*s;
      return area;
    }
    rectangle(l,w){
      let area=l*w;
      return area;
    }
    trainagle(b,h){
      let area=(1/2)*b*h;
      return area;
    }
  }
  class myclass extends area{
    circle(r){
      let result=super.circle(r);
      return result;
    }
     square(s){
      let result=super.square(s);
      return result;
    }
     rectangle(l,w){
      let result=super.rectangle(l,w);
      return result;
    }
     triangle(b,h){
      let result=super.triangle(b,h);
      return result;
    }
  }
  let obj=new myclass();
  console.log("1.Circel \n2.Square \n3.Rectangle \n4.Triangle \nEnter your choice")
  let choice=parseInt(prompt(""));
  let result;
  switch(choice){
    case 1:
      let r=parseInt(prompt("Enter the radius"));
      result=obj.circle(r);
      break;
    case 2:
      let s=parseInt(prompt("Enter the side"));
      result=obj.square(s);
      break;
    case 3:
      let l=parseInt(prompt("Enter the lenght"));
      let w=parseInt(prompt("Enter the width"));
      result=obj.rectangle(l,w);
      break;
    case 4:
      let b=parseInt(prompt("Enter the base"))
      let h=parseInt(prompt("Enter the height"));
      result=obj.triangle(b,h);
      break;
  default:
      result="Invalid Entry";
  }
  console.log("Area:"+result);
  