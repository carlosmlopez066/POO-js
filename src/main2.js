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

//comentarios
class Commet {
  constructor({
    content,
    studentName,
    studentRole = 'estudiante',
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }
  publicar() {
    console.log(`${this.studentName} (${this.studentRole})`);
    console.log(`${this.likes} LIKES`);
    console.log(this.content);
  }
}






//modulos de ECMAScript6
function videoPlay(id) {
  const urlSecreta = 'https://platzisecreto.com' + id
  console.log(`se esta reproduciendo desdes la url ${urlSecreta}`);
}
function videoStop(id) {
  const urlSecreta = 'https://platzisecreto.com' + id
  console.log(`se esta pausado desdes la url ${urlSecreta}`);
}
class PLatziClass {
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
    isFree = false,
    lang = 'spanish',

  }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
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
  isFree: true,
})
const CursoHTML = new Course({
  name: 'Curso de programación HTML',
})
const CursoCSS = new Course({
  name: 'Curso de programación CSS',
  lang: 'english'
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
  publicarComentario(commentContent) {
    const comment = new Commet({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar()
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props)
  }
  approveCourses(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(`Lo siento ${this.name} solo puedes tomar cursos abiertos`)
    }
  }
}
class BasicStudent extends Student {
  constructor(props) {
    super(props)
  }
  approveCourses(newCourse) {
    if (newCourse.lang !== 'english') {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(`Lo siento ${this.name} no puedes tomar  cursos en ingels`)
    }
  }
}
class ExpertStudent extends Student {
  constructor(props) {
    super(props)
  }
  approveCourses(newCourse) {
    this.approveCourses.push(newCourse);
  }
}
class TeacherStudent extends Student {
  constructor(props) {
    super(props)
  }
  approveCourses(newCourse) {
    this.approveCourses.push(newCourse);
  }

  publicarComentario(commentContent) {
    const comment = new Commet({
      content: commentContent,
      studentName: this.name,
      studentRole: 'Profesor'
    });
    comment.publicar()
  }
}

//instanciando a los estudiantes
const juan = new BasicStudent({
  name: 'juandc',
  username: 'juan',
  email: 'juanito@gmail.com',
  twitter: 'fjuanitoDC',
  LearningPaths: [
    escuelaWeb,
    escuelaVgs,
  ]
})
const miguelito = new FreeStudent({
  name: 'miguelitodc',
  username: 'miguelito',
  email: 'miguelitoito@gmail.com',
  twitter: 'fmiguelitoitoDC',
  LearningPaths: [
    escuelaVgs,
    escuelaDataS
  ]
})

const freddy = new TeacherStudent({
  name: 'Freddy Vega',
  username: 'freddyVega',
  email: 'FreddyVega@gmail.com',
  instagram: 'freddier',
  twitter: 'freddier',

})