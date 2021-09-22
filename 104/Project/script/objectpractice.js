const task1={
    description:`Do HW`,
    priority:`High`
}

const task2={
    description:`Play Zelda`,
    priority:`Medium`
}

const task3={
    description:`Study JS`,
    priority:`Low`
}

console.log(task1);
console.log(task2);
console.log(task3);

class Task{
    constructor(description, priority) {
        this.description = description;
        this.priority = priority;
    }
}

const t1=new Task(`Do CR`,`High`);
const t2=new Task(`Comeplete Exam`,`Medium`);
const t3=new Task(`Play Mario`,`Low`);
console.log(t1);
console.log(t2);
console.log(t3);

console.log(t3.description);