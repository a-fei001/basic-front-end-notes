import { ref } from "vue";

export default function(){
    /* 语法偏向javascript */
    const user = ref('jackOut');
    const salary = ref(500000);
    const addSalary = function(){
        salary.value += 10000;
    }
    return {user,salary,addSalary};
}
