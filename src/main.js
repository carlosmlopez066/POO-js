const person = { //objeto literal
    name: 'Carlos',
    lasName: 'Lopez',
    Age: 21,
    cursosAprobados: [
        'curso de Programacion',
        'curso de Logica',
    ],
    aprobarCursos(newCourse) { //esto es un metodo
        this.cursosAprobados.push(newCourse);
    }

};
// hacer que person apruebe otro curso
// person.cursosAprobados.push('curso de Responsive Desing')

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.cursosAprobados = function(nuevoCursito){
    //     this.cursosAprobados.push(nuevoCursito);
    // }
}
Student.prototype.aprobarCursos = function (newCourse) {
    this.cursosAprobados.push(newCourse);
}

const juanita = new Student(
    'Juanita',
    21,
    [
        'curso POO',
        'curso JS basico'
    ],
);