type NewType = string | number;

const arr: (NewType)[] = [1,'1'];

interface Igirl {
  name: string,
  age: number,
  [propname: string]: any,
  sex?: string,
  sayAge: () => number
}

const getResume = (girl: Igirl) => girl.age;

const girl = {
  name: 'xiaohong',
  age: 18,
  sex: 'female',
  sayAge: () => this.age
}
// console.log(getResume(girl));

interface Iboy extends Igirl {
  saySex?: () => string
}

const getBoyResume = (boy: Iboy) => boy.age;

const boy = {
  name: 'xiaohong',
  age: 18,
  sex: 'female',
  sayAge: () => this.age
}
// console.log(getBoyResume(boy));

class Person{
  constructor(public name:string){}
}

class Teacher extends Person{
  constructor(public age:number){
      super('jspang')
  }
}

const teacher = new Teacher(18)
// console.log(teacher.age)
// console.log(teacher.name)

class Xiaojiejie {
  constructor(private _age:number){}
  get age(){
      return this._age-10
  }
  set age(age:number){
    this._age=age
  }
}

const dajiao = new Xiaojiejie(28)
dajiao.age=25
// console.log(dajiao.age)


// 抽象类
abstract class Girl{
  abstract skill()  //因为没有具体的方法，所以我们这里不写括号

}

class Waiter extends Girl{
  skill(){
      console.log('大爷，请喝水！')
  }
}

class BaseTeacher extends Girl{
  skill(){
      console.log('大爷，来个泰式按摩吧！')
  }
}

class seniorTeacher extends Girl{
  skill(){
      console.log('大爷，来个SPA全身按摩吧！')
  }
}
const type = new BaseTeacher()
// console.log(type.skill())

// 类型保护
interface Waiter {
  anjiao: boolean;
  say: () => void;
}

interface Teacher {
  anjiao: boolean;
  skill: () => {};
}

function judgeWho(animal: Waiter | Teacher) {
  if (animal.anjiao) {
    (animal as Teacher).skill();
  }else{
    (animal as Waiter).say();
  }
}
function judgeWhoTwo(animal: Waiter | Teacher):void {
  if ("skill" in animal) {
    animal.skill();
  } else {
    // animal.say();
  }
}
function add(first: string | number, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  }
  return first + second;
}


// 枚举
enum Status {
  MASSAGE = 1,
  SPA,
  DABAOJIAN,
}


console.log(Status.MASSAGE, Status[1]);


// 泛型

class SelectGirl<T> {
  constructor(private girls: T[]) {}
  getGirl(index: number): T {
    return this.girls[index];
  }
}

const selectGirl = new SelectGirl< string >(["大脚", "刘英", "晓红"]);
console.log(selectGirl.getGirl(1));


// 泛型约束
class SelectGirlS<T extends number | string> {
  //.....
}

// 泛型继承

interface Girls {
  name: string;
}
class SelectGirlE<T extends Girls> {
  constructor(private girls: T[]) {}
  getGirl(index: number): string {
    return this.girls[index].name;
  }
}

const selectGirls = new SelectGirlE([{ name: "大脚" }, { name: "刘英" }, { name: "晓红" }]);

console.log("selectGirlJson:", selectGirls.getGirl(1));

interface Mutations {
  [key: string]: (state: object, payload?: object) => any;
}

interface Result<K> {
  ns: string;
  mt: {
    [str in keyof K]: (payload: any) => any;
  };
}
type a = Result<Mutations>
const methods = { ns: 'n', mt: {} } as Result<Mutations>;
interface Person {
  name: string;
  age: number;
}
type Partials<T> = {
  [P in keyof T]?: T[P];
}
type PersonPartial = Partials<Person>;
type ReadonlyPerson = Readonly<Person>;