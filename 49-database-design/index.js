// database design

var classes = [
  {
    id: 0,
    name: "1B",
    teacher: 0
  },
  {
    id: 1,
    name: "2B",
    teacher: 1
  },
  {
    id: 2,
    name: "3B",
    teacher: 2
  },
  {
    id: 3,
    name: "4B",
    teacher: 3
  },
  {
    id: 4,
    name: "5A",
    teacher: 4
  }
];

var teacher = [
  {
    id: 0,
    name: "Hoan",
    age: 55
  },
  {
    id: 1,
    name: "Hue",
    age: 35
  },
  {
    id: 2,
    name: "Hue",
    age: 30
  },
  {
    id: 3,
    name: "Giang",
    age: 35
  },
  {
    id: 4,
    name: "Thom",
    age: 40
  }
];

var students = [
  { id: 0, name: "Tho", height: 30, class: 0 },
  { id: 1, name: "Luong", height: 31, class: 0 },
  { id: 2, name: "Hien", height: 32, class: 0 },
  { id: 3, name: "Bi", height: 30, class: 1 },
  { id: 4, name: "Chip", height: 31, class: 1 },
  { id: 5, name: "Thao", height: 32, class: 1 },
  { id: 6, name: "Hung", height: 30, class: 2 },
  { id: 7, name: "Bong", height: 31, class: 2 },
  { id: 8, name: "Tom", height: 32, class: 2 },
  { id: 9, name: "Bo", height: 30, class: 3 },
  { id: 10, name: "Bop", height: 31, class: 3 },
  { id: 11, name: "Thang", height: 32, class: 3 },
  { id: 12, name: "Loc", height: 30, class: 4 },
  { id: 13, name: "Binh", height: 31, class: 4 },
  { id: 14, name: "Thanh", height: 32, class: 4 }
];

function getStudentInClass(className) {
  var classObject = classes.find(function(x) {
    return x.name === className;
  });
  var studentsInClass = students.filter(function(student) {
    return student.class === classObject.id;
  });
  return studentsInClass;
}
var studentsInClass = getStudentInClass("1B");
console.log(studentsInClass);
