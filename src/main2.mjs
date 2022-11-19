// EJEMPLO CON OBJETOS LITERALES
// const juan = {
//   name: 'JuanDC',
//   username: 'juandc',
//   points: 100,
//   socialMedia: {
//     twitter: 'fjuandc',
//     instagram: 'fjuandc',
//     facebook: undefined,
//   },
//   approvedCourses: [
//     'cursos HTML',
//     'cursos CSS',
//   ],
//   LearningPaths: [
//     {
//       name: 'Escula de dearrollo web',
//       courses: [
//         'curso de HTML',
//         'curso de CSS',
//         'curso de diseño responsive',

//       ],
//     },
//     {
//       name: 'Escuela de videojuegos',
//       courses: [
//         'curso de VGs',
//         'curso de Unreal Engine',
//         'Curso de Unity',
//       ]
//     },
//   ],

// };
// const miguelito = {
//   name: 'miguelitoDC',
//   username: 'miguelitodc',
//   points: 100,
//   socialMedia: {
//     twitter: 'fmiguelitodc',
//     instagram: 'fmiguelitodc',
//     facebook: undefined,
//   },
//   approvedCourses: [
//     'cursos python',
//     'cursos Ruby',
//   ],
//   LearningPaths: [
//     {
//       name: 'Escula de dearrollo web',
//       courses: [
//         'curso de HTML',
//         'curso de CSS',
//         'curso de diseño responsive',

//       ],
//     },
//     {
//       name: 'Escuela de Data Science',
//       courses: [
//         'curso de C++',
//         'curso de C#',
//         'Curso de Unity',
//       ]
//     },
//   ],

// };
//modulos de ECMAScript6
function videoPlay(id) {
  const urlSecreta = 'https://platzisecreto.com' + id
  console.log(`se esta reproduciendo desdes la url ${urlSecreta}`);
}
function videoStop(id) {
  const urlSecreta = 'https://platzisecreto.com' + id
  console.log(`se esta pausado desdes la url ${urlSecreta}`);
}
export class PLatziClass {
  constructor({
    name,
    videoID,
  }) {
    this.name = name;
    this.videoID = videoID;
  }
  reproducir() {
    videoPlay(this.videoID);
  }
  pausar() {
    videoStop(this.videoID);
  }
}







//Clases de los cursos
class CourseClasse {
  constructor({
    name,
    tema,
    id
  }) {
    this.name = name;
    this.tema = tema;
    this.id = id;
  }
}
const clasePOOfotball = new CourseClasse({
  name: 'Programación orientada a objetos y fooball',
  tema: 'POO',
  id: 1,
})

//cursos-molde
class Course {
  constructor({
    name,
    classes = [],
  }) {
    this._name = name;
    this.classes = classes;
  }
  get name() {
    return this._name;
  }

  set name(nuevoNombre) {
    if (nuevoNombre === 'curso terrible') {
      console.log('error')
    } else {
      this._name = nuevoNombre;

    }
  }
  changeName(nuevoNombre) {
    this._name = nuevoNombre;
  }
};

//cursos de diferentes escuelas
const CursoProgBsc = new Course({
  name: 'Curso de programación Básica',
})
const CursoHTML = new Course({
  name: 'Curso de programación HTML',
})
const CursoCSS = new Course({
  name: 'Curso de programación CSS',
})
const CursoGIT = new Course({
  name: 'Curso de programación git',
})
const CursoJS = new Course({
  name: 'Curso de programación js',
})

//learning path
class LearningPaths {
  constructor({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
}
//instancias de escuelas
const escuelaWeb = new LearningPaths({
  name: 'Escuala de Desarrollo web',
  courses: [
    CursoProgBsc,
    CursoHTML,
    CursoCSS,
    CursoGIT,
  ]
})
const escuelaVgs = new LearningPaths({
  name: 'Escuala de Videojuegos',
  courses: [
    'curso de godot',
    'curso de unity',
    'curso de C#',
    'curso de interfaz',
  ]
})
const escuelaDataS = new LearningPaths({
  name: 'Escuala de Cienda de Datos',
  courses: [
    'curso de puthon',
    'curso de SQL',
    'curso de noSQL',
    'curso de backend',
  ]
})

//clase-model de estudiantes
class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    LearningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    }

    this.approvedCourses = approvedCourses;
    this.LearningPaths = LearningPaths;
  }
}
//instanciando a los estudiantes
const juan2 = new Student({
  name: 'juandc',
  username: 'juan',
  email: 'juanito@gmail.com',
  twitter: 'fjuanitoDC',
  LearningPaths: [
    escuelaWeb,
    escuelaVgs,
  ]
})
const miguelito2 = new Student({
  name: 'miguelitodc',
  username: 'miguelito',
  email: 'miguelitoito@gmail.com',
  twitter: 'fmiguelitoitoDC',
  LearningPaths: [
    escuelaVgs,
    escuelaDataS
  ]
})